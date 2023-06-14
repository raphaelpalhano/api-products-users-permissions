import { AppDataSource } from '../../../database/typeorm/data-source.typeorm';
import { UsersEntity } from '../../../database/typeorm/entities';

export const UserRepository = AppDataSource.getRepository(UsersEntity).extend({
  findByEmail(email: string) {
    return this.createQueryBuilder('users')
      .where('users.email = :email', {
        email,
      })
      .getOne();
  },
});
