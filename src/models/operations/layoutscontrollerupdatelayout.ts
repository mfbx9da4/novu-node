/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type LayoutsControllerUpdateLayoutRequest = {
    layoutId: string;
    updateLayoutRequestDto: components.UpdateLayoutRequestDto;
};

/** @internal */
export namespace LayoutsControllerUpdateLayoutRequest$ {
    export const inboundSchema: z.ZodType<
        LayoutsControllerUpdateLayoutRequest,
        z.ZodTypeDef,
        unknown
    > = z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        LayoutsControllerUpdateLayoutRequest
    > = z
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
