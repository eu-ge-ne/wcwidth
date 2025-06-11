import { assertEquals } from "@std/assert";
import { wcswidth } from "../src/wcswidth.ts";

Deno.test("Japanese", () => {
  assertEquals(wcswidth("コンニチハ"), 10);
});

Deno.test("Emoji", () => {
  assertEquals(wcswidth("🤦🏼‍♂"), 2);
});
