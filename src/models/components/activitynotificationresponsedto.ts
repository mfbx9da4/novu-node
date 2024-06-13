/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import { ClosedEnum } from "../../types";
import {
    ActivityNotificationJobResponseDto,
    ActivityNotificationJobResponseDto$,
} from "./activitynotificationjobresponsedto";
import {
    ActivityNotificationSubscriberResponseDto,
    ActivityNotificationSubscriberResponseDto$,
} from "./activitynotificationsubscriberresponsedto";
import {
    ActivityNotificationTemplateResponseDto,
    ActivityNotificationTemplateResponseDto$,
} from "./activitynotificationtemplateresponsedto";
import * as z from "zod";

export const Channels = {
    InApp: "in_app",
    Email: "email",
    Sms: "sms",
    Chat: "chat",
    Push: "push",
    Digest: "digest",
    Trigger: "trigger",
    Delay: "delay",
    Custom: "custom",
} as const;
export type Channels = ClosedEnum<typeof Channels>;

export type ActivityNotificationResponseDto = {
    id?: string | undefined;
    environmentId: string;
    organizationId: string;
    transactionId: string;
    createdAt?: string | undefined;
    channels?: Channels | undefined;
    subscriber?: ActivityNotificationSubscriberResponseDto | undefined;
    template?: ActivityNotificationTemplateResponseDto | undefined;
    jobs?: Array<ActivityNotificationJobResponseDto> | undefined;
};

/** @internal */
export namespace Channels$ {
    export const inboundSchema = z.nativeEnum(Channels);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ActivityNotificationResponseDto$ {
    export const inboundSchema: z.ZodType<ActivityNotificationResponseDto, z.ZodTypeDef, unknown> =
        z
            .object({
                _id: z.string().optional(),
                _environmentId: z.string(),
                _organizationId: z.string(),
                transactionId: z.string(),
                createdAt: z.string().optional(),
                channels: Channels$.inboundSchema.optional(),
                subscriber: ActivityNotificationSubscriberResponseDto$.inboundSchema.optional(),
                template: ActivityNotificationTemplateResponseDto$.inboundSchema.optional(),
                jobs: z.array(ActivityNotificationJobResponseDto$.inboundSchema).optional(),
            })
            .transform((v) => {
                return remap$(v, {
                    _id: "id",
                    _environmentId: "environmentId",
                    _organizationId: "organizationId",
                });
            });

    export type Outbound = {
        _id?: string | undefined;
        _environmentId: string;
        _organizationId: string;
        transactionId: string;
        createdAt?: string | undefined;
        channels?: string | undefined;
        subscriber?: ActivityNotificationSubscriberResponseDto$.Outbound | undefined;
        template?: ActivityNotificationTemplateResponseDto$.Outbound | undefined;
        jobs?: Array<ActivityNotificationJobResponseDto$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ActivityNotificationResponseDto
    > = z
        .object({
            id: z.string().optional(),
            environmentId: z.string(),
            organizationId: z.string(),
            transactionId: z.string(),
            createdAt: z.string().optional(),
            channels: Channels$.outboundSchema.optional(),
            subscriber: ActivityNotificationSubscriberResponseDto$.outboundSchema.optional(),
            template: ActivityNotificationTemplateResponseDto$.outboundSchema.optional(),
            jobs: z.array(ActivityNotificationJobResponseDto$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                id: "_id",
                environmentId: "_environmentId",
                organizationId: "_organizationId",
            });
        });
}