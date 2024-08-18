import { useState } from "react"
import Answer from "./Answer"

function MathQuiz() {
    const [score, setScore] = useState(0);
    const [a, setA] = useState(Math.floor(Math.random() * 10));
    const [b, setB] = useState(Math.floor(Math.random() * 10));
  
    const updatePoints = (isCorrect) => {
      setScore(score + (isCorrect ? 1 : -1));
      setA(Math.floor(Math.random() * 10));
      setB(Math.floor(Math.random() * 10));
    };
  
    return (
      <div>
      
     <h2>Ваши очки: {score}</h2>
     <h2>{a} + {b} = ?</h2>
      
        <Answer a={a} b={b} updatePoints={updatePoints} />
      </div>
    );
  }

export default MathQuiz