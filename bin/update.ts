function convert(script: string, url: string): string {
  script = script.replaceAll(
    /"""(.*)"""/sg,
    `/*
This file was downloaded and converted from ${url}.
$1*/`,
  );

  script = script.replaceAll(
    /(VS16_NARROW_TO_WIDE)|(WIDE_EASTASIAN)|(ZERO_WIDTH)/g,
    "export const $&",
  );

  script = script.replaceAll("#", "//");
  script = script.replaceAll("(", "[");
  script = script.replaceAll(")", "]");

  return script;
}

const files = [
  [
    "https://raw.githubusercontent.com/jquast/wcwidth/refs/heads/master/wcwidth/table_vs16.py",
    "src/vs16.ts",
  ],
  [
    "https://raw.githubusercontent.com/jquast/wcwidth/refs/heads/master/wcwidth/table_wide.py",
    "src/wide.ts",
  ],
  [
    "https://raw.githubusercontent.com/jquast/wcwidth/refs/heads/master/wcwidth/table_zero.py",
    "src/zero.ts",
  ],
];

for (const [url, file_name] of files) {
  const res = await fetch(url!);

  const py_script = await res.text();
  const ts_script = convert(py_script, url!);

  await Deno.writeTextFile(file_name!, ts_script);
}
