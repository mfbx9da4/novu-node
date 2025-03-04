/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type TemplateResponse = {
    /**
     * Unique identifier of the workflow
     */
    id: string;
    /**
     * Critical templates will always be delivered to the end user and should be hidden from the subscriber preferences screen
     */
    critical: boolean;
    /**
     * Name of the workflow
     */
    name: string;
    /**
     * Triggers are the events that will trigger the workflow.
     */
    triggers: Array<string>;
};

/** @internal */
export namespace TemplateResponse$ {
    export const inboundSchema: z.ZodType<TemplateResponse, z.ZodTypeDef, unknown> = z
        .object({
            _id: z.string(),
            critical: z.boolean(),
            name: z.string(),
            triggers: z.array(z.string()),
        })
        .transform((v) => {
            return remap$(v, {
                _id: "id",
            });
        });

    export type Outbound = {
        _id: string;
        critical: boolean;
        name: string;
        triggers: Array<string>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TemplateResponse> = z
        .object({
            id: z.string(),
            critical: z.boolean(),
            name: z.string(),
            triggers: z.array(z.string()),
        })
        .transform((v) => {
            return remap$(v, {
                id: "_id",
            });
        });
}
