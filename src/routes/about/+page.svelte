<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import StarBackground from '$lib/components/StarBackground/StarBackground.svelte';

	type SectionKey =
		| 'How It Started'
		| 'What Drives Me'
		| 'My Work in Tech'
		| 'Beyond Code'
		| 'Leading to Teach'
		| 'The Big Picture';

	let visible = false;
	let imageIndices: Record<SectionKey, number> = {
		'How It Started': 0,
		'What Drives Me': 0,
		'My Work in Tech': 0,
		'Beyond Code': 0,
		'Leading to Teach': 0,
		'The Big Picture': 0
	};

	const sectionImages: Record<SectionKey, string[]> = {
		'How It Started': [
			'/about/howitstarted1.jpeg',
			'/about/howitstarted2.jpg',
			'/about/howitstarted3.jpg',
			'/about/howitstarted4.jpg',
			'/about/howitstarted5.jpg'
		],
		'What Drives Me': [
			'/about/whatdrivesme.jpg',
			'/about/whatdrivesme1.jpg',
			'/about/whatdrivesme2.JPG'
		],
		'My Work in Tech': [
			'/about/workintech.jpeg',
			'/about/workintech.png',
			'/about/workintech3.png',
			'/about/workintech4.png'
		],
		'Beyond Code': ['/about/beyondcode.png', '/about/beyondcode2.png', '/about/beyondcode3.png'],
		'Leading to Teach': [
			'/about/leadingtech.JPG',
			'/about/leadingtech2.JPG',
			'/about/leadingtech3.png'
		],
		'The Big Picture': ['/about/endofday.JPG', '/about/manoj 4.png']
	};

	onMount(() => {
		visible = true;
		(Object.keys(sectionImages) as SectionKey[]).forEach((section) => {
			setInterval(() => {
				imageIndices[section] = (imageIndices[section] + 1) % sectionImages[section].length;
			}, 5000);
		});
	});
</script>

