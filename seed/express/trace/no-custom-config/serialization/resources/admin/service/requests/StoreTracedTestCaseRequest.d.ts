/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../..";
import * as SeedTrace from "../../../../../api";
import * as core from "../../../../../core";
export declare const StoreTracedTestCaseRequest: core.serialization.Schema<serializers.StoreTracedTestCaseRequest.Raw, SeedTrace.StoreTracedTestCaseRequest>;
export declare namespace StoreTracedTestCaseRequest {
    interface Raw {
        result: serializers.TestCaseResultWithStdout.Raw;
        traceResponses: serializers.TraceResponse.Raw[];
    }
}
