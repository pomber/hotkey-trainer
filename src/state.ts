import produce, { Draft } from "immer";
import { Combo, match } from "./combo";
import { allCombos } from "./combos";

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
};

export type Action =
  | { type: "next" | "stop" }
  | { type: "key"; event: KeyboardEvent };

export const initialState: State = {
  isPlaying: false,
  currentTest: getRandomTest(),
  nextTest: getRandomTest(),
};

export const reducer = produce((draft: Draft<State>, action: Action) => {
  if (!draft.isPlaying && action.type === "next") {
    draft.isPlaying = true;
    nextTest(draft);
    return;
  }

  if (draft.isPlaying && action.type === "next") {
    nextTest(draft);
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

function nextTest(draft: Draft<State>) {
  draft.currentTest = draft.nextTest;
  draft.currentTest.startTime = window.performance.now();
  draft.nextTest = getRandomTest();
}

function getRandomTest(): Test {
  return {
    combo: allCombos[Math.floor(Math.random() * allCombos.length)],
    keyIndex: 0,
    result: "pending",
  };
}
