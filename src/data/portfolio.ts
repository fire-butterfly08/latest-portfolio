import type { IconType } from 'react-icons';
import { BiLogoTypescript } from 'react-icons/bi';
import { DiMongodb } from 'react-icons/di';
import {
	FaBootstrap,
	FaFigma,
	FaFilePdf,
	FaGitAlt,
	FaGithub,
	FaJs,
	FaNodeJs,
	FaPython,
	FaReact
} from "react-icons/fa";

import { IoMailOutline } from 'react-icons/io5';
import {
	Si1Panel,
	SiDocker,
	SiExpress,
	SiFastify,
	SiJenkins,
	SiMui,
	SiMysql,
	SiPostgresql,
	SiPostman,
	SiRedux,
	SiShadcnui,
	SiTailwindcss
} from "react-icons/si";

import { TbBrandNextjs } from 'react-icons/tb';

export type SocialLink = {
	label: string;
	href: string;
	icon: IconType;
	iconColor: string;
	glowColor: string;
};

export type NavButton = {
	label: string;
	href: string;
	className: string;
};

export type TimelineItem = {
	role: string;
	org: string;
	period: string;
	bullets: string[];
};

export type TimelineSection = {
	heading: string;
	items: TimelineItem[];
};

export type TechItem = {
	label: string;
	icon: IconType;
	iconColor: string;
	glowColor: string;
};

export type TechGroup = {
	heading: string;
	items: TechItem[];
};

export const personal = {
	name: 'Efren',
	avatar:'img/efren.png',
	fullName: 'Efren Fernandez',
	title: 'Full Stack Developer',
	greeting: 'Hi, I am',
	repoUrl: '',
	repoStarLabel: 'Amazing Portfolio',
	showRepoStar: true,
};

export const socialLinks: SocialLink[] = [
	{
		label: 'Resume',
		href: 'https://drive.google.com/file/d/1kNBi04Sp_FOw1zKK8iwnYZi6EUJ8wbp8/view?usp=sharing',
		icon: FaFilePdf,
		iconColor: 'rgb(0, 160, 220)',
		glowColor: 'rgba(0, 160, 220, 0.6)',
	},
	{
		label: 'Email',
		href: 'mailto:marijeanglover44@gmail.com',
		icon: IoMailOutline,
		iconColor: 'rgb(18, 122, 209)',
		glowColor: 'rgba(18, 122, 209, 0.7)',
	},
];

export const navButtons: NavButton[] = [
	{ label: 'About Me', href: '/#about-me', className: 'first' },
	{ label: 'Tech', href: '/#tech-stack', className: 'sec' },
];

export const about = {
	section: { title: 'About', subtitle: 'ME' },
	intro: [
		"Hey, I'm Efren Fernandez.",
		"Senior Full-Stack Developer with 6 years of experience building scalable web applications, SaaS platforms, and business solutions. Self-taught engineer since 2017 with 15+ production deployments.",
		"I like solving problems, learning new things, and experimenting with different technologies. When I'm not coding, I'm probably working on a side project or exploring something new.",
	],
	timeline: [
		{
			heading: 'Experience',
			items: [
				{
					role: 'Full Stack Developer',
					org: 'as part of my job',
					period: 'Feb, 2021 – May, 2023',
					bullets: [
						'Accenture Philippines – Mandaluyong, Metro Manila — Senior Full-Stack Developer(contract)',
						'Independent Full-Stack Developer (Self - Employed) – Remote — Full Stack Developer',
						],
				},
			],
		},
		{
			heading: 'Projects',
			items: [
				{
					role: 'Senior Full Stack Developer',
					org: 'With My Team',
					period: 'June 2023 – Feb 2026',
					bullets: [
						'SaaS Business Dashboard Platform | React, Node.js, PostgreSQL, Docker, CI/CD',
						'E‐Commerce Admin Dashboard | React, Redux, Node.js, PostgreSQL, Tailwind CSS, AWS.',
						'Data Processing & Reporting Tool | MongoDB, Express.js, React, Node.js, Redis',
						'Mobile & Cross-Platform Prototype | React Native, Node.js, MongoDB, Firebase'
					],
				},
			],
		},
		{
			heading: 'Education',
			items: [
				{
					role: 'Bachelor`s Degree in Computer Science',
					org: 'Mapúa University',
					period: '2016 - 2020',
					bullets: [],
				},
			],
		},
	] satisfies TimelineSection[],
};

