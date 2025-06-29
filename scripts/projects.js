// Project data
const projects = {
	tawsila: {
		title: "Tawsila",
		images: [
			"assets/tawsila/Screenshot (348).png",
			"assets/tawsila/Screenshot (349).png",
			"assets/tawsila/Screenshot (350).png",
			"assets/tawsila/Screenshot (351).png",
			"assets/tawsila/Screenshot (352).png",
			"assets/tawsila/Screenshot (353).png",
			"assets/tawsila/Screenshot (354).png",
			"assets/tawsila/Screenshot (355).png",
			"assets/tawsila/Screenshot (356).png",
		],
		description: `full-stack MVP ride-sharing mobile-first web application designed to connect drivers and passengers for intercity travel in Jordan. As 
the sole developer, I led the end-to-end product lifecycle, including requirements gathering, technical planning, and implementation. I 
created a company plan for the platform, focusing on scalable architecture and rapid iteration to validate the business model and user 
needs.`,
		stack: [
			"react",
			"tailwind",
			"node-js",
			"express",
			"mongodb",
			"git",
			"postman",
			"supabase",
		],
		github: "https://github.com/OmarSalhab/tawsila",
	},
	ecommerce: {
		title: "Comfy Shop",
		images: [
			"assets/comfy-shop/Screenshot (357).png",
			"assets/comfy-shop/Screenshot (358).png",
			"assets/comfy-shop/Screenshot (359).png",
			"assets/comfy-shop/Screenshot (360).png",
			"assets/comfy-shop/Screenshot (361).png",
			"assets/comfy-shop/Screenshot (362).png",
			"assets/comfy-shop/Screenshot (363).png",
			"assets/comfy-shop/Screenshot (364).png",
			"assets/comfy-shop/Screenshot (365).png",
		],
		description: `A full-stack e-commerce platform simulating real-world functionalities. Built with React, Node.js, and MongoDB. Includes advanced state management and performance optimizations.  Developed advanced state management using Redux Toolkit to handle complex global state across the 
application. Implemented pagination and lazy loading to enhance performance and user experience. Focused on optimizing CRUD 
operations through refined API and database query design, reducing unnecessary data load. Gained practical experience in building 
RESTful APIs, handling authentication and authorization, and improving backend scalability. This project significantly improved my 
ability to structure full-stack applications and build maintainable, performance-oriented systems.`,
		stack: [
			"react",
			"redux",
			"tanstack-query",
			"tailwind",
			"node-js",
			"express",
			"mongodb",
			"postman",
			"git",
		],
		github: "https://github.com/OmarSalhab/fullstack-web-application",
	},
	proprep: {
		title: "ProPrep",
		images: [
			"assets/proprep/Screenshot (332).png",
			"assets/proprep/Screenshot (333).png",
			"assets/proprep/Screenshot (334).png",
			"assets/proprep/Screenshot (335).png",
			"assets/proprep/Screenshot (336).png",
		],
		description:
			"A web app for generating intelligent quizzes from documents using LLMs. Built with React, Node.js, and PDF.js. Supports localization and advanced PDF processing.",
		stack: [
			"react",
			"typescript",
			"shadcn-ui",
			"tailwind",
			"node-js",
			"express",
			"mongodb",
			"git",
		],
		github: "https://github.com/OmarSalhab/ProPrep",
	},
	view2earn: {
		title: "View2Earn",
		images: [
			"assets/view2earn/Screenshot (337).png",
			"assets/view2earn/Screenshot (338).png",
			"assets/view2earn/Screenshot (339).png",
			"assets/view2earn/Screenshot (347).png",
		],
		description:
			"A web application that Estimate your YouTube earnings. Use our free calculators to predict ad revenue for videos and channels based on views, niche, and audience location.",
		stack: [
			"react",
			"typescript",
			"tailwind",
			"css",
			"bootstrap",
			"supabase",
			"git",
		],
		github: "https://github.com/OmarSalhab/view2earn",
	},
	"gym-landing": {
		title: "Gym Landing Page",
		images: [
			"assets/gym-landing/Screenshot (340).png",
			"assets/gym-landing/Screenshot (341).png",
			"assets/gym-landing/Screenshot (343).png",
			"assets/gym-landing/Screenshot (346).png",
		],
		description:
			"A modern and responsive landing page for a fitness center. Built with React and modern CSS. Features smooth animations, mobile-first design, and interactive elements to showcase gym services and membership options.",
		stack: ["react", , "css", "tailwind", "git"],
		github: "https://github.com/OmarSalhab/gym-website",
	},
};

