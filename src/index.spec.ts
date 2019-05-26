import { decode, encode } from "./index";

describe("node", () => {
  it("should base64 encode", () => {
    expect(encode("hello")).toEqual("aGVsbG8=");
  });

  it("should encode non latin characters", () => {
    expect(encode("你好")).toEqual("5L2g5aW9");
  });

  it("should base64 decode", () => {
    expect(decode("aGVsbG8=")).toEqual("hello");
  });

  it("should decode non latin characters", () => {
    expect(decode("5L2g5aW9")).toEqual("你好");
  });
});
