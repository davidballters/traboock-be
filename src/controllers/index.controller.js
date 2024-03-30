import { sequelize } from '../db.js'

export const health = async (req, res) => {
  let databaseConnected = false

  try {
    await sequelize.authenticate();
    databaseConnected = true
    console.log('Connection has been established successfully.');
  } catch (error) {
    databaseConnected = false
    console.error('Unable to connect to the database:', error);
  }

  return res.json({
    'status': true,
    'databaseConnected': databaseConnected
  })
}
