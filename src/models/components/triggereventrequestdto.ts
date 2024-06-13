/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SubscriberPayloadDto, SubscriberPayloadDto$ } from "./subscriberpayloaddto";
import { TenantPayloadDto, TenantPayloadDto$ } from "./tenantpayloaddto";
import { TopicPayloadDto, TopicPayloadDto$ } from "./topicpayloaddto";
import * as z from "zod";

/**
 * The payload object is used to pass additional custom information that could be used to render the workflow, or perform routing rules based on it.
 *
 * @remarks
 *       This data will also be available when fetching the notifications feed from the API to display certain parts of the UI.
 */
export type Payload = {};

/**
 * This could be used to override provider specific configurations
 */
export type Overrides = {};

export type To = TopicPayloadDto | SubscriberPayloadDto | string;

/**
 * It is used to display the Avatar of the provided actor's subscriber id or actor object.
 *
 * @remarks
 *     If a new actor object is provided, we will create a new subscriber in our system
 *
 */
export type Actor = SubscriberPayloadDto | string;

/**
 * It is used to specify a tenant context during trigger event.
 *
 * @remarks
 *     Existing tenants will be updated with the provided details.
 *
 */
export type Tenant = TenantPayloadDto | string;

export type TriggerEventRequestDto = {
    /**
     * The trigger identifier of the workflow you wish to send. This identifier can be found on the workflow page.
     */
    name: string;
    /**
     * The payload object is used to pass additional custom information that could be used to render the workflow, or perform routing rules based on it.
     *
     * @remarks
     *       This data will also be available when fetching the notifications feed from the API to display certain parts of the UI.
     */
    payload?: Payload | undefined;
    /**
     * This could be used to override provider specific configurations
     */
    overrides?: Overrides | undefined;
    /**
     * The recipients list of people who will receive the notification.
     */
    to: Array<TopicPayloadDto | SubscriberPayloadDto | string>;
    /**
     * A unique identifier for this transaction, we will generated a UUID if not provided.
     */
    transactionId?: string | undefined;
    /**
     * It is used to display the Avatar of the provided actor's subscriber id or actor object.
     *
     * @remarks
     *     If a new actor object is provided, we will create a new subscriber in our system
     *
     */
    actor?: SubscriberPayloadDto | string | undefined;
    /**
     * It is used to specify a tenant context during trigger event.
     *
     * @remarks
     *     Existing tenants will be updated with the provided details.
     *
     */
    tenant?: TenantPayloadDto | string | undefined;
};

/** @internal */
export namespace Payload$ {
    export const inboundSchema: z.ZodType<Payload, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Payload> = z.object({});
}

/** @internal */
export namespace Overrides$ {
    export const inboundSchema: z.ZodType<Overrides, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Overrides> = z.object({});
}

/** @internal */
export namespace To$ {
    export const inboundSchema: z.ZodType<To, z.ZodTypeDef, unknown> = z.union([
        TopicPayloadDto$.inboundSchema,
        SubscriberPayloadDto$.inboundSchema,
        z.string(),
    ]);

    export type Outbound = TopicPayloadDto$.Outbound | SubscriberPayloadDto$.Outbound | string;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, To> = z.union([
        TopicPayloadDto$.outboundSchema,
        SubscriberPayloadDto$.outboundSchema,
        z.string(),
    ]);
}

/** @internal */
export namespace Actor$ {
    export const inboundSchema: z.ZodType<Actor, z.ZodTypeDef, unknown> = z.union([
        SubscriberPayloadDto$.inboundSchema,
        z.string(),
    ]);

    export type Outbound = SubscriberPayloadDto$.Outbound | string;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Actor> = z.union([
        SubscriberPayloadDto$.outboundSchema,
        z.string(),
    ]);
}

/** @internal */
export namespace Tenant$ {
    export const inboundSchema: z.ZodType<Tenant, z.ZodTypeDef, unknown> = z.union([
        TenantPayloadDto$.inboundSchema,
        z.string(),
    ]);

    export type Outbound = TenantPayloadDto$.Outbound | string;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Tenant> = z.union([
        TenantPayloadDto$.outboundSchema,
        z.string(),
    ]);
}

/** @internal */
export namespace TriggerEventRequestDto$ {
    export const inboundSchema: z.ZodType<TriggerEventRequestDto, z.ZodTypeDef, unknown> = z.object(
        {
            name: z.string(),
            payload: z.lazy(() => Payload$.inboundSchema).optional(),
            overrides: z.lazy(() => Overrides$.inboundSchema).optional(),
            to: z.array(
                z.union([
                    TopicPayloadDto$.inboundSchema,
                    SubscriberPayloadDto$.inboundSchema,
                    z.string(),
                ])
            ),
            transactionId: z.string().optional(),
            actor: z.union([SubscriberPayloadDto$.inboundSchema, z.string()]).optional(),
            tenant: z.union([TenantPayloadDto$.inboundSchema, z.string()]).optional(),
        }
    );

    export type Outbound = {
        name: string;
        payload?: Payload$.Outbound | undefined;
        overrides?: Overrides$.Outbound | undefined;
        to: Array<TopicPayloadDto$.Outbound | SubscriberPayloadDto$.Outbound | string>;
        transactionId?: string | undefined;
        actor?: SubscriberPayloadDto$.Outbound | string | undefined;
        tenant?: TenantPayloadDto$.Outbound | string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TriggerEventRequestDto> =
        z.object({
            name: z.string(),
            payload: z.lazy(() => Payload$.outboundSchema).optional(),
            overrides: z.lazy(() => Overrides$.outboundSchema).optional(),
            to: z.array(
                z.union([
                    TopicPayloadDto$.outboundSchema,
                    SubscriberPayloadDto$.outboundSchema,
                    z.string(),
                ])
            ),
            transactionId: z.string().optional(),
            actor: z.union([SubscriberPayloadDto$.outboundSchema, z.string()]).optional(),
            tenant: z.union([TenantPayloadDto$.outboundSchema, z.string()]).optional(),
        });
}