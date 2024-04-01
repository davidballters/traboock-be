import { DataTypes } from 'sequelize'

import { Destination } from './destination.model.js'
import { Experience } from './experience.model.js'
import { Blog } from './blog.model.js'
import { Tour } from './tour.model.js'
import { sequelize } from '../db.js'

export const User = sequelize.define('users', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

User.hasMany(Destination)
User.hasMany(Experience)
User.hasMany(Blog)
User.hasMany(Tour)
Blog.belongsTo(User)
Destination.belongsTo(User)
Experience.belongsTo(User)
Tour.belongsTo(User)