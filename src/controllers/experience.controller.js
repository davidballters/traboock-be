import { User } from '../models/user.model.js'
import { Experience } from '../models/experience.model.js'
import { Destination } from '../models/destination.model.js'

export const getAll = async (req, res) => {
  const experiences = await Experience.findAll({ include:[User, Destination] })
  return res.json(experiences)
}

export const create = async (req, res) => {
  const body = req.body
  const experience = await Experience.create({
    name: body.name,
    description: body.description,
    userId: req.user.id,                  
    destinationId: body.destination,
  })
   
  return res.json(experience)

}

export const update = async (req, res) => {
  const { id } = req.params
  const body = req.body
  const experience = await Experience.findByPk(id)
  if (!experience) return res.status(404).json({ message: 'Experience not found' })
  await experience.update(body)
  return res.json(experience)
}

export const deleteExperience = async (req, res) => {
  const { id } = req.params
  const experience = await Experience.findByPk(id)
  if (!experience) return res.status(404).json({ message: 'Experience not found' })
  await experience.destroy()
  return res.json({ message: 'Experience deleted successfully' })
}