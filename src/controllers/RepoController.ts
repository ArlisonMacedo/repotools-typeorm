import { getManager } from 'typeorm'
// eslint-disable-next-line
import {Request, Response} from 'express'
import { Repository } from '../entity/Repository'

export const index = async (request: Request, response: Response) => {
  const { tag } = request.query

  if (tag) {
    const filterRepo = await getManager()
      .createQueryBuilder(Repository, 'repository')
      .where(':tag  = ANY (tags)', { tag: tag })
      .getMany()

    return response.json(filterRepo)
  }
  const repo = await getManager()
    .createQueryBuilder(Repository, 'repository')
    .getMany()

  return response.json(repo)
}

export const store = async (request: Request, response: Response) => {
  const { title, link, description, tags } = request.body
  const repo = await getManager()
    .createQueryBuilder()
    .insert()
    .into(Repository)
    .values({
      title: title,
      link: link,
      description: description,
      tags: tags
    })
    .execute()

  if (repo) {
    return response.status(201).send()
  }

  return response.status(400).send()
}

export const destroy = async (request: Request, response: Response) => {
  const { id } = request.params
  const repo = await getManager()
    .createQueryBuilder()
    .delete()
    .from(Repository)
    .where('id = :id', { id: id })
    .execute()

  if (repo) {
    return response.status(204).send()
  }

  return response.status(400).send()
}
