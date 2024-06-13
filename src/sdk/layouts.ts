/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as components from "../models/components";
import * as operations from "../models/operations";
import * as z from "zod";

export class Layouts extends ClientSDK {
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
     * Filter layouts
     *
     * @remarks
     * Returns a list of layouts that can be paginated using the `page` query parameter and filtered by the environment where it is executed from the organization the user belongs to.
     */
    async layoutsControllerFilterLayouts(
        request: operations.LayoutsControllerFilterLayoutsRequest,
        options?: RequestOptions
    ): Promise<void> {
        const input$ = typeof request === "undefined" ? {} : request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "*/*");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.LayoutsControllerFilterLayoutsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/layouts")();

        const query$ = encodeFormQuery$({
            page: payload$.page,
            pageSize: payload$.pageSize,
            sortBy: payload$.sortBy,
            orderBy: payload$.orderBy,
        });

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "LayoutsController_filterLayouts",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "409", "429", "4XX", "503", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<void>()
            .void(200, z.void())
            .fail([400, 409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Layout creation
     *
     * @remarks
     * Create a layout
     */
    async layoutsControllerPropertyDescriptor(
        options?: RequestOptions
    ): Promise<components.CreateLayoutResponseDto> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/layouts")();

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "LayoutsController_PropertyDescriptor",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["409", "429", "4XX", "503", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<components.CreateLayoutResponseDto>()
            .json(201, components.CreateLayoutResponseDto$)
            .fail([409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Get layout
     *
     * @remarks
     * Get a layout by its ID
     */
    async layoutsControllerGetLayout(
        layoutId: string,
        options?: RequestOptions
    ): Promise<components.GetLayoutResponseDto> {
        const input$: operations.LayoutsControllerGetLayoutRequest = {
            layoutId: layoutId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.LayoutsControllerGetLayoutRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            layoutId: encodeSimple$("layoutId", payload$.layoutId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/layouts/{layoutId}")(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "LayoutsController_getLayout",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["404", "409", "429", "4XX", "503", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<components.GetLayoutResponseDto>()
            .json(200, components.GetLayoutResponseDto$)
            .fail([404, 409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Delete layout
     *
     * @remarks
     * Execute a soft delete of a layout given a certain ID.
     */
    async layoutsControllerDeleteLayout(layoutId: string, options?: RequestOptions): Promise<void> {
        const input$: operations.LayoutsControllerDeleteLayoutRequest = {
            layoutId: layoutId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "*/*");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.LayoutsControllerDeleteLayoutRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            layoutId: encodeSimple$("layoutId", payload$.layoutId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/layouts/{layoutId}")(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "LayoutsController_deleteLayout",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["404", "409", "429", "4XX", "503", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<void>()
            .void(204, z.void())
            .fail([404, 409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Update a layout
     *
     * @remarks
     * Update the name, content and variables of a layout. Also change it to be default or no.
     */
    async layoutsControllerUpdateLayout(
        layoutId: string,
        updateLayoutRequestDto: components.UpdateLayoutRequestDto,
        options?: RequestOptions
    ): Promise<components.UpdateLayoutResponseDto> {
        const input$: operations.LayoutsControllerUpdateLayoutRequest = {
            layoutId: layoutId,
            updateLayoutRequestDto: updateLayoutRequestDto,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.LayoutsControllerUpdateLayoutRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.UpdateLayoutRequestDto, { explode: true });

        const pathParams$ = {
            layoutId: encodeSimple$("layoutId", payload$.layoutId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/layouts/{layoutId}")(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "LayoutsController_updateLayout",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["400", "404", "409", "429", "4XX", "503", "5XX"],
        };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PATCH",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<components.UpdateLayoutResponseDto>()
            .json(200, components.UpdateLayoutResponseDto$)
            .fail([400, 404, 409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Set default layout
     *
     * @remarks
     * Sets the default layout for the environment and updates to non default to the existing default layout (if any).
     */
    async layoutsControllerSetDefaultLayout(
        layoutId: string,
        options?: RequestOptions
    ): Promise<void> {
        const input$: operations.LayoutsControllerSetDefaultLayoutRequest = {
            layoutId: layoutId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "*/*");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.LayoutsControllerSetDefaultLayoutRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            layoutId: encodeSimple$("layoutId", payload$.layoutId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/layouts/{layoutId}/default")(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "LayoutsController_setDefaultLayout",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["404", "409", "429", "4XX", "503", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<void>()
            .void(204, z.void())
            .fail([404, 409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }
}
