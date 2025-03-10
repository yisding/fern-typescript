/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../../../environments";
import * as core from "../../../../../../../../core";
import * as SeedTrace from "../../../../../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../../../../../serialization";

export declare namespace Problem {
    interface Options {
        environment?: core.Supplier<environments.SeedTraceEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        xRandomHeader?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Problem {
    constructor(protected readonly _options: Problem.Options = {}) {}

    /**
     * Returns lightweight versions of all problems
     */
    public async getLightweightProblems(
        requestOptions?: Problem.RequestOptions
    ): Promise<
        core.APIResponse<
            SeedTrace.v2.v3.LightweightProblemInfoV2[],
            SeedTrace.v2.v3.problem.getLightweightProblems.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                "/problems-v2/lightweight-problem-info"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.1",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            withCredentials: true,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.v2.v3.problem.getLightweightProblems.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: SeedTrace.v2.v3.problem.getLightweightProblems.Error._unknown(_response.error),
        };
    }

    /**
     * Returns latest versions of all problems
     */
    public async getProblems(
        requestOptions?: Problem.RequestOptions
    ): Promise<core.APIResponse<SeedTrace.v2.v3.ProblemInfoV2[], SeedTrace.v2.v3.problem.getProblems.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                "/problems-v2/problem-info"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.1",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            withCredentials: true,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.v2.v3.problem.getProblems.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: SeedTrace.v2.v3.problem.getProblems.Error._unknown(_response.error),
        };
    }

    /**
     * Returns latest version of a problem
     */
    public async getLatestProblem(
        problemId: SeedTrace.ProblemId,
        requestOptions?: Problem.RequestOptions
    ): Promise<core.APIResponse<SeedTrace.v2.v3.ProblemInfoV2, SeedTrace.v2.v3.problem.getLatestProblem.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/problems-v2/problem-info/${await serializers.ProblemId.jsonOrThrow(problemId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.1",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            withCredentials: true,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.v2.v3.ProblemInfoV2.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: SeedTrace.v2.v3.problem.getLatestProblem.Error._unknown(_response.error),
        };
    }

    /**
     * Returns requested version of a problem
     */
    public async getProblemVersion(
        problemId: SeedTrace.ProblemId,
        problemVersion: number,
        requestOptions?: Problem.RequestOptions
    ): Promise<core.APIResponse<SeedTrace.v2.v3.ProblemInfoV2, SeedTrace.v2.v3.problem.getProblemVersion.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/problems-v2/problem-info/${await serializers.ProblemId.jsonOrThrow(
                    problemId
                )}/version/${problemVersion}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.1",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            withCredentials: true,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.v2.v3.ProblemInfoV2.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: SeedTrace.v2.v3.problem.getProblemVersion.Error._unknown(_response.error),
        };
    }

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
