export function base64ToUtf8(base64String: string) {
  // Decode base64 to binary string
  const binaryString = atob(base64String);

  // Convert binary string to UTF-8
  const utf8String = decodeURIComponent(
    binaryString
      .split("")
      .map(function (char) {
        return "%" + ("00" + char.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return utf8String;
}
