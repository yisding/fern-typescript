/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SeedTrace from "../../../../api";
import * as core from "../../../../core";

export const SubmissionResponse: core.serialization.Schema<
    serializers.SubmissionResponse.Raw,
    SeedTrace.SubmissionResponse
> = core.serialization
    .union("type", {
        serverInitialized: core.serialization.object({}),
        problemInitialized: core.serialization.object({
            value: core.serialization.lazy(async () => (await import("../../..")).ProblemId),
        }),
        workspaceInitialized: core.serialization.object({}),
        serverErrored: core.serialization.lazyObject(async () => (await import("../../..")).ExceptionInfo),
        codeExecutionUpdate: core.serialization.object({
            value: core.serialization.lazy(async () => (await import("../../..")).CodeExecutionUpdate),
        }),
        terminated: core.serialization.lazyObject(async () => (await import("../../..")).TerminatedResponse),
    })
    .transform<SeedTrace.SubmissionResponse>({
        transform: (value) => {
            switch (value.type) {
                case "serverInitialized":
                    return SeedTrace.SubmissionResponse.serverInitialized();
                case "problemInitialized":
                    return SeedTrace.SubmissionResponse.problemInitialized(value.value);
                case "workspaceInitialized":
                    return SeedTrace.SubmissionResponse.workspaceInitialized();
                case "serverErrored":
                    return SeedTrace.SubmissionResponse.serverErrored(value);
                case "codeExecutionUpdate":
                    return SeedTrace.SubmissionResponse.codeExecutionUpdate(value.value);
                case "terminated":
                    return SeedTrace.SubmissionResponse.terminated(value);
                default:
                    return SeedTrace.SubmissionResponse._unknown(value);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace SubmissionResponse {
    type Raw =
        | SubmissionResponse.ServerInitialized
        | SubmissionResponse.ProblemInitialized
        | SubmissionResponse.WorkspaceInitialized
        | SubmissionResponse.ServerErrored
        | SubmissionResponse.CodeExecutionUpdate
        | SubmissionResponse.Terminated;

    interface ServerInitialized {
        type: "serverInitialized";
    }

    interface ProblemInitialized {
        type: "problemInitialized";
        value: serializers.ProblemId.Raw;
    }

    interface WorkspaceInitialized {
        type: "workspaceInitialized";
    }

    interface ServerErrored extends serializers.ExceptionInfo.Raw {
        type: "serverErrored";
    }

    interface CodeExecutionUpdate {
        type: "codeExecutionUpdate";
        value: serializers.CodeExecutionUpdate.Raw;
    }

    interface Terminated extends serializers.TerminatedResponse.Raw {
        type: "terminated";
    }
}
