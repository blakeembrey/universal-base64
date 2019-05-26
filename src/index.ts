export function decode(str: string): string {
  return Buffer.from(str, "base64").toString("utf8");
}

export function encode(str: string): string {
  return Buffer.from(str, "utf8").toString("base64");
}
