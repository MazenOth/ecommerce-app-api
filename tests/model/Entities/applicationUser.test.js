const { ApplicationUser } = require("../../../Model/Entities/applicationUser");
const jwt = require("jsonwebtoken");
const config = require("config");
const mongoose = require("mongoose");

describe("applicationUser.generateAuthToken", () => {
  it("should return a valid JWT", () => {
    const payload = {
      _id: new mongoose.Types.ObjectId().toHexString(),
      roles: ["seller", "customer"]
    };
    const applicationUser = new ApplicationUser(payload);
    const token = applicationUser.generateAuthToken();
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    expect(decoded).toMatchObject(payload);
  });
});
