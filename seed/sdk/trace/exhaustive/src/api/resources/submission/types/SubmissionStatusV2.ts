/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../..";

export type SubmissionStatusV2 =
    | SeedTrace.SubmissionStatusV2.Test
    | SeedTrace.SubmissionStatusV2.Workspace
    | SeedTrace.SubmissionStatusV2._Unknown;

export declare namespace SubmissionStatusV2 {
    interface Test extends SeedTrace.TestSubmissionStatusV2, _Utils {
        type: "test";
    }

    interface Workspace extends SeedTrace.WorkspaceSubmissionStatusV2, _Utils {
        type: "workspace";
    }

    interface _Unknown extends _Utils {
        type: void;
    }

    interface _Utils {
        _visit: <_Result>(visitor: SeedTrace.SubmissionStatusV2._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        test: (value: SeedTrace.TestSubmissionStatusV2) => _Result;
        workspace: (value: SeedTrace.WorkspaceSubmissionStatusV2) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const SubmissionStatusV2 = {
    test: (value: SeedTrace.TestSubmissionStatusV2): SeedTrace.SubmissionStatusV2.Test => {
        return {
            ...value,
            type: "test",
            _visit: function <_Result>(
                this: SeedTrace.SubmissionStatusV2.Test,
                visitor: SeedTrace.SubmissionStatusV2._Visitor<_Result>
            ) {
                return SeedTrace.SubmissionStatusV2._visit(this, visitor);
            },
        };
    },

    workspace: (value: SeedTrace.WorkspaceSubmissionStatusV2): SeedTrace.SubmissionStatusV2.Workspace => {
        return {
            ...value,
            type: "workspace",
            _visit: function <_Result>(
                this: SeedTrace.SubmissionStatusV2.Workspace,
                visitor: SeedTrace.SubmissionStatusV2._Visitor<_Result>
            ) {
                return SeedTrace.SubmissionStatusV2._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { type: string }): SeedTrace.SubmissionStatusV2._Unknown => {
        return {
            ...(value as any),
            _visit: function <_Result>(
                this: SeedTrace.SubmissionStatusV2._Unknown,
                visitor: SeedTrace.SubmissionStatusV2._Visitor<_Result>
            ) {
                return SeedTrace.SubmissionStatusV2._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: SeedTrace.SubmissionStatusV2,
        visitor: SeedTrace.SubmissionStatusV2._Visitor<_Result>
    ): _Result => {
        switch (value.type) {
            case "test":
                return visitor.test(value);
            case "workspace":
                return visitor.workspace(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