// Icon mapping with SVGs
const iconMap = {
	react: {
		icon: '<img src="assets/tech-icons/react.svg" alt="React" class="project-tech-icon" title="React">',
	},
	"node-js": {
		icon: '<img src="assets/tech-icons/node.svg" alt="Node.js" class="project-tech-icon" title="Node.js">',
	},
	database: {
		icon: '<img src="assets/tech-icons/mongodb.svg" alt="MongoDB" class="project-tech-icon" title="MongoDB">',
	},
	js: {
		icon: '<img src="assets/tech-icons/javascript.svg" alt="JavaScript" class="project-tech-icon" title="JavaScript">',
	},
	css: {
		icon: '<img src="assets/tech-icons/css.svg" alt="CSS3" class="project-tech-icon" title="CSS3">',
	},
	html: {
		icon: '<img src="assets/tech-icons/html.svg" alt="HTML5" class="project-tech-icon" title="HTML5">',
	},
	typescript: {
		icon: '<img src="assets/tech-icons/typescript.svg" alt="TypeScript" class="project-tech-icon" title="TypeScript">',
	},
	redux: {
		icon: '<img src="assets/tech-icons/redux.svg" alt="Redux" class="project-tech-icon" title="Redux">',
	},
	"tanstack-query": {
		icon: '<img src="assets/tech-icons/tanstackQ.svg" alt="TanStack Query" class="project-tech-icon" title="TanStack Query">',
	},
	"shadcn-ui": {
		icon: '<img src="assets/tech-icons/chadcn uisvg.svg" alt="shadcn/ui" class="project-tech-icon" title="shadcn/ui">',
	},
	tailwind: {
		icon: '<img src="assets/tech-icons/tailwind.svg" alt="Tailwind CSS" class="project-tech-icon" title="Tailwind CSS">',
	},
	bootstrap: {
		icon: '<img src="assets/tech-icons/bootstrap.svg" alt="Bootstrap" class="project-tech-icon" title="Bootstrap">',
	},
	firebase: {
		icon: '<img src="assets/tech-icons/firebase.svg" alt="Firebase" class="project-tech-icon" title="Firebase">',
	},
	supabase: {
		icon: '<img src="assets/tech-icons/supabase.svg" alt="Supabase" class="project-tech-icon" title="Supabase">',
	},
	express: {
		icon: '<img src="assets/tech-icons/express.svg" alt="Express.js" class="project-tech-icon" title="Express.js">',
	},
	mongodb: {
		icon: '<img src="assets/tech-icons/mongodb.svg" alt="MongoDB" class="project-tech-icon" title="MongoDB">',
	},
	postman: {
		icon: '<img src="assets/tech-icons/postman.svg" alt="Postman" class="project-tech-icon" title="Postman">',
	},
	git: {
		icon: '<img src="assets/tech-icons/git.svg" alt="Git" class="project-tech-icon" title="Git">',
	},
	github: {
		icon: '<img src="assets/tech-icons/github.svg" alt="GitHub" class="project-tech-icon" title="GitHub">',
	},
};

// Global variables for slider and modal
let currentSlide = 0;
let currentModalSlide = 0;
let projectImages = [];

// Get project from URL
const params = new URLSearchParams(window.location.search);
const projectKey = params.get("project");
const project = projects[projectKey];

