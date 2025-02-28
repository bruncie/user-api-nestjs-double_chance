import { IsString, IsEmail, IsNotEmpty, MinLength, IsNumber} from 'class-validator'

export class UserDto {
    
    @IsString()
    @IsNotEmpty()
    name: string;
 
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsNumber()
    number: string;

}