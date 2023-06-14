import express from 'express';
import type { ErrorRequestHandler } from 'express';

export const requestExceptionHandler: ErrorRequestHandler = (
  error: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  if (error.name === 'HttpException') {
    return res.status(error.statusCode).send({
      type: error.type,
      statusCode: error.statusCode,
      description: error.description,
      notification: error.notification,
    });
  }

  next();

  return res.status(500).send({
    type: 'Internal_Server_Error',
    statusCode: 500,
    notification: 'Problema interno do service',
  });
};
