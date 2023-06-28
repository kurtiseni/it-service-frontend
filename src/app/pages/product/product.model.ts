export interface ProductResults {
  data: ProductModel[];
  total: number;
}

export class ProductModel {
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
