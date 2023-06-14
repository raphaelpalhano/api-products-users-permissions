import { Router } from 'express';
import { UsersController } from '../controller/users.controller';
import { resolverHandler } from '../../core/helpers/resolver.handler';

export default function UsersRouters(usersController: UsersController) {
  const usersRouter = Router();

  usersRouter.post(
    '/users',
    resolverHandler(usersController.create.bind(usersController)),
  );

  usersRouter.post(
    '/users',
    resolverHandler(usersController.create.bind(usersController)),
  );

  return usersRouter;
}
