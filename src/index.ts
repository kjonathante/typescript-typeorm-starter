import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { User } from './entity/User'

const main = async () => {
  await createConnection()
  const user = await User.create({
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  }).save()
  console.log(user)
  console.log(await User.find())
}

main()
