
// Project data
const projects = [
    {
        id: "0",
        title: "Resumee",
        description: "Resumee is a responsive web app that allows users to create and customize professional resumes with ease.",
        fullDescription: "Resumee simplifies the resume creation process with an intuitive interface and real-time editing. I built this application to help job seekers, students, and professionals craft polished resumes without needing design skills. The app features multiple professional templates, drag-and-drop customization, and instant PDF export. Using Firebase for authentication and data storage, users can save their progress and access their resumes from any device. The smooth animations powered by Framer Motion create a delightful user experience, while Sonner provides elegant toast notifications for user feedback.",
        tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Firebase', 'Sonner'],
        features: ['Multiple resume templates', 'Real-time preview', 'PDF export', 'Cloud storage with Firebase', 'Responsive design', 'Smooth animations'],
        challenges: 'The main challenge was implementing a flexible layout system that could adapt to different resume sections while maintaining professional formatting. Ensuring the PDF export matched the on-screen preview required careful attention to styling and layout consistency.',
        outcome: 'Successfully deployed on Vercel with positive user feedback. The app helps users create professional resumes in minutes.',
        liveLink: "https://resumee-self.vercel.app/",
        githubLink: "https://github.com/RidwanHerkolade/resumee",
        img: "../img/res.jpg"
    },
    {
        id: "1",
        title: "Hubbyshop",
        description: "Hubby shop is an e-commerce web app where you can get varieties of gadgets and electronics.",
        fullDescription: "Hubbyshop is a modern e-commerce platform I developed to provide a seamless online shopping experience for tech enthusiasts. The application features a clean, intuitive interface with smooth navigation between product categories, detailed product pages, and a fully functional shopping cart. I implemented advanced filtering and search capabilities to help users find exactly what they're looking for. The responsive design ensures a consistent experience across all devices, from mobile phones to desktop computers. Using Lucide React for icons gives the interface a modern, cohesive look.",
        tech: ['React.js', 'Tailwind CSS', 'Lucide React'],
        features: ['Product catalog with filtering', 'Shopping cart functionality', 'Responsive design', 'Product search', 'Category navigation', 'Modern UI with smooth transitions'],
        challenges: 'Managing complex state for the shopping cart and ensuring smooth performance with large product catalogs were key challenges. I implemented efficient state management patterns and optimized rendering to maintain fast load times.',
        outcome: 'Deployed on Netlify with a smooth user experience. The app demonstrates my ability to build complete e-commerce solutions.',
        liveLink: "https://hubbyshop.netlify.app/",
        githubLink: "https://github.com/RidwanHerkolade/hubby",
        img: "../img/hubby.jpg"
    },
    {
        id: "2",
        title: "Tracker",
        description: "Tracker is a responsive web app that allows users to track their daily expenses and income effectively.",
        fullDescription: "Tracker helps users take control of their finances by providing an easy way to monitor income and expenses. I created this application recognizing the need for a simple yet powerful budgeting tool. Users can add transactions, categorize them, view spending patterns, and track their financial health over time. The app uses local storage for data persistence, ensuring user privacy while maintaining functionality offline. Sonner toast notifications provide instant feedback for all user actions. The clean interface makes financial tracking less intimidating and more engaging.",
        tech: ['React.js', 'Tailwind CSS', 'Sonner'],
        features: ['Income and expense tracking', 'Transaction categories', 'Financial summaries', 'Data visualization', 'Local data persistence', 'Clean, intuitive interface'],
        challenges: 'Creating meaningful visualizations of financial data that are both informative and easy to understand was a design challenge. I also focused on making the data entry process as quick and painless as possible.',
        outcome: 'Successfully helping users manage their finances with an intuitive interface. Deployed on Netlify with positive feedback on usability.',
        liveLink: "https://worktrackar.netlify.app/",
        githubLink: "https://github.com/RidwanHerkolade/WorkTracker",
        img: "../img/yoo.jpg"
    },
    {
        id: "3",
        title: "Dashboard",
        description: "A comprehensive dashboard web app with secure Firebase authentication, supporting multiple sign-in methods and real-time user feedback.",
        fullDescription: "This dashboard application showcases my expertise in implementing secure authentication systems and creating administrative interfaces. The project features a complete authentication flow using Firebase, supporting email/password sign-ins as well as social authentication through Google and Facebook. Users receive real-time feedback through React Toastify notifications at every step of their interaction. The dashboard provides personalized content based on user roles and preferences. I focused heavily on security best practices, implementing proper validation, secure routing, and session management.",
        tech: ['React.js', 'CSS', 'React Toastify', 'Firebase'],
        features: ['Multi-method authentication', 'Social login (Google, Facebook)', 'Secure user sessions', 'Real-time notifications', 'Personalized dashboard', 'Role-based access'],
        challenges: 'Implementing secure authentication flows while maintaining a smooth user experience required careful planning. I had to handle various edge cases like password recovery, email verification, and social auth errors gracefully.',
        outcome: 'Deployed on Firebase Hosting with enterprise-level authentication. The project demonstrates my ability to build secure, production-ready applications.',
        liveLink: "https://dashboard-a01c9.firebaseapp.com/",
        githubLink: "https://github.com/RidwanHerkolade/dashboards",
        img: "../img/dashImg.jpg"
    },
    {
        id: "4",
        title: "EcoMart",
        description: "EcoMart is a responsive e-commerce web app for browsing and purchasing electronics and shoes with smooth animations.",
        fullDescription: "EcoMart represents my vision for modern e-commerce, combining beautiful design with powerful functionality. The application features a comprehensive product catalog with detailed views, smooth page transitions powered by Framer Motion, and an elegant UI built with Material-UI components. I implemented advanced features like product filtering, wishlist functionality, and a complete checkout flow. The responsive design ensures customers can shop comfortably on any device. The attention to detail in animations and transitions creates an engaging shopping experience that keeps users coming back.",
        tech: ['React.js', 'CSS', 'Material-UI', 'Framer Motion'],
        features: ['Product catalog with detailed views', 'Advanced filtering system', 'Shopping cart and wishlist', 'Smooth page transitions', 'Material-UI components', 'Fully responsive design'],
        challenges: 'Balancing beautiful animations with performance was crucial. I optimized component rendering and used code splitting to ensure the app loads quickly despite the rich animations.',
        outcome: 'Successfully deployed on Netlify. The app showcases my ability to create visually appealing, high-performance e-commerce solutions.',
        liveLink: "https://ecomarti.netlify.app/",
        githubLink: "https://github.com/RidwanHerkolade/Ecomart",
        img: "../img/ecoimg.jpg"
    },
    {
        id: "5",
        title: "SoS",
        description: "SoS is an innovative web platform designed to foster education and growth through a responsive platform that delivers key information seamlessly.",
        fullDescription: "The School of Success (SoS) platform is a comprehensive educational web application I developed to make quality education accessible and engaging. The platform serves as a hub for educational content, resources, and community updates. Using Material-UI for a professional appearance and Framer Motion for engaging interactions, the site provides an immersive learning experience. I focused on creating an information architecture that makes navigation intuitive while ensuring content is presented in an engaging, digestible format. The platform includes features for announcements, course information, and community engagement.",
        tech: ['React.js', 'CSS', 'Material-UI', 'Framer Motion'],
        features: ['Educational content delivery', 'Responsive information architecture', 'Community announcements', 'Resource library', 'Engaging animations', 'Mobile-first design'],
        challenges: 'Organizing diverse educational content in a way that serves both students and educators required extensive planning. I implemented a flexible content management approach that could scale with the platform\'s growth.',
        outcome: 'Successfully deployed on Netlify, serving as a comprehensive educational platform. The project demonstrates my ability to build solutions for the education sector.',
        liveLink: "https://sosife.netlify.app/",
        githubLink: "https://github.com/RidwanHerkolade/SOS-app",
        img: "../img/sch.jpg"
    },
    {
        id: "6",
        title: "Keeper",
        description: "Keeper is a web app designed to help users keep track of their daily to-do lists and tasks efficiently.",
        fullDescription: "Keeper is my take on the classic note-taking and task management application, inspired by Google Keep but built from scratch with my own design philosophy. The app allows users to create, update, and delete tasks with an intuitive interface that makes task management feel effortless. Using Material-UI components, I created a clean, professional look that doesn't distract from the core functionality. The app focuses on simplicity and speed—users can quickly jot down ideas, organize tasks, and check them off as they complete them. All data is stored locally, ensuring privacy and offline functionality.",
        tech: ['React.js', 'CSS', 'Material-UI'],
        features: ['Create and manage tasks', 'Quick note-taking', 'Task organization', 'Local data storage', 'Clean, distraction-free UI', 'Responsive design'],
        challenges: 'Creating a simple yet powerful interface that could handle both quick notes and detailed task lists was the main design challenge. I implemented a flexible data structure that could accommodate various use cases.',
        outcome: 'Successfully deployed on Netlify. The app is a testament to how thoughtful design can make everyday tasks more manageable.',
        liveLink: "https://ridkeep.netlify.app",
        githubLink: "https://github.com/RidwanHerkolade/Keeper-App",
        img: "../img/keeper.jpg"
    }
];

