import { User } from "../entity/User";

export interface IUserRepository {
  getUserById(id: number): Promise<User | undefined>;
}
