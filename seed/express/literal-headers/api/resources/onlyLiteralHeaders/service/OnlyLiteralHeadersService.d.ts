/**
 * This file was auto-generated by Fern from our API Definition.
 */
import express from "express";
export interface OnlyLiteralHeadersServiceMethods {
    get(req: express.Request<never, never, never, never>, res: {
        send: () => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
}
export declare class OnlyLiteralHeadersService {
    private readonly methods;
    private router;
    constructor(methods: OnlyLiteralHeadersServiceMethods, middleware?: express.RequestHandler[]);
    addMiddleware(handler: express.RequestHandler): this;
    toRouter(): express.Router;
}
