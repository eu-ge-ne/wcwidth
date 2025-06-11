export function search(code_point: number, table: number[][]): number {
  let a = 0;
  let b = table.length - 1;
  let i = 0;

  if (code_point >= table[0]![0]! && code_point <= table[b]![1]!) {
    while (a <= b) {
      i = Math.trunc((a + b) / 2);

      if (code_point > table[i]![1]!) {
        a = i + 1;
      } else if (code_point < table[i]![0]!) {
        b = i - 1;
      } else {
        return 1;
      }
    }
  }

  return 0;
}
