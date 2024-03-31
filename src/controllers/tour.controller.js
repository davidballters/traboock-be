import { Tour } from '../models/tour.model.js'

export const getAll = async (req, res) => {
  const toures = await Tour.findAll()
  return res.json(toures)
}

export const create = async (req, res) => {
  const body = req.body
  const tour = await Tour.create(body)
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
  if(!Tour) return res.status(404).json({message:'Tour not found'})
  await tour.destroy()
  return res.json({message:'Tour deleted succesfully'})
}