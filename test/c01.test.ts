import { assertEquals } from "@std/assert";
import { wcswidth } from "../src/wcswidth.ts";

Deno.test("C0", () => {
  assertEquals(wcswidth("\n"), -1);
});

Deno.test("C1", () => {
  assertEquals(wcswidth("\x1b[m"), -1);
});
