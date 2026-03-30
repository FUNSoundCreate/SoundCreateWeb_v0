import Header from "@/components/header";
import ContentsMenu from "@/components/contentsMenu";
import Support from "@/components/support";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ContentsMenu
          imageSrc="/IMG_0375.jpg"
          imageAlt="Ableton_Live_Gamen"
          title="About"
          slogan="公立はこだて未来大学公認DTMサークル"
          description="SoundCreateは主に公立はこだて未来大学の学生によって運営される大学公認のDTMサークルです。サークル内でコンピレーションを開催、アルバムをリリースするなどの活動を行っています。"
          layout="image-left"
          priority
        />
        <ContentsMenu
          imageSrc="/lunocakeyplaying.jpg"
          imageAlt="lunoca_playing_keyboard"
          title="Member"
          slogan="サークルを作り上げるコンポーザーたち"
          description="SoundCreateには多種多様な音楽性をもつ学生コンポーザーが集まり、ひとつのアルバム作品を作り上げています。また、すでに大学を卒業したOBメンバーや他大学からのインカレメンバーもサークル内で活躍しています。"
          layout="image-right"
          buttonLabel="Check Members"
          buttonHref="/member"
        />
        <ContentsMenu
          imageSrc="/IMG_0261.JPG"
          imageAlt="未来祭での頒布"
          title="Release"
          slogan="メンバー制作楽曲を募るコンピレーションアルバム"
          description="サークル内では大学祭、全国的な同人即売会であるコミックマーケットやM3などに合わせて、コンピレーションが開催されます。コンピレーションの応募楽曲を収録したアルバムを、これらの即売会にてリリース、頒布しています。"
          layout="image-left"
          buttonLabel="Check Releases"
          buttonHref="/release"
        />
        <Support />
      </main>
    </div>
  );
}
