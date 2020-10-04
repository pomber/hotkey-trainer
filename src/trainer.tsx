import React from "react";
import { Combo, toString } from "./combo";
import { reducer, initialState, Action, State } from "./state";

export function Trainer({ combos }: { combos: Combo[] }) {
  const [state, dispatch] = React.useReducer(reducer, initialState(combos));
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
      <style jsx global>{`
        body {
          background: #222;
          color: white;
        }
      `}</style>
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
            ? "#ff6666"
            : test.result === "success"
            ? "#66ff66"
            : "#bbb",
        display: "flex",
        alignItems: "center",
        flexFlow: "column",
      }}
    >
      <img src={test.combo.img} />
      <h2 style={{ margin: "0.5em 0 0.2em" }}>{test.combo.title}</h2>
      {test.result === "fail" && (
        <div>
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
      {/* <div>
        <button onClick={() => dispatch({ type: "next" })}>Next</button>
      </div> */}
    </div>
  );
}
