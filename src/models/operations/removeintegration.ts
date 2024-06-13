/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type RemoveIntegrationSecurity = {
    bearer?: string | undefined;
    apiKey?: string | undefined;
};

export type RemoveIntegrationRequest = {
    integrationId: string;
};

/** @internal */
export namespace RemoveIntegrationSecurity$ {
    export const inboundSchema: z.ZodType<RemoveIntegrationSecurity, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RemoveIntegrationSecurity> = z
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
export namespace RemoveIntegrationRequest$ {
    export const inboundSchema: z.ZodType<RemoveIntegrationRequest, z.ZodTypeDef, unknown> =
        z.object({
            integrationId: z.string(),
        });

    export type Outbound = {
        integrationId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RemoveIntegrationRequest> =
        z.object({
            integrationId: z.string(),
        });
}