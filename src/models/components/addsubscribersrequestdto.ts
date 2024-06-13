/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type AddSubscribersRequestDto = {
    /**
     * List of subscriber identifiers that will be associated to the topic
     */
    subscribers: Array<string>;
};

/** @internal */
export namespace AddSubscribersRequestDto$ {
    export const inboundSchema: z.ZodType<AddSubscribersRequestDto, z.ZodTypeDef, unknown> =
        z.object({
            subscribers: z.array(z.string()),
        });

    export type Outbound = {
        subscribers: Array<string>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddSubscribersRequestDto> =
        z.object({
            subscribers: z.array(z.string()),
        });
}