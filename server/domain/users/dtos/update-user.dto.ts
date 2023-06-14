import { IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class UpdatedUserDTO {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 2,
    minSymbols: 1,
    minUppercase: 1,
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
