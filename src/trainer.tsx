import React from "react";
import { toString } from "./combo";
import { reducer, initialState, Action, State } from "./state";

export function Trainer() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  React.useEffect(() => {
    document.body.addEventListener("keydown", (event) => {
      console.log(event);
      event.preventDefault();
      if (event.key === "Enter") {
        dispatch({ type: "next" });
      } else {
        dispatch({ type: "key", event });
      }
    });
  }, []);

  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexFlow: "column",
      }}
    >
      <Game dispatch={dispatch} state={state as State} />
    </div>
  );
}

// function Start({ dispatch, state }) {
//   return (
//     <div>
//       <button onClick={() => dispatch({ type: "next" })}>Start</button>
//     </div>
//   );
// }

function Game({
  dispatch,
  state,
}: {
  dispatch: React.Dispatch<Action>;
  state: State;
}) {
  const test = state.currentTest;
  return (
    <div
      style={{
        color:
          test.result === "fail"
            ? "red"
            : test.result === "success"
            ? "green"
            : "gray",
      }}
    >
      <h2 style={{ marginBottom: "0.2em" }}>{test.combo.title}</h2>
      {test.result === "fail" && (
        <div
          style={{
            color:
              test.result === "fail"
                ? "red"
                : test.result === "success"
                ? "green"
                : "gray",
          }}
        >
          {test.combo.keys.map((key, i) => (
            <div
              style={{
                display: "inline-block",
                border: "1px solid currentColor",
                fontFamily: "monospace",
                lineHeight: "1.5em",
                fontSize: "1em",
                textTransform: "capitalize",
                textAlign: "center",
                margin: "0 0.2em 1em",
                padding: "0 0.4em",
              }}
              key={i}
            >
              {toString(key)}
            </div>
          ))}
        </div>
      )}
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <div>
        <button onClick={() => dispatch({ type: "next" })}>Next</button>
        {/* <button onClick={() => dispatch({ type: "stop" })}>Stop</button> */}
      </div>
    </div>
  );
}
