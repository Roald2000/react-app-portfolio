import {
    AiOutlineLinkedin,
    AiOutlineMail,
    AiOutlinePhone,
} from "react-icons/ai";

import { SiMysql, SiExpress, SiTailwindcss, SiJavascript, SiNodedotjs, SiCss3, SiHtml5, SiPrisma, SiPhp, SiNodemon, SiDaisyui, SiReact } from "react-icons/si";

export const info = [
    {
        name: "Gmail",
        content: "roalddelacruz2000@gmail.com",
        icon: <AiOutlineMail size={24} />,
    },
    {
        name: "Phone",
        content: <a href="tel:+639925744271">
            <span className="p-1 rounded bg-black text-white mr-1">+63</span>
            <p className="inline">992-574-4271</p>
        </a>,
        icon: <AiOutlinePhone size={24} />,
    },
    {
        name: "LinkedIn",
        content: <a href="https://linkedin.com/in/roald-dela-cruz-6a180127a" className=" link-secondary" target="_blank">View Profile</a>,
        link: "https://linkedin.com/in/roald-dela-cruz-6a180127a",
        icon: <AiOutlineLinkedin size={24} />,
    },
];


export const skills = [
    {
        name: 'Web Development',
        tech: {
            lang: [
                { name: 'HTML', icon: <SiHtml5 size={36} /> },
                { name: 'CSS', icon: <SiCss3 size={36} /> },
                { name: 'JavaScript', icon: <SiJavascript size={36} /> },
                { name: 'PHP', icon: <SiPhp size={36} /> },
                { name: 'MySQL', icon: <SiMysql size={36} /> },
            ],
            front_stack: [
                { name: 'React', icon: <SiReact size={36} /> },
                { name: 'TailwindCSS', icon: <SiTailwindcss size={36} /> },
                { name: 'DaisyUI', icon: <SiDaisyui size={36} /> },
            ],
            back_stack: [
                { name: 'NodeJs', icon: <SiNodedotjs size={36} /> },
                { name: 'ExpressJs', icon: <SiExpress size={36} /> },
                { name: 'Nodemon', icon: <SiNodemon size={36} /> },
                { name: 'Prisma', icon: <SiPrisma size={36} /> },
                { name: 'MySQL - DB', icon: <SiMysql size={36} /> },
            ],
        }
    },
]


// console.log(skills);


