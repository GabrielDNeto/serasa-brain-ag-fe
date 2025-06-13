export const AuthStatusEnum = {
  PENDING: "pending",
  AUTHORIZED: "authorized",
  UNNAUTHORIZED: "unnauthorized",
} as const;

export type AuthStatusEnum =
  (typeof AuthStatusEnum)[keyof typeof AuthStatusEnum];
