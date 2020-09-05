import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Recipe } from './Recipe'

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @OneToMany(() => Recipe, (recipe: Recipe) => recipe.author)
  recipe: Recipe[]
}
