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

export const ActivityNotificationResponseDtoChannels = {
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
export type ActivityNotificationResponseDtoChannels = ClosedEnum<
    typeof ActivityNotificationResponseDtoChannels
>;

export type ActivityNotificationResponseDto = {
    environmentId: string;
    id?: string | undefined;
    organizationId: string;
    channels?: ActivityNotificationResponseDtoChannels | undefined;
    createdAt?: string | undefined;
    jobs?: Array<ActivityNotificationJobResponseDto> | undefined;
    subscriber?: ActivityNotificationSubscriberResponseDto | undefined;
    template?: ActivityNotificationTemplateResponseDto | undefined;
    transactionId: string;
};

/** @internal */
export namespace ActivityNotificationResponseDtoChannels$ {
    export const inboundSchema = z.nativeEnum(ActivityNotificationResponseDtoChannels);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ActivityNotificationResponseDto$ {
    export const inboundSchema: z.ZodType<ActivityNotificationResponseDto, z.ZodTypeDef, unknown> =
        z
            .object({
                _environmentId: z.string(),
                _id: z.string().optional(),
                _organizationId: z.string(),
                channels: ActivityNotificationResponseDtoChannels$.inboundSchema.optional(),
                createdAt: z.string().optional(),
                jobs: z.array(ActivityNotificationJobResponseDto$.inboundSchema).optional(),
                subscriber: ActivityNotificationSubscriberResponseDto$.inboundSchema.optional(),
                template: ActivityNotificationTemplateResponseDto$.inboundSchema.optional(),
                transactionId: z.string(),
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
        channels?: string | undefined;
        createdAt?: string | undefined;
        jobs?: Array<ActivityNotificationJobResponseDto$.Outbound> | undefined;
        subscriber?: ActivityNotificationSubscriberResponseDto$.Outbound | undefined;
        template?: ActivityNotificationTemplateResponseDto$.Outbound | undefined;
        transactionId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ActivityNotificationResponseDto
    > = z
        .object({
            environmentId: z.string(),
            id: z.string().optional(),
            organizationId: z.string(),
            channels: ActivityNotificationResponseDtoChannels$.outboundSchema.optional(),
            createdAt: z.string().optional(),
            jobs: z.array(ActivityNotificationJobResponseDto$.outboundSchema).optional(),
            subscriber: ActivityNotificationSubscriberResponseDto$.outboundSchema.optional(),
            template: ActivityNotificationTemplateResponseDto$.outboundSchema.optional(),
            transactionId: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                environmentId: "_environmentId",
                id: "_id",
                organizationId: "_organizationId",
            });
        });
}
