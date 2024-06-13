/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type PreferenceChannels = {
    email?: boolean | undefined;
    sms?: boolean | undefined;
    inApp?: boolean | undefined;
    chat?: boolean | undefined;
    push?: boolean | undefined;
};

/** @internal */
export namespace PreferenceChannels$ {
    export const inboundSchema: z.ZodType<PreferenceChannels, z.ZodTypeDef, unknown> = z
        .object({
            email: z.boolean().optional(),
            sms: z.boolean().optional(),
            in_app: z.boolean().optional(),
            chat: z.boolean().optional(),
            push: z.boolean().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                in_app: "inApp",
            });
        });

    export type Outbound = {
        email?: boolean | undefined;
        sms?: boolean | undefined;
        in_app?: boolean | undefined;
        chat?: boolean | undefined;
        push?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PreferenceChannels> = z
        .object({
            email: z.boolean().optional(),
            sms: z.boolean().optional(),
            inApp: z.boolean().optional(),
            chat: z.boolean().optional(),
            push: z.boolean().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                inApp: "in_app",
            });
        });
}