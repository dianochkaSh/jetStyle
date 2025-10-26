import { Request, Response } from 'express';
import {recordEmail} from "../services/subscribe-services";

export async function sentEmail(request: Request, response: Response) {
    const {
        email
    } = request.body;
    const subscribe = recordEmail(email);

    return response.status(200).json({
        message: "Email sent",
    })


}