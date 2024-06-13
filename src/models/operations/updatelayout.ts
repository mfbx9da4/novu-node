/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type UpdateLayoutSecurity = {
    bearer?: string | undefined;
    apiKey?: string | undefined;
};

export type UpdateLayoutRequest = {
    layoutId: string;
    updateLayoutRequestDto: components.UpdateLayoutRequestDto;
};

/** @internal */
export namespace UpdateLayoutSecurity$ {
    export const inboundSchema: z.ZodType<UpdateLayoutSecurity, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateLayoutSecurity> = z
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
export namespace UpdateLayoutRequest$ {
    export const inboundSchema: z.ZodType<UpdateLayoutRequest, z.ZodTypeDef, unknown> = z
        .object({
            layoutId: z.string(),
            UpdateLayoutRequestDto: components.UpdateLayoutRequestDto$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                UpdateLayoutRequestDto: "updateLayoutRequestDto",
            });
        });

    export type Outbound = {
        layoutId: string;
        UpdateLayoutRequestDto: components.UpdateLayoutRequestDto$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateLayoutRequest> = z
        .object({
            layoutId: z.string(),
            updateLayoutRequestDto: components.UpdateLayoutRequestDto$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                updateLayoutRequestDto: "UpdateLayoutRequestDto",
            });
        });
}