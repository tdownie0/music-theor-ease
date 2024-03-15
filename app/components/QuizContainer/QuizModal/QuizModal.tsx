import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import QuizModalContent from "./QuizModalContent/QuizModalContent";

const ModalContainer = ({ children, showModal, onClose }) => {
  const handleClickOutside = useCallback(
    function clickOutsideModal(event) {
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

  const handleKeyDown = useCallback(
    function escapePressed(e) {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(
    function handleModalExits() {
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

  const modalBoxRef = useRef(null);
  const [hideModal, setHideModal] = useState(true);

  useEffect(function show() {
    setHideModal(false);
  }, []);

  const fadeStyles = {
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

const QuizModal = ({ title, message, showModal, setShowModal }) => {
  const closeModal = useCallback(
    function close() {
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
