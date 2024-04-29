import { Request, Response } from "express";
import { UserService } from "../service/UserService";

export class UserHandler {
  private userService: UserService

  constructor() {
    this.userService = new UserService()
  }

  getUserByID = async (req: Request, res: Response): Promise<void> => {
    const userID: number = Number(req.params.userID);
    const user = await this.userService.getUserById(userID);
    if (!user) {
      res.status(404).send("User not found");
    }
    res.status(200).json(user);
  }
}
