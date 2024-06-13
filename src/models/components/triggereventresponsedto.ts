/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import * as z from "zod";

/**
 * Status for trigger
 */
export const TriggerEventResponseDtoStatus = {
    Error: "error",
    TriggerNotActive: "trigger_not_active",
    NoWorkflowActiveStepsDefined: "no_workflow_active_steps_defined",
    NoWorkflowStepsDefined: "no_workflow_steps_defined",
    Processed: "processed",
    SubscriberIdMissing: "subscriber_id_missing",
    NoTenantFound: "no_tenant_found",
} as const;
/**
 * Status for trigger
 */
export type TriggerEventResponseDtoStatus = ClosedEnum<typeof TriggerEventResponseDtoStatus>;

export type TriggerEventResponseDto = {
    /**
     * If trigger was acknowledged or not
     */
    acknowledged: boolean;
    /**
     * Status for trigger
     */
    status: TriggerEventResponseDtoStatus;
    /**
     * In case of an error, this field will contain the error message
     */
    error?: Array<string> | undefined;
    /**
     * Transaction id for trigger
     */
    transactionId?: string | undefined;
};

/** @internal */
export namespace TriggerEventResponseDtoStatus$ {
    export const inboundSchema = z.nativeEnum(TriggerEventResponseDtoStatus);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace TriggerEventResponseDto$ {
    export const inboundSchema: z.ZodType<TriggerEventResponseDto, z.ZodTypeDef, unknown> =
        z.object({
            acknowledged: z.boolean(),
            status: TriggerEventResponseDtoStatus$.inboundSchema,
            error: z.array(z.string()).optional(),
            transactionId: z.string().optional(),
        });

    export type Outbound = {
        acknowledged: boolean;
        status: string;
        error?: Array<string> | undefined;
        transactionId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TriggerEventResponseDto> =
        z.object({
            acknowledged: z.boolean(),
            status: TriggerEventResponseDtoStatus$.outboundSchema,
            error: z.array(z.string()).optional(),
            transactionId: z.string().optional(),
        });
}