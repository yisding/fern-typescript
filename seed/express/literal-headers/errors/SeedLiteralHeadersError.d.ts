/**
 * This file was auto-generated by Fern from our API Definition.
 */
import express from "express";
export declare abstract class SeedLiteralHeadersError extends Error {
    readonly errorName?: string | undefined;
    constructor(errorName?: string | undefined);
    abstract send(res: express.Response): Promise<void>;
}
