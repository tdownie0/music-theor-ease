import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import QuizModalContent from "./QuizModalContent/QuizModalContent";

type QuizModalProps = {
  title: string;
  message: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

type modalProp = {
  children: React.ReactNode;
};

const ModalContainer: React.FC<modalProp> = ({ children }: modalProp) => {
  return ReactDOM.createPortal(
    children,
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
    function exitModal(): void {
      setShowModal(false);
    },
    [setShowModal]
  );

  const overlay: React.JSX.Element | null = showModal ? (
    <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
  ) : null;

  return (
    <ModalContainer>
      {overlay}
      {showModal && (
        <QuizModalContent
          title={title}
          message={message}
          closeModal={closeModal}
        />
      )}
    </ModalContainer>
  );
};

export default QuizModal;
