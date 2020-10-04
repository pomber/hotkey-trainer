import { c, h, s } from "./combo";

// export const select = s([
//   ["Select Docks", [" q"], "dock.png"],
//   ["Select Barracks", [" a"], "barracks.png"],
//   ["Select Ranges", [" s"], "range.png"],
//   ["Select Stables", [" d"], "stable.png"],
//   ["Select Siege", [" x"], "siege.png"],
//   ["Select Castles", [" z"], "castle.png"],
//   ["Select TCs", [" f"], "tc.png"],
//   ["Select Monasteries", [" ", { shift: 1, k: "a" }], "mona.png"],
//   ["Select University", [" ", { shift: 1, k: "s" }], "uni.png"],
//   ["Select Market", [" g"], "market.png"],
//   ["Select Blacksmith", [" ", { shift: 1, k: "f" }], "blacksmith.png"],
// ]);

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
  ["Create Bombard Cannon", [" xr"], "bc.png"],
  ["Create Unique Unit", [" zd"], "uu.png"],
  ["Create Trebuchet", [" zf"], "trebu.png"],
  ["Create Villager", [" ff"], "villager.png"],
  ["Research Loom", [" ff"], "loom.png"],
  ["Create Fishing Ship", [" qd"], "fish.png"],
  // ["Create Galley", [" qf"], "galley.png"],
  ["Create Fire Ship", [" qe"], "fire.png"],
  // ["Create Demo Ship", [" qr"], "demo.png"],
  ["Create Monk", [" ", { shift: 1, k: "a" }, "d"], "monk.png"],
  ["Select University", [" ", { shift: 1, k: "s" }], "uni.png"],
  ["Select Market", [" g"], "market.png"],
  ["Select Blacksmith", [" ", { shift: 1, k: "f" }], "blacksmith.png"],
  ["Research Farm Upgrade and Reseed", [" waf"], "ecofood.png"],
  ["Research Wood Upgrade", [" ", { shift: 1, k: "z" }, "a"], "ecowood.png"],
  ["Go to Mining Camp", [" ", { shift: 1, k: "x" }], "mining.png"],
  ["Last Notification", [{ k: "Tab" }], ""],
  ["Focus TC", [{ k: "CapsLock" }], ""],
]);

const goToCommands = {
  "Go to Mill": h(" w"),
  "Go to Lumber Camp": h(" ", { shift: 1, k: "z" }),
  "Go to Mining Camp": h(" ", { shift: 1, k: "x" }),
  "Go to TC": h({ k: "CapsLock" }),
  "Last Notification": h({ k: "Tab" }),
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

const groups = {
  "Create group 9": h("v"),
  "Select group 9": h("c"),
  // "Create group 8": h({ shift: 1, k: "v" }),
  // "Select group 8": h({ shift: 1, k: "c" }),
};

export const build = s([
  ["Build Town Center", ["fq"], "tc.png"],
  ["Build Mill", ["fw"], "mill.png"],
  ["Build Lumber Camp", ["fe"], "lumber.png"],
  ["Build Mining Camp", ["fr"], "mining.png"],
  ["Build Market", ["ft"], "market.png"],
  ["Build Monastery", ["fa"], "mona.png"],
  ["Build Dock", ["fs"], "dock.png"],
  ["Build Farm", ["fd"], "farm.png"],
  ["Build House", ["ff"], "house.png"],
  ["Build Blacksmith", ["fg"], "blacksmith.png"],
  ["Build University", ["f", { shift: 1, k: "a" }], "uni.png"],
  ["Cancel Eco Build", ["fz"], ""],
  ["Build Castle", ["dq"], "castle.png"],
  ["Build Barracks", ["dw"], "barracks.png"],
  ["Build Archery Range", ["de"], "range.png"],
  ["Build Stable", ["dr"], "stable.png"],
  ["Build Siege Workshop", ["dt"], "siege.png"],
  ["Build Tower", ["da"], "tower.png"],
  ["Build Stone Gate", ["ds"], "gate.png"],
  ["Build Palisade Gate", ["dd"], "paligate.png"],
  ["Build Palisade", ["df"], "palisade.png"],
  ["Build Stone Wall", ["dg"], "wall.png"],
  ["Build Bombard Tower", ["d", { shift: 1, k: "a" }], "btower.png"],
  ["Build Outpost", ["d", { shift: 1, k: "s" }], "outpost.png"],
  [
    "Build Palisade Gate and Rotate",
    ["dd", { shift: 1, k: "d" }],
    "paligate.png",
  ],
]);
