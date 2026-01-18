import { s as subscribe, n as null_to_empty } from '../../chunks/utils2.js';
import {
	c as create_ssr_component,
	a as add_attribute,
	v as validate_component,
	e as escape,
	b as each
} from '../../chunks/ssr.js';
import { p as page } from '../../chunks/stores.js';
import { H as HOME, N as NavBar } from '../../chunks/params.js';
import { t as theme } from '../../chunks/skills.params.js';
import { b as base } from '../../chunks/server.js';
import '@sveltejs/kit/internal/server';
import { U as UIcon } from '../../chunks/UIcon.js';
import { S as StarBackground } from '../../chunks/StarBackground.js';
import '@sveltejs/kit/internal';
import '../../chunks/exports.js';
import '../../chunks/utils.js';
const css$1 = {
	code: '.nav-menu.svelte-z8k68j{display:flex;justify-content:center;position:sticky;top:0px;z-index:10;padding:0px 10px;border-bottom:1px solid var(--secondary);background-color:var(--main)}.nav-menu-item.svelte-z8k68j{text-decoration:none;font-weight:400;padding:10px 20px;color:inherit;display:flex;align-items:center;border-bottom:3px solid transparent}.nav-menu-item-label.svelte-z8k68j{margin-left:10px}@media(max-width: 950px){.nav-menu-item-label.svelte-z8k68j{display:none}}.nav-menu-item.svelte-z8k68j:hover{background-color:var(--main-hover)}',
	map: '{"version":3,"file":"NavMenu.svelte","sources":["NavMenu.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { page } from \\"$app/stores\\";\\nimport { HOME, NavBar } from \\"$lib/params\\";\\nimport { theme, toggleTheme } from \\"$lib/stores/theme\\";\\nimport { base } from \\"$app/paths\\";\\nimport UIcon from \\"../Icon/UIcon.svelte\\";\\nlet currentRoute = \\"/\\";\\n$: {\\n  if ($page) {\\n    currentRoute = $page.url.pathname;\\n  }\\n}\\nconst items = [\\n  { title: NavBar.about, to: \\"/about\\", icon: \\"i-carbon-user-profile\\" },\\n  { title: NavBar.personal, to: \\"/projects\\", icon: \\"i-carbon-cube\\" },\\n  { title: NavBar.career, to: \\"/experience\\", icon: \\"i-carbon-development\\" },\\n  { title: NavBar.resume, to: \\"/resume\\", icon: \\"i-carbon-result\\" }\\n];\\n<\/script>\\n\\n<div class=\\"nav-menu\\">\\n\\t<nav class=\\"container !justify-between flex flex-row items-center text-sm\\">\\n\\t\\t<a\\n\\t\\t\\thref={`${base}/`}\\n\\t\\t\\tclass=\\"nav-menu-left decoration-none flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]\\"\\n\\t\\t>\\n\\t\\t\\t<UIcon icon=\\"i-carbon-code\\" classes=\\"text-2em\\" />\\n\\t\\t\\t<span class=\\"ml-2 text-md font-bold hidden md:inline\\">{HOME.name} {HOME.lastName}</span>\\n\\t\\t</a>\\n\\t\\t<div class=\\"flex flex-row flex-1 self-center justify-center\\">\\n\\t\\t\\t{#each items as item}\\n\\t\\t\\t\\t<a href={`${base}${item.to}`} class=\\"nav-menu-item !text-[var(--secondary-text)]\\">\\n\\t\\t\\t\\t\\t<UIcon icon={item.icon} classes=\\"text-1.3em\\" />\\n\\t\\t\\t\\t\\t<span class=\\"nav-menu-item-label\\">{item.title}</span>\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t\\t<div class=\\"flex flex-row flex-1 self-center justify-center\\">\\n\\t\\t\\t<a\\n\\t\\t\\t\\thref={`https://manojbaasha.github.io/blog/`}\\n\\t\\t\\t\\tclass=\\"nav-menu-item !text-[var(--secondary-text)]\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<span class=\\"nav-menu-item-label\\">Blog</span>\\n\\t\\t\\t</a>\\n\\t\\t</div>\\n\\t\\t<div class=\\"flex flex-row self-stretch items-stretch gap-1 text-1.15em\\">\\n\\t\\t\\t<a\\n\\t\\t\\t\\thref={`${base}/search`}\\n\\t\\t\\t\\tclass=\\"text-inherit col-center self-stretch px-2 hover:bg-[color:var(--main-hover)]\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<UIcon icon=\\"i-carbon-search\\" />\\n\\t\\t\\t</a>\\n\\t\\t\\t<button\\n\\t\\t\\t\\tclass=\\"bg-transparent text-1em border-none cursor-pointer hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2\\"\\n\\t\\t\\t\\ton:click={() => toggleTheme()}\\n\\t\\t\\t>\\n\\t\\t\\t\\t{#if $theme}\\n\\t\\t\\t\\t\\t<UIcon icon=\\"i-carbon-moon\\" />\\n\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t<UIcon icon=\\"i-carbon-sun\\" />\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</button>\\n\\t\\t</div>\\n\\t</nav>\\n</div>\\n\\n<style lang=\\"scss\\">.nav-menu {\\n  display: flex;\\n  justify-content: center;\\n  position: sticky;\\n  top: 0px;\\n  z-index: 10;\\n  padding: 0px 10px;\\n  border-bottom: 1px solid var(--secondary);\\n  background-color: var(--main);\\n}\\n.nav-menu-item {\\n  text-decoration: none;\\n  font-weight: 400;\\n  padding: 10px 20px;\\n  color: inherit;\\n  display: flex;\\n  align-items: center;\\n  border-bottom: 3px solid transparent;\\n}\\n.nav-menu-item-label {\\n  margin-left: 10px;\\n}\\n@media (max-width: 950px) {\\n  .nav-menu-item-label {\\n    display: none;\\n  }\\n}\\n.nav-menu-item:hover {\\n  background-color: var(--main-hover);\\n}</style>\\n"],"names":[],"mappings":"AAiEmB,uBAAU,CAC3B,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,GAAG,CACR,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,WAAW,CAAC,CACzC,gBAAgB,CAAE,IAAI,MAAM,CAC9B,CACA,4BAAe,CACb,eAAe,CAAE,IAAI,CACrB,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,WAC3B,CACA,kCAAqB,CACnB,WAAW,CAAE,IACf,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,kCAAqB,CACnB,OAAO,CAAE,IACX,CACF,CACA,4BAAc,MAAO,CACnB,gBAAgB,CAAE,IAAI,YAAY,CACpC"}'
};
const NavMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $page, $$unsubscribe_page;
	let $theme, $$unsubscribe_theme;
	$$unsubscribe_page = subscribe(page, (value) => ($page = value));
	$$unsubscribe_theme = subscribe(theme, (value) => ($theme = value));
	const items = [
		{
			title: NavBar.about,
			to: '/about',
			icon: 'i-carbon-user-profile'
		},
		{
			title: NavBar.personal,
			to: '/projects',
			icon: 'i-carbon-cube'
		},
		{
			title: NavBar.career,
			to: '/experience',
			icon: 'i-carbon-development'
		},
		{
			title: NavBar.resume,
			to: '/resume',
			icon: 'i-carbon-result'
		}
	];
	$$result.css.add(css$1);
	{
		{
			if ($page) {
				$page.url.pathname;
			}
		}
	}
	$$unsubscribe_page();
	$$unsubscribe_theme();
	return `<div class="nav-menu svelte-z8k68j"><nav class="container !justify-between flex flex-row items-center text-sm"><a${add_attribute('href', `${base}/`, 0)} class="nav-menu-left decoration-none flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]">${validate_component(
		UIcon,
		'UIcon'
	).$$render(
		$$result,
		{
			icon: 'i-carbon-code',
			classes: 'text-2em'
		},
		{},
		{}
	)} <span class="ml-2 text-md font-bold hidden md:inline">${escape(HOME.name)} ${escape(HOME.lastName)}</span></a> <div class="flex flex-row flex-1 self-center justify-center">${each(
		items,
		(item) => {
			return `<a${add_attribute('href', `${base}${item.to}`, 0)} class="nav-menu-item !text-[var(--secondary-text)] svelte-z8k68j">${validate_component(UIcon, 'UIcon').$$render($$result, { icon: item.icon, classes: 'text-1.3em' }, {}, {})} <span class="nav-menu-item-label svelte-z8k68j">${escape(item.title)}</span> </a>`;
		}
	)}</div> <div class="flex flex-row flex-1 self-center justify-center" data-svelte-h="svelte-nktavv"><a${add_attribute('href', `https://manojbaasha.github.io/blog/`, 0)} class="nav-menu-item !text-[var(--secondary-text)] svelte-z8k68j"><span class="nav-menu-item-label svelte-z8k68j">Blog</span></a></div> <div class="flex flex-row self-stretch items-stretch gap-1 text-1.15em"><a${add_attribute('href', `${base}/search`, 0)} class="text-inherit col-center self-stretch px-2 hover:bg-[color:var(--main-hover)]">${validate_component(UIcon, 'UIcon').$$render($$result, { icon: 'i-carbon-search' }, {}, {})}</a> <button class="bg-transparent text-1em border-none cursor-pointer hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2">${$theme ? `${validate_component(UIcon, 'UIcon').$$render($$result, { icon: 'i-carbon-moon' }, {}, {})}` : `${validate_component(UIcon, 'UIcon').$$render($$result, { icon: 'i-carbon-sun' }, {}, {})}`}</button></div></nav> </div>`;
});
const css = {
	code: '.content.svelte-db9gw8{display:flex;flex-direction:column;flex:1;padding:0px 0px}.body.svelte-db9gw8{margin:0px;background-color:transparent;color:var(--main-text);font-family:var(--text-f);display:flex;flex-direction:column;transition-duration:200ms;letter-spacing:1px;min-height:100vh;position:relative}p{margin:0px}h1, h2, h3, h4, h5, h6{margin:5px 0px}',
	map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import \\"uno.css\\";\\nimport NavMenu from \\"$lib/components/NavMenu/NavMenu.svelte\\";\\nimport \\"$lib/index.scss\\";\\nimport { onHydrated, theme } from \\"$lib/stores/theme\\";\\nimport { onMount } from \\"svelte\\";\\nimport StarBackground from \\"$lib/components/StarBackground/StarBackground.svelte\\";\\nimport { injectAnalytics } from \\"@vercel/analytics/sveltekit\\";\\nonMount(() => {\\n  onHydrated();\\n  injectAnalytics();\\n});\\n<\/script>\\n\\n<div class={\`body contents \${$theme ? 'theme-dark' : 'theme-light'}\`}>\\n\\t<StarBackground />\\n\\t<NavMenu />\\n\\t<div class=\\"content container\\"><slot /></div>\\n</div>\\n\\n<style lang=\\"scss\\">.content {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 1;\\n  padding: 0px 0px;\\n}\\n\\n.body {\\n  margin: 0px;\\n  background-color: transparent;\\n  color: var(--main-text);\\n  font-family: var(--text-f);\\n  display: flex;\\n  flex-direction: column;\\n  transition-duration: 200ms;\\n  letter-spacing: 1px;\\n  min-height: 100vh;\\n  position: relative;\\n}\\n\\n:global(p) {\\n  margin: 0px;\\n}\\n\\n:global(h1, h2, h3, h4, h5, h6) {\\n  margin: 5px 0px;\\n}</style>\\n"],"names":[],"mappings":"AAmBmB,sBAAS,CAC1B,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,GAAG,CAAC,GACf,CAEA,mBAAM,CACJ,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,WAAW,CAC7B,KAAK,CAAE,IAAI,WAAW,CAAC,CACvB,WAAW,CAAE,IAAI,QAAQ,CAAC,CAC1B,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,mBAAmB,CAAE,KAAK,CAC1B,cAAc,CAAE,GAAG,CACnB,UAAU,CAAE,KAAK,CACjB,QAAQ,CAAE,QACZ,CAEQ,CAAG,CACT,MAAM,CAAE,GACV,CAEQ,sBAAwB,CAC9B,MAAM,CAAE,GAAG,CAAC,GACd"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $theme, $$unsubscribe_theme;
	$$unsubscribe_theme = subscribe(theme, (value) => ($theme = value));
	$$result.css.add(css);
	$$unsubscribe_theme();
	return `<div class="${escape(null_to_empty(`body contents ${$theme ? 'theme-dark' : 'theme-light'}`), true) + ' svelte-db9gw8'}">${validate_component(StarBackground, 'StarBackground').$$render($$result, {}, {}, {})} ${validate_component(NavMenu, 'NavMenu').$$render($$result, {}, {}, {})} <div class="content container svelte-db9gw8">${slots.default ? slots.default({}) : ``}</div> </div>`;
});
export { Layout as default };
