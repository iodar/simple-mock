import { Request, Response, NextFunction } from "express"

interface MockOptions {
    url: string
    mockResponse: any
}

interface HttpCallParameters {
    protocol: string
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
    const [protocol, hostNameAndResource] = url.split("://")
    const host = hostNameAndResource.split("/")[0]
    const resource = hostNameAndResource.split(/\/(.+)/)[1]
    return {
        host,
        protocol,
        resource,
    }
}
