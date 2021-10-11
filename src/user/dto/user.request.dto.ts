import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class UserRequestDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'password only accepts english and number',
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
