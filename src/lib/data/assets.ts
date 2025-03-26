import type { Asset } from '$lib/types';
import { theme } from '$lib/stores/theme';

const CDN_URL = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const a = (name: string, extension: string, dark?: string): Asset =>
	dark ? { dark: `${CDN_URL}/${name}/${dark}`, light: `${CDN_URL}/${name}/${name}-${extension}` } : `${CDN_URL}/${name}/${name}-${extension}`;

const Assets = {
	// Core Languages
	JavaScript: a('javascript', 'original.svg'),
	TypeScript: a('typescript', 'original.svg'),
	Python: a('python', 'original.svg'),
	Java: a('java', 'original.svg'),
	C: a('c', 'original.svg'),
	Cpp: a('cplusplus', 'original.svg'),
	Csharp: a('csharp', 'original.svg'),
	Swift: a('swift', 'original.svg'),
	Ruby: a('ruby', 'original.svg'),
	PHP: a('php', 'original.svg'),
	Perl: a('perl', 'original.svg'),
	R: a('r', 'original.svg'),
	Matlab: a('matlab', 'original.svg'),
	Scala: a('scala', 'original.svg'),
	Haskell: a('haskell', 'original.svg'),
	Elixir: a('elixir', 'original.svg'),
	Clojure: a('clojure', 'original.svg'),
	Fsharp: a('fsharp', 'original.svg'),
	OCaml: a('ocaml', 'original.svg'),
	Racket: a('racket', 'original.svg'),
	Lua: a('lua', 'original.svg'),
	Groovy: a('groovy', 'original.svg'),
	ObjectiveC: a('objectivec', 'original.svg'),
	Assembly: a('assembly', 'original.svg'),
	Shell: a('bash', 'original.svg'),
	Powershell: a('powershell', 'original.svg'),
	Rust: a('rust', 'original.svg'),
	Go: a('go', 'original.svg'),
	Zig: a('zig', 'original.svg'),
	Nim: a('nim', 'original.svg'),
	Crystal: a('crystal', 'original.svg'),

	// Web Technologies
	HTML: a('html5', 'original.svg'),
	CSS: a('css3', 'original.svg'),
	Sass: a('sass', 'original.svg'),
	Tailwind: a('tailwindcss', 'original.svg'),
	Bootstrap: a('bootstrap', 'original.svg'),
	Postcss: a('postcss', 'original.svg'),

	// Frontend Frameworks
	ReactJs: a('react', 'original.svg'),
	VueJs: a('vuejs', 'original.svg'),
	Svelte: a('svelte', 'original.svg'),
	Angular: a('angularjs', 'original.svg'),
	Nextjs: a('nextjs', 'original.svg'),
	Remix: a('remix', 'original.svg'),
	Astro: a('astro', 'original.svg'),
	SolidJs: a('solidjs', 'original.svg'),
	Quasar: a('quasar', 'original.svg'),
	Nuxt: a('nuxtjs', 'original.svg'),

	// Backend Frameworks
	NodeJs: a('nodejs', 'original.svg'),
	ExpressJs: a('express', 'original.svg'),
	NestJs: a('nestjs', 'original.svg'),
	Fastify: a('fastify', 'original.svg'),
	AdonisJs: a('adonisjs', 'original.svg'),
	Spring: a('spring', 'original.svg'),
	Laravel: a('laravel', 'original.svg'),
	Rails: a('rails', 'original.svg'),
	Django: a('django', 'original.svg'),
	Flask: a('flask', 'original.svg'),
	FastAPI: a('fastapi', 'original.svg'),
	Pyramid: a('pyramid', 'original.svg'),
	Falcon: a('falcon', 'original.svg'),

	// Mobile Development
	ReactNative: a('react', 'original.svg'),
	Flutter: a('flutter', 'original.svg'),
	Dart: a('dart', 'original.svg'),
	Ionic: a('ionic', 'original.svg'),
	Cordova: a('cordova', 'original.svg'),
	Capacitor: a('capacitor', 'original.svg'),
	Xamarin: a('xamarin', 'original.svg'),
	Android: a('android', 'original.svg'),

	// Databases
	PostgreSQL: a('postgresql', 'original.svg'),
	MySQL: a('mysql', 'original.svg'),
	SQLite: a('sqlite', 'original.svg'),
	MariaDB: a('mariadb', 'original.svg'),
	MongoDB: a('mongodb', 'original.svg'),
	Redis: a('redis', 'original.svg'),
	Elasticsearch: a('elasticsearch', 'original.svg'),
	Cassandra: a('cassandra', 'original.svg'),
	CouchDB: a('couchdb', 'original.svg'),
	Neo4j: a('neo4j', 'original.svg'),

	// Cloud & DevOps
	AWS: a('amazonwebservices', 'original.svg'),
	Azure: a('azure', 'original.svg'),
	GCP: a('googlecloud', 'original.svg'),
	DigitalOcean: a('digitalocean', 'original.svg'),
	Heroku: a('heroku', 'original.svg'),
	Vercel: a('vercel', 'original.svg'),
	Netlify: a('netlify', 'original.svg'),
	Cloudflare: a('cloudflare', 'original.svg'),
	Docker: a('docker', 'original.svg'),
	Kubernetes: a('kubernetes', 'original.svg'),
	Jenkins: a('jenkins', 'original.svg'),
	CircleCI: a('circleci', 'original.svg'),
	TravisCI: a('travisci', 'original.svg'),

	// Development Tools
	Git: a('git', 'original.svg'),
	GitHub: a('github', 'original.svg'),
	GitLab: a('gitlab', 'original.svg'),
	Bitbucket: a('bitbucket', 'original.svg'),
	SVN: a('subversion', 'original.svg'),
	Mercurial: a('mercurial', 'original.svg'),
	VSCode: a('vscode', 'original.svg'),
	IntelliJ: a('intellij', 'original.svg'),
	PyCharm: a('pycharm', 'original.svg'),
	WebStorm: a('webstorm', 'original.svg'),
	Postman: a('postman', 'original.svg'),
	Insomnia: a('insomnia', 'original.svg'),
	Swagger: a('swagger', 'original.svg'),

	// Build & Package Tools
	Webpack: a('webpack', 'original.svg'),
	Rollup: a('rollupjs', 'original.svg'),
	Parcel: a('parcel', 'original.svg'),
	Babel: a('babel', 'original.svg'),
	ESLint: a('eslint', 'original.svg'),
	Prettier: a('prettier', 'original.svg'),
	Yarn: a('yarn', 'original.svg'),
	Pnpm: a('pnpm', 'original.svg'),
	Npm: a('npm', 'original.svg'),

	// Testing Tools
	Jest: a('jest', 'original.svg'),
	Mocha: a('mocha', 'original.svg'),
	Chai: a('chai', 'original.svg'),
	Cypress: a('cypress', 'original.svg'),
	Playwright: a('playwright', 'original.svg'),
	Puppeteer: a('puppeteer', 'original.svg'),
	Vitest: a('vitest', 'original.svg'),

	// Data Science & ML
	Numpy: a('numpy', 'original.svg'),
	Pandas: a('pandas', 'original.svg'),
	Jupyter: a('jupyter', 'original.svg'),
	Anaconda: a('anaconda', 'original.svg'),
	PyTorch: a('pytorch', 'original.svg'),
	TensorFlow: a('tensorflow', 'original.svg'),

	// Design Tools
	Figma: a('figma', 'original.svg'),
	Sketch: a('sketch', 'original.svg'),
	Inkscape: a('inkscape', 'original.svg'),
	Blender: a('blender', 'original.svg'),
	Premiere: a('adobepremierepro', 'original.svg'),
	Photoshop: a('adobephotoshop', 'original.svg'),
	AfterEffects: a('adobeaftereffects', 'original.svg'),
	Illustrator: a('adobeillustrator', 'original.svg'),

	// Game Development
	Unity: a('unity', 'original.svg'),
	UnrealEngine: a('unrealengine', 'original.svg'),
	Godot: a('godot', 'original.svg'),

	// Additional Tools
	GraphQL: a('graphql', 'original.svg'),
	Deno: a('denojs', 'original.svg'),
	Electron: a('electron', 'original.svg'),
	Vite: a('vitejs', 'original.svg'),
	Unocss: a('unocss', 'original.svg'),
	Ruvy: a('ruvy', 'original.svg'),
	Unknown: a('devicon', 'original.svg')
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	if (!asset) return getAssetURL(Assets.Unknown);
	return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};
