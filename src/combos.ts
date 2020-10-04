import { c, h, s } from "./combo";

export const select = s([
  ["Select Docks", [" q"], "dock.png"],
  ["Select Barracks", [" a"], "barracks.png"],
  ["Select Ranges", [" s"], "range.png"],
  ["Select Stables", [" d"], "stable.png"],
  ["Select Siege", [" x"], "siege.png"],
  ["Select Castles", [" z"], "castle.png"],
  ["Select TCs", [" f"], "tc.png"],
  ["Select Monasteries", [" ", { shift: 1, k: "a" }], "mona.png"],
  ["Select University", [" ", { shift: 1, k: "s" }], "uni.png"],
  ["Select Market", [" g"], "market.png"],
  ["Select Blacksmith", [" ", { shift: 1, k: "f" }], "blacksmith.png"],
]);

export const queue = s([
  ["Create Militia", [" ad"], "militia.png"],
  ["Create Pike", [" af"], "pikeman.png"],
  ["Create Archer", [" sd"], "archer.png"],
  ["Create Skirm", [" sf"], "skirm.png"],
  ["Create Cavalry Archer", [" se"], "ca.png"],
  ["Create Scout", [" dd"], "scout.png"],
  ["Create Knight", [" df"], "knight.png"],
  ["Create Camel", [" de"], "camel.png"],
  ["Create Ram", [" xd"], "ram.png"],
  ["Create Mangonel", [" xf"], "mango.png"],
  ["Create Scorpion", [" xe"], "scorpion.png"],
  // ["Create Bombard Cannon", [" xe"], "bc.png"],
  ["Create Unique Unit", [" zd"], "uu.png"],
  ["Create Trebuchet", [" zf"], "trebu.png"],
  ["Create Villager", [" ff"], "villager.png"],
  ["Research Loom", [" ff"], "loom.png"],
  ["Create Fishing Ship", [" qd"], "fish.png"],
  ["Create Galley", [" qf"], "galley.png"],
  ["Create Fire Ship", [" qe"], "fire.png"],
  ["Create Demo Ship", [" qr"], "demo.png"],
  ["Create Monk", [" ", { shift: 1, k: "a" }, "d"], "monk.png"],
  ["Select University", [" ", { shift: 1, k: "s" }], "uni.png"],
  ["Select Market", [" g"], "market.png"],
  ["Select Blacksmith", [" ", { shift: 1, k: "f" }], "blacksmith.png"],
]);



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
  "Go to Lumber Camp": h(" ", { shift: 1, k: "z" }),
  "Go to Mining Camp": h(" ", { shift: 1, k: "x" }),
  "Go to TC": h({ k: "CapsLock" }),
  "Last Notification": h({ k: "Tab" }),
};

const groups = {
  "Create group 9": h("v"),
  "Select group 9": h("c"),
  // "Create group 8": h({ shift: 1, k: "v" }),
  // "Select group 8": h({ shift: 1, k: "c" }),
};

export const build = []

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
