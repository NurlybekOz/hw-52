import './App.css'
import CardDeck from "./lib/CardDeck.ts";
import {useState} from "react";
import Card from './lib/Card';
import PockerHand from "./lib/PockerHand.ts";




const App = () => {
    const [hand, setHand] = useState<Card[]>([]);
    const [deck, setDeck] = useState(new CardDeck());
    const [handOutcome, setHandOutcome] = useState<string>("");
    const GiveCards = () => {
        const CardsGiven = deck.getCards(5);
        setHand(CardsGiven);

        const outcome = new PockerHand(CardsGiven).getOutcome();
        setHandOutcome(outcome);
        setDeck(deck);
    };
    return (
        <>
            <div className="count">Card count:{deck.getRemainingCount()}</div>
            <div className="result">result of round:{handOutcome}</div>
            <br/>
            <div className="playingCards faceImages">
                {hand.map(({rank, suit}) => (
                    <span className={`card rank-${rank} ${suit}`}>
                        <span className="rank">{rank}</span>
                        <span className="suit"></span>
                    </span>
                ))}
            </div>
            <button onClick={GiveCards}>Раздать карты</button>
        </>
    );

};

export default App
