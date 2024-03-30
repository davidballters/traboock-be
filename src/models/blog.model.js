import { DataTypes } from 'sequelize'

import { sequelize } from '../db.js'

export const Blog = sequelize.define('blogs', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
})
