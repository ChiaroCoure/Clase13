const fs = require('fs')

const obtenerBicicletas = () => {
  const BICICLETAS_FILE = '/bicicletas.json'
  const data = fs.readFileSync(__dirname + BICICLETAS_FILE, 'utf8')
  const content = JSON.parse(data)
  return content
}

module.exports = { obtenerBicicletas }
