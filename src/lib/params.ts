import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Manoj\'s Portfolio';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills'
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
		" I am a junior studying computer engineering at UC Davis. I work as an embedded systems engineer and am passionate about coding and building interesting projects. I'm excited about new technologies and software and spend my free time working on projects and hitting the gym.",
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/ManojBaasha' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/manojelango/'
		},
		{
			platform: Platform.Twitter,
			link: 'https://twitter.com/'
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

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: 'https://docs.google.com/document/d/1sVUSqEDS3ErBbDexqyKRWLj-yd6uxbyzHN3c408fckM/edit?usp=sharing'
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
