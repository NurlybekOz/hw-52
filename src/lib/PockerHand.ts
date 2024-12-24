import Card from "./Card.ts";

class PockerHand {
    constructor(public cards: Card[]) {
        this.cards = cards;
    }
    getOutcome(): string {
        const rankCounts = this.getRankCounts();
        const isFlush = this.isFlush();

        if (isFlush) return "Флэш";
        let pairsCount = 0;
        let threeOfAKind = false;
        for (const count of Object.values(rankCounts)) {
            if (count === 3) {
                threeOfAKind = true;
            }
            if (count === 2) {
                pairsCount++;
            }
        }
        if (threeOfAKind) return "Тройка";
        if (pairsCount === 2) return "Две пары";
        if (pairsCount === 1) return "Одна пара";
        return "Старшая карта";
    }

    private isFlush(){
        for (const card of this.cards) {
            if (card.suit !== this.cards[0].suit) {
                return false;
            }
        }
        return true;
    }

    private getRankCounts() {
        const counts: {[rank:string] :number} = {};
        this.cards.forEach(card => {
            counts[card.rank] = (counts[card.rank] || 0) + 1;
        })
        return counts;
    }


}
export default PockerHand;