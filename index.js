const { nld, vnn } = require('./cnews')
const { db } = require('./utils')

const main = async () => {
  const argUrl = process.argv.slice(2)
  if (argUrl.length) {
    switch (argUrl[0]) {
      case 'nld':
        const dataNld = await nld()
        console.log(dataNld)
        break

      case 'vnn':
        const dataVnn = await vnn()
        console.log(dataVnn)
        break
      default:
        console.log('no url news')
    }
  } else {
    console.log('need argument')
  }
}
// console.log(process.env.MONGODB)
// const name = process.argv.slice(2)
// if (name.length) {
//   console.log(`hello ${process.argv.slice(2)}`)
// } else {
//   console.log('Need argument')
// }

main()
