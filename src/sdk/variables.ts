/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import { SecurityInput } from "../lib/security";
import * as components from "../models/components";
import * as operations from "../models/operations";

export class Variables extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Get available variables
     *
     * @remarks
     * Get the variables that can be used in the workflow
     */
    async retrieve(
        security: operations.GetWorkflowVariablesSecurity,
        options?: RequestOptions
    ): Promise<components.VariablesResponseDto> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/workflows/variables")();

        const query$ = "";

        const security$: SecurityInput[][] = [
            [
                {
                    fieldName: "Authorization",
                    type: "http:bearer",
                    value: security?.bearer,
                },
            ],
            [
                {
                    fieldName: "Authorization",
                    type: "apiKey:header",
                    value: security?.apiKey,
                },
            ],
        ];
        const securitySettings$ = this.resolveSecurity(...security$);
        const context = {
            operationID: "getWorkflowVariables",
            oAuth2Scopes: [],
            securitySource: security$,
        };

        const doOptions = { context, errorCodes: ["409", "429", "4XX", "503", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<components.VariablesResponseDto>()
            .json(200, components.VariablesResponseDto$)
            .fail([409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }
}