'use client';

import { MouseEvent, PropsWithChildren, Ref } from 'react';
import IconClose from '@/app/components/icons/IconClose';

interface DialogProps {
  ref: Ref<HTMLDialogElement>;
  handleClose: () => void;
}

function Dialog({ ref, handleClose }: PropsWithChildren<DialogProps>) {
  const handleCloseDialog = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <dialog
      ref={ref}
      className="open:animate-show-dialog open:backdrop:animate-show-backdrop bottom-0 top-auto mx-0 my-0 max-h-[80%] w-full max-w-none transform rounded-t-xl bg-dialog-background backdrop:bg-dialog-backdrop md:inset-y-0 md:mx-auto md:my-auto md:w-96 md:rounded-b-xl"
      onClick={handleCloseDialog}
    >
      <div className="p-3 pt-8">
        <button
          type="button"
          className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center"
          autoFocus
          onClick={handleClose}
        >
          <IconClose className="h-[75%] w-[75%]" />
        </button>
      </div>
    </dialog>
  );
}

export default Dialog;
