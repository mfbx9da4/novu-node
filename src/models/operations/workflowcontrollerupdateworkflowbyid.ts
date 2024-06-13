/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type WorkflowControllerUpdateWorkflowByIdRequest = {
    workflowId: string;
    updateWorkflowRequestDto: components.UpdateWorkflowRequestDto;
};

/** @internal */
export namespace WorkflowControllerUpdateWorkflowByIdRequest$ {
    export const inboundSchema: z.ZodType<
        WorkflowControllerUpdateWorkflowByIdRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            workflowId: z.string(),
            UpdateWorkflowRequestDto: components.UpdateWorkflowRequestDto$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                UpdateWorkflowRequestDto: "updateWorkflowRequestDto",
            });
        });

    export type Outbound = {
        workflowId: string;
        UpdateWorkflowRequestDto: components.UpdateWorkflowRequestDto$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        WorkflowControllerUpdateWorkflowByIdRequest
    > = z
        .object({
            workflowId: z.string(),
            updateWorkflowRequestDto: components.UpdateWorkflowRequestDto$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                updateWorkflowRequestDto: "UpdateWorkflowRequestDto",
            });
        });
}