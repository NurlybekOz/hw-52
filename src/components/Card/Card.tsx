const Card = (rank = 5, suit = "diams") => {
  return(
      <span className="card rank-{rank} diams">
        <span className="rank">{rank}</span>
        <span className="suit">{suit}</span>
      </span>
  );
};
export default Card