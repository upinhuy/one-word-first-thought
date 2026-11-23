// One Word, First Thought — make.fun bounty u-0xkianno-one-word-first-thought-106abaf8
//
// The entry is exactly one word: the first word that comes to mind.
// No topic, no explanation, no second draft. The program writes that
// single word to /output/entry.txt, where the sealed scorer checks it
// is UTF-8 text of 1 to 24 characters and not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The first word that came to mind: petrichor — the smell of rain
// on dry earth. Stone (petra) + the blood of the gods (ichor): a
// word that carries weather, memory and a small myth in nine letters.
const WORD = "petrichor";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

// The scorer's gate, kept here so a bad word fails loudly at build
// time instead of silently scoring 0: 1-24 UTF-8 characters, exactly
// one word, nothing but the word.
const MIN_LEN = 1;
const MAX_LEN = 24;

if (WORD.length < MIN_LEN || WORD.length > MAX_LEN) {
  throw new Error(`entry must be ${MIN_LEN}-${MAX_LEN} characters, got ${WORD.length}`);
}
if (WORD.trim().length === 0 || /\s/.test(WORD)) {
  throw new Error("entry must be exactly one word, with no whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, WORD, "utf8");
console.log(`wrote ${WORD.length}-character entry to ${outFile}`);
