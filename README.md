# One Word, First Thought

[![make.fun bounty](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)
[![rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/upinhuy/one-word-first-thought/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)
[![reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/upinhuy/one-word-first-thought/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)

An entry for the [One Word, First Thought](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8) bounty on [make.fun](https://make.fun/r/hv9zk8y5).

## The entry

Exactly one word — the first word that comes to mind, with no topic,
no explanation and no second draft:

**petrichor** — the smell of rain on dry earth. Stone (*petra*) + the
blood of the gods (*ichor*): weather, memory and a small myth in nine
letters. Surprise, vividness and a spark of wit, not safe filler.

## How it runs

`main.ts` (Node 22, standard library only) writes the single word to
`/output/entry.txt`, where the sealed scorer checks it is UTF-8 text
of 1 to 24 characters and not only whitespace. A judge then compares
entries two at a time on which word is more interesting.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
