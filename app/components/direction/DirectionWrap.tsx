'use client';

import { useState } from 'react';
import Dialog from '@/app/components/common/Dialog';
import { useDialog } from '@/app/hooks/useDialog';
import getRoute from '@/app/lib/getRoute';
import DirectionMap from '@/app/components/Map/DirectionMap';
import { Direction } from '@/app/types/directions';

function DirectionWrap({}) {
  const { dialogRef, openDialog, closeDialog } = useDialog();
  const [directions, setDirections] = useState<Direction | null>(null);

  const handleSuccess = async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const start = `${longitude},${latitude}`;
    const goal = sessionStorage.getItem('destination') || '';

    const {
      route: { traoptimal },
    } = await getRoute(start, goal);

    setDirections(traoptimal[0]);
    openDialog();
  };

  const handleError = (error) => {
    alert(`Error: ${error.code} / ${error.message}`);
  };

  const handleClick = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        길찾기
      </button>
      <Dialog ref={dialogRef} title="길찾기 모달" handleClose={closeDialog}>
        {directions ? (
          <div>
            <div>거리: {directions.summary.distance}</div>
            <div>예상 시간: {directions.summary.duration}</div>
            <div>택시요금: {directions.summary.taxiFare}</div>
            <div>톨 게이트 요금: {directions.summary.tollFare}</div>
            <DirectionMap path={directions.path} />
          </div>
        ) : (
          <div>길찾기 정보를 불러오는 중...</div>
        )}
      </Dialog>
    </>
  );
}

export default DirectionWrap;
