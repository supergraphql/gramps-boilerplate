const fs = require('fs')

module.exports = ({ project }) => {
  const templateName = 'gramps-boilerplate'
  replaceInFile('package.json', templateName, project)

  console.log(`\
Next steps:

  1. Change directory: \`cd ${project}\`
  2. Install your GrAMPS datasources and add them to \`./src/index.js\`
  3. Start local server: \`yarn start\`
  4. Open Playground: http://localhost:4000
  `)
}

function replaceInFile(filePath, searchValue, replaceValue) {
  const contents = fs.readFileSync(filePath, 'utf8')
  const newContents = contents.replace(
    new RegExp(searchValue, 'g'),
    replaceValue,
  )
  fs.writeFileSync(filePath, newContents)
}
