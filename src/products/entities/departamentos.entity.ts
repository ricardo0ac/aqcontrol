import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Departamentos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  nombre: string;

  @OneToMany(() => Product, (product) => product.departamento, {
    // onDelete: 'CASCADE',
  })
  product: Product;
}
