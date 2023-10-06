import stringSimilarity from "string-similarity-js";
import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [cardIndex, setCardIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const cardPairs = [
    { french: "Bonjour", english: "Hello", difficulty: "easy" },
    { french: "Oui", english: "Yes", difficulty: "easy" },
    { french: "Merci", english: "Thank you", difficulty: "easy" },
    { french: "S'il vous plaît", english: "Please", difficulty: "medium" },
    { french: "Excusez-moi", english: "Excuse me", difficulty: "medium" },
    { french: "Au revoir", english: "Goodbye", difficulty: "medium" },
    { french: "Je m'appelle", english: "My name is", difficulty: "medium" },
    {
      french: "Comment vous appelez-vous?",
      english: "What is your name?",
      difficulty: "difficult",
    },
    {
      french: "Je ne comprends pas",
      english: "I don't understand",
      difficulty: "difficult",
    },
    {
      french: "Parlez-vous anglais?",
      english: "Do you speak English?",
      difficulty: "difficult",
    },
  ];

  const goToPreviousCard = () => {
    const previousIndex =
      cardIndex === 0 ? cardPairs.length - 1 : cardIndex - 1;
    setCardIndex(previousIndex);
    resetFeedback();
  };

  const goToNextCard = () => {
    const nextIndex = (cardIndex + 1) % cardPairs.length;
    setCardIndex(nextIndex);
    resetFeedback();
  };

  const resetFeedback = () => {
    setFeedback(null);
    setUserAnswer("");
  };

  const checkAnswer = () => {
    const currentCard = cardPairs[cardIndex];
    const similarityScore = stringSimilarity(
      userAnswer.toLowerCase(),
      currentCard.english.toLowerCase()
    );
    if (similarityScore >= 0.8) {
      setFeedback("Correct!");
      setCurrentStreak(currentStreak + 1);
      if (currentStreak + 1 > longestStreak) {
        setLongestStreak(currentStreak + 1);
      }
    } else {
      setFeedback("Incorrect!");
      setCurrentStreak(0);
    }
  };

  const card = cardPairs[cardIndex];

  return (
    <>
      <div>
        <h1>Flashcards for Learning French</h1>
        <h2>Let&apos;s learn some daily French phrases</h2>
        <p>Number of cards: {cardPairs.length}</p>
        <div className="streak">
          Current streak: {currentStreak}, Longest streak: {longestStreak}
        </div>
        <div className="card-container">
          <button onClick={goToPreviousCard}> ⇦ Previous </button>
          <Card
            french={card.french}
            english={card.english}
            difficulty={card.difficulty}
          />
          <button onClick={goToNextCard}> Next ⇨</button>
        </div>

        <div className="user-guessing">
          <input
            className={
              feedback === "Correct!"
                ? "green-border"
                : feedback === "Incorrect!"
                ? "red-border"
                : ""
            }
            type="text"
            placeholder="Enter your guess"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
          />
          <button className="submit-button" onClick={checkAnswer}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
export default App;
