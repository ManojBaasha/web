import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export const SKILLS = {
	title: 'Skills',
	items: [
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
			description: "Can't live without it",
			logo: Assets.CSS,
			name: 'CSS'
		}),
		s({
			slug: 'html',
			color: 'orange',
			description:
				"HTML and CSS are like the crafting table and a furnace. I've always used them as long as I can remember",
			logo: Assets.HTML,
			name: 'HTML'
		}),
		s({
			slug: 'sass',
			color: 'pink',
			description: 'Never ever touched it but im pretty sure its exactly like css',
			logo: Assets.Sass,
			name: 'Sass'
		}),
		s({
			slug: 'reactjs',
			color: 'cyan',
			description: 'Experienced in ReactJs. Most of my projects are reactjs',
			logo: Assets.ReactJs,
			name: 'React Js'
		}),
		s({
			slug: 'svelte',
			color: 'orange',
			description:
				"This is the first website I've used Svelte in and not very experienced in it yet. (I am strongly considering Svelte more than ReactJs for my upcoming websites)",
			logo: Assets.Svelte,
			name: 'Svelte'
		}),
		s({
			slug: 'python',
			color: 'green',
			description: 'Never lived a day without python. My most used language',
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
			description: 'Used Dart with flutter in high school and never touched it ever again',
			logo: Assets.Dart,
			name: 'Dart'
		}),
		s({
			slug: 'lua',
			color: 'green',
			description:
				'Made games with Lua in Pico 8. Also learnt basic Lua to customise my Neovim plugins',
			logo: Assets.Lua,
			name: 'Lua'
		}),
		s({
			slug: 'reactnative',
			color: 'blue',
			description: 'Just started using reactnative in 2023. So much more to learn from it',
			logo: Assets.ReactNative,
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
			description:
				'Build basic preprocessed data in pandas for machine learning but never implemented a complete project out of it',
			logo: Assets.Pandas,
			name: 'Pandas'
		}),
		s({
			slug: 'vuejs',
			color: 'green',
			description:
				"I cant tell which javascript framework I use when i copy paste code so Im not exactly sure if I've used this or not. ¯_(ツ)_/¯",
			logo: Assets.VueJs,
			name: 'Vue.js'
		}),
		s({
			slug: 'kotlin',
			color: 'orange',
			description: 'Soon..',
			logo: Assets.Unknown,
			name: 'Kotlin'
		}),
		s({
			slug: 'nodejs',
			color: 'green',
			description: '9/10 times my backened is in NodeJs and not Flask',
			logo: Assets.NodeJs,
			name: 'Node.js'
		}),
		s({
			slug: 'expressjs',
			color: 'black',
			description:
				"Can't tell express js apart from nodeJs they're literally the same thing. Also used it combined with Socket.io to keep a stable connection for chat applications.",
			logo: Assets.ExpressJs,
			name: 'Express.js'
		}),
		s({
			slug: 'firebase',
			color: 'yellow',
			description:
				'Free Hosting + Free DataBase + Free Read/Write so most my projects end up here.',
			logo: Assets.Unknown,
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
			description: 'Exploring Vite through Svelte and ReactJs Codebase',
			logo: Assets.Vite,
			name: 'Vite'
		}),
		s({
			slug: 'java',
			color: 'red',
			description:
				'Learned Java in college and used it for Android development. Familiar with object-oriented programming concepts through Java.',
			logo: Assets.Java,
			name: 'Java'
		}),
		s({
			slug: 'swift',
			color: 'orange',
			description:
				'Started learning Swift for iOS development. Still in the early stages but excited about building iOS apps.',
			logo: Assets.Swift,
			name: 'Swift'
		}),
		s({
			slug: 'ruby',
			color: 'red',
			description:
				'Learned Ruby basics and used it with Ruby on Rails framework. Built a few web applications using Rails.',
			logo: Assets.Ruby,
			name: 'Ruby'
		}),
		s({
			slug: 'php',
			color: 'purple',
			description:
				'Used PHP for backend development in some of my early web projects. Familiar with Laravel framework.',
			logo: Assets.PHP,
			name: 'PHP'
		}),
		s({
			slug: 'perl',
			color: 'blue',
			description:
				'Learned Perl for system administration and text processing tasks. Used it for automation scripts.',
			logo: Assets.Perl,
			name: 'Perl'
		}),
		s({
			slug: 'r',
			color: 'blue',
			description: 'Used R for statistical analysis and data visualization in academic projects.',
			logo: Assets.R,
			name: 'R'
		}),
		s({
			slug: 'matlab',
			color: 'orange',
			description:
				'Used MATLAB for numerical computing and engineering simulations in college projects.',
			logo: Assets.Matlab,
			name: 'MATLAB'
		}),
		s({
			slug: 'scala',
			color: 'red',
			description:
				'Learned Scala for functional programming and big data processing. Used it with Apache Spark.',
			logo: Assets.Scala,
			name: 'Scala'
		}),
		s({
			slug: 'haskell',
			color: 'purple',
			description:
				'Studied Haskell for understanding functional programming concepts. Used it in academic projects.',
			logo: Assets.Haskell,
			name: 'Haskell'
		}),
		s({
			slug: 'elixir',
			color: 'purple',
			description:
				'Learned Elixir for building scalable web applications. Used it with Phoenix framework.',
			logo: Assets.Elixir,
			name: 'Elixir'
		}),
		s({
			slug: 'clojure',
			color: 'green',
			description: 'Explored Clojure for its Lisp-like syntax and functional programming features.',
			logo: Assets.Clojure,
			name: 'Clojure'
		}),
		s({
			slug: 'fsharp',
			color: 'blue',
			description: 'Learned F# for functional programming on the .NET platform.',
			logo: Assets.Fsharp,
			name: 'F#'
		}),
		s({
			slug: 'ocaml',
			color: 'orange',
			description: 'Studied OCaml for its strong type system and functional programming paradigm.',
			logo: Assets.OCaml,
			name: 'OCaml'
		}),
		s({
			slug: 'racket',
			color: 'red',
			description:
				'Used Racket for learning programming language concepts and building domain-specific languages.',
			logo: Assets.Racket,
			name: 'Racket'
		}),
		s({
			slug: 'groovy',
			color: 'green',
			description: 'Used Groovy for scripting and automation tasks in Java environments.',
			logo: Assets.Groovy,
			name: 'Groovy'
		}),
		s({
			slug: 'objectivec',
			color: 'blue',
			description: 'Learned Objective-C for iOS development before Swift became mainstream.',
			logo: Assets.ObjectiveC,
			name: 'Objective-C'
		}),
		s({
			slug: 'assembly',
			color: 'gray',
			description:
				'Studied Assembly language for understanding low-level programming and computer architecture.',
			logo: Assets.Assembly,
			name: 'Assembly'
		}),
		s({
			slug: 'shell',
			color: 'green',
			description: 'Proficient in shell scripting for system administration and automation tasks.',
			logo: Assets.Shell,
			name: 'Shell'
		}),
		s({
			slug: 'powershell',
			color: 'blue',
			description: 'Used PowerShell for Windows system administration and automation.',
			logo: Assets.Powershell,
			name: 'PowerShell'
		}),
		s({
			slug: 'rust',
			color: 'orange',
			description:
				'Learning Rust for systems programming and building high-performance applications.',
			logo: Assets.Rust,
			name: 'Rust'
		}),
		s({
			slug: 'go',
			color: 'blue',
			description: 'Used Go for building concurrent applications and microservices.',
			logo: Assets.Go,
			name: 'Go'
		}),
		s({
			slug: 'zig',
			color: 'yellow',
			description: 'Exploring Zig as a modern systems programming language.',
			logo: Assets.Zig,
			name: 'Zig'
		}),
		s({
			slug: 'nim',
			color: 'yellow',
			description: 'Learning Nim for its performance and metaprogramming capabilities.',
			logo: Assets.Nim,
			name: 'Nim'
		}),
		s({
			slug: 'crystal',
			color: 'black',
			description: 'Used Crystal for building fast web applications with Ruby-like syntax.',
			logo: Assets.Crystal,
			name: 'Crystal'
		}),
		{
			slug: 'web-application',
			color: '#4a90e2',
			description: 'Projects focused on web development and web-based solutions',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
			name: 'Web Application'
		},
		{
			slug: 'mobile-application',
			color: '#ff69b4',
			description: 'iOS and Android applications',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
			name: 'Mobile Application'
		},
		{
			slug: 'embedded-systems',
			color: '#32cd32',
			description: 'Hardware and firmware development',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/capacitorjs/capacitorjs-original.svg',
			name: 'Embedded Systems'
		},
		{
			slug: 'iot',
			color: '#ff4500',
			description: 'Internet of Things and connected devices',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/labview/labview-original.svg',
			name: 'IoT'
		},
		{
			slug: 'computer-vision',
			color: '#4169e1',
			description: 'Image processing and computer vision applications',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
			name: 'Computer Vision'
		},
		{
			slug: 'blockchain',
			color: '#5e95e3',
			description: 'Web3 and blockchain-related projects',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vault/vault-original.svg',
			name: 'Blockchain'
		},
		{
			slug: 'game-development',
			color: '#ffa500',
			description: 'Game design and development',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg',
			name: 'Game Development'
		},
		{
			slug: 'discord-bot',
			color: '#800080',
			description: 'Discord bot development',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discord/discord-original.svg',
			name: 'Discord Bot'
		},
		{
			slug: 'open-source',
			color: '#20b2aa',
			description: 'Open source projects and contributions',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
			name: 'Open Source'
		},
		{
			slug: 'community',
			color: '#9370db',
			description: 'Projects focused on community engagement',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg',
			name: 'Community'
		},
		{
			slug: 'education',
			color: '#00ffff',
			description: 'Educational tools and platforms',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
			name: 'Education'
		},
		{
			slug: 'real-time-communication',
			color: '#ff6347',
			description: 'Real-time data and communication systems',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
			name: 'Real-time Communication'
		},
		{
			slug: 'hardware-design',
			color: '#8b008b',
			description: 'PCB design and hardware engineering',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg',
			name: 'Hardware Design'
		},
		{
			slug: 'signal-processing',
			color: '#ff69b4',
			description: 'Audio and signal processing applications',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg',
			name: 'Signal Processing'
		},
		{
			slug: 'medical-applications',
			color: '#ff0000',
			description: 'Healthcare and medical technology',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
			name: 'Medical Applications'
		},
		{
			slug: 'data-analysis',
			color: '#4169e1',
			description: 'Data processing and visualization',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
			name: 'Data Analysis'
		},
		{
			slug: 'security',
			color: '#ff4500',
			description: 'Security systems and applications',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
			name: 'Security'
		},
		{
			slug: 'cloud-integration',
			color: '#008080',
			description: 'Cloud services and integration',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
			name: 'Cloud Integration'
		},
		{
			slug: 'personal-project',
			color: '#4a90e2',
			description: 'Personal development and portfolio projects',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
			name: 'Personal Project'
		},
		{
			slug: 'development-tools',
			color: '#20b2aa',
			description: 'Development tools and utilities',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
			name: 'Development Tools'
		},
		{
			slug: 'testing-development',
			color: '#9370db',
			description: 'Testing and development frameworks',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
			name: 'Testing & Development'
		},
		{
			slug: 'automation',
			color: '#ff6347',
			description: 'Automation and scripting projects',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg',
			name: 'Automation'
		}
	]
};

export const MY_SKILLS = SKILLS.items;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
