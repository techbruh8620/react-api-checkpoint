import { Card, Button } from "react-bootstrap";

const UserLists = (props) => {
  return (
    <Card style={{ width: "100%", marginBottom: "30px" }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <p>{props.username}</p>
          <p>{props.phoneNumber}</p>
          <p>{props.email}</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default UserLists;
