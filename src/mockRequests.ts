import { Request, Response, NextFunction } from "express"

interface MockOptions {
    url: string
    mockResponse: any
}

interface HttpCallParameters {
    protcol: string
    host: string
    resource: string
}

export function mockFor(options: MockOptions) {
    return (req: Request, res: Response, next: NextFunction) => {
        const callParams: HttpCallParameters = desctructUrl(req.url)
        if (callParams.resource === options.url) {
            res.send(JSON.stringify(options.mockResponse))
        }
        next()
    }
}

export function desctructUrl(url: string): HttpCallParameters {
    // http://somehost/api/v1/foo?bar=baz
    const [protcol, hostNameAndResource] = url.split("://")
    const [host] = hostNameAndResource.split("/").slice(0, 1)
    const [resource] = hostNameAndResource.split("/").slice(1)
    return {
        host,
        protcol,
        resource,
    }
}
