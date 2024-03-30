import { DataTypes } from 'sequelize'

import { sequelize } from '../db.js'

export const Experience = sequelize.define('experiences', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  }
})
