import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ProductImage } from './';
import { User } from '../../auth/entities/user.entity';
import { Departamentos } from './departamentos.entity';
import { Clientes } from './clientes.entity';
import { Defectos } from './defectos.entity';
import { DefectRelacion } from './product-defect-rela.entity';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {})
  color: string;

  @Column({
    type: 'text',
  })
  pocliente: string;

  @Column('text', {})
  lote: string;

  @Column('float', {})
  qtyOrden: number;

  @Column('float', {})
  qtyRechazado: number;

  @Column('text', {
    default: 'Retenido',
  })
  estatus: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  comentarios: string;

  @BeforeInsert()
  updateCreatedAt() {
    this.createdAt = new Date();
  }

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  // images
  @OneToMany(() => ProductImage, (productImage) => productImage.product, {
    cascade: true,
    eager: true,
  })
  images?: ProductImage[];

  //defecto
  @OneToMany(() => DefectRelacion, (defectos) => defectos.product, {
    cascade: true,
    eager: true,
  })
  defectos: DefectRelacion[];

  @ManyToOne(() => User, (user) => user.product, { eager: true })
  user: User;

  @ManyToOne(
    () => Departamentos,
    (departamentos) => departamentos.product,
    { cascade: true, eager: true }, //Eliminar de ambas tablas
  )
  departamento: number;

  @ManyToOne(
    () => Clientes,
    (clientes) => clientes.product,
    { cascade: true, eager: true }, //Eliminar de ambas tablas
  )
  cliente: number;
}
