'use client';

import Dialog from '@/app/components/common/Dialog';
import { useDialog } from '@/app/hooks/useDialog';

function DialogTestPage() {
  const { dialogRef, openDialog, closeDialog } = useDialog();
  return (
    <div className="w-full h-screen">
      <button type="button" className="bg-white" onClick={openDialog}>
        모달 열기
      </button>
      <Dialog ref={dialogRef} handleClose={closeDialog} />
    </div>
  );
}

export default DialogTestPage;
