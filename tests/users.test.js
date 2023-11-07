const request = require("supertest");
const app = require("../index.js");

describe("testing/users", () => {
  const user = {
    name: "Username",
    email: "test@example.com",
    password: "123456",
    role: "user",
    confirmed: false,
  };

  test("Create a user", async () => {
    const res = await request(app)
      .post("/users/")
      .send({ message: "User created successfully!", user })
      .expect(201);
    expect(res.body.user.id).toBeDefined();
    expect(res.body.user.createdAt).toBeDefined();
    expect(res.body.user.updatedAt).toBeDefined();
  });
});
