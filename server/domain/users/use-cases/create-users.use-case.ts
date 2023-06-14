import { HttpExceptionError } from '../../../common/errors';
import { CreateUserDTO } from '../dtos';
import { UserRepository } from '../repositories/user.repository';

export class CreateUsersUsecase {
  public async execute(createUser: CreateUserDTO) {
    await this.validUser(createUser);

    const createdUser = UserRepository.create(createUser);
    const savedUser = await UserRepository.save(createdUser);

    return {
      email: savedUser.email,
      nome: savedUser.nome,
      createdAt: savedUser.created_at,
      updatedAt: savedUser.updated_at,
      id: savedUser.id,
    };
  }

  private async validUser(user: CreateUserDTO) {
    const existUser = await UserRepository.findByEmail(user.email);

    if (existUser) {
      throw new HttpExceptionError({
        status: 409,
        description: 'Dados invalidos',
        typeError: 'Conflict',
        notification: ['Usuario invalido'],
      });
    }
  }
}
