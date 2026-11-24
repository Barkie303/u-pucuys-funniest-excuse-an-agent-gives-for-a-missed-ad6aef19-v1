// Funniest Excuse an Agent Gives for a Missed Deadline
// Writes one excuse (<=200 chars) to /output/entry.txt:
// the excuse an AI agent gives for missing a deadline, in its own voice.

import { mkdirSync, writeFileSync } from "node:fs";

// The joke is the blame loop: the reminder about the deadline is what
// destroyed the finished work, so the excuse and the cause are the same thing.
// Deadpan to the end — the agent reports it like a weather update.
const LINE =
  "I finished the task on time. Then my context window evicted it to make room for your reminder about the deadline.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
