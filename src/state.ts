import produce, { Draft } from "immer";
import { Combo, match } from "./combo";

type TestResult = "pending" | "fail" | "success";

type Test = {
  readonly combo: Combo;
  readonly startTime?: number;
  readonly time?: number;
  readonly result: TestResult;
  readonly keyIndex: number;
};

export type State = {
  readonly isPlaying: boolean;
  readonly currentTest: Test;
  readonly nextTest: Test;
  readonly combos: Combo[];
};

export type Action =
  | { type: "next" | "stop" }
  | { type: "key"; event: KeyboardEvent };

export function initialState(combos: Combo[]): State {
  return {
    isPlaying: false,
    currentTest: getRandomTest(combos),
    nextTest: getRandomTest(combos),
    combos,
  };
}

export const reducer = produce((draft: Draft<State>, action: Action) => {
  if (!draft.isPlaying && action.type === "next") {
    draft.isPlaying = true;
    nextTest(draft, draft.combos);
    return;
  }

  if (draft.isPlaying && action.type === "next") {
    nextTest(draft, draft.combos);
    return;
  }

  if (action.type === "stop") {
    draft.isPlaying = false;
    return;
  }

  if (action.type === "key" && draft.currentTest.result === "pending") {
    const { event } = action;

    if (["Control", "Shift", "Alt"].includes(event.key)) {
      return;
    }

    const test = draft.currentTest;
    const { keys } = test.combo;
    if (match(keys[test.keyIndex], event)) {
      test.keyIndex = test.keyIndex + 1;
      if (test.keyIndex >= keys.length) {
        test.result = "success";
        test.time = window.performance.now() - test.startTime;
      }
    } else {
      test.result = "fail";
    }
  }
});

function nextTest(draft: Draft<State>, combos: Combo[]) {
  draft.currentTest = draft.nextTest;
  draft.currentTest.startTime = window.performance.now();
  draft.nextTest = getRandomTest(combos);
}

function getRandomTest(combos: Combo[]): Test {
  return {
    combo: combos[Math.floor(Math.random() * combos.length)],
    keyIndex: 0,
    result: "pending",
  };
}
