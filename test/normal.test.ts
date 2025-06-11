import { assertEquals } from "@std/assert";

import { wcswidth } from "../src/wcswidth.ts";

Deno.test("Normal", () => {
  const width = wcswidth("Привет мир");

  assertEquals(width, 10);
});
