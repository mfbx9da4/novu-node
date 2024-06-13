/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type SubscribersControllerModifySubscriberChannelRequest = {
    subscriberId: string;
    updateSubscriberChannelRequestDto: components.UpdateSubscriberChannelRequestDto;
};

/** @internal */
export namespace SubscribersControllerModifySubscriberChannelRequest$ {
    export const inboundSchema: z.ZodType<
        SubscribersControllerModifySubscriberChannelRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            subscriberId: z.string(),
            UpdateSubscriberChannelRequestDto:
                components.UpdateSubscriberChannelRequestDto$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                UpdateSubscriberChannelRequestDto: "updateSubscriberChannelRequestDto",
            });
        });

    export type Outbound = {
        subscriberId: string;
        UpdateSubscriberChannelRequestDto: components.UpdateSubscriberChannelRequestDto$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SubscribersControllerModifySubscriberChannelRequest
    > = z
        .object({
            subscriberId: z.string(),
            updateSubscriberChannelRequestDto:
                components.UpdateSubscriberChannelRequestDto$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                updateSubscriberChannelRequestDto: "UpdateSubscriberChannelRequestDto",
            });
        });
}
