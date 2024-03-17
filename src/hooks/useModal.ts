import { useState } from "react";

const initialIsOpen = false;

export const useModal = () => {
  const [isOpen, setOpen] = useState(initialIsOpen);

  const onOpen = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const onClose = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  return {
    isOpen,
    onOpen,
    onClose,
  };
};
