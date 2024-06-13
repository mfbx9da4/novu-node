/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type TopicsControllerDeleteTopicRequest = {
    topicKey: string;
};

/** @internal */
export namespace TopicsControllerDeleteTopicRequest$ {
    export const inboundSchema: z.ZodType<
        TopicsControllerDeleteTopicRequest,
        z.ZodTypeDef,
        unknown
    > = z.object({
        topicKey: z.string(),
    });

    export type Outbound = {
        topicKey: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TopicsControllerDeleteTopicRequest
    > = z.object({
        topicKey: z.string(),
    });
}
