function OfferCard({ title, discount }) {
  return (
    <div className="card bg-warning p-3 text-center">
      <h3>{title}</h3>
      <h4>{discount}% OFF</h4>
    </div>
  );
}

export default OfferCard;