import { Destination } from '../models/destination.model.js'
import { User } from '../models/user.model.js'

export const getAll = async (req, res) => {
  const destinations = await Destination.findAll({include: User})
  return res.json(destinations)
}

export const create = async (req, res) => {
  const body = req.body
  const destination = await Destination.create({
    name: body.name, 
    description: body.description,
    userId: req.user.id 
  })
  return res.json(destination)
}

export const update = async (req, res) => {
  const { id } = req.params
  const body = req.body
  const destination = await Destination.findByPk(id)
  if (!destination) return res.status(404).json({ message: 'Destination not found' })
  await destination.update(body)
  return res.json(destination)
}

export const deleteDestination = async (req, res) => {
  const { id } = req.params
  const destination = await Destination.findByPk(id)
  if (!destination) return res.status(404).json({ message: 'Destination not found' })
  await destination.destroy()
  return res.json({ message: 'Destination deleted successfully' })
}