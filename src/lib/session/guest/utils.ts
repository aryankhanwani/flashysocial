import Cryptr from "cryptr";
import { cookies } from "next/headers";

const cryptr = new Cryptr("B4dr@2001", { encoding: "base64" });

const cookieName = "session.customer.pkId";
export function setCustomerToken(pkId: string): {
  raw: string;
  decrypt: () => string;
} {
  const newToken = cryptr.encrypt(pkId);
  cookies().set(cookieName, newToken);

  return {
    raw: newToken,
    decrypt: () => cryptr.decrypt(newToken),
  };
}

export function getCustomerToken(): null | {
  raw: string;
  decrypt: () => string;
} {
  const token = cookies().get(cookieName)?.value;
  if (!token) return null;

  return {
    raw: token,
    decrypt: () => cryptr.decrypt(token),
  };
}
