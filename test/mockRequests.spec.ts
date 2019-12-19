import { expect } from "chai"
import { desctructUrl } from "../src/mockRequests"

describe("Destruction of urls", () => {
    describe("valid url with protcol, host and resouce", () => {
        const validUrl = "http://1.1.1.1/some/info?is=is"
        const destructedUrl = desctructUrl(validUrl)
        it("should return destructed url as obj", () => {
            expect(destructedUrl).to.be.deep.eq({
                protocol: "http",
                host: "1.1.1.1",
                resource: "someinfo?is=is",
            })
        })
    })
})
