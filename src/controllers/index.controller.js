import {Pool} from '../db.js';

export const users = async (req, res) => {
  const [database] = await Pool.query('SELECT * FROM user');
  res.json(database);
}



