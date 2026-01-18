import { w as ue } from './BRf0lue5.js';
import { a as pe, s as me } from './D6uY3Cwt.js';
const re = '@riadh-adrani-theme',
	fe = (e) => {
		localStorage.setItem(re, JSON.stringify(e));
	},
	le = ue(!1),
	ne = (e) =>
		le.update((Q) => {
			let v;
			const w = typeof e == 'boolean' ? e : !Q;
			return (
				fe(w),
				(v = document.querySelector(':root')) == null ||
					v.setAttribute('data-theme', w ? 'dark' : 'light'),
				w
			);
		}),
	Le = () => {
		const e = localStorage.getItem(re);
		ne(e ? JSON.parse(e) : !0);
	},
	ve = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons',
	A = (e, Q, w) => `${ve}/${e}/${e}-${Q}`,
	r = {
		JavaScript: A('javascript', 'original.svg'),
		TypeScript: A('typescript', 'original.svg'),
		Python: A('python', 'original.svg'),
		Java: A('java', 'original.svg'),
		C: A('c', 'original.svg'),
		Cpp: A('cplusplus', 'original.svg'),
		Csharp: A('csharp', 'original.svg'),
		Swift: A('swift', 'original.svg'),
		Ruby: A('ruby', 'original.svg'),
		PHP: A('php', 'original.svg'),
		Perl: A('perl', 'original.svg'),
		R: A('r', 'original.svg'),
		Matlab: A('matlab', 'original.svg'),
		Scala: A('scala', 'original.svg'),
		Haskell: A('haskell', 'original.svg'),
		Elixir: A('elixir', 'original.svg'),
		Clojure: A('clojure', 'original.svg'),
		Fsharp: A('fsharp', 'original.svg'),
		OCaml: A('ocaml', 'original.svg'),
		Racket: A('racket', 'original.svg'),
		Lua: A('lua', 'original.svg'),
		Groovy: A('groovy', 'original.svg'),
		ObjectiveC: A('objectivec', 'original.svg'),
		Assembly: A('assembly', 'original.svg'),
		Shell: A('bash', 'original.svg'),
		Powershell: A('powershell', 'original.svg'),
		Rust: A('rust', 'original.svg'),
		Go: A('go', 'original.svg'),
		Zig: A('zig', 'original.svg'),
		Nim: A('nim', 'original.svg'),
		Crystal: A('crystal', 'original.svg'),
		HTML: A('html5', 'original.svg'),
		CSS: A('css3', 'original.svg'),
		Sass: A('sass', 'original.svg'),
		Tailwind: A('tailwindcss', 'original.svg'),
		Bootstrap: A('bootstrap', 'original.svg'),
		ReactJs: A('react', 'original.svg'),
		VueJs: A('vuejs', 'original.svg'),
		Svelte: A('svelte', 'original.svg'),
		NodeJs: A('nodejs', 'original.svg'),
		ExpressJs: A('express', 'original.svg'),
		Flask: A('flask', 'original.svg'),
		ReactNative: A('react', 'original.svg'),
		Flutter: A('flutter', 'original.svg'),
		Dart: A('dart', 'original.svg'),
		MongoDB: A('mongodb', 'original.svg'),
		Numpy: A('numpy', 'original.svg'),
		Pandas: A('pandas', 'original.svg'),
		Vite: A('vitejs', 'original.svg'),
		Unknown: A('devicon', 'original.svg')
	};
