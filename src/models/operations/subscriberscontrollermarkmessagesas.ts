/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type SubscribersControllerMarkMessagesAsRequest = {
    subscriberId: string;
    messageMarkAsRequestDto: components.MessageMarkAsRequestDto;
};

/** @internal */
export namespace SubscribersControllerMarkMessagesAsRequest$ {
    export const inboundSchema: z.ZodType<
        SubscribersControllerMarkMessagesAsRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            subscriberId: z.string(),
            MessageMarkAsRequestDto: components.MessageMarkAsRequestDto$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                MessageMarkAsRequestDto: "messageMarkAsRequestDto",
            });
        });

    export type Outbound = {
        subscriberId: string;
        MessageMarkAsRequestDto: components.MessageMarkAsRequestDto$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SubscribersControllerMarkMessagesAsRequest
    > = z
        .object({
            subscriberId: z.string(),
            messageMarkAsRequestDto: components.MessageMarkAsRequestDto$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                messageMarkAsRequestDto: "MessageMarkAsRequestDto",
            });
        });
}
