'use client';

import { useState } from 'react';
import Dialog from '@/app/components/common/Dialog';
import { useDialog } from '@/app/hooks/useDialog';
import getRoute from '@/app/lib/getRoute';
import DirectionMap from '@/app/components/Map/DirectionMap';
import { Direction } from '@/app/types/directions';
import {
  convertMetersToKilometers,
  convertMilliSecondsToTime,
  convertPriceToWon,
} from '@/app/utils/format';

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
      <button type="button" onClick={handleClick}>
        길찾기
      </button>
      <Dialog ref={dialogRef} title="길찾기 모달" handleClose={closeDialog}>
        {isLoading ? (
          <div className="h-[29.375rem] w-full">
            길찾기 정보를 불러오는 중...
          </div>
        ) : directions ? (
          <div className="mt-2 flex flex-col gap-1">
            <div className="flex justify-between text-white">
              <span>거리</span>
              <span className="font-semibold">
                {convertMetersToKilometers(directions.summary.distance)}
              </span>
            </div>
            <div className="flex justify-between text-white">
              <span>예상 시간</span>
              <span className="font-semibold">
                {convertMilliSecondsToTime(directions.summary.duration)}
              </span>
            </div>
            <div className="flex justify-between text-white">
              <span>택시요금</span>
              <span className="font-semibold">
                {convertPriceToWon(directions.summary.taxiFare)}
              </span>
            </div>
            <div className="flex justify-between text-white">
              <span>통행료</span>
              <span className="font-semibold">
                {convertPriceToWon(directions.summary.tollFare)}
              </span>
            </div>
            <DirectionMap path={directions.path} />
          </div>
        ) : (
          <div className="h-[29.375rem] w-full">길찾기에 실패했습니다.</div>
        )}
      </Dialog>
    </>
  );
}

export default DirectionWrap;
