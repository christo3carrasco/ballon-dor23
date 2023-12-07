import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export const Results = () => {
  const host = "http://localhost:6969";
  const API = `${host}/api/cipher`;

  const [voteCounts, setVoteCounts] = useState({
    voteCountOption1: 0,
    voteCountOption2: 0,
    voteCountOption3: 0,
  });

  const [totalVotes, setTotalVotes] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        if (response.ok) {
          const data = await response.json();
          setVoteCounts({
            voteCountOption1: data.voteCountOption1,
            voteCountOption2: data.voteCountOption2,
            voteCountOption3: data.voteCountOption3,
          });
          setTotalVotes(
            data.voteCountOption1 +
              data.voteCountOption2 +
              data.voteCountOption3
          );
        } else {
          throw new Error("Error en la petición");
        }
      } catch (error) {
        console.error("Hubo un problema al obtener los resultados", error);
      }
    };

    fetchData();
  }, [API]);

  const calculatePercentage = (count) => {
    return totalVotes > 0 ? ((count / totalVotes) * 100).toFixed(2) : 0;
  };

  return (
    <div className="container">
      <h1 className="text-center">Results</h1>
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Voting Results</h5>
          <ul className="list-group">
            <li className="list-group-item">
              <img
                src="./img-1.jpeg"
                alt="Option 1"
                width="100px"
                className="rounded-circle mr-2"
              />
              &nbsp;&nbsp;&nbsp;Erling Haaland ({voteCounts.voteCountOption1}):{" "}
              {calculatePercentage(voteCounts.voteCountOption1)}%
            </li>
            <li className="list-group-item">
              <img
                src="./img-2.jpeg"
                alt="Option 2"
                width="100px"
                className="rounded-circle mr-2"
              />
              &nbsp;&nbsp;&nbsp;Lionel Messi ({voteCounts.voteCountOption2}):{" "}
              {calculatePercentage(voteCounts.voteCountOption2)}%
            </li>
            <li className="list-group-item">
              <img
                src="./img-3.jpeg"
                alt="Option 3"
                width="100px"
                className="rounded-circle mr-2"
              />
              &nbsp;&nbsp;&nbsp;Kevin De Bruyne ({voteCounts.voteCountOption3}):{" "}
              {calculatePercentage(voteCounts.voteCountOption3)}%
            </li>
          </ul>
          <p className="mt-3">Total votes: {totalVotes}</p>
        </div>
      </div>
      <br />
      <Link to="/">
        <div className="text-center">
          <Button color="primary">Home</Button>
        </div>
      </Link>
    </div>
  );
};
