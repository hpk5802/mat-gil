'use client';

import { useState } from 'react';
import Dialog from '@/app/components/common/Dialog';
import { useDialog } from '@/app/hooks/useDialog';
import getRoute from '@/app/lib/getRoute';
import DirectionMap from '@/app/components/Map/DirectionMap';
import { Direction } from '@/app/types/directions';
import IconNavigation from '@/app/components/icons/IconNavigation';
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
      console.error('길찾기 실패: error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleError = (error: GeolocationPositionError) => {
    alert(`위치 조회 실패: ${error.code} / ${error.message}`);
  };

  const handleClick = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }
  };

  return (
    <>
      <button
        type="button"
        className="my-2 flex h-11 w-full items-center justify-center gap-1 rounded-lg bg-emerald-600 font-semibold"
        onClick={handleClick}
      >
        <IconNavigation className="h-4 w-4" />
        길찾기
      </button>
      <Dialog ref={dialogRef} title="길찾기 모달" handleClose={closeDialog}>
        {isLoading ? (
          <div className="h-[28.5rem] w-full">길찾기 정보를 불러오는 중...</div>
        ) : directions ? (
          <>
            <DirectionDescription summary={directions.summary} />
            <DirectionMap path={directions.path} />
          </>
        ) : (
          <div className="h-[28.5rem] w-full">길찾기에 실패했습니다.</div>
        )}
      </Dialog>
    </>
  );
}

export default DirectionWrap;
