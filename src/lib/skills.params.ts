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
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.TypeScript,
		name: 'Typescript'
	}),
	s({
		slug: 'css',
		color: 'blue',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'sass',
		color: 'pink',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Sass,
		name: 'Sass'
	}),
	s({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.ReactJs,
		name: 'React Js'
	}),
	s({
		slug: 'svelte',
		color: 'orange',
		description: '',
		logo: Assets.Svelte,
		name: 'Svelte'
	}),
	s({
		slug: 'python',
		color: 'green',
		description:
			'Python is a versatile and high-level programming language known for its readability and simplicity. It is widely used in web development, data analysis, artificial intelligence, and more.',
		logo: Assets.Python,
		name: 'Python'
	}),

	s({
		slug: 'c',
		color: 'gray',
		description:
			'C is a powerful and widely used procedural programming language. It is commonly used for system programming, embedded systems, and game development.',
		logo: Assets.C,
		name: 'C'
	}),

	s({
		slug: 'cpp',
		color: 'darkblue',
		description:
			'C++ is an extension of the C programming language with additional features like object-oriented programming. It is widely used in game development, system programming, and software engineering.',
		logo: Assets.Cpp,
		name: 'C++'
	}),

	s({
		slug: 'flutter',
		color: 'blue',
		description:
			'Flutter is an open-source UI software development toolkit created by Google. It is used for building natively compiled applications for mobile, web, and desktop from a single codebase.',
		logo: Assets.Flutter,
		name: 'Flutter'
	}),

	s({
		slug: 'dart',
		color: 'blue',
		description:
			'Dart is a programming language optimized for building mobile, desktop, server, and web applications. It is often used with the Flutter framework for cross-platform development.',
		logo: Assets.Dart,
		name: 'Dart'
	}),

	s({
		slug: 'lua',
		color: 'green',
		description:
			'Lua is a lightweight, high-level scripting language designed for embedded systems and game development. It is known for its simplicity and flexibility.',
		logo: Assets.Unknown,
		name: 'Lua'
	}),

	s({
		slug: 'reactnative',
		color: 'blue',
		description:
			'React Native is a framework for building mobile applications using React and JavaScript. It allows developers to create cross-platform apps with a single codebase.',
		logo: Assets.Unknown,
		name: 'React Native'
	}),

	s({
		slug: 'csharp',
		color: 'purple',
		description:
			'C# (C-sharp) is a modern, object-oriented programming language developed by Microsoft. It is widely used for building Windows applications, web applications, and games using the Unity game engine.',
		logo: Assets.Csharp,
		name: 'Csharp'
	}),

	s({
		slug: 'bootstrap',
		color: 'purple',
		description:
			'Bootstrap is a popular front-end framework for building responsive and mobile-first web projects.',
		logo: Assets.Bootstrap,
		name: 'Bootstrap'
	}),
	s({
		slug: 'flask',
		color: 'black',
		description:
			'Flask is a lightweight web application framework for Python. It is easy to use and flexible.',
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
		description: 'Pandas is a data manipulation and analysis library for Python.',
		logo: Assets.Pandas,
		name: 'Pandas'
	}),
	s({
		slug: 'vuejs',
		color: 'green',
		description:
			'Vue.js is a progressive JavaScript framework for building user interfaces. It is known for its simplicity and flexibility.',
		logo: Assets.VueJs,
		name: 'Vue.js'
	}),
	s({
		slug: 'kotlin',
		color: 'orange',
		description:
			'Kotlin is a modern, concise, and expressive programming language developed by JetBrains. It is often used for Android app development.',
		logo: Assets.Kotlin,
		name: 'Kotlin'
	}),
	s({
		slug: 'nodejs',
		color: 'green',
		description:
			"Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is commonly used for server-side scripting and building scalable network applications.",
		logo: Assets.NodeJs,
		name: 'Node.js'
	}),
	s({
		slug: 'expressjs',
		color: 'black',
		description:
			'Express.js is a minimalist web application framework for Node.js. It simplifies the process of building web applications and APIs.',
		logo: Assets.ExpressJs,
		name: 'Express.js'
	}),
	s({
		slug: 'firebase',
		color: 'yellow',
		description:
			'Firebase is a platform developed by Google for creating mobile and web applications. It provides a variety of services, including hosting, authentication, and real-time database.',
		logo: Assets.Firebase,
		name: 'Firebase'
	}),
	s({
		slug: 'mongodb',
		color: 'green',
		description:
			'MongoDB is a NoSQL database that provides high performance, high availability, and easy scalability. It is commonly used for handling large amounts of data.',
		logo: Assets.MongoDB,
		name: 'MongoDB'
	}),
	s({
		slug: 'tailwind',
		color: 'blue',
		description:
			'Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build designs directly in your markup.',
		logo: Assets.Tailwind,
		name: 'Tailwind CSS'
	}),
	s({
		slug: 'vite',
		color: 'blue',
		description:
			'Vite is a front-end build tool that is fast and efficient. It is often used with frameworks like Vue.js and React.',
		logo: Assets.Vite,
		name: 'Vite'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
