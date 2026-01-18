import { a as getSkills } from './skills.params.js';
const marklogo = '/_app/immutable/assets/1marklogo.bwrnYp2s.png';
const crypgologo = '/_app/immutable/assets/crypgologo.xWLOBO2b.png';
const discord = '/_app/immutable/assets/discord.gpVJrGId.png';
const ai = '/_app/immutable/assets/ai.BruENUPN.png';
const skull = '/_app/immutable/assets/skull.524od_61.png';
const chatasap = '/_app/immutable/assets/chatasap.DXaCsZyE.png';
const khao =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4QAAAJYCAYAAAA6xSjbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA12SURBVHgB7ddBEcJAEAXRDQawgG8MoIHCB+c4iIGwUIUJQr83p3Hwe7k+znPAn9i2AYe3LGO89mXc7pex798fjmx+bn2uY06TA+DXnAYAAABJghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABAlCAEAACIEoQAAABRghAAACBKEAIAAEQJQgAAgChBCAAAECUIAQAAogQhAABA1BtIVRYF8s7/zAAAAABJRU5ErkJggg==';
const autonomous = '/_app/immutable/assets/workintech.BJX5cBRj.jpeg';
const MY_PROJECTS = [
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
		logo: ai,
		name: 'SynthiaAI',
		period: {
			from: new Date(2023, 5, 1),
			to: new Date(2023, 6, 1)
		},
		skills: getSkills('reactjs', 'flask', 'ts', 'openai', 'ai-ml', 'web-application'),
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
		period: {
			from: new Date(2023, 5, 1)
		},
		skills: getSkills(
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
		logo: crypgologo,
		name: 'CrypGo',
		period: {
			from: new Date(2023, 8, 1)
		},
		skills: getSkills(
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
		logo: autonomous,
		name: 'Autonomous Vehicle Project',
		period: {
			from: new Date(2023, 1, 1)
		},
		skills: getSkills(
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
		logo: khao,
		name: 'KHAO',
		period: {
			from: new Date(2023, 1, 1)
		},
		skills: getSkills('reactjs', 'firebase', 'openai', 'ocr', 'ai-ml', 'web-application'),
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
		period: {
			from: new Date(2023, 1, 1)
		},
		skills: getSkills(
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
		period: {
			from: new Date(2023, 1, 1)
		},
		skills: getSkills('cpp', 'verilog', 'embedded', 'signal-processing', 'hardware-design'),
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
		logo: marklogo,
		name: '1 Mark Mastery',
		period: {
			from: new Date(2020, 4, 1),
			to: new Date(2020, 11, 1)
		},
		skills: getSkills('sass', 'flutter', 'dart', 'mobile-application', 'education'),
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
		logo: chatasap,
		name: 'ChatASAP',
		period: {
			from: new Date(2022, 6, 1)
		},
		skills: getSkills('swift', 'firebase', 'mobile-application', 'real-time-communication'),
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
		logo: discord,
		name: 'ROSHO BOT',
		period: {
			from: new Date(2020, 9, 1)
		},
		skills: getSkills('python', 'discord-bot', 'open-source', 'community'),
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
		period: {
			from: new Date(2024, 1, 1)
		},
		skills: getSkills('sveltekit', 'typescript', 'css', 'web-application', 'personal-project'),
		type: 'Web Application'
	},
	{
		slug: 'breakfree',
		color: '#ffa500',
		description:
			'BreakFree is a text-based interactive horror game that I developed as my first foray into game development. Using C++, I created an engaging narrative experience with multiple endings. The project taught me about game design principles, user interaction, and creating immersive experiences through text. The most challenging aspect was designing a branching narrative structure that remained coherent across all possible paths.',
		shortDescription: 'Text-based interactive horror game.',
		links: [{ to: 'https://github.com/ManojBaasha/horrortextadventureC-', label: 'GitHub' }],
		logo: skull,
		name: 'BreakFree',
		period: {
			from: new Date(2021, 5, 1),
			to: new Date(2021, 7, 1)
		},
		skills: getSkills('cpp', 'game-development'),
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
		period: {
			from: new Date(2023, 1, 1)
		},
		skills: getSkills('swift', 'ios', 'mobile-application', 'data-analysis'),
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
		period: {
			from: new Date(2023, 1, 1)
		},
		skills: getSkills('reactjs', 'typescript', 'nodejs', 'ai-ml', 'web-application'),
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
		period: {
			from: new Date(2023, 1, 1)
		},
		skills: getSkills('python', 'embedded', 'embedded-systems', 'hardware-design'),
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
		period: {
			from: new Date(2023, 1, 1)
		},
		skills: getSkills('python', 'openai', 'development-tools'),
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
		period: {
			from: new Date(2023, 1, 1)
		},
		skills: getSkills('python', 'llm', 'ai-ml', 'development-tools'),
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
		period: {
			from: new Date(2023, 1, 1)
		},
		skills: getSkills('python', 'discord-bot', 'community'),
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
		period: {
			from: new Date(2023, 1, 1)
		},
		skills: getSkills('python', 'opencv', 'computer-vision', 'ai-ml'),
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
		period: {
			from: new Date(2023, 1, 1)
		},
		skills: getSkills('python', 'ocr', 'testing-development'),
		type: 'Testing & Development'
	}
];
export { MY_PROJECTS as M };
