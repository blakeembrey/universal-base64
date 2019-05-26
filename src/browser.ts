function percentToByte(p: string) {
  return String.fromCharCode(parseInt(p.slice(1), 16));
}

export function encode(str: string): string {
  return btoa(encodeURIComponent(str).replace(/%[0-9A-F]{2}/g, percentToByte));
}

function byteToPercent(b: string) {
  return `%${`00${b.charCodeAt(0).toString(16)}`.slice(-2)}`;
}

export function decode(str: string): string {
  return decodeURIComponent(Array.from(atob(str), byteToPercent).join(""));
}
