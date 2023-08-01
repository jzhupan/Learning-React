import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";
import { BsFillCalendarDayFill } from "react-icons/bs";
import Like from "./components/Like";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const [alertVisibility, setAlertVisibility] = useState(false);

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      {/* {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>
          This is an alert, you have clicked the button
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button> */}
      <Like onClick={() => console.log("Clicked")} />
      {/* <BsFillCalendarDayFill color="red" size="40" />
      <ListGroup items={items} heading="Cities" onSelectItem={() => {}} /> */}
    </div>
  );
}

export default App;