// Gallery images data
const galleryImages = [
    { title: 'Conference Workshop', emoji: '📸' },
    { title: 'Design Sprint', emoji: '🎨' },
    { title: 'Coding Session', emoji: '💻' },
    { title: 'Team Project', emoji: '🌟' },
    { title: 'Hackathon Win', emoji: '🎯' },
    { title: 'Product Launch', emoji: '🚀' }
];

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const navbar = document.getElementById('navbar');
const mobileToggle = document.getElementById('mobileToggle');
const navLinksContainer = document.getElementById('navLinks');
const darkToggle = document.getElementById('darkToggle');
const projectCards = document.querySelectorAll('.project-card');
const projectModal = document.getElementById('projectModal');
const closeProjectModal = document.getElementById('closeProjectModal');
const projectDetails = document.getElementById('projectDetails');
const galleryItems = document.querySelectorAll('.gallery-item');
const lightboxModal = document.getElementById('lightboxModal');
const closeLightbox = document.getElementById('closeLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Mobile menu toggle
mobileToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

// Close mobile menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
    });
});

// Update active navigation link based on scroll position
function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    updateActiveLink();
    animateSkills();
});

// Dark mode toggle
darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    darkToggle.textContent = isDark ? '☀' : '◐';
});

// Animate skill bars on scroll
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        }
    });
}

