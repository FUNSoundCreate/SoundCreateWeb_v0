import Header from "@/components/header";
import Footer from "@/components/footer";
import PageHead from "@/components/pagehead";
import Member from "@/components/member";
import ScrollReveal from "@/components/scroll-reveal";

export default function MemberPage() {
  return (
    <div className="min-h-screen bg-white"> 
     <Header />
     <PageHead 
      RImageSrc="/Rnarrow.svg"
      LImageSrc="/Lnarrow.svg"
      title="サークル所属メンバー"
      subtitle="Member"
     />
     <ScrollReveal>
        <Member
         imageSrc="/members/oliveoiler.png"
         name="oliveoiler"
         role="代表 / トラックメーカー / デザイナー / B3"
         comment="現在サークル代表を務めているoliveoilerです。EDM全般が好きで、HouseからDubstep、Jersey clubなど色々作っています。使用しているDAWはAbleton Liveです。最近はゼンレスゾーンゼロとエンドフィールドに脳を焼かれています。"
         FavGenre="Bass House、complextro、Hitech、Hyperpopなど"
         xUrl="https://twitter.com/oliveoiler2"
         soundcloudUrl="https://soundcloud.com/user-896075660"
        />
      </ScrollReveal>
      <ScrollReveal>
        <Member
          imageSrc="/members/onnenai.jpg"
          name="Onnenai"
          role="副代表 / トラックメーカー / エンジニア / B2"
          comment="副代表です。Kawaii Future Bassから電子音楽にハマり、Futureなジャンルの音楽を中心に制作しています。DJサークルでDJもしています。合成音声も好きで初音ミクを中心に複数の音声ライブラリを揃えています。今年はたくさん使ってあげたいです。"
          FavGenre="Kawaii Future Bass, Electro Pop, Vocaloid Electro, Botanicaなど"
          xUrl="https://twitter.com/onnenai_w57"
          soundcloudUrl="https://soundcloud.com/onnenaiw57"
        />
      </ScrollReveal>
      <ScrollReveal>
        <Member
          imageSrc="/members/paleclip.jpg"
          name="paleclip"
          role="会計 / トラックメーカー / B1"
          comment="会計です。前はHash87という名前でした。EDMはGeometry Dashで出会いました。使用しているDAWはFLStudioです。ハウスからベースミュージックまで全て好きです。C++でプラグインを作っています。"
          FavGenre="Progressive House, Future Bounce, Melodic Dubstep, Digicoreなど"
          soundcloudUrl="https://soundcloud.com/paleclip"
        />
      </ScrollReveal>
      <ScrollReveal>
        <Member 
          imageSrc="/members/oruto.webp"
          name="OrutO"
          role="トラックメーカー / 教育大B4"
          comment="かなり未来大に染まった教育大生です。メインジャンルはdubstep(Tearoutやriddim)、Chillです(勝利の女神:NIKEEのBGMからdubstepにハマりました)。ボカロＰとしても活動しています。"
          FavGenre="dubstep、riddim、trench、tearout、lofi"
          xUrl="https://twitter.com/oruto_key"
          soundcloudUrl="https://on.soundcloud.com/gf63EMjpMY2joxvvYx"
      />
      </ScrollReveal>
      <ScrollReveal>
        <Member
          imageSrc="/members/inv.png"
          name="侵略者"
          role="トラックメーカー / B4"
          comment="DJ/Trackmaker  デカ音屋さん  西城樹里のヲタクから二郎巡りまで、活動の幅は多岐にわたる"
          FavGenre="rawstyle, uptempo, otogecore, bailefunk, drum'n'bass, speedcore, noise"
          xUrl="https://on.soundcloud.com/DTcrWRstMySuI0b9Pm"
          soundcloudUrl="https://x.com/gomieshizumu"
        />
      </ScrollReveal>
      <ScrollReveal>
        <Member
          imageSrc="/members/lunoca.jpg"
          name="Lunoca"
          role="トラックメーカー / OB"
          comment="Kawaii Emotional Music"
          FavGenre="Future, Hyper, Jersey Club, Complextro, etc."
          soundcloudUrl="https://soundcloud.com/lunoca"
        />
      </ScrollReveal>
      <Footer />
    </div>
  );
}