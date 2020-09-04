import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Recipe } from './Recipe'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  isActive: boolean

  @OneToMany(() => Recipe, (recipe) => recipe.author)
  recipies: Recipe[]
}
