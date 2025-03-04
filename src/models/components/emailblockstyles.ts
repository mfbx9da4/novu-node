/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import * as z from "zod";

export const TextAlign = {
    Left: "left",
    Right: "right",
    Center: "center",
} as const;
export type TextAlign = ClosedEnum<typeof TextAlign>;

export type EmailBlockStyles = {
    textAlign?: TextAlign | undefined;
};

/** @internal */
export namespace TextAlign$ {
    export const inboundSchema = z.nativeEnum(TextAlign);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace EmailBlockStyles$ {
    export const inboundSchema: z.ZodType<EmailBlockStyles, z.ZodTypeDef, unknown> = z.object({
        textAlign: TextAlign$.inboundSchema.optional(),
    });

    export type Outbound = {
        textAlign?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EmailBlockStyles> = z.object({
        textAlign: TextAlign$.outboundSchema.optional(),
    });
}
