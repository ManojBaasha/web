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
			'I developed an educational mobile app using Flutter and Dart, designed to assist 12th-grade students in accessing their study materials effortlessly. This app played a crucial role in mitigating the impact of the COVID-19 pandemic, providing students with easy access to notes and documents. With over 50 downloads, it has made a positive impact on remote learning.',
		shortDescription:
			'Created an educational mobile app individually to help 12th grade students to access notes and documents easily which helped in mitigating the effects of COVID-19 pandemic',
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
		description: `1. React Native Expo-based iOS App Development:
			Led the development of CrypGo, a cutting-edge React Native Expo-based iOS application, designed to function as a secure and efficient wallet for blockchain transactions. The app incorporated key features, including the ability to submit, retrieve, update, and create transactions. My role as the project lead involved overseeing a talented team of 5 developers throughout a 13-week development cycle, ensuring a collaborative and results-driven environment. The use of React Native Expo provided a streamlined and cross-platform development experience, delivering a polished and user-friendly wallet application.
			<br><br>
			2. Seamless Integration with ResilientDB:
			Established a direct connection to ResilientDB, an open-source Apache Certified fully distributed ledger system. As part of the organization behind ResilientDB, I played a pivotal role in integrating CrypGo with this robust and resilient blockchain infrastructure. This connection not only enhanced the security and reliability of blockchain transactions within the app but also showcased the project's alignment with industry-leading technologies and standards.
			<br><br>
			3. Technologies and Tools Utilized:
			<br><br>
			React Native Expo: Leveraged the power of React Native Expo to create a cross-platform iOS app with a focus on user experience and performance.
			Postman: Ensured the seamless functionality of blockchain transactions by extensively testing and validating API interactions using Postman.
			Strawberry GraphQL: Implemented GraphQL for efficient and flexible data querying, optimizing the communication between the app and the ResilientDB blockchain.
			4. Active Involvement in the ResilientDB Organization:
			Engaged proactively as a member of the ResilientDB organization, contributing to the advancement of a fully distributed ledger system. This involvement provided a unique opportunity to stay at the forefront of blockchain technology trends, collaborate with industry experts, and contribute to the evolution of resilient and secure decentralized systems.
			<br><br>
			The CrypGo project reflects my proficiency in React Native, expertise in blockchain technology, and the ability to lead and collaborate effectively in a team environment to deliver innovative and impactful solutions.`,
		shortDescription:
			'ReactNative Expo based Wallet Extension for the fully distributed ledger system ResilientDB',
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
	}
];

export default MY_PROJECTS;
