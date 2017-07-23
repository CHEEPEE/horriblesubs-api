'use strict'

// Import the neccesary modules.
const HorribleSubsAPI = require('../horriblesubs-api')

// Create a new instance of the module.
const horriblesubs = new HorribleSubsAPI()

// Get all available shows on horriblesubs.
horriblesubs.getAllAnime().then(res => {
  const [ data ] = res
  console.log(data)

  // Get data including episodes from horriblesubs.
  return horriblesubs.getAnimeData(data)
}).then(res => console.log(res))
  .catch(err => console.error(err))