export const techStack = {
	section: { title: 'Tech', subtitle: 'SET' },
	groups: [
		{
			heading: 'UI & Styling',
			items: [
				{
					label: 'Material UI',
					icon: SiMui,
					iconColor: 'rgb(0, 127, 255)',
					glowColor: 'rgba(0, 127, 255, 0.6)',
				},
				{
					label: 'ShadCn UI',
					icon: SiShadcnui,
					iconColor: 'rgb(255, 255, 255)',
					glowColor: 'rgba(255, 255, 255, 0.4)',
				},
				{
					label: 'ShadCn UI',
					icon: Si1Panel,
					iconColor: 'rgb(0, 255, 242)',
					glowColor: 'rgba(0, 255, 242, 0.4)',
				},
				{
					label: 'Tailwind CSS',
					icon: SiTailwindcss,
					iconColor: 'rgb(5, 148, 173)',
					glowColor: 'rgba(5, 148, 173, 0.7)',
				},
				{
					label: 'Bootstrap',
					icon: FaBootstrap,
					iconColor: 'rgb(125, 17, 248)',
					glowColor: 'rgba(125, 17, 248, 0.75)',
				},
			],
		},
		{
			heading: 'Languages & Frameworks',
			items: [
				{
					label: 'JavaScript',
					icon: FaJs,
					iconColor: 'rgb(255, 251, 0)',
					glowColor: 'rgba(251, 255, 0, 0.4)',
				},
				{
					label: 'Python',
					icon: FaPython,
					iconColor: 'rgb(3, 184, 255)',
					glowColor: 'rgba(3, 184, 255, 0.4)',
				},
				{
					label: 'Next JS',
					icon: TbBrandNextjs,
					iconColor: 'rgb(255, 255, 255)',
					glowColor: 'rgba(255, 255, 255, 0.4)',
				},
				{
					label: 'React JS',
					icon: FaReact,
					iconColor: 'rgb(97, 219, 251)',
					glowColor: 'rgba(97, 219, 251, 0.6)',
				},
				{
					label: 'Node JS',
					icon: FaNodeJs,
					iconColor: 'rgb(104, 160, 99)',
					glowColor: 'rgb(104, 160, 99)',
				},
				{
					label: 'TypeScript',
					icon: BiLogoTypescript,
					iconColor: 'rgb(0, 122, 204)',
					glowColor: 'rgba(0, 122, 204, 0.6)',
				},
				{
					label: 'Fastify',
					icon: SiFastify,
					iconColor: 'rgb(255, 0, 0)',
					glowColor: 'rgba(255, 0, 0, 0.4)',
				},
				{
					label: 'Express JS',
					icon: SiExpress,
					iconColor: 'rgb(255, 0, 221)',
					glowColor: 'rgba(255, 0, 221, 0.4)',
				},
				{
					label: 'Redux',
					icon: SiRedux,
					iconColor: 'rgb(0, 255, 21)',
					glowColor: 'rgba(0, 255, 21, 0.4)',
				},
			],
		},
		{
			heading: 'Databases & Tools',
			items: [
				{
					label: 'SiPostgresql ',
					icon: SiPostgresql,
					iconColor: 'rgb(230, 50, 42)',
					glowColor: 'rgba(241, 83, 75, 0.5)',
				},
				{
					label: 'MongoDB',
					icon: DiMongodb,
					iconColor: 'rgb(0, 237, 100)',
					glowColor: 'rgba(0, 237, 100, 0.7)',
				},
				{
					label: 'MySQL',
					icon: SiMysql,
					iconColor: 'rgb(0, 110, 255)',
					glowColor: 'rgba(0, 110, 255, 0.75)',
				},
				{
					label: 'Docker',
					icon: SiDocker,
					iconColor: 'rgb(0, 195, 255)',
					glowColor: 'rgba(0, 195, 255, 0.75)',
				},
				{
					label: 'Git',
					icon: FaGitAlt,
					iconColor: 'rgb(221, 49, 19)',
					glowColor: 'rgba(221, 49, 19, 0.75)',
				},
				{
					label: 'GitHub',
					icon: FaGithub,
					iconColor: 'rgb(255, 255, 255)',
					glowColor: 'rgba(255, 255, 255, 0.75)',
				},
				{
					label: 'Postman',
					icon: SiPostman,
					iconColor: 'rgb(255, 72, 0)',
					glowColor: 'rgba(255, 72, 0, 0.75)',
				},
				{
					label: 'FaFigma',
					icon: FaFigma,
					iconColor: 'rgb(255, 0, 55)',
					glowColor: 'rgba(255, 0, 55, 0.75)',
				},
				{
					label: 'CI/CD',
					icon: SiJenkins,
					iconColor: 'rgb(49, 46, 230)',
					glowColor: 'rgba(49, 46, 230, 0.75)',
				},
			],
		},
	] satisfies TechGroup[],
};
