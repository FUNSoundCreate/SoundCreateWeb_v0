"use client";

import { useEffect, useRef } from "react";
import type { EmbedData } from "@/lib/embed";

const TWITTER_SCRIPT_ID = "twitter-widgets-js";
const TWITTER_SCRIPT_SRC = "https://platform.twitter.com/widgets.js";

type TwttrWidgets = {
  widgets: { load: (el?: HTMLElement) => void };
};

function YouTubeEmbed({ id }: { id: string }) {
  return (
    // テキストと同様、左寄せ。動画は最大幅を抑えて 16:9 で表示。
    <div className="my-6 w-full max-w-[560px]">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}

function TwitterEmbed({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const render = () => {
      const twttr = (window as unknown as { twttr?: TwttrWidgets }).twttr;
      twttr?.widgets.load(container);
    };

    const existing = document.getElementById(
      TWITTER_SCRIPT_ID,
    ) as HTMLScriptElement | null;

    if ((window as unknown as { twttr?: TwttrWidgets }).twttr) {
      render();
    } else if (existing) {
      existing.addEventListener("load", render, { once: true });
    } else {
      const script = document.createElement("script");
      script.id = TWITTER_SCRIPT_ID;
      script.src = TWITTER_SCRIPT_SRC;
      script.async = true;
      script.addEventListener("load", render, { once: true });
      document.body.appendChild(script);
    }
  }, [url]);

  return (
    // 生成される iframe の左右 auto マージンを打ち消して左寄せにする。
    <div ref={containerRef} className="my-6 max-w-[550px] [&_iframe]:!mx-0">
      <blockquote className="twitter-tweet">
        <a href={url}> </a>
      </blockquote>
    </div>
  );
}

export default function Embed({ data }: { data: EmbedData }) {
  switch (data.type) {
    case "youtube":
      return <YouTubeEmbed id={data.id} />;
    case "twitter":
      return <TwitterEmbed url={data.url} />;
    default:
      return null;
  }
}
