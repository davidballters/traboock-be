import { DataTypes } from 'sequelize'

import { Experience } from './experience.model.js'
import { sequelize } from '../db.js'

export const Destination = sequelize.define('destinations', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  }
})

Destination.hasMany(Experience)
