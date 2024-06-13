/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type UpdateTenantSecurity = {
    bearer?: string | undefined;
    apiKey?: string | undefined;
};

export type UpdateTenantRequest = {
    identifier: string;
    updateTenantRequestDto: components.UpdateTenantRequestDto;
};

/** @internal */
export namespace UpdateTenantSecurity$ {
    export const inboundSchema: z.ZodType<UpdateTenantSecurity, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateTenantSecurity> = z
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
export namespace UpdateTenantRequest$ {
    export const inboundSchema: z.ZodType<UpdateTenantRequest, z.ZodTypeDef, unknown> = z
        .object({
            identifier: z.string(),
            UpdateTenantRequestDto: components.UpdateTenantRequestDto$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                UpdateTenantRequestDto: "updateTenantRequestDto",
            });
        });

    export type Outbound = {
        identifier: string;
        UpdateTenantRequestDto: components.UpdateTenantRequestDto$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateTenantRequest> = z
        .object({
            identifier: z.string(),
            updateTenantRequestDto: components.UpdateTenantRequestDto$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                updateTenantRequestDto: "UpdateTenantRequestDto",
            });
        });
}