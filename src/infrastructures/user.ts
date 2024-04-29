import { User } from "../entity/User"

const users: User[] = [
  { id: 1, name: "User1", email: "user1@test.local" },
  { id: 2, name: "User2", email: "user2@test.local" },
  { id: 3, name: "User3", email: "user3@test.local" }
]
export class UserDAO {
  async getUserById(id: number): Promise<User | undefined> {
    return users.find(user => user.id === id)
  }
  async getUserById2(id: number): Promise<User | undefined> {
    return users.find(user => user.id === id)
  }
}
