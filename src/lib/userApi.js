// get user data function
export const getUserData = async () => {
  try {
    // inbuilt fetch function to send http request to backend API
    // it takes to major arguments which are the url which request is to be sent to
    // and the method of the http request we send to the backend API
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });

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
