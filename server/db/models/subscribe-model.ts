import { model } from 'mongoose';
import {ISubscribe} from "../types/subscribe";
import SubscribeSchema from "../schema/subscribe-schema";
export const SubscribeModel = model<ISubscribe>('subscribes', SubscribeSchema);
