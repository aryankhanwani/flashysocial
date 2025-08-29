import type { NextRequest } from "next/server";

export async function GET(
  _: NextRequest,
  requestProps: { params: { assetUrl: string } },
) {
  const { assetUrl } = requestProps.params;
  const assetResponse = await fetch(decodeURIComponent(assetUrl), {
    method: "GET",
    redirect: "follow",
  });

  return assetResponse;
}

export const revalidate = 60;
