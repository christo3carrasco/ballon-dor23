import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

export const Nominees = () => {
  return (
    <>
      <h1 className="text-center">TOP NOMINEES</h1>
      <CardGroup
        className="mx-auto"
        style={{
          width: "75%",
        }}
      >
        <Card>
          <CardImg alt="Card image cap" src="./img-1.jpeg" top width="100%" />
          <CardBody>
            <CardTitle tag="h5">Erling Haaland</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Norway / Manchester City <br />
              UCL Champion
            </CardSubtitle>
            <CardText>
              Games played: 53 <br />
              Goals: 52 <br />
              Assists: 9
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src="./img-2.jpeg" top width="100%" />
          <CardBody>
            <CardTitle tag="h5">Lionel Messi</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Argentina / Paris Saint-Germain and Inter Miami <br />
              FIFA WC Champion
            </CardSubtitle>
            <CardText>
              Games played: 43 <br />
              Goals: 24 <br />
              Assists: 21
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src="./img-3.jpeg" top width="100%" />
          <CardBody>
            <CardTitle tag="h5">Kevin De Bruyne</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Belgium / Manchester City <br />
              UCL Champion
            </CardSubtitle>
            <CardText>
              Games played: 49 <br />
              Goals: 10 <br />
              Assists: 31
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
      <br />
      <Link to="/vote">
        <div className="text-center">
          <Button color="danger">Vote</Button>
        </div>
      </Link>
      <br />
    </>
  );
};
