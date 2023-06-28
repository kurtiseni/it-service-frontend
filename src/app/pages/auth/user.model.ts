export interface UserInterface {
  data: UserModel[];
  total: number;
}

export class UserModel {
  id?: number;
  username!: string;
  firstName?: string;
  lastName?: string;
  group!: number;
  token?: string;
}
