import { expect } from "chai"
import { desctructRequest } from "../src/mockRequests"
import { Request } from "../src/mockRequests"

describe("Destruction of urls", () => {
    describe("valid url with protcol, host and resouce", () => {
        const validUrl = "http://1.1.1.1/some/info?is=is"
        const originalRequest: Request = {
            url: validUrl,
            host: "1.1.1.1",
            method: "GET",
            rawHeaders: [],
        }
        const destructedRequest = desctructRequest(originalRequest)
        it("should return destructed url as obj", () => {
            expect(destructedRequest).to.be.deep.eq({
                protocol: "http",
                host: "1.1.1.1",
                resource: "some/info?is=is",
            })
        })
    })
})
