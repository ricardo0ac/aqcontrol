import { Product } from '.';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'defect_relacion' })
export class DefectRelacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  defecto: string;

  @ManyToOne(() => Product, (product) => product.defectos, {
    onDelete: 'CASCADE',
  })
  product: Product;
}
