// import { object } from 'joi'
import { User } from '../models/user.model.js'
import { Blog } from '../models/blog.model.js'

export const getAll = async (req, res) => {
  // TODO: just get the blogs that the user is owner
  // const blogs = await Blog.findAll({ where: { userId: req.user.id } })
  const blogs = await Blog.findAll({ include: User})
  return res.json(blogs)
}

export const create = async (req, res) => {
  const body = req.body
  const blog = await Blog.create({
    title: body.title, 
    content: body.content,
    userId: req.user.id 
  })
  return res.json(blog)
}

export const update = async (req, res) => {
  const { id } = req.params
  const body = req.body
  const blog = await Blog.findByPk(id)
  if (!blog) return res.status(404).json({ message: 'Blog not found' })
  await blog.update(body)
  return res.json(blog)
}

export const deleteBlog = async (req, res) => {
  const { id } = req.params
  const blog = await Blog.findByPk(id)
  if (!blog) return res.status(404).json({ message: 'Blog not found' })
  await blog.destroy()
  return res.json({ message: 'Blog deleted successfully' })
}
