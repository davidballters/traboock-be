import { Tour } from '../models/tour.model.js'

export const getAll = async (req, res) => {
  const toures = await Tour.findAll()
  return res.json(toures)
}