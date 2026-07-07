export type Member = {
  id: string; // author からの参照キー・URLに使えるASCIIスラッグ
  name: string;
  imageSrc: string;
  role: string;
  comment: string;
  favGenre: string;
  xUrl?: string;
  soundcloudUrl?: string;
};

export const members: Member[] = [
  {
    id: "oliveoiler",
    name: "oliveoiler",
    imageSrc: "/members/oliveoiler.png",
    role: "代表 / トラックメーカー / デザイナー / B3",
    comment:
      "現在サークル代表を務めているoliveoilerです。EDM全般が好きで、HouseからDubstep、Jersey clubなど色々作っています。使用しているDAWはAbleton Liveです。最近はゼンレスゾーンゼロとエンドフィールドに脳を焼かれています。",
    favGenre: "Bass House、complextro、Hitech、Hyperpopなど",
    xUrl: "https://twitter.com/oliveoiler2",
    soundcloudUrl: "https://soundcloud.com/user-896075660",
  },
  {
    id: "onnenai",
    name: "Onnenai",
    imageSrc: "/members/onnenai.png",
    role: "副代表 / トラックメーカー / エンジニア / B2",
    comment:
      "副代表です。Kawaii Future Bassから電子音楽にハマり、Futureなジャンルの音楽を中心に制作しています。DJサークルでDJもしています。合成音声も好きで初音ミクを中心に複数の音声ライブラリを揃えています。今年はたくさん使ってあげたいです。",
    favGenre: "Kawaii Future Bass, Electro Pop, Vocaloid Electro, Botanicaなど",
    xUrl: "https://twitter.com/onnenai_w57",
    soundcloudUrl: "https://soundcloud.com/onnenaiw57",
  },
  {
    id: "paleclip",
    name: "paleclip",
    imageSrc: "/members/paleclip.jpg",
    role: "会計 / トラックメーカー / B1",
    comment:
      "会計です。前はHash87という名前でした。EDMはGeometry Dashで出会いました。使用しているDAWはFLStudioです。ハウスからベースミュージックまで全て好きです。C++でプラグインを作っています。",
    favGenre: "Progressive House, Future Bounce, Melodic Dubstep, Digicoreなど",
    soundcloudUrl: "https://soundcloud.com/paleclip",
  },
  {
    id: "shigh",
    name: "shigh",
    imageSrc: "/members/shigh.jpg",
    role: "トラックメーカー / B3",
    comment: "不器用貧乏です。一緒に文化になろうね！",
    favGenre: "Ambient, Future, Techno, Houseなど",
    soundcloudUrl: "https://soundcloud.com/shigh-636007604",
  },
  {
    id: "oruto",
    name: "OrutO",
    imageSrc: "/members/oruto.webp",
    role: "トラックメーカー / 教育大B4",
    comment:
      "かなり未来大に染まった教育大生です。メインジャンルはdubstep(Tearoutやriddim)、Chillです(勝利の女神:NIKEEのBGMからdubstepにハマりました)。ボカロＰとしても活動しています。",
    favGenre: "dubstep、riddim、trench、tearout、lofi",
    xUrl: "https://twitter.com/oruto_key",
    soundcloudUrl: "https://on.soundcloud.com/gf63EMjpMY2joxvvYx",
  },
  {
    id: "invader",
    name: "侵略者",
    imageSrc: "/members/inv.png",
    role: "トラックメーカー / B4",
    comment:
      "DJ/Trackmaker  デカ音屋さん  西城樹里のヲタクから二郎巡りまで、活動の幅は多岐にわたる",
    favGenre:
      "rawstyle, uptempo, otogecore, bailefunk, drum'n'bass, speedcore, noise",
    xUrl: "https://x.com/gomieshizumu",
    soundcloudUrl: "https://on.soundcloud.com/DTcrWRstMySuI0b9Pm",
  },
  {
    id: "lunoca",
    name: "Lunoca",
    imageSrc: "/members/lunoca.jpg",
    role: "トラックメーカー / OB",
    comment: "Kawaii Emotional Music",
    favGenre: "Future, Hyper, Jersey Club, Complextro, etc.",
    soundcloudUrl: "https://soundcloud.com/lunoca",
  },
];

export function getMemberById(id: string): Member | undefined {
  return members.find((member) => member.id === id);
}
