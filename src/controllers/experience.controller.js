import { Experience } from '../models/experience.model.js'

export const getAll = async (req, res) => {
  const experiences= await Experience.findAll()
  return res.json(experiences)
}