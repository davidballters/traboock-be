import { User } from '../models/user.model.js'
import { Tour } from '../models/tour.model.js'
import { Destination } from '../models/destination.model.js'

export const getAll = async (req, res) => {
  const toures = await Tour.findAll({ include:[User,Destination]})
  return res.json(toures)
}

export const create = async (req, res) => {
  const body = req.body
  const destinationsIds = body.destinations
  const destinations = await Destination.findAll({ where: { id: destinationsIds } })
  // return res.json(destinations)
  const tour = await Tour.create({
    name: body.name,
    description: body.description,
    userId: req.user.id,
    // destinations,
  })
  await tour.setDestinations(destinations)
  return res.json(tour)
}

export const update = async(req, res) => {
  const { id } = req.params         
  const body = req.body
  const tour = await Tour.findByPk(id)
  if (!tour) return res.status(404).json({ message: 'Tour not found' })
  await tour.update(body)
  return res.json(tour) 
}

export const deleteTour = async (req, res) => {
  const { id } = req.params
  const tour = await Tour.findByPk(id)
  if(!tour) return res.status(404).json({message:'Tour not found'})
  await tour.destroy()
  return res.json({message:'Tour deleted succesfully'})
}