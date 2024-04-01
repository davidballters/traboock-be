import { DataTypes } from 'sequelize'

import { sequelize } from '../db.js'
import { Destination } from './destination.model.js'

export const Tour = sequelize.define('toures', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  }
})


Tour.belongsToMany(Destination, { through: 'tour_destinations' });
Destination.belongsToMany(Tour, { through: 'tour_destinations' });

