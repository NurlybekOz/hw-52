import Card from "./Card.ts";

class CardDeck {
    public deck: Card[];

    constructor() {
        this.deck = [];
        this.createCard();
    }
    createCard() {
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
        const suits = ['hearts', 'diams', 'clubs', 'spades'];
        for (const suit of suits) {
            for (const rank of ranks) {
                this.deck.push(new Card(rank, suit));
            }
        }
    }
    getCard () {
        const randomCard = Math.floor(Math.random() * this.deck.length);
        const card = this.deck[randomCard];
        this.deck.splice(randomCard, 1);
        return card;
    }
    getCards (howMany: number) {
        const cards: Card[] = []
        for (let i = 0; i < howMany; i++) {
            const card = this.getCard();
            if (card) {
                cards.push(card);
            }
        }
        return cards;
    }
    getRemainingCount() {
        return this.deck.length;
    }

}

export default CardDeck;