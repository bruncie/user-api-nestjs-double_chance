import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {

    @Prop({required: true})
    name: string;

    @Prop({unique: true, required: true})
    email: string;

    @Prop({required: true})
    password: string;

    @Prop({required: true})
    number: string;

    @Prop({required: false})
    subscriber: boolean;     //Por enquanto sempre será false e nao obrigatorio, ate realmente ser util

    @Prop({required: false})
    createdAt: Date;

    @Prop({required: false})
    updatedAt: Date;

    @Prop({required: false})
    active: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);