/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type TenantControllerListTenantsRequest = {
    page?: number | undefined;
    limit?: number | undefined;
};

export type TenantControllerListTenantsResponseBody = {
    data: Array<components.GetTenantResponseDto>;
    /**
     * Does the list have more items to fetch
     */
    hasMore: boolean;
    /**
     * The current page of the paginated response
     */
    page: number;
    /**
     * Number of items on each page
     */
    pageSize: number;
};

export type TenantControllerListTenantsResponse = {
    result: TenantControllerListTenantsResponseBody;
};

/** @internal */
export namespace TenantControllerListTenantsRequest$ {
    export const inboundSchema: z.ZodType<
        TenantControllerListTenantsRequest,
        z.ZodTypeDef,
        unknown
    > = z.object({
        page: z.number().optional(),
        limit: z.number().default(10),
    });

    export type Outbound = {
        page?: number | undefined;
        limit: number;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TenantControllerListTenantsRequest
    > = z.object({
        page: z.number().optional(),
        limit: z.number().default(10),
    });
}

/** @internal */
export namespace TenantControllerListTenantsResponseBody$ {
    export const inboundSchema: z.ZodType<
        TenantControllerListTenantsResponseBody,
        z.ZodTypeDef,
        unknown
    > = z.object({
        data: z.array(components.GetTenantResponseDto$.inboundSchema),
        hasMore: z.boolean(),
        page: z.number(),
        pageSize: z.number(),
    });

    export type Outbound = {
        data: Array<components.GetTenantResponseDto$.Outbound>;
        hasMore: boolean;
        page: number;
        pageSize: number;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TenantControllerListTenantsResponseBody
    > = z.object({
        data: z.array(components.GetTenantResponseDto$.outboundSchema),
        hasMore: z.boolean(),
        page: z.number(),
        pageSize: z.number(),
    });
}

/** @internal */
export namespace TenantControllerListTenantsResponse$ {
    export const inboundSchema: z.ZodType<
        TenantControllerListTenantsResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            Result: z.lazy(() => TenantControllerListTenantsResponseBody$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                Result: "result",
            });
        });

    export type Outbound = {
        Result: TenantControllerListTenantsResponseBody$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TenantControllerListTenantsResponse
    > = z
        .object({
            result: z.lazy(() => TenantControllerListTenantsResponseBody$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                result: "Result",
            });
        });
}
