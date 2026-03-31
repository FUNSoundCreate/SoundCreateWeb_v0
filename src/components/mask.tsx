import Image from "next/image";

const IMAGE_SRC = "/lepidos_vol.2_jacket.png";

// 元のmaskshape.svgから導出したシェイプ定義 (302.508シフトして正規化済み)
// 元パス座標: 左角x=302.508, 右角x=564.108, 左くびれ=422.888, 右突起=684.488
const VIEW_H = 640;
const SHAPE_CORNER = 261.6; // 上下角のx (= 564.108 - 302.508)
const SHAPE_RIGHT = 381.98; // 右突起のx (= 684.488 - 302.508)
const SHAPE_TIP = 120.38; // 左くびれのx (= 422.888 - 302.508)
const GAP = 40; // シェイプ間の隙間 (SVG座標系px)。どのy位置でも均一になる

// GAP=0 のときオフセット=SHAPE_CORNER でシェイプが隙間なく噛み合う
const TILE_OFFSET = SHAPE_CORNER + GAP;

function shapePath(offset: number): string {
  const c = offset + SHAPE_CORNER;
  const r = offset + SHAPE_RIGHT;
  const t = offset + SHAPE_TIP;
  return `M${offset} ${VIEW_H}H${c}L${r} ${VIEW_H / 2}L${c} 0H${offset}L${t} ${VIEW_H / 2}Z`;
}

const OFFSETS = [0, TILE_OFFSET, TILE_OFFSET * 2];
const HERO_PATHS = OFFSETS.map(shapePath);
const VIEW_W = OFFSETS[2] + SHAPE_RIGHT;

export default function Mask() {
  return (
    <div className="relative w-full h-full">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="w-auto h-full"
        aria-label="Lepidos Vol.2 ジャケット"
      >
        <defs>
          {HERO_PATHS.map((path, i) => (
            <clipPath key={i} id={`hero-clip-${i}`}>
              {/* Framer Motion対応: <path> → <motion.path> に変更してアニメーション追加 */}
              <path d={path} />
            </clipPath>
          ))}
        </defs>

        {/* 同一画像を3枚重ね、それぞれ異なるclipPathでマスク */}
        {HERO_PATHS.map((_, i) => (
          <image
            key={i}
            href={IMAGE_SRC}
            x="0"
            y="0"
            width={VIEW_W}
            height={VIEW_H}
            preserveAspectRatio="xMidYMid slice"
            clipPath={`url(#hero-clip-${i})`}
          />
        ))}
      </svg>
    </div>
  );
}
