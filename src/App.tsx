import "./App.css";
import Form from "./Components/Form";
import ReducerCounter from "./Components/ReducerCounter";

function App() {
  return (
    <>
      <Form></Form>
      <div className="mx-auto w-52">
        <ReducerCounter></ReducerCounter>
      </div>
    </>
  );
}

export default App;
