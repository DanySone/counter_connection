import request from "supertest"
import app from "./app.js"

describe("GET /get_count", () => {

  describe("when get counter", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/get_count")
      expect(response.statusCode).toBe(200)
    })
  })

})