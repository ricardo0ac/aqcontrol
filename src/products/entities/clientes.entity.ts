import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Clientes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  nombre: string;

  @OneToMany(() => Product, (product) => product.cliente, {
    // onDelete: 'CASCADE',
  })
  product: Product;
}
