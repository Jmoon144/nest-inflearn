import { IsEmail, isNotEmpty, isString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsEmail()
  @isNotEmpty()
  email: string;

  @Column()
  @isString()
  @isNotEmpty()
  catname: string;

  @Column()
  @isString()
  @isNotEmpty()
  password: string;

  @Column()
  @isString()
  imgUrl: string;
}
