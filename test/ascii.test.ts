import { assertEquals } from "@std/assert";
import { wcswidth } from "../src/wcswidth.ts";

Deno.test("ASCII", () => {
  assertEquals(wcswidth("Lorem ipsum"), 11);
});
