// const supertest = require("supertest");
// const app = require("../app");
// const User = require("../models/user");
// const mongoose = require("mongoose");

// require("dotenv").config();

// const { DB_HOST, PORT } = process.env;

// describe("test to login controller", () => {
//   let server;

//   const loginUser = {
//     email: "test@gmail.com",
//     password: "test12345",
//   };

//   beforeAll(async () => {
//     server = app.listen(PORT);
//     await mongoose.connect(DB_HOST);
//     await supertest(app).post("/api/users/register").send(loginUser);
//   });

//   afterAll(async () => {
//     await User.deleteOne({ email: "loginControllerTest@mail.com" });
//     await mongoose.connection.close();
//     server.close();
//   });

//   test("should be response 200", async () => {
//     const response = await supertest(app)
//       .post("/api/users/login")
//       .send(loginUser);
//     expect(response.statusCode).toBe(200);
//   });
//   test("should return token", async () => {
//     const response = await supertest(app)
//       .post("/api/users/login")
//       .send(loginUser);
//     expect(response.body).toHaveProperty("token");
//   });
//   test("response contains еmail and subscription with string type", async () => {
//     const response = await supertest(app)
//       .post("/api/users/login")
//       .send(loginUser);

//     const user = response.body.user;
//     expect(user).toHaveProperty("email");
//     expect(typeof user.email).toBe("string");
//     expect(user).toHaveProperty("subscription");
//     expect(typeof user.subscription).toBe("string");
//   });
// });
