/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         integer: 42,
 *         literalServiceHeader: "service header",
 *         trueServiceHeader: true,
 *         nonLiteralEndpointHeader: "custom header",
 *         literalEndpointHeader: "endpoint header",
 *         trueEndpointHeader: true
 *     }
 */
export interface WithNonLiteralHeadersRequest {
    integer: number;
    maybeInteger?: number;
    nonLiteralEndpointHeader: string;
}
