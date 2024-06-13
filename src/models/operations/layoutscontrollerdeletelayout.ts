/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type LayoutsControllerDeleteLayoutRequest = {
    layoutId: string;
};

/** @internal */
export namespace LayoutsControllerDeleteLayoutRequest$ {
    export const inboundSchema: z.ZodType<
        LayoutsControllerDeleteLayoutRequest,
        z.ZodTypeDef,
        unknown
    > = z.object({
        layoutId: z.string(),
    });

    export type Outbound = {
        layoutId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        LayoutsControllerDeleteLayoutRequest
    > = z.object({
        layoutId: z.string(),
    });
}