<div class="about-page" in:fade={{ duration: 500 }}>
	<StarBackground />

	<div class="content" class:visible>
		<section class="story-section" in:fly={{ y: 20, duration: 800, delay: 200 }}>
			<div class="section-content">
				<div class="text-content">
					<h2>How It Started</h2>
					<p>
						My journey into tech didn't start in a classroom — it started with a problem I wanted to
						solve. During the pandemic, I created my first mobile app called 1Mark Mastery. At the
						time, I saw how difficult it was to send guides and study material across platforms, so
						I built an app to help. I immediately published it, and it ended up reaching more than
						100 students. That moment — realizing I could use technology to solve a real problem and
						help people — was the spark that started it all.
					</p>
				</div>
				<div class="image-carousel">
					<img
						src={sectionImages['How It Started'][imageIndices['How It Started']]}
						alt="1Mark Mastery App"
						class:active={true}
					/>
				</div>
			</div>
		</section>

		<section class="story-section" in:fly={{ y: 20, duration: 800, delay: 400 }}>
			<div class="section-content">
				<div class="image-carousel">
					<img
						src={sectionImages['What Drives Me'][imageIndices['What Drives Me']]}
						alt="Hackathon Projects"
						class:active={true}
					/>
				</div>
				<div class="text-content">
					<h2>Chasing Curiosity</h2>
					<p>
						I'm driven, curious, and weirdly calm under pressure. I go by the motto "It is what it
						is" and push through whatever comes my way. I often pull all-nighters when I get curious
						about something and just can't sleep until I figure it out. Whether it's a last-minute
						hackathon or a product pitch for a startup idea, I'm there with a whiteboard, a roadmap,
						and an open Figma tab.
					</p>
				</div>
			</div>
		</section>

		<section class="story-section" in:fly={{ y: 20, duration: 800, delay: 600 }}>
			<div class="section-content">
				<div class="text-content">
					<h2>My Work in Tech</h2>
					<p>
						I build applications that solve problems, educate, and simplify lives. My motivation is
						simple: I want to build cool things that people can use every day. That drive has taken
						me through a wide spectrum of tech — I've become well-versed in everything from embedded
						systems to mobile apps, web platforms, AI tools, and even game development. I enjoy
						learning about new fields and picking up the tools I need along the way.
					</p>
					<p>
						I've never wanted to be limited to just one domain — I love wearing many hats, exploring
						new tools, and blending disciplines to create something meaningful. Right now, I'm
						especially interested in leveraging AI to automate processes and enhance productivity.
						I'm deep-diving into tools like Cursor AI and exploring how intelligent systems can
						support both developers and non-tech folks.
					</p>
				</div>
				<div class="image-carousel">
					<img
						src={sectionImages['My Work in Tech'][imageIndices['My Work in Tech']]}
						alt="My tech projects collage"
						class:active={true}
					/>
				</div>
			</div>
		</section>

		<section class="story-section" in:fly={{ y: 20, duration: 800, delay: 800 }}>
			<div class="section-content">
				<div class="text-content">
					<h2>Beyond Code</h2>
					<p>
						Outside of tech, I play badminton regularly and love the energy it brings. I'm also
						really into hiking — the longest one I've done was the Half Dome hike, which took 12
						hours and left me with memories I'll never forget. I love chess as well and enjoy the
						quiet strategy behind it.
					</p>
					<p>
						And yes, I have an artsy side too. I dabble in graphic design for my clubs, and I'm
						obsessed with pixel art — something about its simplicity and retro charm gets me every
						time. If I weren't in tech, I'd probably be a designer, blending visuals with stories
						that speak.
					</p>
				</div>
				<div class="image-carousel">
					<img
						src={sectionImages['Beyond Code'][imageIndices['Beyond Code']]}
						alt="Life beyond coding"
						class:active={true}
					/>
				</div>
			</div>
		</section>

		<section class="story-section" in:fly={{ y: 20, duration: 800, delay: 1000 }}>
			<div class="section-content">
				<div class="image-carousel">
					<img
						src={sectionImages['Leading to Teach'][imageIndices['Leading to Teach']]}
						alt="Teaching and community leadership"
						class:active={true}
					/>
				</div>
				<div class="text-content">
					<h2>Leading to Teach</h2>
					<p>
						One of the things I care deeply about is teaching others how to code. I'm the President
						of the Google Developer Student Club, Co-founder and Director of the Swift Coding Club,
						and Vice President of Software at SacHacks — all roles I've taken on with a single
						purpose: to give people a space where they can learn, build, and grow together.
					</p>
					<p>
						GDSC and Swift Coding Club now support over 150 developers working on projects and
						learning the foundations of software development. At SacHacks, I helped create an
						environment where over 400 developers built and launched projects within 24 hours.
						Across these communities, I've hosted more than 20 workshops covering different areas of
						coding — from mobile development to cloud integration — all with the goal of making tech
						more accessible and exciting for everyone.
					</p>
				</div>
			</div>
		</section>

		<section class="story-section" in:fly={{ y: 20, duration: 800, delay: 1200 }}>
			<div class="section-content">
				<div class="text-content">
					<h2>The Big Picture</h2>
					<p>
						At the end of the day, I'm just someone who genuinely loves the process of building —
						not just the code, but the people and the purpose behind it. Whether it's designing a
						sensor-driven security system, developing an educational mobile app, or growing a
						supportive community of student developers, I find joy in creating things that matter.
					</p>
					<p>
						My goal has always been to bridge passion with practicality, and help others do the
						same. Every line of code, every workshop, and every idea shared is a small piece of a
						much bigger vision: to make tech feel human, collaborative, and empowering for anyone
						who's willing to try.
					</p>
					<p>
						Thanks for reading a bit about me. Feel free to check out my projects, reach out, or
						just say hi — I'm always up for building something exciting with passionate people.
					</p>
				</div>
				<div class="image-carousel">
					<img
						src={sectionImages['The Big Picture'][imageIndices['The Big Picture']]}
						alt="Section visual"
						class:active={true}
					/>
				</div>
			</div>
		</section>
	</div>
</div>

<style lang="scss">
	.about-page {
		min-height: 100vh;
		position: relative;
		overflow: hidden;
		background: transparent;
		color: white;
		padding: 2rem;
	}

	.content {
		max-width: 1200px;
		margin: 0 auto;
		opacity: 0;
		transition: opacity 0.5s ease-in-out;

		&.visible {
			opacity: 1;
		}
	}

	.story-section {
		margin-bottom: 8rem;
		padding: 2rem 0;
		min-height: 80vh;
		display: flex;
		align-items: center;

		.section-content {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 4rem;
			align-items: center;

			@media (max-width: 768px) {
				grid-template-columns: 1fr;
				gap: 2rem;
			}
		}

		.text-content {
			h2 {
				font-size: 1.5rem;
				margin-bottom: 1.5rem;
				color: white;
				font-weight: normal;
			}

			p {
				font-size: 0.9rem;
				line-height: 1.6;
				color: white;
				margin-bottom: 1rem;
				font-weight: normal;

				&:last-child {
					margin-bottom: 0;
				}
			}
		}

		.image-carousel {
			position: relative;
			width: 100%;
			min-width: 300px;
			max-width: 500px;
			margin: 0 auto;
			overflow: hidden;
			border-radius: 0.5rem;
			aspect-ratio: 4/3;

			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
				display: block;
				opacity: 0;
				transition: opacity 0.1s ease-in-out;

				&.active {
					opacity: 1;
				}
			}
		}
	}

	@media (max-width: 768px) {
		.about-page {
			padding: 1rem;
		}

		.story-section {
			padding: 1rem 0;
			min-height: 60vh;

			.text-content {
				h2 {
					font-size: 1.3rem;
				}

				p {
					font-size: 0.85rem;
				}
			}

			.image-carousel {
				min-width: 250px;
				max-width: 350px;
				aspect-ratio: 4/3;
			}
		}
	}
</style>
