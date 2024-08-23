import Image from "next/image";
import avatar from "../../public/avatar.png";

const HeroImage = () => {
    return (
        <>
            <Image
                src={avatar}
                alt="logo"
                loading="eager"
                priority
                height={1000}
                width={1000}
            />
        </>
    );
};
export default HeroImage;
