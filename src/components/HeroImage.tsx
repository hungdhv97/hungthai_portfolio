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
                height={500}
                width={500}
            />
        </>
    );
};
export default HeroImage;
