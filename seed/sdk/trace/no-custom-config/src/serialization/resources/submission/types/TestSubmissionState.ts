/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SeedTrace from "../../../../api";
import * as core from "../../../../core";

export const TestSubmissionState: core.serialization.ObjectSchema<
    serializers.TestSubmissionState.Raw,
    SeedTrace.TestSubmissionState
> = core.serialization.object({
    problemId: core.serialization.lazy(async () => (await import("../../..")).ProblemId),
    defaultTestCases: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).TestCase)
    ),
    customTestCases: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).TestCase)
    ),
    status: core.serialization.lazy(async () => (await import("../../..")).TestSubmissionStatus),
});

export declare namespace TestSubmissionState {
    interface Raw {
        problemId: serializers.ProblemId.Raw;
        defaultTestCases: serializers.TestCase.Raw[];
        customTestCases: serializers.TestCase.Raw[];
        status: serializers.TestSubmissionStatus.Raw;
    }
}
