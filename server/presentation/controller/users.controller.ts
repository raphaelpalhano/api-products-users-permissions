import { Request, Response } from 'express';
import { CreateUsersUsecase } from '../../domain/users/use-cases/create-users.use-case';

export class UsersController {
  private createUsersUsecase: CreateUsersUsecase;

  constructor(createUsersUsecase: CreateUsersUsecase) {
    this.createUsersUsecase = createUsersUsecase;
  }

  async create(req: Request, res: Response) {
    const user = await this.createUsersUsecase.execute(req.body);
    return res.status(201).json(user);
  }
}
