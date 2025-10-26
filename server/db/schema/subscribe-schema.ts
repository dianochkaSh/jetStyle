
import {Schema} from 'mongoose';
import {ISubscribe} from "../types/subscribe";

const SubscribeSchema = new Schema<ISubscribe>({
    email: {
        type: String,
        min: 7,
        max: 30,
        trim: true,
    },
    dateCreate: {
        type: String,
        trim: true,
    },
    isSent: {
        type: Boolean,
        default: false
    }
});

export default SubscribeSchema;
