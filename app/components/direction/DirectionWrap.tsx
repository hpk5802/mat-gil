'use client';

import { useRef, useState } from 'react';
import Dialog from '@/app/components/common/Dialog';
import { useDialog } from '@/app/hooks/useDialog';
import getRoute from '@/app/lib/getRoute';
import DirectionMap from '@/app/components/Map/DirectionMap';
import { Direction } from '@/app/types/directions';
import IconNavigation from '@/app/components/icons/IconNavigation';
import DirectionDescriptionSkeleton from '@/app/components/direction/DirectionDescriptionSkeleton';
import DirectionMapSkeleton from '@/app/components/Map/DirectionMapSkeleton';
import DirectionDescription from './DirectionDescription';
import IconRetry from '@/app/components/icons/IconRetry';
import IconInfo from '@/app/components/icons/IconInfo';
import handleGeolocationError from '@/app/utils/handleGeolocationError';

function DirectionWrap() {
  const { dialogRef, openDialog, closeDialog } = useDialog();
  const [directions, setDirections] = useState<Direction | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const requestCurrentLoaction = async () => {
    if (isLoading) return;

    setIsError(false);
    setIsLoading(true);

    try {
      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              resolve(position);
            },
            (error) => {
              reject(error);
            },
            {
              enableHighAccuracy: true,
            },
          );
        },
      );

      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      abortControllerRef.current = new AbortController();

      await findRouteFromCurrentLocation(position);
    } catch (error) {
      handleError(error as GeolocationPositionError);
    }
  };

  const findRouteFromCurrentLocation = async (
    position: GeolocationPosition,
  ) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const start = `${longitude},${latitude}`;
    const goal = sessionStorage.getItem('destination') || '';

    const { data, isError } = await getRoute(
      start,
      goal,
      abortControllerRef.current?.signal,
    );

    if (isError || !data) {
      setIsError(true);
      setDirections(null);
    } else {
      setDirections(data);
    }

    setIsLoading(false);
  };

  const handleError = (error: GeolocationPositionError) => {
    handleGeolocationError(error);
    closeDialogAndCancelRequest();
  };

  const closeDialogAndCancelRequest = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    setIsLoading(false);
    closeDialog();
  };

  const handleFindRouteClick = () => {
    if (!('geolocation' in navigator)) {
      alert('브라우저가 위치 조회를 지원하지 않습니다.');
      return;
    }

    openDialog();
    requestCurrentLoaction();
  };

  return (
    <>
      <button
        type="button"
        className="loading my-2 flex h-11 w-full items-center justify-center gap-1 rounded-lg bg-emerald-600 font-semibold"
        onClick={handleFindRouteClick}
        aria-label="현재 위치에서 목적지까지 길 찾기"
        disabled={isLoading}
      >
        <IconNavigation className="h-4 w-4" />
        <span className="text-btn-emerald">길 찾기</span>
      </button>
      <Dialog
        ref={dialogRef}
        title="길 찾기 모달"
        handleClose={closeDialogAndCancelRequest}
      >
        <div aria-live="polite">
          {isLoading ? (
            <>
              <DirectionDescriptionSkeleton />
              <DirectionMapSkeleton />
            </>
          ) : isError ? (
            <div className="flex h-[28.5rem] w-full flex-col items-center justify-center gap-3">
              <div className="flex flex-1 flex-col items-center justify-center gap-6">
                <IconInfo className="h-10 w-10" />
                <p className="text-center text-white">
                  길 찾기에 실패했습니다.
                  <br />
                  다시 시도해주세요.
                </p>
              </div>
              <button
                type="button"
                className="my-2 flex h-11 w-full items-center justify-center gap-1 rounded-lg bg-emerald-600 font-semibold"
                aria-label="길 찾기 다시 시도"
                onClick={requestCurrentLoaction}
              >
                <span className="text-btn-emerald">경로 재탐색</span>
                <IconRetry className="h-4 w-4" />
              </button>
            </div>
          ) : (
            directions && (
              <>
                <DirectionDescription summary={directions.summary} />
                <DirectionMap path={directions.path} />
              </>
            )
          )}
        </div>
      </Dialog>
    </>
  );
}

export default DirectionWrap;
