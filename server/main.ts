import http from 'http';
import { SERVER_OPTIONS } from './core/domain/constants/options.server.constants';
import { AppDataSource } from './database/typeorm/data-source.typeorm';
import UsersRouters from './presentation/routers/users.router';
import { CreateUsersUsecase } from './domain/users/use-cases/create-users.use-case';
import { UsersController } from './presentation/controller/users.controller';
import { requestExceptionHandler } from './core/middleware/handlers';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use([
  cors({
    credentials: true,
  }),
  bodyParser.json(),
]);

const userRouter = UsersRouters(new UsersController(new CreateUsersUsecase()));

app.use(userRouter);

app.use(requestExceptionHandler);

const server = http.createServer(app);

AppDataSource.initialize()
  .then(async () => {
    console.log('Database ok');

    server.listen(SERVER_OPTIONS.PORT, () => {
      console.log(
        `Server already start ${SERVER_OPTIONS.PROTOCOL}://${SERVER_OPTIONS.HOST}:${SERVER_OPTIONS.PORT}`,
      );
    });
  })
  .catch((error: any) => console.log(`Erro initialization db: ${error}`));
