import './App.css'
import CardDeck from "./lib/CardDeck.ts";
import {useState} from "react";



const App = () => {
    const [hand, setHand] = useState([])
    const deck = new CardDeck();
    console.log(deck.deck);

    return (
        <>
            <div className="playingCards faceImages">
     <span className="card rank-{rank} diams">
        <span className="rank">k</span>
        <span className="suit">$</span>
      </span>
            </div>
            <button>Раздать карты</button>
        </>
    );

};

export default App
