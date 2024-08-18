import { useState } from "react"

function Answer({ a, b, updatePoints }) {
    const [userAnswer, setUserAnswer] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const correctAnswer = a + b;
      updatePoints(parseInt(userAnswer) === correctAnswer);
      setUserAnswer('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Введите ответ"
        />
        <button type="submit">Проверить</button>
      </form>
    );
  }
  

export default Answer