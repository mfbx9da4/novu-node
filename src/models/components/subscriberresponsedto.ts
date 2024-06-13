/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import { ChannelSettings, ChannelSettings$ } from "./channelsettings";
import * as z from "zod";

export type SubscriberResponseDto = {
    /**
     * The internal id novu generated for your subscriber, this is not the subscriberId matching your query. See `subscriberId` for that
     */
    id?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    avatar?: string | undefined;
    locale?: string | undefined;
    /**
     * The internal identifier you used to create this subscriber, usually correlates to the id the user in your systems
     */
    subscriberId: string;
    /**
     * Channels settings for subscriber
     */
    channels?: Array<ChannelSettings> | undefined;
    isOnline?: boolean | undefined;
    lastOnlineAt?: string | undefined;
    organizationId: string;
    environmentId: string;
    deleted: boolean;
    createdAt: string;
    updatedAt: string;
    v?: number | undefined;
};

/** @internal */
export namespace SubscriberResponseDto$ {
    export const inboundSchema: z.ZodType<SubscriberResponseDto, z.ZodTypeDef, unknown> = z
        .object({
            _id: z.string().optional(),
            firstName: z.string().optional(),
            lastName: z.string().optional(),
            email: z.string().optional(),
            phone: z.string().optional(),
            avatar: z.string().optional(),
            locale: z.string().optional(),
            subscriberId: z.string(),
            channels: z.array(ChannelSettings$.inboundSchema).optional(),
            isOnline: z.boolean().optional(),
            lastOnlineAt: z.string().optional(),
            _organizationId: z.string(),
            _environmentId: z.string(),
            deleted: z.boolean(),
            createdAt: z.string(),
            updatedAt: z.string(),
            __v: z.number().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                _id: "id",
                _organizationId: "organizationId",
                _environmentId: "environmentId",
                __v: "v",
            });
        });

    export type Outbound = {
        _id?: string | undefined;
        firstName?: string | undefined;
        lastName?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        avatar?: string | undefined;
        locale?: string | undefined;
        subscriberId: string;
        channels?: Array<ChannelSettings$.Outbound> | undefined;
        isOnline?: boolean | undefined;
        lastOnlineAt?: string | undefined;
        _organizationId: string;
        _environmentId: string;
        deleted: boolean;
        createdAt: string;
        updatedAt: string;
        __v?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SubscriberResponseDto> = z
        .object({
            id: z.string().optional(),
            firstName: z.string().optional(),
            lastName: z.string().optional(),
            email: z.string().optional(),
            phone: z.string().optional(),
            avatar: z.string().optional(),
            locale: z.string().optional(),
            subscriberId: z.string(),
            channels: z.array(ChannelSettings$.outboundSchema).optional(),
            isOnline: z.boolean().optional(),
            lastOnlineAt: z.string().optional(),
            organizationId: z.string(),
            environmentId: z.string(),
            deleted: z.boolean(),
            createdAt: z.string(),
            updatedAt: z.string(),
            v: z.number().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                id: "_id",
                organizationId: "_organizationId",
                environmentId: "_environmentId",
                v: "__v",
            });
        });
}