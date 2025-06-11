import { search } from "./search.ts";
import { VS16_NARROW_TO_WIDE } from "./vs16.ts";
import { wcwidth } from "./wcwidth.ts";

const vs16_narrow_to_wide = VS16_NARROW_TO_WIDE["9.0.0"];

export function wcswidth(text: string): number {
  const chars = text[Symbol.iterator]();

  let width = 0;
  let last: string | undefined;
  let char = chars.next();

  while (!char.done) {
    if (char.value === "\u200D") {
      if (chars.next().done) {
        break;
      }
      char = chars.next();
      continue;
    }

    if (char.value === "\uFE0F" && typeof last === "string") {
      width += search(last.codePointAt(0)!, vs16_narrow_to_wide);
      last = undefined;
      char = chars.next();
      continue;
    }

    const w = wcwidth(char.value);

    if (w < 0) {
      return w;
    }

    if (w > 0) {
      last = char.value;
    }

    width += w;

    char = chars.next();
  }

  return width;
}
