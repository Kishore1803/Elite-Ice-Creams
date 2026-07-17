import { FaStar } from "react-icons/fa";

function ReviewCard() {
  return (
    <div
      className="card border-0 shadow position-absolute"
      style={{
        top: "40px",
        right: "20px",
        width: "300px",
        borderRadius: "20px",
      }}
    >
      <div className="card-body">
        <div className="d-flex align-items-center">
          <img
            src="https://i.pravatar.cc/60"
            alt="Customer"
            className="rounded-circle"
            width="55"
          />

          <div className="ms-3">
            <h5 className="mb-1">Michael</h5>

            <div className="text-warning">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>

        <p className="mt-3 text-muted">
          Indulge in our delicious premium ice creams with fast doorstep
          delivery.
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;