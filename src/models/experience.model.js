import { DataTypes } from 'sequelize'

import { sequelize } from '../db.js'
import { Destination } from './destination.model.js'

export const Experience = sequelize.define('experiences', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  }
})

Destination.hasMany(Experience)
Experience.belongsTo(Destination)