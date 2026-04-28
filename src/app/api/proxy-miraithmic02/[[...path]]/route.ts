import { NextRequest, NextResponse } from "next/server";

const TARGET_BASE_URL = "https://miraithmic02.vercel.app";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> },
) {
  try {
    const resolvedParams = await params;
    const path = resolvedParams.path?.join("/") || "";

    // 外部URLを構築
    const targetUrl = `${TARGET_BASE_URL}/miraithmic02/${path}`;
    const url = new URL(targetUrl);

    // クエリパラメータを引き継ぐ
    request.nextUrl.searchParams.forEach((value, key) => {
      url.searchParams.set(key, value);
    });

    // 外部URLにリクエスト
    const response = await fetch(url.toString(), {
      headers: {
        // 必要なヘッダーを引き継ぐ
        "User-Agent": request.headers.get("user-agent") || "",
      },
    });

    // レスポンスボディをバイナリとして取得（画像やフォントに対応）
    const body = await response.arrayBuffer();

    // 重要なヘッダーを引き継ぐ
    const headers = new Headers();
    const contentType = response.headers.get("content-type");
    if (contentType) {
      headers.set("Content-Type", contentType);
    }

    // キャッシュヘッダーも引き継ぐ
    const cacheControl = response.headers.get("cache-control");
    if (cacheControl) {
      headers.set("Cache-Control", cacheControl);
    }

    // レスポンスを返す
    return new NextResponse(body, {
      status: response.status,
      headers,
    });
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      { error: "Failed to fetch external content" },
      { status: 500 },
    );
  }
}
