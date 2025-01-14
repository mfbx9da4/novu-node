/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type SubscribersControllerUpdateSubscriberOnlineFlagRequest = {
    subscriberId: string;
    updateSubscriberOnlineFlagRequestDto: components.UpdateSubscriberOnlineFlagRequestDto;
};

/** @internal */
export namespace SubscribersControllerUpdateSubscriberOnlineFlagRequest$ {
    export const inboundSchema: z.ZodType<
        SubscribersControllerUpdateSubscriberOnlineFlagRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            subscriberId: z.string(),
            UpdateSubscriberOnlineFlagRequestDto:
                components.UpdateSubscriberOnlineFlagRequestDto$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                UpdateSubscriberOnlineFlagRequestDto: "updateSubscriberOnlineFlagRequestDto",
            });
        });

    export type Outbound = {
        subscriberId: string;
        UpdateSubscriberOnlineFlagRequestDto: components.UpdateSubscriberOnlineFlagRequestDto$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SubscribersControllerUpdateSubscriberOnlineFlagRequest
    > = z
        .object({
            subscriberId: z.string(),
            updateSubscriberOnlineFlagRequestDto:
                components.UpdateSubscriberOnlineFlagRequestDto$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                updateSubscriberOnlineFlagRequestDto: "UpdateSubscriberOnlineFlagRequestDto",
            });
        });
}
