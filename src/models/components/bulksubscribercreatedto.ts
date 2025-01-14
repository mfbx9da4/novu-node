/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    CreateSubscriberRequestDto,
    CreateSubscriberRequestDto$,
} from "./createsubscriberrequestdto";
import * as z from "zod";

export type BulkSubscriberCreateDto = {
    subscribers: Array<CreateSubscriberRequestDto>;
};

/** @internal */
export namespace BulkSubscriberCreateDto$ {
    export const inboundSchema: z.ZodType<BulkSubscriberCreateDto, z.ZodTypeDef, unknown> =
        z.object({
            subscribers: z.array(CreateSubscriberRequestDto$.inboundSchema),
        });

    export type Outbound = {
        subscribers: Array<CreateSubscriberRequestDto$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BulkSubscriberCreateDto> =
        z.object({
            subscribers: z.array(CreateSubscriberRequestDto$.outboundSchema),
        });
}
