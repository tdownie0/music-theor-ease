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
  const closeIcon: string = "\u00D7";

  return (
    <div className="fixed flex w-3/4 items-center justify-center z-20">
      <div className="modal-box bg-base-100">
        <div className="flex items-center text-base-content">
          <h3 className="flex w-full font-bold text-lg">{title}</h3>

          <button className="hover:text-slate-400" onClick={closeModal}>{closeIcon}</button>
        </div>

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
