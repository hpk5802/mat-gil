'use client';

import { useState } from 'react';
import Dialog from '@/app/components/common/Dialog';
import { useDialog } from '@/app/hooks/useDialog';
import getRoute from '@/app/lib/getRoute';
import DirectionMap from '@/app/components/Map/DirectionMap';
import { Direction } from '@/app/types/directions';
import IconNavigation from '@/app/components/icons/IconNavigation';
import DirectionDescriptionSkeleton from '@/app/components/direction/DirectionDescriptionSkeleton';
import DirectionMapSkeleton from '@/app/components/Map/DirectionMapSkeleton';
import DirectionDescription from './DirectionDescription';

function DirectionWrap() {
  const { dialogRef, openDialog, closeDialog } = useDialog();
  const [directions, setDirections] = useState<Direction | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSuccess = async (position: GeolocationPosition) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const start = `${longitude},${latitude}`;
    const goal = sessionStorage.getItem('destination') || '';

    setIsLoading(true);
    openDialog();

    try {
      const {
        route: { traoptimal },
      } = await getRoute(start, goal);
      setDirections(traoptimal[0]);
    } catch (error) {
      const geolocationError = error as GeolocationPositionError;
      console.error(`길 찾기 실패: ${error}`);
      if (geolocationError.code === 1) {
        alert('위치 권한이 거부되었습니다.');
      } else if (geolocationError.code === 2) {
        alert('위치 정보를 사용할 수 없습니다.');
      } else if (geolocationError.code === 3) {
        alert('위치 정보를 가져오는 데 시간이 초과되었습니다.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleError = (error: GeolocationPositionError) => {
    alert(`위치 조회 실패: ${error.code} / ${error.message}`);
  };

  const handleClick = () => {
    if (!('geolocation' in navigator)) {
      alert('브라우저가 위치 조회를 지원하지 않습니다.');
      return;
    }

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  };

  return (
    <>
      <button
        type="button"
        className="my-2 flex h-11 w-full items-center justify-center gap-1 rounded-lg bg-emerald-600 font-semibold"
        onClick={handleClick}
        aria-label="현재 위치에서 목적지까지 길 찾기"
      >
        <IconNavigation className="h-4 w-4" />
        길찾기
      </button>
      <Dialog ref={dialogRef} title="길 찾기 모달" handleClose={closeDialog}>
        <div aria-live="polite">
          {isLoading ? (
            <>
              <DirectionDescriptionSkeleton />
              <DirectionMapSkeleton />
            </>
          ) : directions ? (
            <>
              <DirectionDescription summary={directions.summary} />
              <DirectionMap path={directions.path} />
            </>
          ) : (
            <p className="h-[28.5rem] w-full">
              길 찾기에 실패했습니다. 다시 시도해주세요.
            </p>
          )}
        </div>
      </Dialog>
    </>
  );
}

export default DirectionWrap;
