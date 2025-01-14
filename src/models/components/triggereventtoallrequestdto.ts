/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SubscriberPayloadDto, SubscriberPayloadDto$ } from "./subscriberpayloaddto";
import { TenantPayloadDto, TenantPayloadDto$ } from "./tenantpayloaddto";
import * as z from "zod";

/**
 * It is used to display the Avatar of the provided actor's subscriber id or actor object.
 *
 * @remarks
 *     If a new actor object is provided, we will create a new subscriber in our system
 *
 */
export type TriggerEventToAllRequestDtoActor = SubscriberPayloadDto | string;

/**
 * This could be used to override provider specific configurations
 */
export type TriggerEventToAllRequestDtoOverrides = {};

/**
 * The payload object is used to pass additional custom information that could be used to render the template, or perform routing rules based on it.
 *
 * @remarks
 *       This data will also be available when fetching the notifications feed from the API to display certain parts of the UI.
 */
export type TriggerEventToAllRequestDtoPayload = {};

/**
 * It is used to specify a tenant context during trigger event.
 *
 * @remarks
 *     If a new tenant object is provided, we will create a new tenant.
 *
 */
export type TriggerEventToAllRequestDtoTenant = TenantPayloadDto | string;

export type TriggerEventToAllRequestDto = {
    /**
     * It is used to display the Avatar of the provided actor's subscriber id or actor object.
     *
     * @remarks
     *     If a new actor object is provided, we will create a new subscriber in our system
     *
     */
    actor?: SubscriberPayloadDto | string | undefined;
    /**
     * The trigger identifier associated for the template you wish to send. This identifier can be found on the template page.
     */
    name: string;
    /**
     * This could be used to override provider specific configurations
     */
    overrides?: TriggerEventToAllRequestDtoOverrides | undefined;
    /**
     * The payload object is used to pass additional custom information that could be used to render the template, or perform routing rules based on it.
     *
     * @remarks
     *       This data will also be available when fetching the notifications feed from the API to display certain parts of the UI.
     */
    payload: TriggerEventToAllRequestDtoPayload;
    /**
     * It is used to specify a tenant context during trigger event.
     *
     * @remarks
     *     If a new tenant object is provided, we will create a new tenant.
     *
     */
    tenant?: TenantPayloadDto | string | undefined;
    /**
     * A unique identifier for this transaction, we will generated a UUID if not provided.
     */
    transactionId?: string | undefined;
};

/** @internal */
export namespace TriggerEventToAllRequestDtoActor$ {
    export const inboundSchema: z.ZodType<TriggerEventToAllRequestDtoActor, z.ZodTypeDef, unknown> =
        z.union([SubscriberPayloadDto$.inboundSchema, z.string()]);

    export type Outbound = SubscriberPayloadDto$.Outbound | string;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TriggerEventToAllRequestDtoActor
    > = z.union([SubscriberPayloadDto$.outboundSchema, z.string()]);
}

/** @internal */
export namespace TriggerEventToAllRequestDtoOverrides$ {
    export const inboundSchema: z.ZodType<
        TriggerEventToAllRequestDtoOverrides,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TriggerEventToAllRequestDtoOverrides
    > = z.object({});
}

/** @internal */
export namespace TriggerEventToAllRequestDtoPayload$ {
    export const inboundSchema: z.ZodType<
        TriggerEventToAllRequestDtoPayload,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TriggerEventToAllRequestDtoPayload
    > = z.object({});
}

/** @internal */
export namespace TriggerEventToAllRequestDtoTenant$ {
    export const inboundSchema: z.ZodType<
        TriggerEventToAllRequestDtoTenant,
        z.ZodTypeDef,
        unknown
    > = z.union([TenantPayloadDto$.inboundSchema, z.string()]);

    export type Outbound = TenantPayloadDto$.Outbound | string;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TriggerEventToAllRequestDtoTenant
    > = z.union([TenantPayloadDto$.outboundSchema, z.string()]);
}

/** @internal */
export namespace TriggerEventToAllRequestDto$ {
    export const inboundSchema: z.ZodType<TriggerEventToAllRequestDto, z.ZodTypeDef, unknown> =
        z.object({
            actor: z.union([SubscriberPayloadDto$.inboundSchema, z.string()]).optional(),
            name: z.string(),
            overrides: z.lazy(() => TriggerEventToAllRequestDtoOverrides$.inboundSchema).optional(),
            payload: z.lazy(() => TriggerEventToAllRequestDtoPayload$.inboundSchema),
            tenant: z.union([TenantPayloadDto$.inboundSchema, z.string()]).optional(),
            transactionId: z.string().optional(),
        });

    export type Outbound = {
        actor?: SubscriberPayloadDto$.Outbound | string | undefined;
        name: string;
        overrides?: TriggerEventToAllRequestDtoOverrides$.Outbound | undefined;
        payload: TriggerEventToAllRequestDtoPayload$.Outbound;
        tenant?: TenantPayloadDto$.Outbound | string | undefined;
        transactionId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TriggerEventToAllRequestDto> =
        z.object({
            actor: z.union([SubscriberPayloadDto$.outboundSchema, z.string()]).optional(),
            name: z.string(),
            overrides: z
                .lazy(() => TriggerEventToAllRequestDtoOverrides$.outboundSchema)
                .optional(),
            payload: z.lazy(() => TriggerEventToAllRequestDtoPayload$.outboundSchema),
            tenant: z.union([TenantPayloadDto$.outboundSchema, z.string()]).optional(),
            transactionId: z.string().optional(),
        });
}
