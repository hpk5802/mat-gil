'use client';

import { forwardRef, MouseEvent, PropsWithChildren, Ref } from 'react';
import IconClose from '@/app/components/icons/IconClose';

interface DialogProps {
  title: string;
  handleClose: () => void;
}

function Dialog(
  { children, title, handleClose }: PropsWithChildren<DialogProps>,
  ref: Ref<HTMLDialogElement>,
) {
  const handleCloseDialog = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <dialog
      ref={ref}
      className="bottom-0 top-auto mx-0 my-0 max-h-[80%] w-full max-w-none transform rounded-t-xl bg-dialog-background will-change-transform backdrop:bg-dialog-backdrop open:animate-show-dialog open:backdrop:animate-show-backdrop md:inset-y-0 md:mx-auto md:my-auto md:w-96 md:rounded-b-xl"
      onClick={handleCloseDialog}
      role="dialog"
      aria-modal="true"
      aria-labelledby="title"
    >
      <div className="p-3 pt-8">
        <h2 id="title" className="sr-only">
          {title}
        </h2>
        <button
          type="button"
          className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center"
          onClick={handleClose}
        >
          <IconClose className="h-[75%] w-[75%]" />
        </button>
        {children}
      </div>
    </dialog>
  );
}

export default forwardRef(Dialog);
