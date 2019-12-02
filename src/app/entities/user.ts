import { GenderEnum } from "../enums/gender.enum";

export class User {
  id: number;
  firstName: string;
  lastName: string;
  birthday: string;
  gender: GenderEnum;
  email: string;
  password: string;
}
