import { search } from "./search.ts";
import { WIDE_EASTASIAN } from "./wide.ts";
import { ZERO_WIDTH } from "./zero.ts";

const wide_eastasian = WIDE_EASTASIAN["15.1.0"];
const zero_width = ZERO_WIDTH["15.1.0"];

export function wcwidth(char: string): number {
  const code_point = char.codePointAt(0);

  if (typeof code_point === "undefined") {
    return 0;
  }

  // ASCII
  if (code_point >= 32 && code_point < 0x7F) {
    return 1;
  }

  // C0/C1
  if (code_point < 32 || (code_point >= 0x07F && code_point < 0x0A0)) {
    return -1;
  }

  // Zero width
  if (search(code_point, zero_width)) {
    return 0;
  }

  // 1 or 2 width
  return 1 + search(code_point, wide_eastasian);
}
