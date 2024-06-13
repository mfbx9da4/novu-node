/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Security = {
    bearer?: string | undefined;
};

/** @internal */
export namespace Security$ {
    export const inboundSchema: z.ZodType<Security, z.ZodTypeDef, unknown> = z.object({
        bearer: z.string().optional(),
    });

    export type Outbound = {
        bearer?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Security> = z.object({
        bearer: z.string().optional(),
    });
}