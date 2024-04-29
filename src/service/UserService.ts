import { User } from "../entity/User";
import { UserDAO } from "../infrastructures/user";
import { IUserRepository } from "../repository/user";


export class UserService {
  private UserDAO: IUserRepository
  constructor() {
    this.UserDAO = new UserDAO()
  }

  async getUserById(id: number): Promise<User | undefined> {
    return this.UserDAO.getUserById(id)
  }
}
