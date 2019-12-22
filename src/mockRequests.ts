import { NextFunction, Response } from "express"

interface MockOptions {
    url: string
    mockResponse: any
}

interface HttpCallParameters {
    protocol: string
    host: string
    resource: string
}

export interface Request {
    host: string
    url: string
    rawHeaders: string[]
    method: string
    body?: any
}

export function mockFor(options: MockOptions) {
    return (req: Request, res: Response, next: NextFunction) => {
        const callParams: HttpCallParameters = desctructRequest(req)
        if (callParams.resource === options.url) {
            res.send(JSON.stringify(options.mockResponse))
        }
        next()
    }
}

export function desctructRequest(req: Request): HttpCallParameters {
    // http://somehost/api/v1/foo?bar=baz
    const url = req.url
    const [protocol, hostNameAndResource] = url.split("://")
    const host = hostNameAndResource.split("/")[0]
    const resource = hostNameAndResource.split(/\/(.+)/)[1]
    return {
        host,
        protocol,
        resource,
    }
}
