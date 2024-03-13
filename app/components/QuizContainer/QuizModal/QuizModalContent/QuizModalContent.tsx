import React from "react";

type QuizModalContentProps = {
  title: string;
  message: string;
  closeModal: () => void;
};

const QuizModalContent: React.FC<QuizModalContentProps> = ({
  title,
  message,
  closeModal,
}: QuizModalContentProps) => {
  return (
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
  );
};

export default QuizModalContent;
