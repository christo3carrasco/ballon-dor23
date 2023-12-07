import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Vote = () => {
  const [id, setId] = useState("1");
  const [key, setKey] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const host = "http://localhost:6969";
  const API = `${host}/api/cipher/${id}/${key}`;

  const handleVote = async () => {
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, key }),
      });

      if (response.ok) {
        navigate("/congratulations");
      } else {
        throw new Error("Error to vote");
      }
    } catch (error) {
      setError(
        "There was a problem processing your vote. Please check your secret key and try again."
      );
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">VOTE</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Vote</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="formId" className="form-label">
                Choose a top 3 player:
              </label>
              <select
                className="form-select"
                id="formId"
                value={id}
                onChange={(e) => setId(e.target.value)}
              >
                <option value="1">Erling Haaland</option>
                <option value="2">Lionel Messi</option>
                <option value="3">Kevin De Bruyne</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="formKey" className="form-label">
                Enter you secret vote key:
              </label>
              <input
                type="text"
                className="form-control"
                id="formKey"
                placeholder="Secret key"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={handleVote}
            >
              Vote
            </button>
          </form>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
};
