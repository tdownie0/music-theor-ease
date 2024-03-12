import React, { useCallback } from "react";
import ReactDOM from "react-dom";

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
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div className="modal-box bg-base-100">
            <h3 className="font-bold text-base-content text-lg">{title}</h3>
            <p className="py-4 text-base-content">{message}</p>
            <div className="modal-action">
              <button onClick={closeModal} className="btn btn-primary">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </ModalContainer>
  );
};

export default QuizModal;
