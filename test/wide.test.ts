import { assertEquals } from "@std/assert";

import { wcswidth } from "../src/wcswidth.ts";

Deno.test("Japanese", () => {
  const width = wcswidth("コンニチハ");

  assertEquals(width, 10);
});

Deno.test("Emoji", () => {
  const width = wcswidth("🤦🏼‍♂");

  assertEquals(width, 2);
});
