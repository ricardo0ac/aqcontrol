import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { AuthModule } from './../auth/auth.module';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

import { Product, ProductImage } from './entities';
import { Departamentos } from './entities/departamentos.entity';
import { Clientes } from './entities/clientes.entity';

import { DefectRelacion } from './entities/product-defect-rela.entity';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    TypeOrmModule.forFeature([
      Product,
      ProductImage,
      Departamentos,
      Clientes,
      DefectRelacion,
    ]),
    AuthModule,
  ],
  exports: [ProductsService, TypeOrmModule],
})
export class ProductsModule {}
