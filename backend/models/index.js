'use strict'

const Champion = require('./champion')
const Item = require('./item')
const Rune = require('./rune')
const User = require('./user')

async function init() {
    await Champion.sync()
    await User.sync()
    await Item.sync()
    await Rune.sync()
}


init()

module.exports = {
    Champion, User, Item, Rune
}