if (project) {
	document.getElementById("project-title").textContent = project.title;
	projectImages = project.images;

	// Initialize desktop slider
	initializeDesktopSlider();

	// Initialize mobile stack
	initializeMobileStack();

	// Initialize modal
	initializeModal();

	// Description
	document.getElementById("project-description").textContent =
		project.description;

	// Stack
	const stackDiv = document.getElementById("project-stack");
	project.stack.forEach((tech) => {
		const data = iconMap[tech];
		if (data) {
			const item = document.createElement("div");
			item.className = "project-stack-item";
			item.innerHTML = data.icon;
			stackDiv.appendChild(item);
		}
	});

	// GitHub link
	const githubLink = document.getElementById("project-github");
	githubLink.href = project.github;
} else {
	document.getElementById("project-title").textContent = "Project Not Found";
	document.getElementById("project-description").textContent = "";
	document.getElementById("project-slider-desktop").innerHTML = "";
	document.getElementById("project-stack-mobile").innerHTML = "";
	document.getElementById("project-stack").innerHTML = "";
	document.getElementById("project-github").style.display = "none";
}

function initializeDesktopSlider() {
	const sliderContainer = document.getElementById("slider-container");
	const dotsContainer = document.getElementById("slider-dots");

	console.log(
		"Initializing desktop slider with",
		projectImages.length,
		"images"
	);

	// Set container width to accommodate all images
	const imageWidth = window.innerWidth <= 650 ? window.innerWidth : 600;
	sliderContainer.style.width = `${projectImages.length * imageWidth}px`;

	// Create images
	projectImages.forEach((src, index) => {
		const img = document.createElement("img");
		img.src = src;
		img.alt = project.title + " screenshot " + (index + 1);
		img.addEventListener("click", () => openModal(index));
		sliderContainer.appendChild(img);

		// Create dots
		const dot = document.createElement("div");
		dot.className = "dot";
		if (index === 0) dot.classList.add("active");
		dot.addEventListener("click", () => goToSlide(index));
		dotsContainer.appendChild(dot);
	});

	// Slider navigation
	document.getElementById("prev-btn").addEventListener("click", () => {
		currentSlide =
			(currentSlide - 1 + projectImages.length) % projectImages.length;
		console.log("Previous button clicked, new slide:", currentSlide);
		updateSlider();
	});

	document.getElementById("next-btn").addEventListener("click", () => {
		currentSlide = (currentSlide + 1) % projectImages.length;
		console.log("Next button clicked, new slide:", currentSlide);
		updateSlider();
	});

	// Handle window resize
	window.addEventListener("resize", () => {
		const imageWidth = window.innerWidth <= 650 ? window.innerWidth : 600;
		sliderContainer.style.width = `${projectImages.length * imageWidth}px`;
		updateSlider();
	});
}

function updateSlider() {
	const sliderContainer = document.getElementById("slider-container");
	const dots = document.querySelectorAll(".dot");

	// Calculate image width for translation
	const imageWidth = window.innerWidth <= 650 ? window.innerWidth : 600;
	const translateX = -currentSlide * imageWidth;
	sliderContainer.style.transform = `translateX(${translateX}px)`;

	console.log(
		`Current slide: ${currentSlide}, TranslateX: ${translateX}px, Image width: ${imageWidth}px`
	);

	// Update dots
	dots.forEach((dot, index) => {
		dot.classList.toggle("active", index === currentSlide);
	});
}

function goToSlide(index) {
	currentSlide = index;
	updateSlider();
}

function initializeMobileStack() {
	const stackContainer = document.getElementById("stack-container");

	// Create stack items
	projectImages.forEach((src, index) => {
		const stackItem = document.createElement("div");
		stackItem.className = "stack-item";
		stackItem.style.zIndex = projectImages.length - index;
		stackItem.style.transform = `translateY(${index * 10}px) scale(${
			1 - index * 0.05
		})`;

		const img = document.createElement("img");
		img.src = src;
		img.alt = project.title + " screenshot " + (index + 1);
		img.addEventListener("click", () => openModal(index));

		stackItem.appendChild(img);
		stackContainer.appendChild(stackItem);

		// Add touch/swipe functionality
		addSwipeFunctionality(stackItem, index);
	});
}

