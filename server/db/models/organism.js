const Sequelize = require('sequelize')
const db = require('../db')

const Organism = db.define('organism', {
  image: {
    type: Sequelize.STRING,
    allowNull: false
  },
  kingdom: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phylum: {
    type: Sequelize.STRING,
    allowNull: false
  },
  classes: {
    type: Sequelize.STRING,
    allowNull: false
  },
  order: {
    type: Sequelize.STRING,
    allowNull: false
  },
  family: {
    type: Sequelize.STRING,
    allowNull: false
  },
  genus: {
    type: Sequelize.STRING,
    allowNull: false
  },
  species: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Organism