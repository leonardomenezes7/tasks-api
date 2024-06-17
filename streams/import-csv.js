import { parse } from "csv-parse";
import fs from "node:fs"

const csvPath = new URL("./tasks.csv", import.meta.url)

const stream = fs.createReadStream(csvPath)

const csvParse = parse({
  delimiter: ",",
  skip_empty_lines: true,
  from_line: 2
})

async function run() {
  const parseLines = stream.pipe(csvParse)

  for await (const line of parseLines) {
    const [title, description] = line

    await fetch ("http://localhost:3333/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        title,
        description,
      })
    })
  }
}

run()