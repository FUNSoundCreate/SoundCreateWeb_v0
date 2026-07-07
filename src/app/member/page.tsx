import Header from "@/components/header";
import Footer from "@/components/footer";
import PageHead from "@/components/pagehead";
import Member from "@/components/member";
import ScrollReveal from "@/components/scroll-reveal";
import { members } from "@/lib/members";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Member | SoundCreate Official",
  description: "SoundCreateの多彩なメンバーたち",
};

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
      {members.map((member) => (
        <ScrollReveal key={member.id}>
          <Member member={member} />
        </ScrollReveal>
      ))}
      <Footer />
    </div>
  );
}
