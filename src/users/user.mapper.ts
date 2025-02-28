import { User } from './user.schema';
import { UserDto } from './user.dto';

export class UserMapper {

    static dtoToEntity(dto: UserDto, create: boolean): User {
        const entity = new User();
        entity.name = dto.name;
        entity.email = dto.email;
        entity.password = dto.password;
        entity.number =  dto.number;
        entity.active = true;
        //entity.subscriber = false;  //TODO: Lembrar que por enquanto está false mas depois terá regra de verificação

        if(create) {
            entity.createdAt = new Date()
        } else {
            entity.updatedAt = new Date()
        }

        return entity;
    }
}