// run.ts
const filename = process.argv[2]
if (!filename) {
  console.error('Por favor, proporciona un nombre de archivo.')
  process.exit(1)
}

import('./' + filename)
