/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type TopicDto = {
    environmentId: string;
    id?: string | undefined;
    organizationId: string;
    key: string;
    name: string;
    subscribers: Array<string>;
};

/** @internal */
export namespace TopicDto$ {
    export const inboundSchema: z.ZodType<TopicDto, z.ZodTypeDef, unknown> = z
        .object({
            _environmentId: z.string(),
            _id: z.string().optional(),
            _organizationId: z.string(),
            key: z.string(),
            name: z.string(),
            subscribers: z.array(z.string()),
        })
        .transform((v) => {
            return remap$(v, {
                _environmentId: "environmentId",
                _id: "id",
                _organizationId: "organizationId",
            });
        });

    export type Outbound = {
        _environmentId: string;
        _id?: string | undefined;
        _organizationId: string;
        key: string;
        name: string;
        subscribers: Array<string>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TopicDto> = z
        .object({
            environmentId: z.string(),
            id: z.string().optional(),
            organizationId: z.string(),
            key: z.string(),
            name: z.string(),
            subscribers: z.array(z.string()),
        })
        .transform((v) => {
            return remap$(v, {
                environmentId: "_environmentId",
                id: "_id",
                organizationId: "_organizationId",
            });
        });
}
