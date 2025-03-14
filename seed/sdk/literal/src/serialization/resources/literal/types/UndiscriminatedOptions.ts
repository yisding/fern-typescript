/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SeedLiteral from "../../../../api";
import * as core from "../../../../core";

export const UndiscriminatedOptions: core.serialization.Schema<
    serializers.UndiscriminatedOptions.Raw,
    SeedLiteral.UndiscriminatedOptions
> = core.serialization.undiscriminatedUnion([
    core.serialization.stringLiteral("options"),
    core.serialization.booleanLiteral(true),
    core.serialization.record(core.serialization.string(), core.serialization.string()),
]);

export declare namespace UndiscriminatedOptions {
    type Raw = "options" | true | Record<string, string>;
}
