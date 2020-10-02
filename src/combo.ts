type KeyDescription = {
  ctrl?: number;
  shift?: number;
  alt?: number;
  k: string;
};
export type Key = { key: string; ctrl: boolean; alt: boolean; shift: boolean };
export type Combo = { title: string; keys: Key[] };

export function h(...descriptions: (string | KeyDescription)[]): Key[] {
  return descriptions.flatMap((description) => {
    if (typeof description === "string") {
      return description
        .split("")
        .map((key) => ({ key, ctrl: false, alt: false, shift: false }));
    } else {
      return {
        key: description.k,
        ctrl: description.ctrl !== undefined,
        alt: description.alt !== undefined,
        shift: description.shift !== undefined,
      };
    }
  });
}

export function c(keysByTitle: Record<string, Key[]>): Combo[] {
  return Object.keys(keysByTitle).map((title) => ({
    title,
    keys: keysByTitle[title],
  }));
}

export function match(key: Key, event: KeyboardEvent) {
  return (
    event.key.toLowerCase() === key.key.toLowerCase() &&
    key.ctrl === event.ctrlKey &&
    key.shift === event.shiftKey &&
    key.alt === event.altKey
  );
}

export function toString(key: Key) {
  return (
    (key.ctrl ? "Ctrl " : "") +
    (key.shift ? "Shift " : "") +
    (key.alt ? "Alt " : "") +
    (key.key === " " ? "Space" : key.key.toUpperCase())
  );
}
