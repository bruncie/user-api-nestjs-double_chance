import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserNotFoundException, InternalServerErrorException, GenericException } from '../exceptions/exception.message';
import { UserDto } from './user.dto';
import { UserMapper } from './user.mapper';
import { User, UserDocument } from "./user.schema";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async create(userDto: UserDto): Promise<User> {
        try {
            if (await this.findByEmail(userDto.email)) {
                throw new GenericException("Já existe um usuario com esse email", HttpStatus.BAD_REQUEST);
            }
            const newUser = new this.userModel(UserMapper.dtoToEntity(userDto, true));
            return newUser.save();
        } catch (error) {
            console.error('Erro ao atualizar usuário');
            throw new InternalServerErrorException();
        }
    }

    async update(id: string, userDto: UserDto): Promise<User | null> {
        try {
            const updatedUser = await this.userModel.findByIdAndUpdate(
                id,
                UserMapper.dtoToEntity(userDto, false),
                { new: true }).exec();

            if (!updatedUser) {
                throw new UserNotFoundException();
            }

            return updatedUser;
        } catch (error) {
            console.error('Erro ao atualizar usuário');
            throw new InternalServerErrorException();
        }
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findUser(email: string): Promise<User | null> {
        let user = this.findByEmail(email);
        if (user == null) {
            throw new UserNotFoundException();
        }
        return user;
    }

    async findByEmail(email: string): Promise<User | null> {
        try {
            const user = await this.userModel.findOne({ email }).exec();
            return user;
        } catch (error) {
            console.error('Erro ao buscar usuário por email:', error);
            throw new InternalServerErrorException();
        }
    }

}