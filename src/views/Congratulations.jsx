import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";

export const Congratulations = () => {
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
          <CardTitle tag="h5">Congratulations!</CardTitle>
          <CardText>
            Your vote in the Ballon d'Or election with CipherChoice has been
            successfully registered. Thank you for being part of this
            revolutionary voting experience organized by France Football. With
            blockchain technology, your choice is secured, backed by
            transparency and privacy. Thank you for contributing to the history
            of soccer with your authentic voice! Get ready to discover the
            results and let's celebrate together the passion for soccer!
          </CardText>
          <Link to="/results">
            <Button color="warning">Results</Button>
          </Link>
        </CardBody>
      </Card>
    </>
  );
};
