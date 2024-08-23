"use client";
import { useEffect, useState } from "react";
import TextRotator from "./TextRotator";

const HeroTexts = () => {
    const label = "Patrick";
    const [displayText, setDisplayText] = useState(label);
    const charset = "abcdefghijklmnopqrstuvwxyz";

    const randomChars = (length: number) => {
        return Array.from(
            { length },
            () => charset[Math.floor(Math.random() * charset.length)],
        ).join("");
    };

    const scramble = async (input: string) => {
        let prefix = "";
        for (let index = 0; index < input.length; index++) {
            await new Promise(resolve => setTimeout(resolve, 100));
            prefix += input.charAt(index);
            setDisplayText(prefix + randomChars(input.length - prefix.length));
        }
    };

    useEffect(() => {
        setTimeout(() => scramble(label), 300);
    }, []);

    return (
        <>
            <h3 className="font-poppins text-2xl max-sm:text-xl">My Name is</h3>
            <h1 className="name_underline font-rubik text-8xl text-primary max-sm:text-6xl">
                {displayText}
            </h1>
            <TextRotator />
        </>
    );
};
export default HeroTexts;
