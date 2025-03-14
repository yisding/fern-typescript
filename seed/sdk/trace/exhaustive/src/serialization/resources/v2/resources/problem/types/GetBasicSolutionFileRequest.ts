/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as SeedTrace from "../../../../../../api";
import * as core from "../../../../../../core";

export const GetBasicSolutionFileRequest: core.serialization.ObjectSchema<
    serializers.v2.GetBasicSolutionFileRequest.Raw,
    SeedTrace.v2.GetBasicSolutionFileRequest
> = core.serialization.object({
    methodName: core.serialization.string(),
    signature: core.serialization.lazyObject(async () => (await import("../../../../..")).v2.NonVoidFunctionSignature),
});

export declare namespace GetBasicSolutionFileRequest {
    interface Raw {
        methodName: string;
        signature: serializers.v2.NonVoidFunctionSignature.Raw;
    }
}
