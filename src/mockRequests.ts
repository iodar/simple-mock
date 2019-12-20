interface MockOptions {
    url: string
    mockResponse: any
}

interface HttpCallParameters {
    protocol: string
    host: string
    resource: string
}

export function mockFor(options: MockOptions) {}

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
