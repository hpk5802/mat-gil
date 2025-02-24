'use client';

import { useRef } from 'react';

export const useDialog = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return { dialogRef, openDialog, closeDialog };
};
