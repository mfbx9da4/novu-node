/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import { NotificationTrigger, NotificationTrigger$ } from "./notificationtrigger";
import * as z from "zod";

export type ActivityNotificationTemplateResponseDto = {
    id?: string | undefined;
    name: string;
    triggers: Array<NotificationTrigger>;
};

/** @internal */
export namespace ActivityNotificationTemplateResponseDto$ {
    export const inboundSchema: z.ZodType<
        ActivityNotificationTemplateResponseDto,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            _id: z.string().optional(),
            name: z.string(),
            triggers: z.array(NotificationTrigger$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                _id: "id",
            });
        });

    export type Outbound = {
        _id?: string | undefined;
        name: string;
        triggers: Array<NotificationTrigger$.Outbound>;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ActivityNotificationTemplateResponseDto
    > = z
        .object({
            id: z.string().optional(),
            name: z.string(),
            triggers: z.array(NotificationTrigger$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                id: "_id",
            });
        });
}
