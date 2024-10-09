import { handleMessage } from "../lib/telegram";
import type { Request } from "express";

export async function handler(req: Request, method: string) {
    const { body } = req;
    if (body) {
        const messageObj = body.message || body.edited_message;
        await handleMessage(messageObj)
    }
    return;
}
