import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/FramerWrapper";
import GithubBtn from "@/components/GithubBtn";
import HeroImage from "@/components/HeroImage";
import HeroTexts from "@/components/HeroTexts";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
    return (
        <>
            <FramerWrapper
                className="flex h-full w-auto flex-col justify-start gap-4"
                y={0}
                x={-100}
            >
                <HeroTexts />
                <div className="flex h-fit w-full gap-3 p-4">
                    <SocialLinks />
                </div>
                <DownLoadResumeBtn />
            </FramerWrapper>
            <FramerWrapper
                className="relative block h-full w-1/2 max-lg:hidden"
                y={0}
                x={100}
            >
                <HeroImage />
            </FramerWrapper>
            <GithubBtn />
        </>
    );
}
