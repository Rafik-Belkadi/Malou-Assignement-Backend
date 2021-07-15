import app from "../";
import request from "supertest";

describe("GET / - a simple api endpoint", () => {
    it("Hello API Request", async () => {
        const result = await request(app).get("/");
        expect(result.text).toEqual("Hello World");
        expect(result.statusCode).toEqual(200);
    });
});

describe("GET /posts/:date - Gettings products by date", () => {
    it("Should get the products at the precised date", async () => {
        const result = await request(app).get("/posts/2021-01-01");
        expect(result.body).toBeInstanceOf(Array)
        expect(result.statusCode).toEqual(200);
    })

    it("Should throw an error if the date format is wrong", async () => {
        const result = await request(app).get("/posts/20210101");
        expect(result.body).toBeInstanceOf(Object)
        expect(result.statusCode).toEqual(400);
    })
})