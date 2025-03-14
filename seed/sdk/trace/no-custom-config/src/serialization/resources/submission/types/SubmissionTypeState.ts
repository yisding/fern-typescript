/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SeedTrace from "../../../../api";
import * as core from "../../../../core";

export const SubmissionTypeState: core.serialization.Schema<
    serializers.SubmissionTypeState.Raw,
    SeedTrace.SubmissionTypeState
> = core.serialization
    .union("type", {
        test: core.serialization.lazyObject(async () => (await import("../../..")).TestSubmissionState),
        workspace: core.serialization.lazyObject(async () => (await import("../../..")).WorkspaceSubmissionState),
    })
    .transform<SeedTrace.SubmissionTypeState>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace SubmissionTypeState {
    type Raw = SubmissionTypeState.Test | SubmissionTypeState.Workspace;

    interface Test extends serializers.TestSubmissionState.Raw {
        type: "test";
    }

    interface Workspace extends serializers.WorkspaceSubmissionState.Raw {
        type: "workspace";
    }
}
