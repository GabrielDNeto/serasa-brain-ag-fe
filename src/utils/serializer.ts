export function serialize<T>(input: T): T {
  if (Array.isArray(input)) {
    return input
      .filter((item) => item !== undefined)
      .map((item) => serialize(item)) as T;
  }

  if (input !== null && typeof input === "object") {
    const result: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(input)) {
      if (value !== undefined) {
        const serialized = serialize(value);
        if (serialized !== undefined) {
          result[key] = serialized;
        }
      }
    }

    return result as T;
  }

  return input;
}
