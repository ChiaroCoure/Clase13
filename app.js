const { obtenerBicicletas } = require('./datosBici')

const dhBici = {
  bicicletas: obtenerBicicletas(),
  buscarBici: function (id) {
    const bicicleta = this.bicicletas.filter(bicicleta => bicicleta.id === id)
    return bicicleta.length === 0 ? null : bicicleta[0]
  },
  venderBici: function (id) {
    const bicicleta = this.buscarBici(id)
    if (bicicleta) {
      bicicleta.vendida = true
      return bicicleta
    }

    return 'Bicicleta no encontrada'
  },
  biciParaLaVenta: function () {
    const bicicletasParaVenta = this.bicicletas.filter(bicicleta => !bicicleta.vendida)
    return bicicletasParaVenta
  },
  totalDeVentas: function () {
    const total = this.bicicletas.reduce((accumulator, bicicleta) => {
      if (bicicleta.vendida) {
        return accumulator + bicicleta.precio
      }
      return accumulator
    }, 0)
    return total
  }
}

console.log('Busca bicicleta con id numero 1: -> ', dhBici.buscarBici(1))
console.log('Vende la bicicleta con id numero 1: -> ', dhBici.venderBici(1))
console.log('Lista las bicicletas con no estan vendidas: -> ', dhBici.biciParaLaVenta())
console.log('Obtiene el total de las ventas de las bicicletas: -> ', dhBici.totalDeVentas())

// Desafio extra

const aumentoBici = (porcentajeAumento) => {
  const bicicletas = obtenerBicicletas()
  const bicicletasConAumento = bicicletas.map(bicicleta => ({ ...bicicleta, precio: bicicleta.precio + (porcentajeAumento * bicicleta.precio / 100) }))
  return bicicletasConAumento
}

console.log('Lista las bicicletas con un aumento: -> ', aumentoBici(10))

const biciPorRodado = (rodado) => {
  const bicicletas = obtenerBicicletas()
  const bicicletasFiltradasPorRodado = bicicletas.filter(bicicleta => bicicleta.rodado === rodado)
  return bicicletasFiltradasPorRodado
}

console.log('Lista las bicicletas con rodado especifico: -> ', biciPorRodado(16))

const listarTodasLasBici = () => {
  const bicicletas = obtenerBicicletas()
  bicicletas.forEach(bicicleta => {
    console.log(bicicleta)
  })
}

console.log('Lista las bicicletas')
listarTodasLasBici()

