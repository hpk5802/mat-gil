'use client';

import { Ref } from 'react';

interface DialogProps {
  ref: Ref<HTMLDialogElement>;
  handleClose: () => void;
}

function Dialog({ ref, handleClose }: DialogProps) {
  return (
    <dialog ref={ref}>
      <button type="button" autoFocus onClick={handleClose}>
        x
      </button>
      <h2>모달 타이틀</h2>
      <div>모달 콘텐츠</div>
    </dialog>
  );
}

export default Dialog;
