import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";

export const Home = () => {
  return (
    <>
      <Card
        style={{
          width: "30rem",
        }}
        className="text-center mx-auto"
      >
        <img alt="Ballon Dor" src="./img-0.jpg" />
        <CardBody>
          <CardTitle tag="h5">The Ballon d'Or</CardTitle>
          <CardText>
            France Football revolutionizes Ballon d'Or voting with CipherChoice
            to get the opinion of the fans. With transparency and privacy, this
            innovative blockchain technology ensures that every voice counts.
            Join the next Ballon d'Or vote, discover CipherChoice and let your
            perspective as a fan influence this prestigious award - vote with
            passion and confidence!
          </CardText>
          <Link to="/nominees">
            <Button>Vote</Button>
          </Link>
          &nbsp;
          <Link to="/results">
            <Button>Results</Button>
          </Link>
        </CardBody>
      </Card>
    </>
  );
};
