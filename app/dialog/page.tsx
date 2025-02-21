'use client';

import { useRef } from 'react';

function DialogTestPage() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const handleOpenDialog = () => {
    dialogRef.current?.showModal();
  };

  const handleCloseDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <div className="w-full h-screen">
      <button type="button" className="bg-white" onClick={handleOpenDialog}>
        모달 열기
      </button>
      <dialog ref={dialogRef}>
        <button type="button" autoFocus onClick={handleCloseDialog}>
          x
        </button>
        <h2>모달 타이틀</h2>
        <div>모달 콘텐츠</div>
      </dialog>
    </div>
  );
}

export default DialogTestPage;
