import React, { useEffect, useState } from "react";
import { allNotes, modesList } from "../../utils/musicLogic";
import QuizContainer from "../QuizContainer/QuizContainer";

const ModesQuiz = () => {
  const [intervals, setIntervals] = useState<allNotes[] | string[]>([]);
  const [originalIntervals, setOriginalIntervals] = useState<
    allNotes[] | string[]
  >([]);

  return <div>ModesQuiz</div>;
};

export default ModesQuiz;
