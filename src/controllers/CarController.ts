// import { getManager } from 'typeorm'
// // eslint-disable-next-line
// import { Request, Response } from 'express'
// // import { Cars } from '../entity/Cars'
// // import { User } from "../entity/User";

// export const indexCar = async (request: Request, response: Response) => {
//   const cars = await getManager()
//     .createQueryBuilder(Cars, 'cars')
//     .leftJoinAndSelect('cars.user', 'user')
//     .getMany()

//   return response.json(cars)
// }

// export const storeCar = async (request: Request, response: Response) => {
//   const { name, brand, userId } = request.body

//   const car = await getManager()
//     .createQueryBuilder()
//     .insert()
//     .into(Cars)
//     .values({
//       name: name,
//       brand: brand,
//       user: userId
//     })
//     .execute()

//   return response.json(car)
// }

// export const destroyCar = async (request: Request, response: Response) => {
//   const { id } = request.params
//   const car = await getManager()
//     .createQueryBuilder()
//     .delete()
//     .from(Cars)
//     .where('id = :id', { id: id })
//     .execute()

//   return response.json(car)
// }
