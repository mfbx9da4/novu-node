/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type GetNotificationsFeedSecurity = {
    bearer?: string | undefined;
    apiKey?: string | undefined;
};

export type GetNotificationsFeedRequest = {
    subscriberId: string;
    page?: number | undefined;
    limit?: number | undefined;
    read?: boolean | undefined;
    seen?: boolean | undefined;
    /**
     * Base64 encoded string of the partial payload JSON object
     */
    payload?: string | undefined;
};

export type GetNotificationsFeedResponseBody = {
    /**
     * The current page of the paginated response
     */
    page: number;
    /**
     * Does the list have more items to fetch
     */
    hasMore: boolean;
    /**
     * Number of items on each page
     */
    pageSize: number;
    data: Array<components.FeedResponseDto>;
};

/** @internal */
export namespace GetNotificationsFeedSecurity$ {
    export const inboundSchema: z.ZodType<GetNotificationsFeedSecurity, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetNotificationsFeedSecurity> = z
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
export namespace GetNotificationsFeedRequest$ {
    export const inboundSchema: z.ZodType<GetNotificationsFeedRequest, z.ZodTypeDef, unknown> =
        z.object({
            subscriberId: z.string(),
            page: z.number().optional(),
            limit: z.number().default(10),
            read: z.boolean().optional(),
            seen: z.boolean().optional(),
            payload: z.string().optional(),
        });

    export type Outbound = {
        subscriberId: string;
        page?: number | undefined;
        limit: number;
        read?: boolean | undefined;
        seen?: boolean | undefined;
        payload?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetNotificationsFeedRequest> =
        z.object({
            subscriberId: z.string(),
            page: z.number().optional(),
            limit: z.number().default(10),
            read: z.boolean().optional(),
            seen: z.boolean().optional(),
            payload: z.string().optional(),
        });
}

/** @internal */
export namespace GetNotificationsFeedResponseBody$ {
    export const inboundSchema: z.ZodType<GetNotificationsFeedResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            page: z.number(),
            hasMore: z.boolean(),
            pageSize: z.number(),
            data: z.array(components.FeedResponseDto$.inboundSchema),
        });

    export type Outbound = {
        page: number;
        hasMore: boolean;
        pageSize: number;
        data: Array<components.FeedResponseDto$.Outbound>;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetNotificationsFeedResponseBody
    > = z.object({
        page: z.number(),
        hasMore: z.boolean(),
        pageSize: z.number(),
        data: z.array(components.FeedResponseDto$.outboundSchema),
    });
}