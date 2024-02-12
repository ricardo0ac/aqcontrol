import {
  ArrayNotEmpty,
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  pocliente: string;

  @IsString()
  lote: string;

  @IsInt()
  @IsPositive()
  qtyOrden: number;

  @IsInt()
  @IsPositive()
  qtyRechazado: number;

  @IsString()
  @MinLength(1)
  color: string;

  @IsString()
  @IsOptional()
  comentarios?: string;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  images?: string[];

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  defectos: string[];

  @IsNumber()
  @IsPositive()
  departamento: number;

  @IsNumber()
  @IsPositive()
  cliente: number;
}
