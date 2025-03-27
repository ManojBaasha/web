import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import { MY_SKILLS } from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type AboutPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = "Manoj's Portfolio";

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	about: 'About',
	blog: "Blog"
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Manoj',
	lastName: 'Elango',
	description:
		"I'm a Computer Engineering senior graduating in June 2025 with 2 years of startup experience. I build AI-powered systems, craft iOS and web applications, and lead one of the largest tech communities in Davis. I'm currently looking for full-time opportunities where I can keep turning bold ideas into real-world impact.",
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/ManojBaasha' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/manojelango/'
		},
		{
			platform: Platform.Twitter,
			link: 'https://www.instagram.com/not_jonam/'
		},
		{
			platform: Platform.Email,
			link: 'melango@ucdavis.edu'
		},
		{
			platform: Platform.Facebook,
			link: 'https://www.facebook.com/manoj.elango.10'
		}
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const ABOUT: AboutPageParams = {
	title: 'About'
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	items: [
		{
			name: 'Software Developer Resume',
			url: '/resume/Software Developer Resume (1).pdf'
		},
		{
			name: 'Hardware Engineer Resume',
			url: '/resume/Hardware Engineer Resume (1).pdf'
		},
		{
			name: 'Mobile Developer Resume',
			url: '/resume/Mobile Developer Resume (8).pdf'
		}
	]
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
