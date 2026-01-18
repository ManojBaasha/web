import { a as getSkills } from './skills.params.js';
var Platform = /* @__PURE__ */ ((Platform2) => {
	Platform2['GitHub'] = 'github';
	Platform2['StackOverflow'] = 'stackoverflow';
	Platform2['Twitter'] = 'twitter';
	Platform2['Linkedin'] = 'linkedin';
	Platform2['Email'] = 'email';
	Platform2['Facebook'] = 'facebook';
	Platform2['Youtube'] = 'youtube';
	return Platform2;
})(Platform || {});
var ContractType = /* @__PURE__ */ ((ContractType2) => {
	ContractType2['FullTime'] = 'Full-time';
	ContractType2['PartTime'] = 'Part-time';
	ContractType2['SelfEmployed'] = 'Self-employed';
	ContractType2['Freelance'] = 'Freelance';
	ContractType2['Contract'] = 'Contract';
	ContractType2['Internship'] = 'Internship';
	return ContractType2;
})(ContractType || {});
const ravata =
	'data:image/png;base64,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';
const ucdavis = '/_app/immutable/assets/ucdavis.HE6h90nn.png';
const gdsc = '/_app/immutable/assets/gdsc.xct4cwc2.png';
const resilientdb = '/_app/immutable/assets/resilientdb.BhnbttRW.png';
const sachacks = '/_app/immutable/assets/sachacks.C5HDsCRF.png';
const swift = '/_app/immutable/assets/swiftlogo.DO7HcngW.png';
const MY_EXPERIENCES = [
	{
		slug: 'gdsc-president',
		company: 'Google Developer Student Club @UCDavis',
		description: `As the President of Google Developer Student Club at UC Davis, I lead one of the largest tech communities on campus, managing a team of 27 board members and serving over 150+ students. Under my leadership, we've created a comprehensive ecosystem for technical growth and project development.<br><br>
			I've spearheaded the creation of specialized bootcamps in mobile development, focusing on iOS, React Native, Flutter, and Dart. These bootcamps have become a cornerstone of our technical education program, providing students with hands-on experience in modern mobile development practices. Additionally, I've implemented a robust recruitment system for tech associates and established regular tutoring workshops to ensure continuous learning and skill development.<br><br>
			My role extends beyond technical leadership to strategic planning and community building. I've organized numerous tech events that have brought together students, industry professionals, and faculty members. These events have not only facilitated knowledge sharing but also created valuable networking opportunities for our members. Previously serving as Tech Director, I mentored teams in building innovative mobile development projects, which laid the foundation for our current success.`,
		contract: ContractType.PartTime,
		type: 'President',
		location: 'Davis, CA',
		period: { from: new Date(2024, 8, 1), to: new Date(2025, 8, 1) },
		skills: getSkills('react-native', 'ios', 'flutter', 'dart', 'leadership'),
		name: 'President',
		color: '#4285F4',
		links: [],
		logo: gdsc,
		shortDescription: 'Leading GDSC and organizing tech events'
	},
	{
		slug: 'sachacks-vp',
		company: 'SacHacks',
		description: `As the VP of Software at SacHacks, I've played a pivotal role in expanding our hackathon's reach and impact. Through strategic marketing initiatives across multiple social media platforms and targeted email campaigns, I've successfully increased our Discord server participation by over 70 students, creating a more vibrant and engaged community.<br><br>
			My technical contributions include developing and maintaining the official SacHacks website, which serves as the primary platform for participant registration and information dissemination. I've also engineered a custom Discord bot in Python that streamlines communication and enhances the participant experience during the hackathon. This bot has become an essential tool for managing announcements, team formations, and resource sharing.<br><br>
			Building on my previous roles as Marketing Associate and Web Developer, I've implemented comprehensive software solutions to host SacHacks 2025, successfully managing a community of over 500 members. This includes developing robust registration systems, participant tracking mechanisms, and real-time communication channels that ensure smooth event execution.`,
		contract: ContractType.PartTime,
		type: 'VP of Software',
		location: 'Sacramento, CA',
		period: { from: new Date(2022, 5, 1), to: new Date(2025, 8, 1) },
		skills: getSkills('python', 'discord.py', 'web-development', 'marketing'),
		name: 'VP of Software',
		color: '#FF6B6B',
		links: [{ to: 'https://sachacks.io', label: 'sachacks.io', newTab: true }],
		logo: sachacks,
		shortDescription: 'Leading software development for SacHacks'
	},
	{
		slug: 'swift-club-founder',
		company: 'Swift Coding Club @UCDavis',
		description: `As a Director of the Swift Coding Club at UC Davis, I've established a thriving community of over 100 iOS developers dedicated to creating innovative SwiftUI applications. This initiative has become a hub for iOS development enthusiasts, fostering collaboration and technical growth among students.<br><br>
			I've implemented a comprehensive curriculum that combines technical skills with industry best practices. Through structured workshops and hands-on projects, I guide students through AGILE development methodologies, helping them understand the importance of iterative development and continuous improvement. Additionally, I've introduced startup product pitch sessions where students can present their app ideas and receive valuable feedback from peers and industry professionals.<br><br>
			The club serves as a platform for students to develop not just technical skills but also essential soft skills needed in the tech industry. Through regular code reviews, pair programming sessions, and team projects, members learn to work effectively in collaborative environments while building their portfolio of iOS applications.`,
		contract: ContractType.PartTime,
		type: 'Director',
		location: 'Davis, CA',
		period: { from: new Date(2024, 8, 1), to: new Date(2025, 8, 1) },
		skills: getSkills('swift', 'swiftui', 'ios', 'agile', 'leadership'),
		name: 'Director',
		color: '#FF9500',
		links: [],
		logo: swift,
		shortDescription: 'Leading Swift development community'
	},
	{
		slug: 'ravata-engineer',
		company: 'Ravata Solutions',
		description: `As a Jr. Systems Software Engineer at Ravata Solutions, I've contributed significantly to the development of embedded systems solutions, focusing on STM32 Microcontrollers and their integration with various interfaces. My work has been instrumental in creating robust communication systems using UART and SerialInterface protocols in C/C++.<br><br>
			I've developed comprehensive GUI interfaces using Python and C# that facilitate seamless communication between Microcontrollers and Google Cloud Platform (GCP) Buckets. This integration has streamlined data management and improved system efficiency. Additionally, I've implemented advanced signal processing features, including FFT (Fast Fourier Transform) algorithms and real-time Peak Detection, which have enhanced the system's analytical capabilities. These features are thoroughly tested using MatPlotLib for visualization and validation.<br><br>
			My role also involves extensive debugging and optimization of embedded systems. Using tools like Ozone and RTT Viewer, I've identified and resolved critical issues in the system architecture, improving reliability and performance. This work has contributed to the development of more efficient and reliable embedded solutions for our clients.`,
		contract: ContractType.PartTime,
		type: 'Jr. Systems Software Engineer',
		location: 'Davis, CA',
		period: { from: new Date(2023, 2, 1), to: new Date(2024, 8, 1) },
		skills: getSkills('c', 'cpp', 'python', 'csharp', 'embedded-systems', 'matplotlib'),
		name: 'Jr. Systems Software Engineer',
		color: '#0000ff',
		links: [
			{ to: 'https://www.linkedin.com/company/ravata/', label: 'Ravata Solutions', newTab: true }
		],
		logo: ravata,
		shortDescription: 'Embedded Systems Development'
	},
	{
		slug: 'resilientdb-researcher',
		company: 'ResilientDB @ UCDavis',
		description: `As an Open Source Blockchain Researcher at ResilientDB, I've been instrumental in developing innovative blockchain solutions, particularly focusing on mobile integration. My primary contribution has been the development of an iOS application that interfaces directly with ResilientDB, an Apache Certified fully distributed ledger system. This work has expanded the accessibility of blockchain technology to mobile users.<br><br>
			My research and development efforts have focused on creating robust and user-friendly interfaces for blockchain interactions. I've implemented comprehensive solutions using modern technologies including Docker for containerization, Linux for system management, and GraphQL for efficient data querying. The application is built using React Native, ensuring cross-platform compatibility and optimal performance.<br><br>
			I continue to work on enhancing the software's capabilities and exploring new features that could improve the user experience and system functionality. This ongoing development work has contributed to the broader adoption of blockchain technology in mobile applications, making it more accessible to a wider audience.`,
		contract: ContractType.Internship,
		type: 'Open Source Blockchain Researcher',
		location: 'Davis, CA',
		period: { from: new Date(2023, 8, 1), to: new Date(2024, 8, 1) },
		skills: getSkills('blockchain', 'ios', 'react-native', 'docker', 'linux', 'graphql'),
		name: 'Open Source Blockchain Researcher',
		color: '#00ff00',
		links: [
			{
				to: 'https://blog.resilientdb.com/2023/12/17/CrypoGo.html',
				label: 'CrypGo Blog Post',
				newTab: true
			}
		],
		logo: resilientdb,
		shortDescription: 'Blockchain Research and Development'
	},
	{
		slug: 'research',
		company: 'UC Davis',
		description: `As a researcher at UC Davis, I developed and implemented a sophisticated Multi-User Chat Application with integrated chatbot capabilities. This innovative system facilitated concurrent conversations among multiple users while seamlessly integrating with various chatbot services. The implementation significantly enhanced the efficiency of human-bot interactions, creating a rich and engaging communication experience for users.<br><br>
			Security and user authentication were paramount in the development process. I implemented robust security measures through Google Firebase Integration, establishing a secure and user-friendly authentication system. This integration leveraged Google's comprehensive authentication mechanisms to ensure reliable and trustworthy user experiences while maintaining high security standards.<br><br>
			The application's user interface was crafted using ReactJs, resulting in a highly responsive and visually appealing platform. The implementation focused on optimizing performance across various devices while ensuring a consistent and seamless user experience. The responsive design principles applied throughout the development process guaranteed accessibility and user satisfaction regardless of the device used.`,
		contract: ContractType.Internship,
		type: 'Human-Chatbot Interaction Pipeline Project',
		location: 'Davis, CA',
		period: { from: new Date(2023, 0, 1), to: new Date(2023, 9, 1) },
		skills: getSkills('js', 'css', 'html', 'reactjs', 'firebase'),
		name: 'Researcher',
		color: '#ffff00',
		links: [],
		logo: ucdavis,
		shortDescription: 'Human-Chatbot Interaction Pipeline Project'
	},
	{
		slug: 'tech-director',
		company: 'Google Developer Student Club',
		description: `As Tech Director of the Google Developer Student Club, I led and directed two teams of five talented web developers in executing cutting-edge tech projects. My leadership approach focused on fostering a collaborative environment that encouraged innovation and technical excellence. Through effective communication and strategic planning, I guided these teams to achieve project milestones and deliver high-quality solutions.<br><br>
			I initiated and managed comprehensive bootcamps designed to enhance the technical skills of aspiring developers. These programs included hands-on workshops, coding sessions, and project-based learning opportunities. As a mentor, I conducted regular tutoring workshops to facilitate knowledge transfer and ensure team members stayed current with industry trends and best practices. This commitment to education and skill development has contributed significantly to the growth of our technical community.<br><br>
			My role extended to strategic planning and execution of tech events within the club. I curated and organized workshops, seminars, and networking events that brought together students, industry professionals, and faculty members. These events served as platforms for knowledge exchange and community building, establishing the club as a central hub for tech enthusiasts and professionals on campus.`,
		contract: ContractType.PartTime,
		type: 'Tech Director',
		location: 'Davis, CA',
		period: { from: new Date(2022, 8, 1), to: new Date(2023, 8, 1) },
		skills: getSkills('css', 'html', 'js'),
		name: 'Tech Director',
		color: '#ff0000',
		links: [],
		logo: gdsc,
		shortDescription: 'Creating Workshops, Hosting Events and Technical Mentorship'
	},
	{
		slug: 'orientation-leader',
		company: 'UC Davis',
		description: `As an Orientation Leader at UC Davis, I served as a dedicated Student Staff member during the 2022/2023 academic year, contributing to the university's vibrant community and fostering an inclusive environment for incoming students. My role was crucial in helping new students transition smoothly into university life.<br><br>
			I provided comprehensive guidance to new students through various orientation activities and on-campus visits. This included facilitating campus tours, explaining university resources, and helping students navigate the academic and social aspects of university life. Through personalized assistance and engaging interactions, I helped create a welcoming environment that promoted student success and community engagement.<br><br>
			As a panelist, I shared my experiences and insights with over 50 prospective UC Davis students, offering valuable perspectives on campus life, academic opportunities, and student activities. These sessions allowed me to connect with potential students, address their concerns, and positively influence their decision-making process in choosing UC Davis as their academic home.`,
		contract: ContractType.Contract,
		type: 'Orientation Leader',
		location: 'Davis, CA',
		period: { from: new Date(2022, 9, 1), to: new Date(2023, 6, 1) },
		skills: getSkills(''),
		name: 'Orientation Leader',
		color: '#a52a2a',
		links: [],
		logo: ucdavis,
		shortDescription: 'Guiding Freshman and Transfer Student every summer around the campus'
	}
];
export { MY_EXPERIENCES as M, Platform as P };
