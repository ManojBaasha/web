import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';
import ravata from "./assets/ravata.png";
import ucdavis from "./assets/ucdavis.png";
import gdsc from "./assets/gdsc.png"

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'part-time',
		company: 'Ravata Solutions',
		description: `<br>
			I have extensive experience in the development and debugging of embedded software code, utilizing programming languages such as C and C++. My responsibilities have involved creating and refining code for embedded systems to ensure optimal functionality and performance.<br><br>
			Additionally, I have a proven track record of building desktop applications that facilitate communication with devices. In particular, I have utilized WxformBuilder in Python and WindowsForm in C# to develop user-friendly desktop interfaces that enhance the user experience and enable seamless interaction with the connected devices.<br><br>
			Furthermore, I have actively contributed to the construction and management of graphical user interfaces (GUIs) that facilitate communication between the Google Cloud Platform (GCP) and the associated devices. This involves creating intuitive and efficient interfaces to streamline data exchange and enhance overall system usability.<br><br>
			In my role, I have prioritized thorough documentation practices, capturing design specifications, system architecture details, and software code intricacies. This documentation serves as a comprehensive reference for future development and troubleshooting efforts, ensuring a robust knowledge base for ongoing and future projects.<br><br>
			As part of my commitment to delivering high-quality software solutions, I have conducted rigorous unit testing and debugging procedures. This proactive approach has allowed me to identify and address potential issues in the embedded systems, contributing to the overall reliability and stability of the software.`,
		contract: ContractType.PartTime,
		type: 'Jr. Systems Software Engineer',
		location: 'Davis, CA',
		period: { from: new Date(2023, 1, 2) },
		skills: getSkills('python', 'c', 'cpp', 'csharp'),
		name: 'Jr. Embedded Systems Engineer',
		color: '#0000ff',
		links: [{ to: 'https://www.linkedin.com/company/ravata/', label: 'Ravata Solutions', newTab: true}],
		logo: ravata,
		shortDescription: 'Ravata Solutions | Startup'
	},
	{
		slug: 'research',
		company: 'UC Davis',
		description: `Developed and Implemented a Multi-User Chat Application with Chatbot Integration:
		Designed, developed, and successfully implemented a dynamic chat application that facilitated concurrent conversations among multiple users and integrated seamlessly with various chatbots. This innovation significantly improved the efficiency and effectiveness of human-bot interactions, providing users with a rich and engaging communication experience.
		<br><br>
		Ensured Secure User Authentication with Google Firebase Integration:
		Strengthened the security and user authentication process by seamlessly integrating Google Authentication through Firebase services. This implementation not only enhanced the overall security of user accounts but also established a user-friendly and efficient login system. By leveraging Google's robust authentication mechanisms, the chat app ensured a reliable and trustworthy user experience.
		<br><br>
		Crafted a Responsive User Interface Using ReactJs:
		Employed ReactJs to design and implement a highly responsive user interface for the chat application. The utilization of ReactJs allowed for the creation of a visually appealing and interactive platform, optimizing the app's performance across various devices. The responsive design ensures a consistent and seamless user experience, regardless of the device used, thereby enhancing accessibility and user satisfaction.
		`,
		contract: ContractType.Internship,
		type: 'Human-Chatbot Interaction Pipeline Project',
		location: 'Davis, CA',
		period: { from: new Date(2023, 0 , 1), to: new Date(2023, 9, 1) },
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
		description: `Team Leadership in Web Development Projects:
				Spearheaded and directed two teams, each comprised of five talented web developers, in the successful execution of a cutting-edge tech-related project within the expansive field of web development. As the team lead, I orchestrated collaborative efforts, fostering a dynamic and creative environment to ensure the seamless integration of individual contributions into a cohesive and high-impact project. Through effective communication and strategic planning, I played a pivotal role in achieving project milestones, surpassing expectations, and delivering a top-tier solution.
				<br><br>
				Innovative Initiatives in Education and Recruitment:
				Initiated and managed comprehensive bootcamps focused on honing the skills of aspiring tech enthusiasts. Actively engaged in the recruitment of tech associates, identifying and onboarding individuals with diverse skill sets and a passion for technology. As a mentor, I conducted tutoring workshops to facilitate knowledge transfer, ensuring that team members remained at the forefront of industry trends and best practices. These initiatives not only enriched the skill sets of team members but also contributed to the growth and development of the larger tech community.
				<br><br>
				Strategic Planning for Tech Events:
				Led the planning and execution of impactful tech events within the club, demonstrating a keen understanding of industry trends and emerging technologies. By curating and organizing relevant workshops, seminars, and events, I fostered an environment of continuous learning and collaboration. These tech-centric events served as platforms for knowledge exchange, networking, and community building. Through strategic planning and meticulous execution, I played a key role in positioning the club as a hub for tech enthusiasts and professionals alike.
		`,
		contract: ContractType.PartTime,
		type: 'Tech Director',
		location: 'Davis, CA',
		period: { from: new Date(2022, 8, 1) },
		skills: getSkills('css', 'html', 'js'),
		name: 'Tech Director',
		color: '#ff0000',
		links: [],
		logo: gdsc,
		shortDescription: ''
	},
	{
		slug: 'orientation-leader',
		company: 'UC Davis',
		description: `Served as a dedicated Student Staff member at UC Davis during the academic year of 2022/2023, contributing to the university's vibrant community and fostering a positive and inclusive environment for incoming students.
		<br><br>
		Guidance and Facilitation of Orientation Activities:
		Provided invaluable guidance to new students by facilitating orientation activities and aiding in on-campus visits. As an Orientation Leader, I played a crucial role in helping students navigate the university's resources, ensuring a smooth transition into their academic journey. Through personalized assistance and insightful engagement, I contributed to fostering a sense of belonging and community for incoming students.
		<br><br>
		Panelist for Prospective UC Davis Students:
		Contributed as a panelist in a group setting, sharing personal college experiences and insights with a diverse audience of 50+ prospective UC Davis students. By offering a firsthand account of my academic journey, campus life, and involvement in student activities, I aimed to provide valuable perspectives to those considering UC Davis. This role allowed me to connect with potential students, address their inquiries, and positively influence their decision-making process in choosing UC Davis as their academic home.`,
		contract: ContractType.Contract,
		type: 'Orientation Leader',
		location: 'Davis, CA',
		period: { from: new Date(2022, 9, 1)},
		skills: getSkills(''),
		name: 'Orientation Leader',
		color: '#a52a2a',
		links: [],
		logo: ucdavis,
		shortDescription: 'Guiding Freshman and Transfer Student every summer'
	},
];

export default MY_EXPERIENCES;
