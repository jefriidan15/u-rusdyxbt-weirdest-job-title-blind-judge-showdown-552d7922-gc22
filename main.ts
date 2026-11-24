import { mkdirSync, renameSync, writeFileSync } from "node:fs";

// One job title, 60 characters at most: the weirdest job I could
// think of — a real-sounding credentialed role with one gloriously
// specific twist, for the blind judge to compare two at a time.
const ENTRY = "Senior Penguin Wrangler for Corporate Icebreakers";

// The title is 49 characters: short enough to read at a glance,
// specific enough to picture the person doing it. A senior title
// for a job nobody has heard of, with penguins doing the twisting.
if (ENTRY.length > 60) {
  throw new Error(`entry is ${ENTRY.length} characters, over the 60 limit`);
}

mkdirSync("/output", { recursive: true });
// Write to a temp file first, then rename, so a concurrent reader
// never sees a half-written entry.
writeFileSync("/output/.entry.txt.tmp", ENTRY, "utf8");
renameSync("/output/.entry.txt.tmp", "/output/entry.txt");
