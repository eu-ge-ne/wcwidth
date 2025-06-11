import { assertEquals } from "@std/assert";

import { wcswidth } from "../src/wcswidth.ts";

Deno.test("ASCII", () => {
  const width = wcswidth("Lorem ipsum");

  assertEquals(width, 11);
});
