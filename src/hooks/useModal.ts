import { useState } from "react";

const initialIsOpen = false;

export const useModal = () => {
  const [isOpen, setOpen] = useState(initialIsOpen);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return {
    isOpen,
    onOpen,
    onClose,
  };
};
