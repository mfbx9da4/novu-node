/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import { MessageTemplateDto, MessageTemplateDto$ } from "./messagetemplatedto";
import { StepFilter, StepFilter$ } from "./stepfilter";
import * as z from "zod";

export type ActivityNotificationStepResponseDto = {
    id: string;
    active: boolean;
    filters: StepFilter;
    template?: MessageTemplateDto | undefined;
};

/** @internal */
export namespace ActivityNotificationStepResponseDto$ {
    export const inboundSchema: z.ZodType<
        ActivityNotificationStepResponseDto,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            _id: z.string(),
            active: z.boolean(),
            filters: StepFilter$.inboundSchema,
            template: MessageTemplateDto$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                _id: "id",
            });
        });

    export type Outbound = {
        _id: string;
        active: boolean;
        filters: StepFilter$.Outbound;
        template?: MessageTemplateDto$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ActivityNotificationStepResponseDto
    > = z
        .object({
            id: z.string(),
            active: z.boolean(),
            filters: StepFilter$.outboundSchema,
            template: MessageTemplateDto$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                id: "_id",
            });
        });
}
