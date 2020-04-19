module.exports = (async () => {
  try {
    const yarnBin = await require('./vendor/yarn-bin')
    return yarnBin
  }
  catch(error) {
    console.error(error)
    throw error
  }
})()
