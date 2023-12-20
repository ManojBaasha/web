import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'js',
		color: 'yellow',
		description:
			'I made my first few websites in pure vanilla javascript and I have tried solving a few problems of leetcode in javascript but that did not go well.( I still use python for leetcode)',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'ts',
		color: 'blue',
		description:
			'Not very good with typescript. Never built any code in Typescript, only modified existing Typescript code from open source templates.',
		logo: Assets.TypeScript,
		name: 'Typescript'
	}),
	s({
		slug: 'css',
		color: 'blue',
		description:
			'Can\'t live without it',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description:
			'HTML and CSS are like the crafting table and a furnace. I\'ve always used them as long as I can remember',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'sass',
		color: 'pink',
		description:
			'Never ever touched it but im pretty sure its exactly like css',
		logo: Assets.Sass,
		name: 'Sass'
	}),
	s({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'Experienced in ReactJs. Most of my projects are reactjs',
		logo: Assets.ReactJs,
		name: 'React Js'
	}),
	s({
		slug: 'svelte',
		color: 'orange',
		description: 'This is the first website I\'ve used Svelte in and not very experienced in it yet. (I am strongly considering Svelte more than ReactJs for my upcoming websites)',
		logo: Assets.Svelte,
		name: 'Svelte'
	}),
	s({
		slug: 'python',
		color: 'green',
		description:
			'Never lived a day without python. My most used language',
		logo: Assets.Python,
		name: 'Python'
	}),

	s({
		slug: 'c',
		color: 'gray',
		description:
			'Used it to code for embedded systems. (The very low language with too pointers and memory allocation kind-of C.',
		logo: Assets.C,
		name: 'C'
	}),

	s({
		slug: 'cpp',
		color: 'darkblue',
		description:
			'Most my college courses were in C++. Familiar with C++ more than C (which is a good thing coz C++ is waay harder)',
		logo: Assets.Cpp,
		name: 'C++'
	}),

	s({
		slug: 'flutter',
		color: 'blue',
		description:
			'Only made one Mobile App in high school and never touched this language ever again.',
		logo: Assets.Flutter,
		name: 'Flutter'
	}),

	s({
		slug: 'dart',
		color: 'blue',
		description:
			'Used Dart with flutter in high school and never touched it ever again',
		logo: Assets.Dart,
		name: 'Dart'
	}),

	s({
		slug: 'lua',
		color: 'green',
		description:
			'Made games with Lua in Pico 8. Also learnt basic Lua to customise my Neovim plugins',
		logo: Assets.Unknown,
		name: 'Lua'
	}),

	s({
		slug: 'reactnative',
		color: 'blue',
		description:
			'Just started using reactnative in 2023. So much more to learn from it',
		logo: Assets.Unknown,
		name: 'React Native'
	}),

	s({
		slug: 'csharp',
		color: 'purple',
		description:
			'Created a snake game in Unity using C# when i had an interest in Game Developement. Building Desktop Applications in Visual Studio in WindowsForms using C#',
		logo: Assets.Csharp,
		name: 'Csharp'
	}),

	s({
		slug: 'bootstrap',
		color: 'purple',
		description:
			'Worked with bootstrap only in open source templates. Never built anything directly with it myself',
		logo: Assets.Bootstrap,
		name: 'Bootstrap'
	}),
	s({
		slug: 'flask',
		color: 'black',
		description:
			'Learnt and implemented it in a hackathon with my team and never touched the language after.',
		logo: Assets.Flask,
		name: 'Flask'
	}),
	s({
		slug: 'numpy',
		color: 'yellow',
		description: 'NumPy is a powerful library for numerical and matrix operations in Python.',
		logo: Assets.Numpy,
		name: 'NumPy'
	}),
	s({
		slug: 'pandas',
		color: 'blue',
		description: 'Build basic preprocessed data in pandas for machine learning but never implemented a complete project out of it',
		logo: Assets.Pandas,
		name: 'Pandas'
	}),
	s({
		slug: 'vuejs',
		color: 'green',
		description:
			'I cant tell which javascript framework I use when i copy paste code so Im not exactly sure if I\'ve used this or not. ¯\_(ツ)_/¯',
		logo: Assets.VueJs,
		name: 'Vue.js'
	}),
	s({
		slug: 'kotlin',
		color: 'orange',
		description:
			'Soon..',
		logo: Assets.Kotlin,
		name: 'Kotlin'
	}),
	s({
		slug: 'nodejs',
		color: 'green',
		description:
			"9/10 times my backened is in NodeJs and not Flask",
		logo: Assets.NodeJs,
		name: 'Node.js'
	}),
	s({
		slug: 'expressjs',
		color: 'black',
		description:
			'Can\'t tell express js apart from nodeJs they\'re literally the same thing. Also used it combined with Socket.io to keep a stable connection for chat applications.',
		logo: Assets.ExpressJs,
		name: 'Express.js'
	}),
	s({
		slug: 'firebase',
		color: 'yellow',
		description:
			'Free Hosting + Free DataBase + Free Read/Write so most my projects end up here.',
		logo: Assets.Firebase,
		name: 'Firebase'
	}),
	s({
		slug: 'mongodb',
		color: 'green',
		description:
			'Only used it coz I was curious if it was better than firebase but nope Firebase is waay more convenient (atleast for a beginner like me)',
		logo: Assets.MongoDB,
		name: 'MongoDB'
	}),
	s({
		slug: 'tailwind',
		color: 'blue',
		description:
			'Havent implemented tailwind myself but definitely copied a whole lot of buttons and cards which that were made in Tailwind to add to my websites.',
		logo: Assets.Tailwind,
		name: 'Tailwind CSS'
	}),
	s({
		slug: 'vite',
		color: 'blue',
		description:
			'Exploring Vite through Svelte and ReactJs Codebase',
		logo: Assets.Vite,
		name: 'Vite'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
