import { c, h } from "./combo";

const select = {
  "Select Docks": h(" q"),
  "Select Barracks": h(" a"),
  "Select Ranges": h(" s"),
  "Select Stables": h(" d"),
  "Select Siege W.": h(" x"),
  "Select Castles": h(" z"),
  "Select TCs": h(" f"),
  "Select Monasteries": h(" ", { shift: 1, k: "a" }),
  "Select University": h(" ", { shift: 1, k: "s" }),
  "Select Market": h(" g"),
  "Select Blacksmith": h(" ", { shift: 1, k: "f" }),
};

const game = {
  Diplomacy: h(" ", { ctrl: 1, k: "c" }),
  "Normal Map": h(" ", { ctrl: 1, k: "f" }),
  "Combat Map": h(" ", { ctrl: 1, k: "d" }),
  "Eco Map": h(" ", { ctrl: 1, k: "s" }),
  Flare: h(" ", { shift: 1, k: "g" }),
  Pause: h(" ", { ctrl: 1, k: "v" }),
  "Change Colors": h(" ", { ctrl: 1, k: "g" }),
};

const units = {
  "Delete Unit": h("b"),
  "Garrison Unit": h("a"),
  "Ungarrison Units": h("a"),
  "Stop Units": h("g"),
  "Aggresive Stance": h("q"),
  "Defensive Stance": h("w"),
  "Stand Ground": h("e"),
  "Attack Ground": h("r"),
  "Line Formation": h("s"),
  "Flank Formation": h("d"),
  Patrol: h("f"),
};

const goToCommands = {
  "Go to Mill": h(" w"),
  "Go to Lumber Camp": h(" ", {shift: 1, k: 'z'}),
  "Go to Mining Camp": h(" ", {shift: 1, k: 'x'}),
  "Go to TC": h({ k: "CapsLock" }),
  "Last Notification": h({ k: "Tab" }),
};

const groups = {
  "Create group 9": h("v"),
  "Select group 9": h("c"),
  // "Create group 8": h({ shift: 1, k: "v" }),
  // "Select group 8": h({ shift: 1, k: "c" }),
};

const ecoBuild = {
  "Build Town Center": h("fq"),
  "Build Mill": h("fw"),
  "Build Lumber Camp": h("fe"),
  "Build Mining Camp": h("fr"),
  "Build Market": h("ft"),
  "Build Monastery": h("fa"),
  "Build Dock": h("fs"),
  "Build Farm": h("fd"),
  "Build House": h("ff"),
  "Build Blacksmith": h("fg"),
  "Build University": h("f", { shift: 1, k: "a" }),
  "Cancel Eco Build": h("fz"),
};

const militarBuild = {
  "Build Castle": h("dq"),
  "Build Barracks": h("dw"),
  "Build Archery Range": h("de"),
  "Build Stable": h("dr"),
  "Build Siege Workshop": h("dt"),
  "Build Tower": h("da"),
  "Build Stone Gate": h("ds"),
  "Build Palisade Gate": h("dd"),
  "Build Palisade": h("df"),
  "Build Stone Wall": h("dg"),
  "Build Bombard Tower": h("d", { shift: 1, k: "a" }),
  "Build Outpost": h("d", { shift: 1, k: "s" }),
  "Build Palisade Gate and Rotate": h("dd", { shift: 1, k: "d" }),
};

const combos = {
  "Build Villager": h(" ff"),
  Loom: h(" fd"),
  "Create Archer": h(" sq"),
  "Create Knight": h(" dw"),
  "Create Militia": h(" aq"),
};

export const allCombos = c({
  // ...select,
  // ...game,
  // ...units,
  ...ecoBuild,
  ...militarBuild,
  // ...goToCommands,
  // ...groups,
  // ...combos,
});