function addSwipeFunctionality(element, index) {
	let startX = 0;
	let startY = 0;
	let isDragging = false;

	element.addEventListener("touchstart", (e) => {
		startX = e.touches[0].clientX;
		startY = e.touches[0].clientY;
		isDragging = true;
		element.classList.add("dragging");
	});

	element.addEventListener("touchmove", (e) => {
		if (!isDragging) return;

		const currentX = e.touches[0].clientX;
		const currentY = e.touches[0].clientY;
		const diffX = currentX - startX;
		const diffY = currentY - startY;

		// Only allow horizontal swipes
		if (Math.abs(diffX) > Math.abs(diffY)) {
			e.preventDefault();
			element.style.transform = `translateX(${diffX}px) translateY(${
				index * 10
			}px) scale(${1 - index * 0.05})`;
		}
	});

	element.addEventListener("touchend", (e) => {
		if (!isDragging) return;

		const currentX = e.changedTouches[0].clientX;
		const diffX = currentX - startX;

		if (Math.abs(diffX) > 100) {
			// Swipe threshold met - move to next/previous
			if (diffX > 0) {
				// Swipe right - go to previous
				if (index < projectImages.length - 1) {
					moveStackItem(index, "next");
				}
			} else {
				// Swipe left - go to next
				if (index > 0) {
					moveStackItem(index, "prev");
				}
			}
		}

		// Reset position
		element.style.transform = `translateY(${index * 10}px) scale(${
			1 - index * 0.05
		})`;
		element.classList.remove("dragging");
		isDragging = false;
	});
}

function moveStackItem(index, direction) {
	const stackItems = document.querySelectorAll(".stack-item");

	if (direction === "next" && index < stackItems.length - 1) {
		// Move current item to back
		const currentItem = stackItems[index];
		const nextItem = stackItems[index + 1];

		currentItem.style.zIndex = 1;
		currentItem.style.transform = `translateY(${
			(stackItems.length - 1) * 10
		}px) scale(${1 - (stackItems.length - 1) * 0.05})`;

		nextItem.style.zIndex = stackItems.length;
		nextItem.style.transform = `translateY(0px) scale(1)`;
	} else if (direction === "prev" && index > 0) {
		// Move current item to front
		const currentItem = stackItems[index];
		const prevItem = stackItems[index - 1];

		currentItem.style.zIndex = stackItems.length;
		currentItem.style.transform = `translateY(0px) scale(1)`;

		prevItem.style.zIndex = 1;
		prevItem.style.transform = `translateY(${
			(stackItems.length - 1) * 10
		}px) scale(${1 - (stackItems.length - 1) * 0.05})`;
	}
}

function initializeModal() {
	const modal = document.getElementById("image-modal");
	const modalImage = document.getElementById("modal-image");
	const closeModal = document.getElementById("close-modal");
	const prevModal = document.getElementById("prev-modal");
	const nextModal = document.getElementById("next-modal");

	// Close modal
	closeModal.addEventListener("click", () => {
		modal.style.display = "none";
	});

	// Close on background click
	modal.addEventListener("click", (e) => {
		if (e.target === modal) {
			modal.style.display = "none";
		}
	});

	// Modal navigation
	prevModal.addEventListener("click", () => {
		currentModalSlide =
			(currentModalSlide - 1 + projectImages.length) % projectImages.length;
		updateModalImage();
	});

	nextModal.addEventListener("click", () => {
		currentModalSlide = (currentModalSlide + 1) % projectImages.length;
		updateModalImage();
	});

	// Keyboard navigation
	document.addEventListener("keydown", (e) => {
		if (modal.style.display === "block") {
			if (e.key === "Escape") {
				modal.style.display = "none";
			} else if (e.key === "ArrowLeft") {
				currentModalSlide =
					(currentModalSlide - 1 + projectImages.length) % projectImages.length;
				updateModalImage();
			} else if (e.key === "ArrowRight") {
				currentModalSlide = (currentModalSlide + 1) % projectImages.length;
				updateModalImage();
			}
		}
	});
}

function openModal(index) {
	const modal = document.getElementById("image-modal");
	currentModalSlide = index;
	updateModalImage();
	modal.style.display = "block";
}

function updateModalImage() {
	const modalImage = document.getElementById("modal-image");
	modalImage.src = projectImages[currentModalSlide];
	modalImage.alt = project.title + " screenshot " + (currentModalSlide + 1);
}
