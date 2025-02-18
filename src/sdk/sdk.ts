/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import { encodeJSON as encodeJSON$ } from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as retries$ from "../lib/retries";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as components from "../models/components";
import { Changes } from "./changes";
import { Environments } from "./environments";
import { Events } from "./events";
import { ExecutionDetails } from "./executiondetails";
import { Feeds } from "./feeds";
import { Integrations } from "./integrations";
import { Layouts } from "./layouts";
import { Messages } from "./messages";
import { Notifications } from "./notifications";
import { Organizations } from "./organizations";
import { Subscribers } from "./subscribers";
import { Tenants } from "./tenants";
import { Topics } from "./topics";
import { WorkflowGroups } from "./workflowgroups";
import { Workflows } from "./workflows";

export class Novu extends ClientSDK {
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

    private _changes?: Changes;
    get changes(): Changes {
        return (this._changes ??= new Changes(this.options$));
    }

    private _environments?: Environments;
    get environments(): Environments {
        return (this._environments ??= new Environments(this.options$));
    }

    private _events?: Events;
    get events(): Events {
        return (this._events ??= new Events(this.options$));
    }

    private _executionDetails?: ExecutionDetails;
    get executionDetails(): ExecutionDetails {
        return (this._executionDetails ??= new ExecutionDetails(this.options$));
    }

    private _feeds?: Feeds;
    get feeds(): Feeds {
        return (this._feeds ??= new Feeds(this.options$));
    }

    private _integrations?: Integrations;
    get integrations(): Integrations {
        return (this._integrations ??= new Integrations(this.options$));
    }

    private _layouts?: Layouts;
    get layouts(): Layouts {
        return (this._layouts ??= new Layouts(this.options$));
    }

    private _messages?: Messages;
    get messages(): Messages {
        return (this._messages ??= new Messages(this.options$));
    }

    private _workflowGroups?: WorkflowGroups;
    get workflowGroups(): WorkflowGroups {
        return (this._workflowGroups ??= new WorkflowGroups(this.options$));
    }

    private _notifications?: Notifications;
    get notifications(): Notifications {
        return (this._notifications ??= new Notifications(this.options$));
    }

    private _organizations?: Organizations;
    get organizations(): Organizations {
        return (this._organizations ??= new Organizations(this.options$));
    }

    private _subscribers?: Subscribers;
    get subscribers(): Subscribers {
        return (this._subscribers ??= new Subscribers(this.options$));
    }

    private _tenants?: Tenants;
    get tenants(): Tenants {
        return (this._tenants ??= new Tenants(this.options$));
    }

    private _topics?: Topics;
    get topics(): Topics {
        return (this._topics ??= new Topics(this.options$));
    }

    private _workflows?: Workflows;
    get workflows(): Workflows {
        return (this._workflows ??= new Workflows(this.options$));
    }

    /**
     * Trigger event
     *
     * @remarks
     *
     *     Trigger event is the main (and only) way to send notifications to subscribers.
     *     The trigger identifier is used to match the particular workflow associated with it.
     *     Additional information can be passed according the body interface below.
     *
     */
    async trigger(
        request: components.TriggerEventRequestDto,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<components.TriggerEventResponseDto> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => components.TriggerEventRequestDto$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/v1/events/trigger")();

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
            operationID: "EventsController_trigger",
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
                body: body$,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 30000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, doOptions);
            },
            { config: retryConfig, statusCodes: ["408", "409", "429", "5XX"] }
        );

        const [result$] = await this.matcher<components.TriggerEventResponseDto>()
            .json(201, components.TriggerEventResponseDto$)
            .fail([409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }
}
