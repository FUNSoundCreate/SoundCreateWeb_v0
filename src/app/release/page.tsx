import Footer from "@/components/footer";
import Header from "@/components/header";
import Jacket from "@/components/jacket";
import PageHead from "@/components/pagehead";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Release | SoundCreate Official",
  description: "SoundCreateのアルバム・EP",
};

export default function Release() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageHead
        RImageSrc="/sqstripe.svg"
        LImageSrc="/sqstripe.svg"
        title="リリースしたアルバム"
        subtitle="Release"
      />
      <Jacket />
      <Footer />
    </div>
  );
}
