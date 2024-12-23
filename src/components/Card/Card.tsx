const Card = (rank = 'k', suit = "diams") => {
    return(
        <span className="card rank-k diams">
        <span className="rank">{rank}</span>
        <span className="suit">{suit}</span>
      </span>
    );
};
export default Card