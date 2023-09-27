import { useState } from 'react'
import Card from './components/Card'
import './App.css'
function App() {
  const [cardIndex, setCardIndex] = useState(0);
  const cardPairs = [
    { french: "Bonjour", english: "Hello", difficulty: "easy"},
    { french: "Oui", english: "Yes", difficulty: "easy"},
    { french: "Merci", english: "Thank you", difficulty: "easy" },
    { french: "S'il vous plaît", english: "Please", difficulty: "medium"},
    { french: "Excusez-moi", english: "Excuse me", difficulty: "medium" },
    { french: "Au revoir", english: "Goodbye", difficulty: "medium" },
    { french: "Je m'appelle", english: "My name is", difficulty: "medium" },
    { french: "Comment vous appelez-vous?", english: "What is your name?", difficulty: "difficult" },
    { french: "Je ne comprends pas", english: "I don't understand", difficulty: "difficult" },
    { french: "Parlez-vous anglais?", english: "Do you speak English?", difficulty: "difficult" },
  ];
  const card = cardPairs[cardIndex];

  return (
    <>
      <div>
        <h1>Flashcards for Learning French</h1>
        <h2>Let&apos;s learn some daily French phrases</h2>
        <p>Number of cards: {cardPairs.length}</p>
        <Card french={card.french} english={card.english} difficulty={card.difficulty} />
        <button
          className="next-card-button"
          onClick={() => {
            // Generate a random index for the next card
            const nextIndex = Math.floor(Math.random() * cardPairs.length);
            setCardIndex(nextIndex);
          }}
        >
          ➜
        </button>
      </div>
    </>
  );
}
export default App