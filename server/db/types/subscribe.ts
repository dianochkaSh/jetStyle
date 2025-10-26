import { Document } from 'mongoose';

export interface ISubscribe extends Document {
    email: string,
    dateCreate: string,
    isSent: boolean,
}