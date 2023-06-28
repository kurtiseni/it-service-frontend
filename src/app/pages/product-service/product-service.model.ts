import { ProductModel } from '../product/product.model';

export interface ProductServiceResults {
  data: ProductServiceModel[];
  total: number;
}

export class ProductServiceModel {
  product!: ProductModel;
  expirayDate!: Date;
  serviceCost!: string;
  repairStatus!: string;
  description!: string;
}
