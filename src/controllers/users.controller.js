import { User } from '../models/user.model.js'

export const getAll = async (req, res) => {
  const users = await User.findAll()
  return res.json(users)
}

export const updateProfile = (req, res) => res.send('actualizando desde users')

export const deleteUser = (req, res) => res.send('eliminando  desde users')
