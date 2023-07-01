export interface ProductResults {
  data: ProductList[];
  total: number;
}

export class ProductDetail {
  key!: string;
  serialDevice!: string;
  brand!: string;
  template!: string;
  description!: string;
  purchaseDate!: string;
  warrantyExpiryDate!: string;
  additionalNotes!: string;
  password!: string;
  customerName!: string;
  customerSurname!: string;
  fullAddress!: string;
  phoneNumber!: string;
  email!: string;
  fiscalCode!: string;
  vatNumber!: string;
  pec!: string;
  sdiCode!: string;
}

export interface ProductList {
  brand: string;
  description: string;
  id: number;
  key: string;
  purchaseDate: Date;
  serialDevice: string;
}
