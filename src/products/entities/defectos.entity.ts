import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Defectos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
}
