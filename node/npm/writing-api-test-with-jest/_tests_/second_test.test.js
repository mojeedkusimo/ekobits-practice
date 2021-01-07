const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
    test("It sholud respond with array of studens", async () => {
        const response = await request(app).get("/");
        expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"])
        expect(response.statusCode).toBe(200);
    })
}) 