/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type IntegrationsControllerRemoveIntegrationRequest = {
    integrationId: string;
};

/** @internal */
export namespace IntegrationsControllerRemoveIntegrationRequest$ {
    export const inboundSchema: z.ZodType<
        IntegrationsControllerRemoveIntegrationRequest,
        z.ZodTypeDef,
        unknown
    > = z.object({
        integrationId: z.string(),
    });

    export type Outbound = {
        integrationId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        IntegrationsControllerRemoveIntegrationRequest
    > = z.object({
        integrationId: z.string(),
    });
}
