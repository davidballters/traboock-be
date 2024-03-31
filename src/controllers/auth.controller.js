import { hash, compare } from 'bcrypt'

import { generateToken } from '../utils.js'
import { User } from '../models/user.model.js'

export const signUp = async (req, res) => {
  const body = req.body
  const hashedPassword = await hash(body.password, 10)

  const user = await User.create({
    ...body,
    password: hashedPassword
  })

  return res.send(user)
}

export const signIn = async (req, res) => {
  const body = req.body

  const user = await User.findOne({ where: { email: body.email } })
  if (!user) {
    return res.status(401).json({ messages: 'Bad credentials' }) // if not exist return error
  }

  const match = await compare(body.password, user.password)
  if (!match) {
    return res.status(401).json({ messages: 'Bad credentials' }) // if not exist return error
  }

  const token = generateToken({
    id: user.id,
    email: user.email
  })

  return res.json({ token })
}
