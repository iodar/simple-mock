interface MockOptions {
    url: string
    mockResponse: any
}

interface HttpCallParameters {
    protcol: string
    host: string
    resource: string
}

export function mockFor(options: MockOptions) {}

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
