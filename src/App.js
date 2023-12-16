import { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import UserLists from "./UserLists";

const App = () => {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // get user data function
  const getUserData = async () => {
    try {
      // inbuilt fetch function to send http request to backend API
      // it takes to major arguments which are the url which request is to be sent to
      // and the method of the http request we send to the backend API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "GET",
        }
      );

      // we check if http request is successful or fails
      if (!response.ok) {
        // update errorMessage state if it fails with a valid error message of our choice
        // or an error message sent by backend API
        return setErrorMessage("Something went wrong");
      }

      // converts response data from JSON to actual javascript object data understandable by the web and the browser
      const data = await response.json();

      // update users state with coverted response
      return setUsers(data);
    } catch (error) {
      // handle any unforseen error or server related error
      return setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Container className="mt-5 mb-5">
      <Row>
        {errorMessage && (
          <Alert variant="danger" className="text-center">
            <p>{errorMessage}</p>
          </Alert>
        )}

        {users.map((user) => {
          return (
            <Col key={user.id} lg={4}>
              <UserLists
                name={user.name}
                username={user.username}
                phoneNumber={user.phone}
                email={user.email}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default App;
