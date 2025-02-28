import { Module } from '@nestjs/common';

// Controllers

// Services

//Modules
import { UserModule } from './users/user.module';

// DB
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/double-chance-db'),
    UserModule
  ],
})
export class AppModule {}
