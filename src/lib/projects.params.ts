import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';
import ss1 from './assets/1markss1.png';
import ss2 from './assets/1markss2.png';
import marklogo from './assets/1marklogo.png';
import crypgologo from './assets/crypgologo.png';
import discord from './assets/discord.png';
import ai from './assets/ai.png';
import skull from './assets/skull.png';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'education-mobile-app',
		color: '#00ffff',
		description:
		"1 Mark Mastery is an educational mobile app developed using Flutter and Dart, designed to assist 12th-grade students in accessing their study materials effortlessly. The project was born out of a desire to mitigate the impact of the COVID-19 pandemic on students, ensuring that they had easy access to their notes and documents even in a remote learning environment. One of the major challenges was designing an intuitive and accessible UI, as many students using the app had minimal tech experience. Overcoming this by focusing on user-friendly design principles was a rewarding experience. Seeing the app gain over 50 downloads and help students navigate their studies reinforced my passion for mobile development and making technology more accessible.",
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
		skills: getSkills('sass', 'flutter', 'dart'),
		type: 'Educational App',
		screenshots: [
			{
				label: 'Screenshot 1',
				src: ss1
			},
			{
				label: 'Screenshot 2',
				src: ss2
			}
		]
	},
	{
		slug: 'crypGo',
		color: '#5e95e3',
		description: "CrypGo is an iOS app developed using React Native Expo that serves as a blockchain wallet, allowing users to securely submit, retrieve, update, and create transactions. This project was my introduction to integrating mobile applications with blockchain technology. Leading a team of five developers over 13 weeks was an incredible learning experience, involving sprint planning, debugging, and real-world problem-solving. The biggest challenge was ensuring seamless integration with ResilientDB, an open-source fully distributed ledger system. Learning GraphQL for efficient data querying was a steep curve, but it significantly improved my backend skills. The most enjoyable part was seeing everything come together—after weeks of debugging, finally getting a transaction to go through was a rewarding moment!", 
		shortDescription:
			'Blockchain wallet app built with React Native Expo, integrated with ResilientDB for secure transactions.',
		links: [{ to: 'https://github.com/ResilientApp/CrypGo', label: 'GitHub' }],
		logo: crypgologo,
		name: 'CrypGo',
		period: {
			from: new Date(2023, 8, 1)
		},
		skills: getSkills('js', 'css', 'reactnative'),
		type: 'Mobile Wallet'
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
		skills: getSkills('python'),
		type: 'Fun Discord Bot'
	},
	{
		slug: 'synthia',
		color: '#008080',
		description: `SynthiaAI is an advanced AI system that simulates real interview scenarios, providing feedback and personalized suggestions to enhance your interview skills and boost your confidence.
			<br><br>
			Our project was built using a combination of JavaScript and React for the front-end, while Python and Flask were utilized for the back-end. We selected these languages and libraries because of their ease of use, making the development process more streamlined. We integrated the OpenAI API and the Hume AI to power our AI interviewer. This combination allowed our system to generate appropriate responses, guide users during interviews, and improve its feedback through learning. The Hume AI component was instrumental in analyzing the users' emotions during their responses, enhancing the overall user experience and feedback provided by our AI interviewer. Utilizing the OpenAI API, we generated contextually relevant and coherent responses aligned with the user's inputs and interview scenarios, making the interview experience more realistic and practical.`,
		shortDescription:
			'SynthiaAI is an advanced AI system that simulates real interview scenarios, providing feedback and personalized suggestions to enhance your interview skills and boost your confidence.',
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
		skills: getSkills('reactjs', 'flask', 'ts'),
		type: 'Responsive Web Application'
	},
	{
		slug: 'gamedev',
		color: '#ffa500',
		description: `No Description here, play the game yourself :)`,
		shortDescription: 'A Simple C++ Game using text interactive gameplay.',
		links: [{ to: 'https://github.com/ManojBaasha/horrortextadventureC-', label: 'GitHub' }],
		logo: skull,
		name: 'BreakFree',
		period: {
			from: new Date(2021, 5, 1),
			to: new Date(2021, 7, 1)
		},
		skills: getSkills('cpp'),
		type: 'Desktop Game'
	},
	{
		slug: 'chatASAP',
		color: '#ff69b4',
		description: "ChatASAP was my venture into the world of real-time messaging and Swift development. The app allows users to anonymously connect and chat with random users instantly, making it a fun, unpredictable experience. Implementing Firebase Firestore for real-time database functionality was one of the trickiest parts—I had to ensure that messages were synchronized seamlessly across different users. Debugging real-time interactions proved challenging, but understanding Firebase Authentication and Cloud Functions was an invaluable experience. The best part? Seeing the app come to life and having friends test it out, watching their reactions as they got matched with random users!", 
		shortDescription:
			'Anonymous chat app developed using Swift and Firebase for real-time messaging.',
		links: [],
		logo: '',
		name: 'ChatASAP',
		period: {
			from: new Date(2022, 6, 1)
		},
		skills: getSkills('swift', 'firebase'),
		type: 'iOS Chat App'
	},
	{
		slug: 'khao',
		color: '#ff4500',
		description: "KHAO is a project I built to bridge the gap between grocery shopping and home cooking. By integrating Optical Character Recognition (OCR) and OpenAI's API, the app scans grocery receipts, identifies ingredients, and suggests recipes based on available items. The concept came from my own experience of buying groceries and not knowing what to cook! The most difficult part was fine-tuning the OCR model to recognize different fonts and formats of grocery receipts. Learning about Firebase integration and managing real-time data was another hurdle. But seeing the AI suggest meal ideas based on simple receipts was incredibly satisfying!", 
		shortDescription:
			'Web app using OCR and OpenAI API to suggest recipes based on grocery receipts.',
		links: [],
		logo: '',
		name: 'KHAO',
		period: {
			from: new Date(2023, 1, 1)
		},
		skills: getSkills('reactjs', 'firebase', 'openai'),
		type: 'AI-powered Recipe Finder'
	},
	{
		slug: 'autonomous-vehicle',
		color: '#32cd32',
		description: "Building an autonomous vehicle was one of the most technically challenging yet rewarding projects I've ever worked on. Using an RC car, custom PCBs, and a combination of C++, Python, and OpenCV, I developed a system that allowed the car to follow a line autonomously. I had to understand everything from sensor integration to embedded programming. Debugging hardware failures and sensor misreads were some of the toughest moments, but when the car finally moved on its own and correctly followed a path, the sense of accomplishment was unparalleled!", 
		shortDescription:
			'Autonomous RC car project utilizing computer vision and embedded systems.',
		links: [],
		logo: '',
		name: 'Autonomous Vehicle',
		period: {
			from: new Date(2022, 9, 1)
		},
		skills: getSkills('cpp', 'python', 'opencv', 'embedded'),
		type: 'Embedded Systems & AI'
	},
	{
		slug: 'ir-security-system',
		color: '#ff0000',
		description: "The IR-Based Security System was one of my most exciting embedded systems projects. Using the TI CC3200 Launchpad, I developed a security system that leveraged an IR remote receiver and a PIR sensor to detect motion. When unauthorized motion was detected, the system would send an alert via AWS SNS email notifications while simultaneously logging events into an AWS database. The most difficult part was debugging communication between the IR sensor and the microcontroller, ensuring that false positives were minimized. This project deepened my understanding of SPI, I2C, and AWS cloud integration. Seeing the system function in real-time, triggering alerts with precision, was both fun and incredibly rewarding!", 
		shortDescription:
			'IR-based security system using TI CC3200, AWS, and embedded systems.',
		links: [],
		logo: '',
		name: 'IR-Based Security System',
		period: {
			from: new Date(2023, 5, 1)
		},
		skills: getSkills('c', 'c++', 'aws', 'spi', 'i2c', 'embedded'),
		type: 'Embedded Security System'
	},
];

export default MY_PROJECTS;