let ce;
le.subscribe((e) => (ce = e));
const Ce = (e) => (e ? (typeof e == 'string' ? e : ce ? e.dark : e.light) : Ce(r.Unknown)),
	l = (e) => e,
	be = {
		title: 'Skills',
		items: [
			l({
				slug: 'js',
				color: 'yellow',
				description:
					'I made my first few websites in pure vanilla javascript and I have tried solving a few problems of leetcode in javascript but that did not go well.( I still use python for leetcode)',
				logo: r.JavaScript,
				name: 'Javascript'
			}),
			l({
				slug: 'ts',
				color: 'blue',
				description:
					'Not very good with typescript. Never built any code in Typescript, only modified existing Typescript code from open source templates.',
				logo: r.TypeScript,
				name: 'Typescript'
			}),
			l({
				slug: 'css',
				color: 'blue',
				description: "Can't live without it",
				logo: r.CSS,
				name: 'CSS'
			}),
			l({
				slug: 'html',
				color: 'orange',
				description:
					"HTML and CSS are like the crafting table and a furnace. I've always used them as long as I can remember",
				logo: r.HTML,
				name: 'HTML'
			}),
			l({
				slug: 'sass',
				color: 'pink',
				description: 'Never ever touched it but im pretty sure its exactly like css',
				logo: r.Sass,
				name: 'Sass'
			}),
			l({
				slug: 'reactjs',
				color: 'cyan',
				description: 'Experienced in ReactJs. Most of my projects are reactjs',
				logo: r.ReactJs,
				name: 'React Js'
			}),
			l({
				slug: 'svelte',
				color: 'orange',
				description:
					"This is the first website I've used Svelte in and not very experienced in it yet. (I am strongly considering Svelte more than ReactJs for my upcoming websites)",
				logo: r.Svelte,
				name: 'Svelte'
			}),
			l({
				slug: 'python',
				color: 'green',
				description: 'Never lived a day without python. My most used language',
				logo: r.Python,
				name: 'Python'
			}),
			l({
				slug: 'c',
				color: 'gray',
				description:
					'Used it to code for embedded systems. (The very low language with too pointers and memory allocation kind-of C.',
				logo: r.C,
				name: 'C'
			}),
			l({
				slug: 'cpp',
				color: 'darkblue',
				description:
					'Most my college courses were in C++. Familiar with C++ more than C (which is a good thing coz C++ is waay harder)',
				logo: r.Cpp,
				name: 'C++'
			}),
			l({
				slug: 'flutter',
				color: 'blue',
				description:
					'Only made one Mobile App in high school and never touched this language ever again.',
				logo: r.Flutter,
				name: 'Flutter'
			}),
			l({
				slug: 'dart',
				color: 'blue',
				description: 'Used Dart with flutter in high school and never touched it ever again',
				logo: r.Dart,
				name: 'Dart'
			}),
			l({
				slug: 'lua',
				color: 'green',
				description:
					'Made games with Lua in Pico 8. Also learnt basic Lua to customise my Neovim plugins',
				logo: r.Lua,
				name: 'Lua'
			}),
			l({
				slug: 'reactnative',
				color: 'blue',
				description: 'Just started using reactnative in 2023. So much more to learn from it',
				logo: r.ReactNative,
				name: 'React Native'
			}),
			l({
				slug: 'csharp',
				color: 'purple',
				description:
					'Created a snake game in Unity using C# when i had an interest in Game Developement. Building Desktop Applications in Visual Studio in WindowsForms using C#',
				logo: r.Csharp,
				name: 'Csharp'
			}),
			l({
				slug: 'bootstrap',
				color: 'purple',
				description:
					'Worked with bootstrap only in open source templates. Never built anything directly with it myself',
				logo: r.Bootstrap,
				name: 'Bootstrap'
			}),
			l({
				slug: 'flask',
				color: 'black',
				description:
					'Learnt and implemented it in a hackathon with my team and never touched the language after.',
				logo: r.Flask,
				name: 'Flask'
			}),
			l({
				slug: 'numpy',
				color: 'yellow',
				description: 'NumPy is a powerful library for numerical and matrix operations in Python.',
				logo: r.Numpy,
				name: 'NumPy'
			}),
			l({
				slug: 'pandas',
				color: 'blue',
				description:
					'Build basic preprocessed data in pandas for machine learning but never implemented a complete project out of it',
				logo: r.Pandas,
				name: 'Pandas'
			}),
			l({
				slug: 'vuejs',
				color: 'green',
				description:
					"I cant tell which javascript framework I use when i copy paste code so Im not exactly sure if I've used this or not. ¯_(ツ)_/¯",
				logo: r.VueJs,
				name: 'Vue.js'
			}),
			l({
				slug: 'kotlin',
				color: 'orange',
				description: 'Soon..',
				logo: r.Unknown,
				name: 'Kotlin'
			}),
			l({
				slug: 'nodejs',
				color: 'green',
				description: '9/10 times my backened is in NodeJs and not Flask',
				logo: r.NodeJs,
				name: 'Node.js'
			}),
			l({
				slug: 'expressjs',
				color: 'black',
				description:
					"Can't tell express js apart from nodeJs they're literally the same thing. Also used it combined with Socket.io to keep a stable connection for chat applications.",
				logo: r.ExpressJs,
				name: 'Express.js'
			}),
			l({
				slug: 'firebase',
				color: 'yellow',
				description:
					'Free Hosting + Free DataBase + Free Read/Write so most my projects end up here.',
				logo: r.Unknown,
				name: 'Firebase'
			}),
			l({
				slug: 'mongodb',
				color: 'green',
				description:
					'Only used it coz I was curious if it was better than firebase but nope Firebase is waay more convenient (atleast for a beginner like me)',
				logo: r.MongoDB,
				name: 'MongoDB'
			}),
			l({
				slug: 'tailwind',
				color: 'blue',
				description:
					'Havent implemented tailwind myself but definitely copied a whole lot of buttons and cards which that were made in Tailwind to add to my websites.',
				logo: r.Tailwind,
				name: 'Tailwind CSS'
			}),
			l({
				slug: 'vite',
				color: 'blue',
				description: 'Exploring Vite through Svelte and ReactJs Codebase',
				logo: r.Vite,
				name: 'Vite'
			}),
			l({
				slug: 'java',
				color: 'red',
				description:
					'Learned Java in college and used it for Android development. Familiar with object-oriented programming concepts through Java.',
				logo: r.Java,
				name: 'Java'
			}),
			l({
				slug: 'swift',
				color: 'orange',
				description:
					'Started learning Swift for iOS development. Still in the early stages but excited about building iOS apps.',
				logo: r.Swift,
				name: 'Swift'
			}),
			l({
				slug: 'ruby',
				color: 'red',
				description:
					'Learned Ruby basics and used it with Ruby on Rails framework. Built a few web applications using Rails.',
				logo: r.Ruby,
				name: 'Ruby'
			}),
			l({
				slug: 'php',
				color: 'purple',
				description:
					'Used PHP for backend development in some of my early web projects. Familiar with Laravel framework.',
				logo: r.PHP,
				name: 'PHP'
			}),
			l({
				slug: 'perl',
				color: 'blue',
				description:
					'Learned Perl for system administration and text processing tasks. Used it for automation scripts.',
				logo: r.Perl,
				name: 'Perl'
			}),
			l({
				slug: 'r',
				color: 'blue',
				description: 'Used R for statistical analysis and data visualization in academic projects.',
				logo: r.R,
				name: 'R'
			}),
			l({
				slug: 'matlab',
				color: 'orange',
				description:
					'Used MATLAB for numerical computing and engineering simulations in college projects.',
				logo: r.Matlab,
				name: 'MATLAB'
			}),
			l({
				slug: 'scala',
				color: 'red',
				description:
					'Learned Scala for functional programming and big data processing. Used it with Apache Spark.',
				logo: r.Scala,
				name: 'Scala'
			}),
			l({
				slug: 'haskell',
				color: 'purple',
				description:
					'Studied Haskell for understanding functional programming concepts. Used it in academic projects.',
				logo: r.Haskell,
				name: 'Haskell'
			}),
			l({
				slug: 'elixir',
				color: 'purple',
				description:
					'Learned Elixir for building scalable web applications. Used it with Phoenix framework.',
				logo: r.Elixir,
				name: 'Elixir'
			}),
			l({
				slug: 'clojure',
				color: 'green',
				description:
					'Explored Clojure for its Lisp-like syntax and functional programming features.',
				logo: r.Clojure,
				name: 'Clojure'
			}),
			l({
				slug: 'fsharp',
				color: 'blue',
				description: 'Learned F# for functional programming on the .NET platform.',
				logo: r.Fsharp,
				name: 'F#'
			}),
			l({
				slug: 'ocaml',
				color: 'orange',
				description:
					'Studied OCaml for its strong type system and functional programming paradigm.',
				logo: r.OCaml,
				name: 'OCaml'
			}),
			l({
				slug: 'racket',
				color: 'red',
				description:
					'Used Racket for learning programming language concepts and building domain-specific languages.',
				logo: r.Racket,
				name: 'Racket'
			}),
			l({
				slug: 'groovy',
				color: 'green',
				description: 'Used Groovy for scripting and automation tasks in Java environments.',
				logo: r.Groovy,
				name: 'Groovy'
			}),
			l({
				slug: 'objectivec',
				color: 'blue',
				description: 'Learned Objective-C for iOS development before Swift became mainstream.',
				logo: r.ObjectiveC,
				name: 'Objective-C'
			}),
			l({
				slug: 'assembly',
				color: 'gray',
				description:
					'Studied Assembly language for understanding low-level programming and computer architecture.',
				logo: r.Assembly,
				name: 'Assembly'
			}),
			l({
				slug: 'shell',
				color: 'green',
				description:
					'Proficient in shell scripting for system administration and automation tasks.',
				logo: r.Shell,
				name: 'Shell'
			}),
			l({
				slug: 'powershell',
				color: 'blue',
				description: 'Used PowerShell for Windows system administration and automation.',
				logo: r.Powershell,
				name: 'PowerShell'
			}),
			l({
				slug: 'rust',
				color: 'orange',
				description:
					'Learning Rust for systems programming and building high-performance applications.',
				logo: r.Rust,
				name: 'Rust'
			}),
			l({
				slug: 'go',
				color: 'blue',
				description: 'Used Go for building concurrent applications and microservices.',
				logo: r.Go,
				name: 'Go'
			}),
			l({
				slug: 'zig',
				color: 'yellow',
				description: 'Exploring Zig as a modern systems programming language.',
				logo: r.Zig,
				name: 'Zig'
			}),
			l({
				slug: 'nim',
				color: 'yellow',
				description: 'Learning Nim for its performance and metaprogramming capabilities.',
				logo: r.Nim,
				name: 'Nim'
			}),
			l({
				slug: 'crystal',
				color: 'black',
				description: 'Used Crystal for building fast web applications with Ruby-like syntax.',
				logo: r.Crystal,
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
	},
	ye = be.items,
	f = (...e) => ye.filter((Q) => e.includes(Q.slug));
var j = ((e) => (
		(e.GitHub = 'github'),
		(e.StackOverflow = 'stackoverflow'),
		(e.Twitter = 'twitter'),
		(e.Linkedin = 'linkedin'),
		(e.Email = 'email'),
		(e.Facebook = 'facebook'),
		(e.Youtube = 'youtube'),
		e
	))(j || {}),
	H = ((e) => (
		(e.FullTime = 'Full-time'),
		(e.PartTime = 'Part-time'),
		(e.SelfEmployed = 'Self-employed'),
		(e.Freelance = 'Freelance'),
		(e.Contract = 'Contract'),
		(e.Internship = 'Internship'),
		e
	))(H || {});
const we =
		'data:image/png;base64,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',
	se = '' + new URL('../assets/ucdavis.HE6h90nn.png', import.meta.url).href,
	ae = '' + new URL('../assets/gdsc.xct4cwc2.png', import.meta.url).href,
	Ee = '' + new URL('../assets/resilientdb.BhnbttRW.png', import.meta.url).href,
	Qe = '' + new URL('../assets/sachacks.C5HDsCRF.png', import.meta.url).href,
	Be = '' + new URL('../assets/swiftlogo.DO7HcngW.png', import.meta.url).href,
	Ie = [
		{
			slug: 'gdsc-president',
			company: 'Google Developer Student Club @UCDavis',
			description: `As the President of Google Developer Student Club at UC Davis, I lead one of the largest tech communities on campus, managing a team of 27 board members and serving over 150+ students. Under my leadership, we've created a comprehensive ecosystem for technical growth and project development.<br><br>
			I've spearheaded the creation of specialized bootcamps in mobile development, focusing on iOS, React Native, Flutter, and Dart. These bootcamps have become a cornerstone of our technical education program, providing students with hands-on experience in modern mobile development practices. Additionally, I've implemented a robust recruitment system for tech associates and established regular tutoring workshops to ensure continuous learning and skill development.<br><br>
			My role extends beyond technical leadership to strategic planning and community building. I've organized numerous tech events that have brought together students, industry professionals, and faculty members. These events have not only facilitated knowledge sharing but also created valuable networking opportunities for our members. Previously serving as Tech Director, I mentored teams in building innovative mobile development projects, which laid the foundation for our current success.`,
			contract: H.PartTime,
			type: 'President',
			location: 'Davis, CA',
			period: { from: new Date(2024, 8, 1), to: new Date(2025, 8, 1) },
			skills: f('react-native', 'ios', 'flutter', 'dart', 'leadership'),
			name: 'President',
			color: '#4285F4',
			links: [],
			logo: ae,
			shortDescription: 'Leading GDSC and organizing tech events'
		},
		{
			slug: 'sachacks-vp',
			company: 'SacHacks',
			description: `As the VP of Software at SacHacks, I've played a pivotal role in expanding our hackathon's reach and impact. Through strategic marketing initiatives across multiple social media platforms and targeted email campaigns, I've successfully increased our Discord server participation by over 70 students, creating a more vibrant and engaged community.<br><br>
			My technical contributions include developing and maintaining the official SacHacks website, which serves as the primary platform for participant registration and information dissemination. I've also engineered a custom Discord bot in Python that streamlines communication and enhances the participant experience during the hackathon. This bot has become an essential tool for managing announcements, team formations, and resource sharing.<br><br>
			Building on my previous roles as Marketing Associate and Web Developer, I've implemented comprehensive software solutions to host SacHacks 2025, successfully managing a community of over 500 members. This includes developing robust registration systems, participant tracking mechanisms, and real-time communication channels that ensure smooth event execution.`,
			contract: H.PartTime,
			type: 'VP of Software',
			location: 'Sacramento, CA',
			period: { from: new Date(2022, 5, 1), to: new Date(2025, 8, 1) },
			skills: f('python', 'discord.py', 'web-development', 'marketing'),
			name: 'VP of Software',
			color: '#FF6B6B',
			links: [{ to: 'https://sachacks.io', label: 'sachacks.io', newTab: !0 }],
			logo: Qe,
			shortDescription: 'Leading software development for SacHacks'
		},
		{
			slug: 'swift-club-founder',
			company: 'Swift Coding Club @UCDavis',
			description: `As a Director of the Swift Coding Club at UC Davis, I've established a thriving community of over 100 iOS developers dedicated to creating innovative SwiftUI applications. This initiative has become a hub for iOS development enthusiasts, fostering collaboration and technical growth among students.<br><br>
			I've implemented a comprehensive curriculum that combines technical skills with industry best practices. Through structured workshops and hands-on projects, I guide students through AGILE development methodologies, helping them understand the importance of iterative development and continuous improvement. Additionally, I've introduced startup product pitch sessions where students can present their app ideas and receive valuable feedback from peers and industry professionals.<br><br>
			The club serves as a platform for students to develop not just technical skills but also essential soft skills needed in the tech industry. Through regular code reviews, pair programming sessions, and team projects, members learn to work effectively in collaborative environments while building their portfolio of iOS applications.`,
			contract: H.PartTime,
			type: 'Director',
			location: 'Davis, CA',
			period: { from: new Date(2024, 8, 1), to: new Date(2025, 8, 1) },
			skills: f('swift', 'swiftui', 'ios', 'agile', 'leadership'),
			name: 'Director',
			color: '#FF9500',
			links: [],
			logo: Be,
			shortDescription: 'Leading Swift development community'
		},
		{
			slug: 'ravata-engineer',
			company: 'Ravata Solutions',
			description: `As a Jr. Systems Software Engineer at Ravata Solutions, I've contributed significantly to the development of embedded systems solutions, focusing on STM32 Microcontrollers and their integration with various interfaces. My work has been instrumental in creating robust communication systems using UART and SerialInterface protocols in C/C++.<br><br>
			I've developed comprehensive GUI interfaces using Python and C# that facilitate seamless communication between Microcontrollers and Google Cloud Platform (GCP) Buckets. This integration has streamlined data management and improved system efficiency. Additionally, I've implemented advanced signal processing features, including FFT (Fast Fourier Transform) algorithms and real-time Peak Detection, which have enhanced the system's analytical capabilities. These features are thoroughly tested using MatPlotLib for visualization and validation.<br><br>
			My role also involves extensive debugging and optimization of embedded systems. Using tools like Ozone and RTT Viewer, I've identified and resolved critical issues in the system architecture, improving reliability and performance. This work has contributed to the development of more efficient and reliable embedded solutions for our clients.`,
			contract: H.PartTime,
			type: 'Jr. Systems Software Engineer',
			location: 'Davis, CA',
			period: { from: new Date(2023, 2, 1), to: new Date(2024, 8, 1) },
			skills: f('c', 'cpp', 'python', 'csharp', 'embedded-systems', 'matplotlib'),
			name: 'Jr. Systems Software Engineer',
			color: '#0000ff',
			links: [
				{ to: 'https://www.linkedin.com/company/ravata/', label: 'Ravata Solutions', newTab: !0 }
			],
			logo: we,
			shortDescription: 'Embedded Systems Development'
		},
		{
			slug: 'resilientdb-researcher',
			company: 'ResilientDB @ UCDavis',
			description: `As an Open Source Blockchain Researcher at ResilientDB, I've been instrumental in developing innovative blockchain solutions, particularly focusing on mobile integration. My primary contribution has been the development of an iOS application that interfaces directly with ResilientDB, an Apache Certified fully distributed ledger system. This work has expanded the accessibility of blockchain technology to mobile users.<br><br>
			My research and development efforts have focused on creating robust and user-friendly interfaces for blockchain interactions. I've implemented comprehensive solutions using modern technologies including Docker for containerization, Linux for system management, and GraphQL for efficient data querying. The application is built using React Native, ensuring cross-platform compatibility and optimal performance.<br><br>
			I continue to work on enhancing the software's capabilities and exploring new features that could improve the user experience and system functionality. This ongoing development work has contributed to the broader adoption of blockchain technology in mobile applications, making it more accessible to a wider audience.`,
			contract: H.Internship,
			type: 'Open Source Blockchain Researcher',
			location: 'Davis, CA',
			period: { from: new Date(2023, 8, 1), to: new Date(2024, 8, 1) },
			skills: f('blockchain', 'ios', 'react-native', 'docker', 'linux', 'graphql'),
			name: 'Open Source Blockchain Researcher',
			color: '#00ff00',
			links: [
				{
					to: 'https://blog.resilientdb.com/2023/12/17/CrypoGo.html',
					label: 'CrypGo Blog Post',
					newTab: !0
				}
			],
			logo: Ee,
			shortDescription: 'Blockchain Research and Development'
		},
		{
			slug: 'research',
			company: 'UC Davis',
			description: `As a researcher at UC Davis, I developed and implemented a sophisticated Multi-User Chat Application with integrated chatbot capabilities. This innovative system facilitated concurrent conversations among multiple users while seamlessly integrating with various chatbot services. The implementation significantly enhanced the efficiency of human-bot interactions, creating a rich and engaging communication experience for users.<br><br>
			Security and user authentication were paramount in the development process. I implemented robust security measures through Google Firebase Integration, establishing a secure and user-friendly authentication system. This integration leveraged Google's comprehensive authentication mechanisms to ensure reliable and trustworthy user experiences while maintaining high security standards.<br><br>
			The application's user interface was crafted using ReactJs, resulting in a highly responsive and visually appealing platform. The implementation focused on optimizing performance across various devices while ensuring a consistent and seamless user experience. The responsive design principles applied throughout the development process guaranteed accessibility and user satisfaction regardless of the device used.`,
			contract: H.Internship,
			type: 'Human-Chatbot Interaction Pipeline Project',
			location: 'Davis, CA',
			period: { from: new Date(2023, 0, 1), to: new Date(2023, 9, 1) },
			skills: f('js', 'css', 'html', 'reactjs', 'firebase'),
			name: 'Researcher',
			color: '#ffff00',
			links: [],
			logo: se,
			shortDescription: 'Human-Chatbot Interaction Pipeline Project'
		},
		{
			slug: 'tech-director',
			company: 'Google Developer Student Club',
			description: `As Tech Director of the Google Developer Student Club, I led and directed two teams of five talented web developers in executing cutting-edge tech projects. My leadership approach focused on fostering a collaborative environment that encouraged innovation and technical excellence. Through effective communication and strategic planning, I guided these teams to achieve project milestones and deliver high-quality solutions.<br><br>
			I initiated and managed comprehensive bootcamps designed to enhance the technical skills of aspiring developers. These programs included hands-on workshops, coding sessions, and project-based learning opportunities. As a mentor, I conducted regular tutoring workshops to facilitate knowledge transfer and ensure team members stayed current with industry trends and best practices. This commitment to education and skill development has contributed significantly to the growth of our technical community.<br><br>
			My role extended to strategic planning and execution of tech events within the club. I curated and organized workshops, seminars, and networking events that brought together students, industry professionals, and faculty members. These events served as platforms for knowledge exchange and community building, establishing the club as a central hub for tech enthusiasts and professionals on campus.`,
			contract: H.PartTime,
			type: 'Tech Director',
			location: 'Davis, CA',
			period: { from: new Date(2022, 8, 1), to: new Date(2023, 8, 1) },
			skills: f('css', 'html', 'js'),
			name: 'Tech Director',
			color: '#ff0000',
			links: [],
			logo: ae,
			shortDescription: 'Creating Workshops, Hosting Events and Technical Mentorship'
		},
		{
			slug: 'orientation-leader',
			company: 'UC Davis',
			description: `As an Orientation Leader at UC Davis, I served as a dedicated Student Staff member during the 2022/2023 academic year, contributing to the university's vibrant community and fostering an inclusive environment for incoming students. My role was crucial in helping new students transition smoothly into university life.<br><br>
			I provided comprehensive guidance to new students through various orientation activities and on-campus visits. This included facilitating campus tours, explaining university resources, and helping students navigate the academic and social aspects of university life. Through personalized assistance and engaging interactions, I helped create a welcoming environment that promoted student success and community engagement.<br><br>
			As a panelist, I shared my experiences and insights with over 50 prospective UC Davis students, offering valuable perspectives on campus life, academic opportunities, and student activities. These sessions allowed me to connect with potential students, address their concerns, and positively influence their decision-making process in choosing UC Davis as their academic home.`,
			contract: H.Contract,
			type: 'Orientation Leader',
			location: 'Davis, CA',
			period: { from: new Date(2022, 9, 1), to: new Date(2023, 6, 1) },
			skills: f(''),
			name: 'Orientation Leader',
			color: '#a52a2a',
			links: [],
			logo: se,
			shortDescription: 'Guiding Freshman and Transfer Student every summer around the campus'
		}
	],
	ke = '' + new URL('../assets/1marklogo.bwrnYp2s.png', import.meta.url).href,
	Se = '' + new URL('../assets/crypgologo.xWLOBO2b.png', import.meta.url).href,
	De = '' + new URL('../assets/discord.gpVJrGId.png', import.meta.url).href,
	Me = '' + new URL('../assets/chatasap.DXaCsZyE.png', import.meta.url).href,
	Re =
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4QAAAJYCAYAAAA6xSjbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA12SURBVHgB7ddBEcJAEAXRDQawgG8MoIHCB+c4iIGwUIUJQr83p3Hwe7k+znPAn9i2AYe3LGO89mXc7pex798fjmx+bn2uY06TA+DXnAYAAABJghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABA1BtIVRYF8s7/zAAAAABJRU5ErkJggg==',
	Te = '' + new URL('../assets/workintech.BJX5cBRj.jpeg', import.meta.url).href,
	je = [
		{
			slug: 'synthiaai',
			color: '#008080',
			description: `SynthiaAI is an advanced AI system that simulates real interview scenarios, providing feedback and personalized suggestions to enhance your interview skills and boost your confidence.
			<br><br>
			Our project was built using a combination of JavaScript and React for the front-end, while Python and Flask were utilized for the back-end. We selected these languages and libraries because of their ease of use, making the development process more streamlined. We integrated the OpenAI API and the Hume AI to power our AI interviewer. This combination allowed our system to generate appropriate responses, guide users during interviews, and improve its feedback through learning. The Hume AI component was instrumental in analyzing the users' emotions during their responses, enhancing the overall user experience and feedback provided by our AI interviewer. Utilizing the OpenAI API, we generated contextually relevant and coherent responses aligned with the user's inputs and interview scenarios, making the interview experience more realistic and practical.`,
			shortDescription: 'AI-powered interview simulation system providing personalized feedback.',
			links: [
				{ to: 'https://github.com/ManojBaasha/calhacks_2023', label: 'GitHub' },
				{ to: 'https://devpost.com/software/synthiaai', label: 'Devpost' }
			],
			logo: pe,
			name: 'SynthiaAI',
			period: { from: new Date(2023, 5, 1), to: new Date(2023, 6, 1) },
			skills: f('reactjs', 'flask', 'ts', 'openai', 'ai-ml', 'web-application'),
			type: 'AI/ML'
		},
		{
			slug: 'secure-ir-security',
			color: '#ff0000',
			description:
				'The IR-Based Security System was one of my most exciting embedded systems projects. Using the TI CC3200 Launchpad, I developed a security system that leveraged an IR remote receiver and a PIR sensor to detect motion. When unauthorized motion was detected, the system would send an alert via AWS SNS email notifications while simultaneously logging events into an AWS database. The most difficult part was debugging communication between the IR sensor and the microcontroller, ensuring that false positives were minimized. This project deepened my understanding of SPI, I2C, and AWS cloud integration. Seeing the system function in real-time, triggering alerts with precision, was both fun and incredibly rewarding!',
			shortDescription:
				'Comprehensive home security system using IR-based motion detection and AWS cloud integration.',
			links: [{ to: 'https://eec172finalproj.netlify.app/', label: 'Website' }],
			logo: '',
			name: 'SeCURE - IR-Based Security System',
			period: { from: new Date(2023, 5, 1) },
			skills: f(
				'c',
				'c++',
				'aws',
				'spi',
				'i2c',
				'embedded',
				'iot',
				'security',
				'cloud-integration'
			),
			type: 'Embedded Systems & IoT'
		},
		{
			slug: 'crypgo',
			color: '#5e95e3',
			description:
				'CrypGo is an iOS app developed using React Native Expo that serves as a blockchain wallet, allowing users to securely submit, retrieve, update, and create transactions. This project was my introduction to integrating mobile applications with blockchain technology. Leading a team of five developers over 13 weeks was an incredible learning experience, involving sprint planning, debugging, and real-world problem-solving. The biggest challenge was ensuring seamless integration with ResilientDB, an open-source fully distributed ledger system. Learning GraphQL for efficient data querying was a steep curve, but it significantly improved my backend skills. The most enjoyable part was seeing everything come together—after weeks of debugging, finally getting a transaction to go through was a rewarding moment!',
			shortDescription:
				'Blockchain wallet app built with React Native Expo, integrated with ResilientDB for secure transactions.',
			links: [
				{ to: 'https://github.com/ResilientApp/CrypGo', label: 'GitHub' },
				{ to: 'https://blog.resilientdb.com/2023/12/17/CrypoGo.html', label: 'Blog' }
			],
			logo: Se,
			name: 'CrypGo',
			period: { from: new Date(2023, 8, 1) },
			skills: f(
				'js',
				'css',
				'reactnative',
				'blockchain',
				'graphql',
				'mobile-application',
				'open-source'
			),
			type: 'Blockchain'
		},
		{
			slug: 'autonomous-vehicle',
			color: '#32cd32',
			description:
				"Building an autonomous vehicle was one of the most technically challenging yet rewarding projects I've ever worked on. Using an RC car, custom PCBs, and a combination of C++, Python, and OpenCV, I developed a system that allowed the car to follow a line autonomously. I had to understand everything from sensor integration to embedded programming. Debugging hardware failures and sensor misreads were some of the toughest moments, but when the car finally moved on its own and correctly followed a path, the sense of accomplishment was unparalleled!",
			shortDescription: 'Line-following robot with custom PCB and computer vision capabilities.',
			links: [],
			logo: Te,
			name: 'Autonomous Vehicle Project',
			period: { from: new Date(2023, 1, 1) },
			skills: f(
				'cpp',
				'python',
				'opencv',
				'embedded',
				'hardware',
				'computer-vision',
				'hardware-design'
			),
			type: 'Embedded Systems'
		},
		{
			slug: 'khao',
			color: '#ff4500',
			description:
				"KHAO is a project I built to bridge the gap between grocery shopping and home cooking. By integrating Optical Character Recognition (OCR) and OpenAI's API, the app scans grocery receipts, identifies ingredients, and suggests recipes based on available items. The concept came from my own experience of buying groceries and not knowing what to cook! The most difficult part was fine-tuning the OCR model to recognize different fonts and formats of grocery receipts. Learning about Firebase integration and managing real-time data was another hurdle. But seeing the AI suggest meal ideas based on simple receipts was incredibly satisfying!",
			shortDescription:
				'Recipe suggestion app using OCR to scan grocery receipts and suggest recipes.',
			links: [],
			logo: Re,
			name: 'KHAO',
			period: { from: new Date(2023, 1, 1) },
			skills: f('reactjs', 'firebase', 'openai', 'ocr', 'ai-ml', 'web-application'),
			type: 'AI/ML'
		},
		{
			slug: 'ivf-embryo-system',
			color: '#800080',
			description:
				'The IVF and Embryo Quality Assurance System was a fascinating project that combined embedded systems with medical applications. Using C/C++, MATLAB, and Python, I developed a system for embryo quality analysis and classification. The most challenging aspect was implementing the peak detection system to analyze embryo statistics. This required careful consideration of signal processing techniques and real-time data analysis. The project taught me about the importance of precision in medical applications and how to handle sensitive data appropriately.',
			shortDescription: 'IoT-based system for embryo quality analysis and classification.',
			links: [],
			logo: '',
			name: 'IVF and Embryo Quality Assurance System',
			period: { from: new Date(2023, 1, 1) },
			skills: f(
				'cpp',
				'matlab',
				'python',
				'iot',
				'data-analysis',
				'medical-applications',
				'embedded-systems'
			),
			type: 'Medical Applications'
		},
		{
			slug: 'audio-music-follower',
			color: '#ff69b4',
			description:
				'The Audio Based Music Follower project was a comprehensive exploration of audio signal processing and embedded systems. Using the TI MSP432 Microcontroller, I developed a complete audio system with signal processing and audio following capabilities. The project involved implementing various audio controls and following algorithms, which required deep understanding of both analog and digital systems. The most challenging part was optimizing the performance while maintaining real-time processing capabilities.',
			shortDescription:
				'Complete audio system with signal processing and audio following capabilities.',
			links: [],
			logo: '',
			name: 'Audio Based Music Follower',
			period: { from: new Date(2023, 1, 1) },
			skills: f('cpp', 'verilog', 'embedded', 'signal-processing', 'hardware-design'),
			type: 'Signal Processing'
		},
		{
			slug: 'education-mobile-app',
			color: '#00ffff',
			description:
				'1 Mark Mastery is an educational mobile app developed using Flutter and Dart, designed to assist 12th-grade students in accessing their study materials effortlessly. The project was born out of a desire to mitigate the impact of the COVID-19 pandemic on students, ensuring that they had easy access to their notes and documents even in a remote learning environment. One of the major challenges was designing an intuitive and accessible UI, as many students using the app had minimal tech experience. Overcoming this by focusing on user-friendly design principles was a rewarding experience. Seeing the app gain over 50 downloads and help students navigate their studies reinforced my passion for mobile development and making technology more accessible.',
			shortDescription:
				'Built an educational app to help 12th-grade students access study materials easily during the COVID-19 pandemic.',
			links: [
				{ to: 'https://github.com/ManojBaasha/1-Mark-Mastery', label: 'GitHub' },
				{
					to: 'https://play.google.com/store/apps/details?id=com.manojelango.onemarkmastery&hl=en_US&gl=US',
					label: 'Play Store'
				}
			],
			logo: ke,
			name: '1 Mark Mastery',
			period: { from: new Date(2020, 4, 1), to: new Date(2020, 11, 1) },
			skills: f('sass', 'flutter', 'dart', 'mobile-application', 'education'),
			type: 'Educational App'
		},
		{
			slug: 'chatasap',
			color: '#ff69b4',
			description:
				'ChatASAP was my venture into the world of real-time messaging and Swift development. The app allows users to anonymously connect and chat with random users instantly, making it a fun, unpredictable experience. Implementing Firebase Firestore for real-time database functionality was one of the trickiest parts—I had to ensure that messages were synchronized seamlessly across different users. Debugging real-time interactions proved challenging, but understanding Firebase Authentication and Cloud Functions was an invaluable experience. The best part? Seeing the app come to life and having friends test it out, watching their reactions as they got matched with random users!',
			shortDescription:
				'Anonymous chat app allowing users to connect and chat with random users instantly.',
			links: [],
			logo: Me,
			name: 'ChatASAP',
			period: { from: new Date(2022, 6, 1) },
			skills: f('swift', 'firebase', 'mobile-application', 'real-time-communication'),
			type: 'Mobile Application'
		},
		{
			slug: 'discordbot',
			color: '#800080',
			description: `Project Overview: R.O.S.H.O (Robust Open Source Hub For Opportunities)
			<br><br>
			R.O.S.H.O is an innovative open-source Discord bot designed to empower individuals in starting their journey into open-source coding. Developed using Python and Discord.py, the bot boasts a diverse range of functionalities, including gifs, a currency system, TicTacToe, roasts, and various other engaging features.
			<br><br>
			Key Objectives:
			<br><br>
			Learning Platform: R.O.S.H.O serves as a dynamic learning platform, providing users with the tools and resources to explore, practice, and contribute to open-source projects.
			Comprehensive Documentation: The project comes with clear documentation and step-by-step instructions, ensuring accessibility and ease of setup on any device.
			Git and GitHub Mastery: Users gain hands-on experience with push, pull, and merge requests, along with insights into using Git and GitHub for effective version control.
			Technological Highlights:
			<br><br>
			Python and Discord.py: Built on Python, R.O.S.H.O leverages the capabilities of Discord.py to deliver a seamless and interactive user experience.
			API Integration: The project incorporates various APIs and modules, offering users a deeper understanding of Python and Discord.py.
			Best Practices: R.O.S.H.O adheres to coding best practices, ensuring that the codebase is clean, well-structured, and easily maintainable.`,
			shortDescription: 'An open source discord bot template for fun games to play',
			links: [
				{ to: 'https://github.com/ManojBaasha/open-source-discord-bot', label: 'GitHub' },
				{ to: 'https://discord.gg/ujvGFDKrcx', label: 'Discord' }
			],
			logo: De,
			name: 'ROSHO BOT',
			period: { from: new Date(2020, 9, 1) },
			skills: f('python', 'discord-bot', 'open-source', 'community'),
			type: 'Discord Bot'
		},
		{
			slug: 'portfolio-website',
			color: '#4a90e2',
			description:
				'My portfolio website represents my journey in web development, showcasing my skills and projects. Built with SvelteKit and TypeScript, it features a modern, responsive design with dark/light mode support. The project also includes a blog section with markdown support and a project showcase that highlights my diverse range of work.',
			shortDescription: 'Modern portfolio website built with SvelteKit.',
			links: [],
			logo: '',
			name: 'Portfolio Website',
			period: { from: new Date(2024, 1, 1) },
			skills: f('sveltekit', 'typescript', 'css', 'web-application', 'personal-project'),
			type: 'Web Application'
		},
		{
			slug: 'breakfree',
			color: '#ffa500',
			description:
				'BreakFree is a text-based interactive horror game that I developed as my first foray into game development. Using C++, I created an engaging narrative experience with multiple endings. The project taught me about game design principles, user interaction, and creating immersive experiences through text. The most challenging aspect was designing a branching narrative structure that remained coherent across all possible paths.',
			shortDescription: 'Text-based interactive horror game.',
			links: [{ to: 'https://github.com/ManojBaasha/horrortextadventureC-', label: 'GitHub' }],
			logo: me,
			name: 'BreakFree',
			period: { from: new Date(2021, 5, 1), to: new Date(2021, 7, 1) },
			skills: f('cpp', 'game-development'),
			type: 'Game Development'
		},
		{
			slug: 'pathbender-mobile',
			color: '#9370db',
			description:
				'PathBender Mobile is a mobile application developed for the PathBender survey system at UC Davis. Using Swift and iOS, I created an intuitive mobile interface for collecting survey data. The most interesting challenge was implementing offline data collection with automatic synchronization when connectivity was restored. This required careful consideration of data persistence and conflict resolution strategies.',
			shortDescription: 'Mobile application for the PathBender survey system.',
			links: [],
			logo: '',
			name: 'PathBender Mobile',
			period: { from: new Date(2023, 1, 1) },
			skills: f('swift', 'ios', 'mobile-application', 'data-analysis'),
			type: 'Mobile Application'
		},
		{
			slug: 'wisegenie',
			color: '#4169e1',
			description:
				'WiseGenie is an AI-powered web application for intelligent assistance. Built with React, TypeScript, and Node.js, the project focuses on creating a more conversational AI interface. The most interesting aspect was making AI interactions more natural and user-friendly, which required careful consideration of user experience design and AI response generation.',
			shortDescription: 'AI-powered web application for intelligent assistance.',
			links: [],
			logo: '',
			name: 'WiseGenie',
			period: { from: new Date(2023, 1, 1) },
			skills: f('reactjs', 'typescript', 'nodejs', 'ai-ml', 'web-application'),
			type: 'Web Application'
		},
		{
			slug: 'rpi-pico-controller',
			color: '#32cd32',
			description:
				'The RPI Pico Controller project was my first experience with the Raspberry Pi Pico. Using Python, I developed a controller system that integrated hardware control, sensor integration, and data processing. The project taught me about embedded systems programming and the capabilities of the Raspberry Pi Pico platform.',
			shortDescription: 'Controller system for Raspberry Pi Pico.',
			links: [],
			logo: '',
			name: 'RPI Pico Controller',
			period: { from: new Date(2023, 1, 1) },
			skills: f('python', 'embedded', 'embedded-systems', 'hardware-design'),
			type: 'Embedded Systems'
		},
		{
			slug: 'openai-debugger',
			color: '#ff4500',
			description:
				'The OpenAI Debugger is a development tool I created to improve debugging capabilities while working with the OpenAI API. Built with Python, the tool provides comprehensive API debugging, error handling, and response analysis features. The project was born from my need for better debugging tools while working with the OpenAI API.',
			shortDescription: 'Debugging tool for OpenAI API integration.',
			links: [],
			logo: '',
			name: 'OpenAI Debugger',
			period: { from: new Date(2023, 1, 1) },
			skills: f('python', 'openai', 'development-tools'),
			type: 'Development Tools'
		},
		{
			slug: 'pdf-reader-llm',
			color: '#8b008b',
			description:
				'The PDF Reader Pathway LLM project combines document processing with LLM capabilities. Using Python, I developed a system that processes PDFs, extracts text, and performs LLM analysis. The most challenging aspect was implementing efficient PDF processing and text extraction while maintaining accuracy.',
			shortDescription: 'PDF reader with LLM integration for document analysis.',
			links: [],
			logo: '',
			name: 'PDF Reader Pathway LLM',
			period: { from: new Date(2023, 1, 1) },
			skills: f('python', 'llm', 'ai-ml', 'development-tools'),
			type: 'AI/ML'
		},
		{
			slug: 'sachacks-discord-bot',
			color: '#800080',
			description:
				'The SacHacks Discord Bot was developed for the SacHacks hackathon to help manage the event. Built with Python and Discord.py, the bot features event management, user interaction, and information dissemination capabilities. The project focused on creating efficient event management features and user interaction systems.',
			shortDescription: 'Discord bot for SacHacks hackathon.',
			links: [],
			logo: '',
			name: 'SacHacks Discord Bot',
			period: { from: new Date(2023, 1, 1) },
			skills: f('python', 'discord-bot', 'community'),
			type: 'Discord Bot'
		},
		{
			slug: 'posefinder',
			color: '#ff69b4',
			description:
				'PoseFinder is a computer vision application for pose detection. Built with Python and OpenCV, the project focuses on real-time pose detection and analysis. The most interesting aspect was implementing efficient real-time processing while maintaining accuracy in pose detection.',
			shortDescription: 'Computer vision application for pose detection.',
			links: [],
			logo: '',
			name: 'PoseFinder',
			period: { from: new Date(2023, 1, 1) },
			skills: f('python', 'opencv', 'computer-vision', 'ai-ml'),
			type: 'Computer Vision'
		},
		{
			slug: 'ocr-testing',
			color: '#20b2aa',
			description:
				'The OCR Testing project is a testing framework for OCR functionality. Built with Python, the project focuses on ensuring the reliability of OCR systems through comprehensive testing, performance analysis, and error detection.',
			shortDescription: 'Testing framework for OCR functionality.',
			links: [],
			logo: '',
			name: 'OCR Testing',
			period: { from: new Date(2023, 1, 1) },
			skills: f('python', 'ocr', 'testing-development'),
			type: 'Testing & Development'
		}
	];
const Ae =
	typeof globalThis < 'u'
		? globalThis
		: typeof window < 'u'
			? window
			: typeof global < 'u'
				? global
				: typeof self < 'u'
					? self
					: {};
function de(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
const ge = { exports: {} };
(function (e, Q) {
	(function (w, v) {
		e.exports = v();
	})(Ae, function () {
		let w = 1e3,
			v = 6e4,
			B = 36e5,
			I = 'millisecond',
			k = 'second',
			J = 'minute',
			x = 'hour',
			U = 'day',
			$ = 'week',
			R = 'month',
			z = 'quarter',
			T = 'year',
			P = 'date',
			F = 'Invalid Date',
			_ =
				/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
			L = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
			oe = {
				name: 'en',
				weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
				months:
					'January_February_March_April_May_June_July_August_September_October_November_December'.split(
						'_'
					),
				ordinal: function (s) {
					const o = ['th', 'st', 'nd', 'rd'],
						t = s % 100;
					return '[' + s + (o[(t - 20) % 10] || o[t] || o[0]) + ']';
				}
			},
			O = function (s, o, t) {
				const a = String(s);
				return !a || a.length >= o ? s : '' + Array(o + 1 - a.length).join(t) + s;
			},
			ee = {
				s: O,
				z: function (s) {
					const o = -s.utcOffset(),
						t = Math.abs(o),
						a = Math.floor(t / 60),
						i = t % 60;
					return (o <= 0 ? '+' : '-') + O(a, 2, '0') + ':' + O(i, 2, '0');
				},
				m: function s(o, t) {
					if (o.date() < t.date()) return -s(t, o);
					const a = 12 * (t.year() - o.year()) + (t.month() - o.month()),
						i = o.clone().add(a, R),
						g = t - i < 0,
						h = o.clone().add(a + (g ? -1 : 1), R);
					return +(-(a + (t - i) / (g ? i - h : h - i)) || 0);
				},
				a: function (s) {
					return s < 0 ? Math.ceil(s) || 0 : Math.floor(s);
				},
				p: function (s) {
					return (
						{ M: R, y: T, w: $, d: U, D: P, h: x, m: J, s: k, ms: I, Q: z }[s] ||
						String(s || '')
							.toLowerCase()
							.replace(/s$/, '')
					);
				},
				u: function (s) {
					return s === void 0;
				}
			},
			N = 'en',
			p = {};
		p[N] = oe;
		const c = '$isDayjsObject',
			n = function (s) {
				return s instanceof y || !(!s || !s[c]);
			},
			m = function s(o, t, a) {
				let i;
				if (!o) return N;
				if (typeof o == 'string') {
					const g = o.toLowerCase();
					(p[g] && (i = g), t && ((p[g] = t), (i = g)));
					const h = o.split('-');
					if (!i && h.length > 1) return s(h[0]);
				} else {
					const C = o.name;
					((p[C] = o), (i = C));
				}
				return (!a && i && (N = i), i || (!a && N));
			},
			u = function (s, o) {
				if (n(s)) return s.clone();
				const t = typeof o == 'object' ? o : {};
				return ((t.date = s), (t.args = arguments), new y(t));
			},
			d = ee;
		((d.l = m),
			(d.i = n),
			(d.w = function (s, o) {
				return u(s, { locale: o.$L, utc: o.$u, x: o.$x, $offset: o.$offset });
			}));
		var y = (function () {
				function s(t) {
					((this.$L = m(t.locale, null, !0)),
						this.parse(t),
						(this.$x = this.$x || t.x || {}),
						(this[c] = !0));
				}
				const o = s.prototype;
				return (
					(o.parse = function (t) {
						((this.$d = (function (a) {
							const i = a.date,
								g = a.utc;
							if (i === null) return new Date(NaN);
							if (d.u(i)) return new Date();
							if (i instanceof Date) return new Date(i);
							if (typeof i == 'string' && !/Z$/i.test(i)) {
								const h = i.match(_);
								if (h) {
									const C = h[2] - 1 || 0,
										b = (h[7] || '0').substring(0, 3);
									return g
										? new Date(Date.UTC(h[1], C, h[3] || 1, h[4] || 0, h[5] || 0, h[6] || 0, b))
										: new Date(h[1], C, h[3] || 1, h[4] || 0, h[5] || 0, h[6] || 0, b);
								}
							}
							return new Date(i);
						})(t)),
							this.init());
					}),
					(o.init = function () {
						const t = this.$d;
						((this.$y = t.getFullYear()),
							(this.$M = t.getMonth()),
							(this.$D = t.getDate()),
							(this.$W = t.getDay()),
							(this.$H = t.getHours()),
							(this.$m = t.getMinutes()),
							(this.$s = t.getSeconds()),
							(this.$ms = t.getMilliseconds()));
					}),
					(o.$utils = function () {
						return d;
					}),
					(o.isValid = function () {
						return this.$d.toString() !== F;
					}),
					(o.isSame = function (t, a) {
						const i = u(t);
						return this.startOf(a) <= i && i <= this.endOf(a);
					}),
					(o.isAfter = function (t, a) {
						return u(t) < this.startOf(a);
					}),
					(o.isBefore = function (t, a) {
						return this.endOf(a) < u(t);
					}),
					(o.$g = function (t, a, i) {
						return d.u(t) ? this[a] : this.set(i, t);
					}),
					(o.unix = function () {
						return Math.floor(this.valueOf() / 1e3);
					}),
					(o.valueOf = function () {
						return this.$d.getTime();
					}),
					(o.startOf = function (t, a) {
						const i = this,
							g = !!d.u(a) || a,
							h = d.p(t),
							C = function (W, M) {
								const V = d.w(i.$u ? Date.UTC(i.$y, M, W) : new Date(i.$y, M, W), i);
								return g ? V : V.endOf(U);
							},
							b = function (W, M) {
								return d.w(
									i
										.toDate()
										[W].apply(i.toDate('s'), (g ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(M)),
									i
								);
							},
							E = this.$W,
							D = this.$M,
							K = this.$D,
							X = 'set' + (this.$u ? 'UTC' : '');
						switch (h) {
							case T:
								return g ? C(1, 0) : C(31, 11);
							case R:
								return g ? C(1, D) : C(0, D + 1);
							case $:
								var G = this.$locale().weekStart || 0,
									Z = (E < G ? E + 7 : E) - G;
								return C(g ? K - Z : K + (6 - Z), D);
							case U:
							case P:
								return b(X + 'Hours', 0);
							case x:
								return b(X + 'Minutes', 1);
							case J:
								return b(X + 'Seconds', 2);
							case k:
								return b(X + 'Milliseconds', 3);
							default:
								return this.clone();
						}
					}),
					(o.endOf = function (t) {
						return this.startOf(t, !1);
					}),
					(o.$set = function (t, a) {
						let i,
							g = d.p(t),
							h = 'set' + (this.$u ? 'UTC' : ''),
							C = ((i = {}),
							(i[U] = h + 'Date'),
							(i[P] = h + 'Date'),
							(i[R] = h + 'Month'),
							(i[T] = h + 'FullYear'),
							(i[x] = h + 'Hours'),
							(i[J] = h + 'Minutes'),
							(i[k] = h + 'Seconds'),
							(i[I] = h + 'Milliseconds'),
							i)[g],
							b = g === U ? this.$D + (a - this.$W) : a;
						if (g === R || g === T) {
							const E = this.clone().set(P, 1);
							(E.$d[C](b), E.init(), (this.$d = E.set(P, Math.min(this.$D, E.daysInMonth())).$d));
						} else C && this.$d[C](b);
						return (this.init(), this);
					}),
					(o.set = function (t, a) {
						return this.clone().$set(t, a);
					}),
					(o.get = function (t) {
						return this[d.p(t)]();
					}),
					(o.add = function (t, a) {
						let i,
							g = this;
						t = Number(t);
						const h = d.p(a),
							C = function (D) {
								const K = u(g);
								return d.w(K.date(K.date() + Math.round(D * t)), g);
							};
						if (h === R) return this.set(R, this.$M + t);
						if (h === T) return this.set(T, this.$y + t);
						if (h === U) return C(1);
						if (h === $) return C(7);
						const b = ((i = {}), (i[J] = v), (i[x] = B), (i[k] = w), i)[h] || 1,
							E = this.$d.getTime() + t * b;
						return d.w(E, this);
					}),
					(o.subtract = function (t, a) {
						return this.add(-1 * t, a);
					}),
					(o.format = function (t) {
						const a = this,
							i = this.$locale();
						if (!this.isValid()) return i.invalidDate || F;
						const g = t || 'YYYY-MM-DDTHH:mm:ssZ',
							h = d.z(this),
							C = this.$H,
							b = this.$m,
							E = this.$M,
							D = i.weekdays,
							K = i.months,
							X = i.meridiem,
							G = function (M, V, q, te) {
								return (M && (M[V] || M(a, g))) || q[V].slice(0, te);
							},
							Z = function (M) {
								return d.s(C % 12 || 12, M, '0');
							},
							W =
								X ||
								function (M, V, q) {
									const te = M < 12 ? 'AM' : 'PM';
									return q ? te.toLowerCase() : te;
								};
						return g.replace(L, function (M, V) {
							return (
								V ||
								(function (q) {
									switch (q) {
										case 'YY':
											return String(a.$y).slice(-2);
										case 'YYYY':
											return d.s(a.$y, 4, '0');
										case 'M':
											return E + 1;
										case 'MM':
											return d.s(E + 1, 2, '0');
										case 'MMM':
											return G(i.monthsShort, E, K, 3);
										case 'MMMM':
											return G(K, E);
										case 'D':
											return a.$D;
										case 'DD':
											return d.s(a.$D, 2, '0');
										case 'd':
											return String(a.$W);
										case 'dd':
											return G(i.weekdaysMin, a.$W, D, 2);
										case 'ddd':
											return G(i.weekdaysShort, a.$W, D, 3);
										case 'dddd':
											return D[a.$W];
										case 'H':
											return String(C);
										case 'HH':
											return d.s(C, 2, '0');
										case 'h':
											return Z(1);
										case 'hh':
											return Z(2);
										case 'a':
											return W(C, b, !0);
										case 'A':
											return W(C, b, !1);
										case 'm':
											return String(b);
										case 'mm':
											return d.s(b, 2, '0');
										case 's':
											return String(a.$s);
										case 'ss':
											return d.s(a.$s, 2, '0');
										case 'SSS':
											return d.s(a.$ms, 3, '0');
										case 'Z':
											return h;
									}
									return null;
								})(M) ||
								h.replace(':', '')
							);
						});
					}),
					(o.utcOffset = function () {
						return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
					}),
					(o.diff = function (t, a, i) {
						let g,
							h = this,
							C = d.p(a),
							b = u(t),
							E = (b.utcOffset() - this.utcOffset()) * v,
							D = this - b,
							K = function () {
								return d.m(h, b);
							};
						switch (C) {
							case T:
								g = K() / 12;
								break;
							case R:
								g = K();
								break;
							case z:
								g = K() / 3;
								break;
							case $:
								g = (D - E) / 6048e5;
								break;
							case U:
								g = (D - E) / 864e5;
								break;
							case x:
								g = D / B;
								break;
							case J:
								g = D / v;
								break;
							case k:
								g = D / w;
								break;
							default:
								g = D;
						}
						return i ? g : d.a(g);
					}),
					(o.daysInMonth = function () {
						return this.endOf(R).$D;
					}),
					(o.$locale = function () {
						return p[this.$L];
					}),
					(o.locale = function (t, a) {
						if (!t) return this.$L;
						const i = this.clone(),
							g = m(t, a, !0);
						return (g && (i.$L = g), i);
					}),
					(o.clone = function () {
						return d.w(this.$d, this);
					}),
					(o.toDate = function () {
						return new Date(this.valueOf());
					}),
					(o.toJSON = function () {
						return this.isValid() ? this.toISOString() : null;
					}),
					(o.toISOString = function () {
						return this.$d.toISOString();
					}),
					(o.toString = function () {
						return this.$d.toUTCString();
					}),
					s
				);
			})(),
			S = y.prototype;
		return (
			(u.prototype = S),
			[
				['$ms', I],
				['$s', k],
				['$m', J],
				['$H', x],
				['$W', U],
				['$M', R],
				['$y', T],
				['$D', P]
			].forEach(function (s) {
				S[s[1]] = function (o) {
					return this.$g(o, s[0], s[1]);
				};
			}),
			(u.extend = function (s, o) {
				return (s.$i || (s(o, y, u), (s.$i = !0)), u);
			}),
			(u.locale = m),
			(u.isDayjs = n),
			(u.unix = function (s) {
				return u(1e3 * s);
			}),
			(u.en = p[N]),
			(u.Ls = p),
			(u.p = {}),
			u
		);
	});
})(ge);
const Ue = ge.exports;
const ie = de(Ue);
const he = { exports: {} };
(function (e, Q) {
	(function (w, v) {
		e.exports = v();
	})(Ae, function () {
		var w,
			v,
			B = 1e3,
			I = 6e4,
			k = 36e5,
			J = 864e5,
			x = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
			U = 31536e6,
			$ = 2628e6,
			R =
				/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
			z = {
				years: U,
				months: $,
				days: J,
				hours: k,
				minutes: I,
				seconds: B,
				milliseconds: 1,
				weeks: 6048e5
			},
			T = function (p) {
				return p instanceof ee;
			},
			P = function (p, c, n) {
				return new ee(p, n, c.$l);
			},
			F = function (p) {
				return v.p(p) + 's';
			},
			_ = function (p) {
				return p < 0;
			},
			L = function (p) {
				return _(p) ? Math.ceil(p) : Math.floor(p);
			},
			oe = function (p) {
				return Math.abs(p);
			},
			O = function (p, c) {
				return p
					? _(p)
						? { negative: !0, format: '' + oe(p) + c }
						: { negative: !1, format: '' + p + c }
					: { negative: !1, format: '' };
			},
			ee = (function () {
				function p(n, m, u) {
					const d = this;
					if (
						((this.$d = {}),
						(this.$l = u),
						n === void 0 && ((this.$ms = 0), this.parseFromMilliseconds()),
						m)
					)
						return P(n * z[F(m)], this);
					if (typeof n == 'number') return ((this.$ms = n), this.parseFromMilliseconds(), this);
					if (typeof n == 'object')
						return (
							Object.keys(n).forEach(function (s) {
								d.$d[F(s)] = n[s];
							}),
							this.calMilliseconds(),
							this
						);
					if (typeof n == 'string') {
						const y = n.match(R);
						if (y) {
							const S = y.slice(2).map(function (s) {
								return s != null ? Number(s) : 0;
							});
							return (
								(this.$d.years = S[0]),
								(this.$d.months = S[1]),
								(this.$d.weeks = S[2]),
								(this.$d.days = S[3]),
								(this.$d.hours = S[4]),
								(this.$d.minutes = S[5]),
								(this.$d.seconds = S[6]),
								this.calMilliseconds(),
								this
							);
						}
					}
					return this;
				}
				const c = p.prototype;
				return (
					(c.calMilliseconds = function () {
						const n = this;
						this.$ms = Object.keys(this.$d).reduce(function (m, u) {
							return m + (n.$d[u] || 0) * z[u];
						}, 0);
					}),
					(c.parseFromMilliseconds = function () {
						let n = this.$ms;
						((this.$d.years = L(n / U)),
							(n %= U),
							(this.$d.months = L(n / $)),
							(n %= $),
							(this.$d.days = L(n / J)),
							(n %= J),
							(this.$d.hours = L(n / k)),
							(n %= k),
							(this.$d.minutes = L(n / I)),
							(n %= I),
							(this.$d.seconds = L(n / B)),
							(n %= B),
							(this.$d.milliseconds = n));
					}),
					(c.toISOString = function () {
						let n = O(this.$d.years, 'Y'),
							m = O(this.$d.months, 'M'),
							u = +this.$d.days || 0;
						this.$d.weeks && (u += 7 * this.$d.weeks);
						let d = O(u, 'D'),
							y = O(this.$d.hours, 'H'),
							S = O(this.$d.minutes, 'M'),
							s = this.$d.seconds || 0;
						this.$d.milliseconds &&
							((s += this.$d.milliseconds / 1e3), (s = Math.round(1e3 * s) / 1e3));
						const o = O(s, 'S'),
							t = n.negative || m.negative || d.negative || y.negative || S.negative || o.negative,
							a = y.format || S.format || o.format ? 'T' : '',
							i =
								(t ? '-' : '') +
								'P' +
								n.format +
								m.format +
								d.format +
								a +
								y.format +
								S.format +
								o.format;
						return i === 'P' || i === '-P' ? 'P0D' : i;
					}),
					(c.toJSON = function () {
						return this.toISOString();
					}),
					(c.format = function (n) {
						const m = n || 'YYYY-MM-DDTHH:mm:ss',
							u = {
								Y: this.$d.years,
								YY: v.s(this.$d.years, 2, '0'),
								YYYY: v.s(this.$d.years, 4, '0'),
								M: this.$d.months,
								MM: v.s(this.$d.months, 2, '0'),
								D: this.$d.days,
								DD: v.s(this.$d.days, 2, '0'),
								H: this.$d.hours,
								HH: v.s(this.$d.hours, 2, '0'),
								m: this.$d.minutes,
								mm: v.s(this.$d.minutes, 2, '0'),
								s: this.$d.seconds,
								ss: v.s(this.$d.seconds, 2, '0'),
								SSS: v.s(this.$d.milliseconds, 3, '0')
							};
						return m.replace(x, function (d, y) {
							return y || String(u[d]);
						});
					}),
					(c.as = function (n) {
						return this.$ms / z[F(n)];
					}),
					(c.get = function (n) {
						let m = this.$ms,
							u = F(n);
						return (
							u === 'milliseconds' ? (m %= 1e3) : (m = u === 'weeks' ? L(m / z[u]) : this.$d[u]),
							m || 0
						);
					}),
					(c.add = function (n, m, u) {
						let d;
						return (
							(d = m ? n * z[F(m)] : T(n) ? n.$ms : P(n, this).$ms),
							P(this.$ms + d * (u ? -1 : 1), this)
						);
					}),
					(c.subtract = function (n, m) {
						return this.add(n, m, !0);
					}),
					(c.locale = function (n) {
						const m = this.clone();
						return ((m.$l = n), m);
					}),
					(c.clone = function () {
						return P(this.$ms, this);
					}),
					(c.humanize = function (n) {
						return w().add(this.$ms, 'ms').locale(this.$l).fromNow(!n);
					}),
					(c.valueOf = function () {
						return this.asMilliseconds();
					}),
					(c.milliseconds = function () {
						return this.get('milliseconds');
					}),
					(c.asMilliseconds = function () {
						return this.as('milliseconds');
					}),
					(c.seconds = function () {
						return this.get('seconds');
					}),
					(c.asSeconds = function () {
						return this.as('seconds');
					}),
					(c.minutes = function () {
						return this.get('minutes');
					}),
					(c.asMinutes = function () {
						return this.as('minutes');
					}),
					(c.hours = function () {
						return this.get('hours');
					}),
					(c.asHours = function () {
						return this.as('hours');
					}),
					(c.days = function () {
						return this.get('days');
					}),
					(c.asDays = function () {
						return this.as('days');
					}),
					(c.weeks = function () {
						return this.get('weeks');
					}),
					(c.asWeeks = function () {
						return this.as('weeks');
					}),
					(c.months = function () {
						return this.get('months');
					}),
					(c.asMonths = function () {
						return this.as('months');
					}),
					(c.years = function () {
						return this.get('years');
					}),
					(c.asYears = function () {
						return this.as('years');
					}),
					p
				);
			})(),
			N = function (p, c, n) {
				return p
					.add(c.years() * n, 'y')
					.add(c.months() * n, 'M')
					.add(c.days() * n, 'd')
					.add(c.hours() * n, 'h')
					.add(c.minutes() * n, 'm')
					.add(c.seconds() * n, 's')
					.add(c.milliseconds() * n, 'ms');
			};
		return function (p, c, n) {
			((w = n),
				(v = n().$utils()),
				(n.duration = function (d, y) {
					const S = n.locale();
					return P(d, { $l: S }, y);
				}),
				(n.isDuration = T));
			const m = c.prototype.add,
				u = c.prototype.subtract;
			((c.prototype.add = function (d, y) {
				return T(d) ? N(this, d, 1) : m.bind(this)(d, y);
			}),
				(c.prototype.subtract = function (d, y) {
					return T(d) ? N(this, d, -1) : u.bind(this)(d, y);
				}));
		};
	});
})(he);
const Pe = he.exports;
const Ke = de(Pe);
ie.extend(Ke);
const He = (e, Q = new Date()) => {
		let w = 0,
			v = 0,
			B = 0;
		return (
			Q.getFullYear() !== e.getFullYear()
				? ((B = Q.getMonth()),
					(v = (Q.getFullYear() - e.getFullYear() - 1) * 12),
					(w = 12 - e.getMonth()))
				: (w = Q.getMonth() - e.getMonth()),
			w + v + B + 1
		);
	},
	xe = (e) =>
		[
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		][e],
	$e = (e, Q) => `${e} | ${Q}`;
function ze(e, Q = new Date(Date.now() + 1e3 * 60 * 60 * 24)) {
	const w = ie(e),
		v = ie(Q),
		B = ie.duration(v.diff(w));
	let I = 0,
		k = 'day';
	return (
		B.as('days') <= 7
			? ((k = 'day'), (I = B.as('days')))
			: B.as('months') <= 1
				? ((k = 'week'), (I = B.as('weeks')))
				: B.as('years') <= 1
					? ((k = 'month'), (I = B.as('months')))
					: ((k = 'year'), (I = B.as('years'))),
		(I = Math.trunc(I)),
		`${Math.trunc(I)} ${k}${I > 1 ? 's' : ''}`
	);
}
var Y = ((e) => (
	(e.Code =
		'M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z'),
	(e.Search =
		'M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z'),
	(e.Email =
		'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'),
	(e.Skills = 'M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z'),
	(e.GitHub =
		'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'),
	(e.StackOverflow =
		'm17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z'),
	(e.LinkedIn =
		'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z'),
	(e.Twitter =
		'M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z'),
	(e.Home = 'M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z'),
	(e.Projects =
		'M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z'),
	(e.Job =
		'M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z'),
	(e.Academic = 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z'),
	(e.Resume = 'M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z'),
	(e.RightArrow = 'M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z'),
	(e.LeftArrow = 'M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z'),
	(e.Youtube =
		'M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z'),
	(e.Link =
		'M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z'),
	(e.Sun =
		'M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z'),
	(e.Moon =
		'M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z'),
	(e.Facebook =
		'M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z'),
	e
))(Y || {});
const Fe = "Manoj's Portfolio",
	Ne = { personal: 'Projects', career: 'Experiences', resume: 'Resume', about: 'About' },
	Ve = (e) => {
		switch (e) {
			case j.GitHub:
				return Y.GitHub;
			case j.Linkedin:
				return Y.LinkedIn;
			case j.StackOverflow:
				return Y.StackOverflow;
			case j.Facebook:
				return Y.Facebook;
			case j.Email:
				return Y.Email;
			case j.Twitter:
				return Y.Twitter;
			case j.Youtube:
				return Y.Youtube;
		}
	},
	Ye = {
		title: 'Home',
		name: 'Manoj',
		lastName: 'Elango',
		description:
			"I build AI-powered systems, craft iOS and web applications, build AI agents, train machine learning models and so much more. I'm currently looking for full-time opportunities where I can keep turning bold ideas into real-world impact.",
		links: [
			{ platform: j.GitHub, link: 'https://github.com/ManojBaasha' },
			{ platform: j.Linkedin, link: 'https://www.linkedin.com/in/manojelango/' },
			{ platform: j.Twitter, link: 'https://www.instagram.com/not_jonam/' },
			{ platform: j.Email, link: 'melango@ucdavis.edu' },
			{ platform: j.Facebook, link: 'https://www.facebook.com/manoj.elango.10' }
		]
	},
	Ge = { title: 'Projects', items: je },
	We = { title: 'Experiences', items: Ie },
	Xe = {
		title: 'Resumé',
		items: [
			{ name: 'Software Developer Resume', url: '/resume/Software Developer Resume (1).pdf' },
			{ name: 'Hardware Engineer Resume', url: '/resume/Hardware Engineer Resume (1).pdf' },
			{ name: 'Mobile Developer Resume', url: '/resume/Mobile Developer Resume (8).pdf' }
		]
	},
	Ze = { title: 'Search' };
export {
	We as E,
	Ye as H,
	Y as I,
	je as M,
	Ne as N,
	Ge as P,
	Xe as R,
	Ze as S,
	Fe as T,
	ye as a,
	Ie as b,
	xe as c,
	Ce as d,
	be as e,
	Ve as f,
	ze as g,
	He as h,
	le as i,
	Ae as j,
	de as k,
	Le as o,
	ne as t,
	$e as u
};
