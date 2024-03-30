import { Destination } from '../models/destination.model.js'

export const getAll = async (req, res) => {
  const destinations = await Destination.findAll()
  return res.json(destinations)
}