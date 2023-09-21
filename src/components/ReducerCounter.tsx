import { useReducer } from "react";
interface initialStateType {
  incrementOne: number;
  incrementFive: number;
  decrementOne: number;
  decrementFive: number;
}
interface ActionType {
  type:
    | "incrementByOne"
    | "decrementByOnes"
    | "incrementByFive"
    | "decrementByFive";
  payload: number;
}

const initialState = {
  incrementOne: 0,
  incrementFive: 0,
  decrementOne: 0,
  decrementFive: 0,
};

const counterReducer = (
  CounterState: initialStateType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "incrementByOne":
      return {
        ...CounterState,
        incrementOne: CounterState.incrementOne + action.payload,
      };
    case "decrementByOnes":
      return {
        ...CounterState,
        decrementOne: CounterState.decrementOne - 1,
      };
    case "incrementByFive":
      return {
        ...CounterState,
        incrementFive: CounterState.incrementFive + 5,
      };
    case "decrementByFive":
      return {
        ...CounterState,
        decrementFive: CounterState.decrementFive - 5,
      };

    default:
      return CounterState;
  }
};

const ReducerCounter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <p>{state.incrementOne}</p>
      <p>{state.decrementOne}</p>
      <p>{state.incrementFive}</p>
      <p>{state.decrementFive}</p>

      <button
        className={
          "bg-green-500 p-2 border border-green-800 disabled:bg-gray-500"
        }
        onClick={() =>
          dispatch({
            type: "incrementByOne",
            payload: 1,
          })
        }
        disabled={state.incrementOne <= 0}
      >
        Increment 1
      </button>
      <button
        className="bg-green-500 p-2 border border-green-800"
        onClick={() =>
          dispatch({
            type: "decrementByOnes",
            payload: 0,
          })
        }
      >
        Decrease by 2
      </button>
      <button
        className="bg-green-500 p-2 border border-green-800"
        onClick={() =>
          dispatch({
            type: "incrementByFive",
            payload: 5,
          })
        }
      >
        Increase by 5
      </button>
      <button
        className="bg-green-500 p-2 border border-green-800"
        onClick={() =>
          dispatch({
            type: "decrementByFive",
            payload: 5,
          })
        }
      >
        Decrement by 5
      </button>
    </div>
  );
};

export default ReducerCounter;