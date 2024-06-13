/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type GetExecutionDetailsForNotificationSecurity = {
    bearer?: string | undefined;
    apiKey?: string | undefined;
};

export type GetExecutionDetailsForNotificationRequest = {
    notificationId: string;
    subscriberId: string;
};

/** @internal */
export namespace GetExecutionDetailsForNotificationSecurity$ {
    export const inboundSchema: z.ZodType<
        GetExecutionDetailsForNotificationSecurity,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            bearer: z.string().optional(),
            "api-key": z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                "api-key": "apiKey",
            });
        });

    export type Outbound = {
        bearer?: string | undefined;
        "api-key"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetExecutionDetailsForNotificationSecurity
    > = z
        .object({
            bearer: z.string().optional(),
            apiKey: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                apiKey: "api-key",
            });
        });
}

/** @internal */
export namespace GetExecutionDetailsForNotificationRequest$ {
    export const inboundSchema: z.ZodType<
        GetExecutionDetailsForNotificationRequest,
        z.ZodTypeDef,
        unknown
    > = z.object({
        notificationId: z.string(),
        subscriberId: z.string(),
    });

    export type Outbound = {
        notificationId: string;
        subscriberId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetExecutionDetailsForNotificationRequest
    > = z.object({
        notificationId: z.string(),
        subscriberId: z.string(),
    });
}