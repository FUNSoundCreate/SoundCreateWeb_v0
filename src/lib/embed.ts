// mdx 内のリンクを埋め込みに変換するための URL パーサ。
// 対応していない URL は null を返し、通常のリンクとして扱う。

export type EmbedData =
  | { type: "youtube"; id: string }
  | { type: "twitter"; url: string };

/**
 * href を解析し、埋め込み可能なら EmbedData を返す。
 * 未対応の URL・URL でない文字列は null。
 */
export function parseEmbed(href: unknown): EmbedData | null {
  if (typeof href !== "string") return null;

  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return null;
  }

  const host = url.hostname.replace(/^www\./, "").toLowerCase();

  // --- YouTube ---
  if (host === "youtu.be") {
    const id = url.pathname.split("/").filter(Boolean)[0];
    if (id) return { type: "youtube", id };
  }
  if (host === "youtube.com" || host === "m.youtube.com") {
    if (url.pathname === "/watch") {
      const id = url.searchParams.get("v");
      if (id) return { type: "youtube", id };
    }
    const m = url.pathname.match(/^\/(?:shorts|embed|live)\/([^/?#]+)/);
    if (m) return { type: "youtube", id: m[1] };
  }

  // --- X (Twitter) ---
  if (
    host === "twitter.com" ||
    host === "x.com" ||
    host === "mobile.twitter.com" ||
    host === "mobile.x.com"
  ) {
    // /<user>/status/<id> 形式のツイートのみ埋め込む
    if (/^\/[^/]+\/status(?:es)?\/\d+/.test(url.pathname)) {
      // クエリ等を落として正規化（widgets.js は twitter.com を解釈できる）
      return { type: "twitter", url: `https://twitter.com${url.pathname}` };
    }
  }

  return null;
}
