import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import QuizModalContent from "./QuizModalContent/QuizModalContent";

type QuizModalProps = {
  title: string;
  message: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

type ModalProps = {
  children: React.ReactNode;
  showModal: boolean;
  onClose: () => void;
};

const ModalContainer: React.FC<ModalProps> = ({
  children,
  showModal,
  onClose,
}) => {
  const handleClickOutside: (event: MouseEvent) => void = useCallback(
    function clickOutsideModal(event: MouseEvent): void {
      if (
        showModal &&
        modalBoxRef.current &&
        !modalBoxRef.current
          .querySelector(".modal-box")
          ?.contains(event.target as Node)
      ) {
        onClose();
      }
    },
    [showModal, onClose]
  );

  const handleKeyDown: (e: KeyboardEvent) => void = useCallback(
    function escapePressed(e: KeyboardEvent): void {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(
    function handleModalExits(): (() => void) | undefined {
      if (showModal) {
        document.addEventListener("keydown", handleKeyDown);
        window.addEventListener("mousedown", handleClickOutside);

        return () => {
          window.removeEventListener("mousedown", handleClickOutside);
          document.removeEventListener("keydown", handleKeyDown);
        };
      }
    },
    [showModal, handleClickOutside, handleKeyDown]
  );

  const modalBoxRef: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);
  const [hideModal, setHideModal] = useState<boolean>(true);

  useEffect(function show(): void {
    setHideModal(false);
  }, []);

  const fadeStyles: {
    opacity: number;
    transition: string;
  } = {
    opacity: hideModal ? 0 : 1,
    transition: "opacity .3s ease-in-out",
  };

  return ReactDOM.createPortal(
    <div
      style={fadeStyles}
      className="fixed inset-0 flex items-center justify-center z-10"
    >
      {showModal && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={onClose}
        ></div>
      )}
      <div className="flex items-center justify-center z-10" ref={modalBoxRef}>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

const QuizModal: React.FC<QuizModalProps> = ({
  title,
  message,
  showModal,
  setShowModal,
}) => {
  const closeModal: () => void = useCallback(
    function close(): void {
      setShowModal(false);
    },
    [setShowModal]
  );

  return (
    <ModalContainer showModal={showModal} onClose={closeModal}>
      <QuizModalContent
        title={title}
        message={message}
        closeModal={closeModal}
      />
    </ModalContainer>
  );
};

export default QuizModal;
