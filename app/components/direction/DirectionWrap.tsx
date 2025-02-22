'use client';

import Dialog from '@/app/components/common/Dialog';
import { useDialog } from '@/app/hooks/useDialog';
import getRoute from '@/app/lib/getRoute';

function DirectionWrap({}) {
  const { dialogRef, openDialog, closeDialog } = useDialog();

  const handleSuccess = async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const start = `${longitude},${latitude}`;
    const goal = sessionStorage.getItem('destination') || '';

    const res = await getRoute(start, goal);
    console.log(res);
  };

  const handleError = (error) => {
    alert(`Error: ${error.code} / ${error.message}`);
  };

  const handleClick = () => {
    if ('geolocation' in navigator) {
      console.log('true');
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        길찾기
      </button>
      <Dialog
        ref={dialogRef}
        title="길찾기 모달"
        handleClose={closeDialog}
      ></Dialog>
    </>
  );
}

export default DirectionWrap;
