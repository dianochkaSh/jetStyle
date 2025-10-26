import { SubscribeModel } from "../db/models/subscribe-model";

export const recordEmail = async(email: string) => {
    const subscribe = new SubscribeModel({
        email: email,
        isSent: true
    });
    const record = await subscribe.save();
    return record;
}
