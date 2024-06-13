/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type SubscribersControllerMarkActionAsSeenRequest = {
    messageId: string;
    type: string;
    subscriberId: string;
    markMessageActionAsSeenDto: components.MarkMessageActionAsSeenDto;
};

/** @internal */
export namespace SubscribersControllerMarkActionAsSeenRequest$ {
    export const inboundSchema: z.ZodType<
        SubscribersControllerMarkActionAsSeenRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            messageId: z.string(),
            type: z.string(),
            subscriberId: z.string(),
            MarkMessageActionAsSeenDto: components.MarkMessageActionAsSeenDto$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                MarkMessageActionAsSeenDto: "markMessageActionAsSeenDto",
            });
        });

    export type Outbound = {
        messageId: string;
        type: string;
        subscriberId: string;
        MarkMessageActionAsSeenDto: components.MarkMessageActionAsSeenDto$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SubscribersControllerMarkActionAsSeenRequest
    > = z
        .object({
            messageId: z.string(),
            type: z.string(),
            subscriberId: z.string(),
            markMessageActionAsSeenDto: components.MarkMessageActionAsSeenDto$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                markMessageActionAsSeenDto: "MarkMessageActionAsSeenDto",
            });
        });
}