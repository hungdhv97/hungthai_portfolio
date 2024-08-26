import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFooter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import cplusplus from "../../../public/cplusplus.png";
import csharp from "../../../public/csharp.png";
import datadog from "../../../public/datadog.png";
import django from "../../../public/django.png";
import fast_api from "../../../public/fast-api.png";
import github_actions from "../../../public/github-actions.png";
import github from "../../../public/github.png";
import java from "../../../public/java.png";
import js from "../../../public/js.png";
import kafka from "../../../public/kafka.png";
import kotlin from "../../../public/kotlin.png";
import mongodb from "../../../public/mongodb.png";
import mysql from "../../../public/mysql.png";
import next_js from "../../../public/nextjs.png";
import nginx from "../../../public/nginx.png";
import postgresql from "../../../public/postgresql.png";
import python from "../../../public/python.png";
import react from "../../../public/react.png";
import redis from "../../../public/redis.png";
import spring_boot from "../../../public/spring-boot.png";
import tailwind from "../../../public/tailwindcss.png";
import ts from "../../../public/ts.png";
import vscode from "../../../public/vscode.png";

const skillPage = () => {
    const skills = [
        {
            category: "Programming Languages",
            items: [
                { alt: "js", img: js },
                { alt: "ts", img: ts },
                { alt: "cplusplus", img: cplusplus },
                { alt: "python", img: python },
                { alt: "java", img: java },
                { alt: "kotlin", img: kotlin },
                { alt: "c#", img: csharp },
            ],
        },
        {
            category: "Frontend Frameworks",
            items: [
                { alt: "react", img: react },
                { alt: "next_js", img: next_js },
            ],
        },
        {
            category: "CSS Frameworks",
            items: [{ alt: "tailwind", img: tailwind }],
        },
        {
            category: "Backend Frameworks",
            items: [
                { alt: "django", img: django },
                { alt: "fast-api", img: fast_api },
                { alt: "spring-boot", img: spring_boot },
            ],
        },
        {
            category: "Databases",
            items: [
                { alt: "postgresql", img: postgresql },
                { alt: "redis", img: redis },
                { alt: "mongodb", img: mongodb },
                { alt: "mysql", img: mysql },
            ],
        },
        {
            category: "Tools and Platforms",
            items: [
                { alt: "github", img: github },
                { alt: "vscode", img: vscode },
            ],
        },
        {
            category: "CI/CD",
            items: [{ alt: "github-actions", img: github_actions }],
        },
        {
            category: "Monitoring",
            items: [{ alt: "datadog", img: datadog }],
        },
        {
            category: "Message Brokers",
            items: [{ alt: "kafka", img: kafka }],
        },
        {
            category: "Web Servers",
            items: [{ alt: "nginx", img: nginx }],
        },
    ];

    return (
        <div className="relative flex h-full w-full flex-col items-start gap-5 overflow-hidden">
            <Badge className="gap-2">
                <Lightbulb className="h-5 w-5" />
                My Skills
            </Badge>
            <div className="flex flex-col gap-3">
                <Heading>My Technical Experience/Skills.</Heading>
                <FramerWrapper y={0} x={200}>
                    <p className="w-full text-justify font-poppins text-xl text-primary max-sm:text-lg">
                        I am an experienced full-stack developer with a strong
                        foundation in HTML5, CSS3, JavaScript, and TypeScript. I
                        have deep expertise in building scalable and
                        high-performance web applications using modern
                        frameworks and libraries, including React, Next.js, and
                        Node.js. My skill set encompasses both front-end and
                        back-end development, with a particular emphasis on
                        responsive design, user experience, and seamless
                        integration of server-side logic with client-side
                        functionality. I am proficient in designing and
                        implementing complex web architectures that meet the
                        demands of today&#x27;s dynamic digital landscape.
                    </p>
                </FramerWrapper>
                {skills.map((skillCategory, index) => (
                    <FramerWrapper
                        key={skillCategory.category}
                        className="block"
                        y={100}
                        delay={0.3 + index * 0.02}
                    >
                        <h1
                            className="text_underline relative flex gap-2 font-poppins text-2xl font-semibold
                                text-primary max-sm:text-xl"
                        >
                            {skillCategory.category}
                        </h1>
                        <SkillsFooter items={skillCategory.items} />
                    </FramerWrapper>
                ))}
            </div>
        </div>
    );
};

export default skillPage;