// Project modal functionality
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectIndex = card.getAttribute('data-project');
        const project = projects[projectIndex];
        
        projectDetails.innerHTML = `
            <h2>${project.title}</h2>
            <p style="color: var(--gray); margin-bottom: 2rem;">${project.description}</p>
            
            <div style="display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap;">
                <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="text-decoration: none;">
                    View Live Site
                </a>
                <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="text-decoration: none; color: var(--primary); border: 2px solid var(--primary);">
                    View Code
                </a>
            </div>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Overview</h3>
            <p style="color: var(--gray); line-height: 1.8;">${project.fullDescription}</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Technologies Used</h3>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2rem;">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Key Features</h3>
            <ul style="color: var(--gray); line-height: 2; margin-left: 1.5rem; margin-bottom: 2rem;">
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Challenges & Learning</h3>
            <p style="color: var(--gray); line-height: 1.8; margin-bottom: 2rem;">${project.challenges}</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Outcome</h3>
            <p style="color: var(--gray); line-height: 1.8;">${project.outcome}</p>
        `;
        
        projectModal.classList.add('active');
    });
});

// Close project modal
closeProjectModal.addEventListener('click', () => {
    projectModal.classList.remove('active');
});

// Close modal when clicking outside
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.classList.remove('active');
    }
});

// Gallery lightbox functionality
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const imgData = galleryImages[index];
        lightboxImage.innerHTML = `
            <div style="font-size: 10rem; margin-bottom: 2rem;">${imgData.emoji}</div>
            <h3>${imgData.title}</h3>
            <p style="color: var(--gray); margin-top: 1rem;">Gallery image placeholder - Replace with actual photo</p>
        `;
        lightboxModal.classList.add('active');
    });
});

// Close lightbox
closeLightbox.addEventListener('click', () => {
    lightboxModal.classList.remove('active');
});

// Close lightbox when clicking outside
lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
    }
});

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        projectModal.classList.remove('active');
        lightboxModal.classList.remove('active');
    }
});

// Form validation
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    
    // Validate name
    if (nameInput.value.trim().length < 2) {
        document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }
    
    // Validate message
    if (messageInput.value.trim().length < 10) {
        document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
        isValid = false;
    }
    
    if (isValid) {
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    }
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    updateActiveLink();
    animateSkills();
});

