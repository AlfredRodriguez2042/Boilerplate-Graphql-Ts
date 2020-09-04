import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'

import { User } from './User'

import { Category } from './Category'

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  ingredients: string

  @ManyToOne(() => Category, (category) => category.recipe)
  category: Category

  @ManyToOne(() => User, (user) => user.recipies)
  author: User
}
