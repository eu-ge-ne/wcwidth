import { assertEquals } from "@std/assert";
import { wcswidth } from "../src/wcswidth.ts";

Deno.test("Normal", () => {
  assertEquals(wcswidth("Привет мир"), 10);
});
