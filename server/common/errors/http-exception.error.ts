type httpExceptionType = string | Array<string>;

export interface HttpExceptionProps {
  status: number;
  description?: string;
  notification: string[];
  typeError: httpExceptionType;
}

export class HttpExceptionError extends Error {
  readonly statusCode: number;
  readonly notification: string[];
  readonly description: string;
  readonly type: httpExceptionType;
  constructor(props: HttpExceptionProps) {
    super(props.description);
    this.name = 'HttpException';
    this.statusCode = props.status;
    this.type = props.typeError;
    this.notification = props.notification;
    this.description = props.description || '';
  }
}
