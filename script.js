// 1. Mobile Side Drawer / Navigation Controls
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const navLinks = document.getElementById('navLinks');
const menuOverlay = document.getElementById('menuOverlay');

if (menuToggle) {
    function openMobileMenu() {
        navLinks.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.classList.add('no-scroll');
    }
    function closeMobileMenu() {
        navLinks.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
    menuToggle.addEventListener('click', openMobileMenu);
    closeMenu.addEventListener('click', closeMobileMenu);
    menuOverlay.addEventListener('click', closeMobileMenu);
}

// 2. Navigation Contact Dropdown Trigger
const contactToggle = document.getElementById('contactToggle');
const contactDropdown = document.getElementById('contactDropdown');

if (contactToggle) {
    contactToggle.addEventListener('click', (e) => {
        e.preventDefault(); 
        contactDropdown.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        if (!contactToggle.contains(e.target) && !contactDropdown.contains(e.target)) {
            contactDropdown.classList.remove('show');
        }
    });
}

// 3. Typwriter Effect Real-time Rules
const typewriterEl = document.getElementById('typewriter');
const phrases = ["Welcome To MCI", "Learn With MCI"];
let phraseIdx = 0;
let charIdx = 0;
let isDeleting = false;

function playTypewriter() {
    if (!typewriterEl) return;
    const currentPhrase = phrases[phraseIdx];
    
    if (isDeleting) charIdx--;
    else charIdx++;

    let fullDisplayedText = currentPhrase.substring(0, charIdx);
    
    if (fullDisplayedText.includes("MCI")) {
        let parts = fullDisplayedText.split("MCI");
        typewriterEl.innerHTML = parts[0] + '<span class="mci-blue">MCI</span>' + (parts[1] || "");
    } else {
        typewriterEl.innerHTML = fullDisplayedText;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === currentPhrase.length) {
        typeSpeed = 2200; 
        isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length; 
        typeSpeed = 400; 
    }

    setTimeout(playTypewriter, typeSpeed);
}

// 4. Dark Mode Settings & Sync Local Storage
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (typewriterEl) {
        playTypewriter();
    }
});

// 5. Rich Expanded Database with Timeframes & Course Fees
const courseData = {
    diploma: {
        title: "Diploma Programs",
        desc: "Comprehensive multi-month diploma programs covering everything from basic operations to advanced applications.",
        icon: '<i class="fa-solid fa-graduation-cap card-icon" style="color: #00d26a;"></i>',
        courses: [
            { 
                name: "DCA (Diploma in Computer Applications)", 
                desc: "Foundational course perfect for beginners entering the digital world.",
                duration: "6 Months",
                fee: "₹3,500 Total",
                timeline: [
                    { time: "Month 1", topic: "Computer Fundamentals & OS", details: "History of computers, hardware parts, operating system configurations, and Windows 10/11 essentials." },
                    { time: "Month 2", topic: "MS Word Documentation", details: "Letter drafting, page formatting, resume creation, tables, and document printing setups." },
                    { time: "Month 3", topic: "MS Excel Spreadsheets", details: "Data entry, mathematical formulas, sorting/filtering data, bar charts, and salary sheet management." },
                    { time: "Month 4", topic: "MS PowerPoint & Typing", details: "Creating presentation slides, custom animations, speech layouts, and English touch-typing drills." },
                    { time: "Month 5", topic: "Internet Applications & Online Works", details: "Email messaging, secure web browsing, creating digital certificates, and online forms fill-up." },
                    { time: "Month 6", topic: "Lab Practicals & Assessment", details: "Live project assignments, revision of office suites, interview basics, and final certification exam." }
                ]
            },
            { 
                name: "ADCA (Advanced Diploma in Computer Applications)", 
                desc: "Advanced multi-tier professional course covering deep management concepts.",
                duration: "12 Months",
                fee: "₹7,000 Total",
                timeline: [
                    { time: "Months 1-3", topic: "Core DCA Modules", details: "Complete mastery over computer basics, Windows environment, MS Word, and advanced typing skills." },
                    { time: "Months 4-6", topic: "Advanced Office Suite & Excel", details: "Data tracking systems, financial spreadsheet modeling, pivot tables, macros, and MS Access database." },
                    { time: "Months 7-9", topic: "Tally Prime ERP & GST", details: "Double-entry bookkeeping, ledger creations, dynamic voucher transactions, inventory management, and GST taxation." },
                    { time: "Months 10-11", topic: "Desktop Publishing (DTP)", details: "Graphic designs, web poster frameworks, card layouts using Adobe Photoshop and CorelDRAW vector panels." },
                    { time: "Month 12", topic: "Project Work & Evaluation", details: "Handling continuous lab assignments, real-world business system projects, and comprehensive final evaluation." }
                ]
            },
            { 
                name: "PGDCA (Post Graduate Diploma in Computer Applications)", 
                desc: "Post-graduate specialization for technical and professional office settings.",
                duration: "1 Year",
                fee: "₹9,500 Total",
                timeline: [
                    { time: "Months 1-3", topic: "IT Frameworks & Office Tools", details: "Advanced business operations systems, documentation systems, and systemic business presentation layouts." },
                    { time: "Months 4-6", topic: "Database Management Systems (DBMS)", details: "Relational database concepts, structure query language (SQL), and enterprise ledger architecture." },
                    { time: "Months 7-9", topic: "Web Designing Foundations", details: "Basic programming architectures, script workflows, HTML5 structures, and responsive user interfaces." },
                    { time: "Months 10-12", topic: "System Networks & Capstone Project", details: "Data networking modules, internet protocols, data backups, and a full structural software engineering project." }
                ]
            },
            { 
                name: "DOA (Diploma in Office Automation)", 
                desc: "Focused purely on official business administration and accounting operations.",
                duration: "3 Months",
                fee: "₹2,200 Total",
                timeline: [
                    { time: "Month 1", topic: "Corporate Documentation", details: "Official letterheads, multi-layer formatting, billing records, and automated templates in MS Word." },
                    { time: "Month 2", topic: "Advanced Spreadsheet Calculations", details: "Data filtration, business math functions, dynamic financial charts, and pivot reporting in MS Excel." },
                    { time: "Month 3", topic: "Internet Controls & Printing Tools", details: "Handling online portals, PDF manipulation tools, scanner drivers configuration, and network printing." }
                ]
            },
            { 
                name: "DTP (Desk Top Publishing)", 
                desc: "Graphic production and print media configuration course.",
                duration: "3 Months",
                fee: "₹2,800 Total",
                timeline: [
                    { time: "Month 1", topic: "Photo Graphics via Photoshop", details: "Layer structures, background extractions, skin texture editing, and creative banner designs." },
                    { time: "Month 2", topic: "Vector Arts via CorelDRAW", details: "Creating scalable logo grids, flex marketing boards, geometric designs, and colorful pamflets." },
                    { time: "Month 3", topic: "Page Architecture via PageMaker", details: "Book layout setups, magazine grids, commercial invitation cards formatting, and print press variables." }
                ]
            }
        ]
    },
    office: {
        title: "Office Automation",
        desc: "Master the essential tools required to run modern businesses, handle corporate data, and organize reports.",
        icon: '<i class="fa-solid fa-folder-open card-icon" style="color: #1e88e5;"></i>',
        courses: [
            { 
                name: "MS Word", 
                desc: "Complete documentation, letterheads, and report layouts creation.",
                duration: "1 Month",
                fee: "₹1,000 Total",
                timeline: [
                    { time: "Week 1", topic: "Text Layouts & Interface Basics", details: "Understanding menus, typing parameters, text styles, and page margins setups." },
                    { time: "Week 2", topic: "Graphic Tables & Insert Panels", details: "Inserting multi-column tables, formatting borders, shapes integration, and smart art layouts." },
                    { time: "Week 3", topic: "Mail Merge & Office Automations", details: "Linking client sheets to dynamic letters, automated headers/footers, and macro records." },
                    { time: "Week 4", topic: "Professional Portfolio Layouts", details: "Designing custom resumes, legal notices, book indices, and advanced printing setups." }
                ]
            },
            { 
                name: "MS Excel", 
                desc: "Data modeling, tracking spreadsheets, and corporate math accounting.",
                duration: "1.5 Months",
                fee: "₹1,500 Total",
                timeline: [
                    { time: "Weeks 1-2", topic: "Grid Calculations & Cell Controls", details: "Row configurations, custom data filters, conditional formatting rules, and structural math logic." },
                    { time: "Weeks 3-4", topic: "Corporate Formulas & Data Engines", details: "Mastering IF/ELSE statements, VLOOKUP, HLOOKUP, string functions, and date-time metrics." },
                    { time: "Weeks 5-6", topic: "Pivot Analytics & Professional Charts", details: "Building structural summary reports, pie charts, dashboard filters, and tracking enterprise sheets." }
                ]
            },
            { 
                name: "MS PowerPoint", 
                desc: "Professional pitch deck creation and advanced interactive slides.",
                duration: "1 Month",
                fee: "₹1,000 Total",
                timeline: [
                    { time: "Week 1", topic: "Slide Frameworks & Layout Aesthetics", details: "Creating text groupings, slide dimensions, theme selection, and background modifications." },
                    { time: "Week 2", topic: "Dynamic Transitions & Audio Visuals", details: "Applying smooth slide transitions, item-level animations, sound synchronizations, and timeline loops." },
                    { time: "Week 3", topic: "Interactive SmartArts & Charts", details: "Organizing corporate hierarchy trees, process charts, data visualization blocks, and hyperlinks." },
                    { time: "Week 4", topic: "Pitch Deck Construction & Delivery", details: "Designing professional presentation boards and undergoing live public presentation drills." }
                ]
            },
            { 
                name: "Beltron Data Entry", 
                desc: "Special exam preparation course according to government requirements.",
                duration: "3 Months",
                fee: "₹3,200 Total",
                timeline: [
                    { time: "Month 1", topic: "High-Speed Typing Architectures", details: "Intense daily practice on Hindi (Kruti Dev/Remington Gail) and English touch typing layout maps." },
                    { time: "Month 2", topic: "Government Office Automation Data", details: "Practicing data layouts in MS Excel, quick data processing forms, and understanding shortcuts." },
                    { time: "Month 3", topic: "Mock Exams & Theory Preparation", details: "Solving continuous computer MCQs, accuracy optimization tests, and previous year exam simulations." }
                ]
            }
        ]
    },
    hardware: {
        title: "Hardware & Systems",
        desc: "Get hands-on with computer hardware components, system software, and troubleshooting techniques.",
        icon: '<i class="fa-solid fa-screwdriver-wrench card-icon" style="color: #ff9800;"></i>',
        courses: [
            { 
                name: "PC Hardware Basics", 
                desc: "Learn to assemble, evaluate, and test hardware modules.",
                duration: "2 Months",
                fee: "₹2,800 Total",
                timeline: [
                    { time: "Weeks 1-2", topic: "Cabinet Architecture & Internal Layouts", details: "Identifying CPU sockets, RAM slots, motherboard chipsets, storage ports, and power rails." },
                    { time: "Weeks 3-4", topic: "Component Assemblies & Socket Logic", details: "Safe installation of processors, applying thermal paste, fitting cooling fans, and locking RAM modules." },
                    { time: "Weeks 5-6", topic: "Storage Integration & SMPS Wiring", details: "Mounting SSDs/HDDs, connecting data buses, routing SMPS main power cords, and front panel pin setups." },
                    { time: "Weeks 7-8", topic: "POST Checks & BIOS Frameworks", details: "Testing hardware startup cycles, analyzing beep codes, updating BIOS configurations, and temperature controls." }
                ]
            },
            { 
                name: "Windows Installation", 
                desc: "Managing system-wide applications and crucial environment utilities.",
                duration: "2 Weeks",
                fee: "₹800 Total",
                timeline: [
                    { time: "Week 1", topic: "Boot Media Creations & BIOS Orders", details: "Using flashing tools to write Windows ISO files onto USB flash drives, configuring legacy/UEFI boot settings." },
                    { time: "Week 2", topic: "OS Setup Steps & Hard Disk Partitions", details: "Formatting storage blocks, defining system partitions, clean OS installation, and setting up admin user accounts." }
                ]
            },
            { 
                name: "Windows Deployment", 
                desc: "Master operating system installation and standard backup solutions.",
                duration: "1 Month",
                fee: "₹1,500 Total",
                timeline: [
                    { time: "Weeks 1-2", topic: "Large-Scale Deployments & System Images", details: "Creating gold master OS installations, capturing system configurations, and driver pack integration." },
                    { time: "Weeks 3-4", topic: "System Backups & User Profile Migrations", details: "Configuring continuous system restore check points, disk cloning tools, and transferring user files securely." }
                ]
            },
            { 
                name: "System Troubleshooting", 
                desc: "Diagnose computer errors like a professional tech expert.",
                duration: "1 Month",
                fee: "₹1,800 Total",
                timeline: [
                    { time: "Weeks 1-2", topic: "Blue Screen (BSOD) & Boot Failures", details: "Reading error logs, dealing with corrupted system files via recovery command consoles, and RAM check routines." },
                    { time: "Weeks 3-4", topic: "Malware Cleanups & Optimization Tweaks", details: "Removing stubborn malware, registry cleaning routines, tracking startup items, and fixing driver conflicts." }
                ]
            }
        ]
    },
    accounting: {
        title: "Professional Accounting",
        desc: "Learn to manage business finances, inventory, and taxation using industry-standard accounting software.",
        icon: '<i class="fa-solid fa-calculator card-icon" style="color: #e91e63;"></i>',
        courses: [
            { 
                name: "Accounting Core Principles", 
                desc: "Core definitions and foundational mathematical standards of finance.",
                duration: "1 Month",
                fee: "₹1,200 Total",
                timeline: [
                    { time: "Weeks 1-2", topic: "Debit & Credit Foundations", details: "Understanding types of accounts (Real, Personal, Nominal), accounting equations, and golden bookkeeping metrics." },
                    { time: "Weeks 3-4", topic: "Journal Books & Trial Balances", details: "Passing daily business journal logs, compiling ledger groups, and building structural trial balances." }
                ]
            },
            { 
                name: "Tally ERP 9", 
                desc: "Manage full company accounts using legacy accounting software frameworks.",
                duration: "2 Months",
                fee: "₹2,800 Total",
                timeline: [
                    { time: "Month 1", topic: "Company Setup & Voucher Postings", details: "Creating business profiles, creating structural ledgers, passing receipt, payment, sales, and purchase logs." },
                    { time: "Month 2", topic: "Inventory Metrics & Tax Ledgers", details: "Tracking stock items, item units, generating custom sales bills with basic VAT/GST layers, and profit reports." }
                ]
            },
            { 
                name: "Tally Prime", 
                desc: "Master the next generation of modern computerized cloud accounting.",
                duration: "2.5 Months",
                fee: "₹3,400 Total",
                timeline: [
                    { time: "Month 1", topic: "Modern UI Navigation & Advanced Ledgers", details: "Working with the data hub dashboard, multiple currencies configurations, and flexible corporate ledger groups." },
                    { time: "Month 2", topic: "Comprehensive GST & Taxation Modules", details: "Enabling CGST, SGST, IGST parameters, creating tax invoices, e-way bill insights, and GSTR report calculations." },
                    { time: "Month 3 (Mid)", topic: "Corporate Payroll & Bank Audits", details: "Configuring employee salary structures, tracking attendance logs, auto-generating pay slips, and bank reconciliation statements." }
                ]
            }
        ]
    },
    design: {
        title: "Design & Graphics",
        desc: "Unleash your creativity by learning industry-leading graphic design and drafting software.",
        icon: '<i class="fa-solid fa-palette card-icon" style="color: #4caf50;"></i>',
        courses: [
            { 
                name: "Adobe Photoshop", 
                desc: "Professional layer-based photo transformation and web banner designs.",
                duration: "2 Months",
                fee: "₹2,400 Total",
                timeline: [
                    { time: "Month 1", topic: "Selection Triggers & Workspace Tools", details: "Mastering pen tools, lasso cropping, layer stacking mechanics, color channels adjustment, and sizing scales." },
                    { time: "Month 2", topic: "Advanced Retouching & Social Graphics", details: "Applying smooth skin textures, lighting filters, blending modes, special text styles, and making flex boards." }
                ]
            },
            { 
                name: "Adobe PageMaker", 
                desc: "Layout planning software for publications, newsletters, and printing layouts.",
                duration: "1 Month",
                fee: "₹1,200 Total",
                timeline: [
                    { time: "Weeks 1-2", topic: "Page Setup Metrics & Text Flow Controls", details: "Defining print margins, linking text columns, importing external text blocks, and setting up master layouts." },
                    { time: "Weeks 3-4", topic: "Commercial Print Document Designs", details: "Structuring standard biodata sheets, book indices, newsletters, wedding cards, and black-white printing setups." }
                ]
            },
            { 
                name: "CorelDRAW", 
                desc: "Vector-based drawing tools used extensively in commercial print shops.",
                duration: "2 Months",
                fee: "₹2,500 Total",
                timeline: [
                    { time: "Month 1", topic: "Vector Curves & Node Manipulations", details: "Drawing with shape nodes, welding shapes, handling fills, gradients mapping, and building structural vector grids." },
                    { time: "Month 2", topic: "Commercial Brandings & High-Res Flex", details: "Creating corporate logos, multi-color brochures, visiting cards, large commercial event banners, and color separations." }
                ]
            },
            { 
                name: "AutoCAD Certification", 
                desc: "Engineering architecture drafts and multi-view structural blueprint systems.",
                duration: "3 Months",
                fee: "₹4,800 Total",
                timeline: [
                    { time: "Month 1", topic: "2D Grid Layouts & Coordinate systems", details: "Understanding Cartesian coordinate systems, geometric line tools, circles, arc commands, and modifications." },
                    { time: "Month 2", topic: "Dimensional Elements & Layer Stacks", details: "Adding architectural dimension scales, assigning color blocks to separate layers, and setting up hatch styles." },
                    { time: "Month 3", topic: "3D Isometric Blocks & Blueprint Renders", details: "Extruding shapes to 3D, camera viewpoints setup, and exporting clean structural house blueprints to PDF formats." }
                ]
            }
        ]
    },
    internet: {
        title: "Internet & Online Works",
        desc: "Navigate the digital world, manage online portals, and perform digital administrative tasks.",
        icon: '<i class="fa-solid fa-globe card-icon" style="color: #0ea5e9;"></i>',
        courses: [
            { 
                name: "Internet Fundamental", 
                desc: "Safe web navigation principles and managing emails securely.",
                duration: "1 Month",
                fee: "₹800 Total",
                timeline: [
                    { time: "Weeks 1-2", topic: "Web Browsing & Search Engines Optimization", details: "Using key terms on Google search panels, managing multiple tabs, bookmark controls, and clear cache logic." },
                    { time: "Weeks 3-4", topic: "Corporate Email Etiquette & Cloud Backups", details: "Composing professional emails, file attachments compression, operating Google Drive clouds, and cyber safety rules." }
                ]
            },
            { 
                name: "Online Form Fill Up", 
                desc: "Process official portals without mistakes.",
                duration: "1 Month",
                fee: "₹1,000 Total",
                timeline: [
                    { time: "Weeks 1-2", topic: "Government Portal Navigation", details: "Understanding user profile creation, tracking active registration links, data fields requirements checking." },
                    { time: "Weeks 3-4", topic: "Document Resizing & Scanner Controls", details: "Scanning certificates, compressing image dimensions to specific KBs, signature background cleaning, and safe checkouts." }
                ]
            },
            { 
                name: "Digital Payment & Service", 
                desc: "Consumer banking utilities setup and payment tasks.",
                duration: "1 Month",
                fee: "₹1,200 Total",
                timeline: [
                    { time: "Weeks 1-2", topic: "UPI Systems & Micro Banking Tasks", details: "Configuring mobile wallets safely, setting up secure PIN codes, scanning QR blocks, and checking bank logs." },
                    { time: "Weeks 3-4", topic: "Utility Settlements & Ticket Bookings", details: "Settling electricity bills, recharging fastags, booking railway/flight tickets via official merchant apps." }
                ]
            },
            { 
                name: "Digital Seva Portal", 
                desc: "Learn to operate a standard CSC (Common Service Center) hub.",
                duration: "2 Months",
                fee: "₹2,500 Total",
                timeline: [
                    { time: "Month 1", topic: "CSC Registrations & Wallet Management", details: "Navigating the official Digital Seva layout panel, secure wallet pin creation, and loading financial balances." },
                    { time: "Month 2", topic: "Citizen Service Provisions & Commissions", details: "Live processing of PAN cards, income/caste certificates applications, driving licenses tracking, and passport processing." }
                ]
            }
        ]
    },
    typing: {
        title: "Speed Typing",
        desc: "Enhance your keyboard skills with our 45-day fast-track typing modules.",
        icon: '<i class="fa-solid fa-keyboard card-icon" style="color: #9c27b0;"></i>',
        courses: [
            { 
                name: "English Typing Mastery", 
                desc: "Touch typing modules without looking down at the keyboard layout.",
                duration: "45 Days",
                fee: "₹1,000 Total",
                timeline: [
                    { time: "Days 1-15", topic: "Home Row & Keyboard Finger Alignments", details: "Muscle memory development exercises, positioning fingers on ASDF-JKL; pads without looking down." },
                    { time: "Days 16-30", topic: "Top & Bottom Row Core Integration", details: "Extending finger travel paths to numerical lines, capitalizations controls, and basic sentence repetitions." },
                    { time: "Days 31-45", topic: "Speed Audits & Real-time Test Drills", details: "Continuous timed paragraph tests, tracking Words-Per-Minute (WPM) speeds, and keeping error tolerances below 2%." }
                ]
            },
            { 
                name: "Hindi Typing Mastery", 
                desc: "Standard layout architectures required for north India state govt jobs.",
                duration: "45 Days",
                fee: "₹1,200 Total",
                timeline: [
                    { time: "Days 1-15", topic: "Kruti Dev 010 Character Layouts", details: "Learning individual Hindi character alignments on the QWERTY frame, home row vowels mappings." },
                    { time: "Days 16-30", topic: "Shift Keys Special Codes Mastery", details: "Typing complex half-characters, joint vowel symbols, and executing ALT code shortcuts for rare accents." },
                    { time: "Days 31-45", topic: "Accuracy Optimization Audits", details: "Practicing government mock data blocks, calculating net speeds, and adjusting setups for exams like Beltron." }
                ]
            }
        ]
    },
    english: {
        title: "Spoken English",
        desc: "Develop confident communication skills for professional environments and interviews.",
        icon: '<i class="fa-solid fa-comments card-icon" style="color: #f43f5e;"></i>',
        courses: [
            { 
                name: "Grammar & Vocabulary", 
                desc: "Build absolute command over basic syntax and sentences structures.",
                duration: "2 Months",
                fee: "₹1,800 Total",
                timeline: [
                    { time: "Month 1", topic: "Tenses & Structural Sentence Foundations", details: "Understanding time frames (Past, Present, Future), modal verbs rules, active-passive voice usages, and daily speaking habits." },
                    { time: "Month 2", topic: "Professional Word Banks & Conversational Phrases", details: "Building 500+ standard vocabulary items, understanding idioms, replacing broken phrases, and formal written expressions." }
                ]
            },
            { 
                name: "Fluency Practice", 
                desc: "Eliminate stage fright and build long speech expressions.",
                duration: "2 Months",
                fee: "₹1,800 Total",
                timeline: [
                    { time: "Month 1", topic: "Stage Fear Removal & Storytelling Prompts", details: "Unlocking speech blockages, practicing real-time loud readings, narrative building loops, and picture definitions." },
                    { time: "Month 2", topic: "Group Debates & Public Speech Drills", details: "Handling impromptu topics (JAM sessions), participating in structured group arguments, and learning vocal inflections." }
                ]
            },
            { 
                name: "Interview Preparation", 
                desc: "Prepare yourself to clear entry-level corporate or tech roles smoothly.",
                duration: "1 Month",
                fee: "₹1,500 Total",
                timeline: [
                    { time: "Weeks 1-2", topic: "Professional Resumes & Corporate Body Aesthetics", details: "Drafting high-impact job profiles, learning formal body gestures, eye contact habits, and grooming rules." },
                    { time: "Weeks 3-4", topic: "HR Query Formats & Live Mock Interviews", details: "Practicing answers for 'Tell me about yourself', salary negotiations, handling stress queries, and face-to-face evaluation." }
                ]
            },
            { 
                name: "Personality Development", 
                desc: "Overall shift toward confident, communicative behavior patterns.",
                duration: "1 Month",
                fee: "₹1,500 Total",
                timeline: [
                    { time: "Weeks 1-2", topic: "Social Etiquette & Behavioral Adjustments", details: "Greeting styles, proactive listening habits, telephone manners, handling group settings, and building positive mindsets." },
                    { time: "Weeks 3-4", topic: "Leadership Skills & Conflict Resolutions", details: "Time management modules, basic problem-solving methodologies, speaking with authority, and team alignment dynamics." }
                ]
            }
        ]
    }
};

// 6. Real-time Router Routing Injection & Interactive Accordion Setup
if (window.location.pathname.includes('course.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('id');
    const container = document.getElementById('course-detail-container');

    if (categoryId && courseData[categoryId]) {
        const data = courseData[categoryId];
        
        let htmlContent = `
            <a href="index.html#courses" class="back-btn"><i class="fa-solid fa-arrow-left"></i> Back to Courses</a>
            
            <div class="course-detail-header">
                <div class="icon-wrapper">${data.icon}</div>
                <h1>${data.title}</h1>
                <p>${data.desc}</p>
                <div style="margin-top: 15px; color: #2563eb; font-weight: bold; font-size: 14px; background: #eff6ff; display: inline-block; padding: 6px 16px; border-radius: 50px;">
                    💡 Click on any course to view its Fee & Full Schedule Timeline Roadmap!
                </div>
            </div>
            
            <div class="grid-container">
        `;

        data.courses.forEach((course, index) => {
            let timelineHtml = '';
            if (course.timeline && course.timeline.length > 0) {
                timelineHtml = `
                    <div class="course-timeline-accordion" id="accordion-${index}">
                        <div class="timeline-meta">
                            <span class="meta-item"><i class="fa-solid fa-clock"></i> <strong>Duration:</strong> ${course.duration}</span>
                            <span class="meta-item fee-badge"><i class="fa-solid fa-indian-rupee-sign"></i> <strong>Fee:</strong> ${course.fee}</span>
                        </div>
                        <h4 class="timeline-title">Complete Step-by-Step Training Schedule:</h4>
                        <div class="timeline-steps">
                `;
                course.timeline.forEach(step => {
                    timelineHtml += `
                        <div class="timeline-step-item">
                            <div class="step-time">${step.time}</div>
                            <div class="step-content">
                                <h5>${step.topic}</h5>
                                <p>${step.details}</p>
                            </div>
                        </div>
                    `;
                });
                timelineHtml += `</div></div>`;
            }

            htmlContent += `
                <div class="card course-detail-card interactive-timeline-card" data-target="accordion-${index}" style="grid-column: span 4;">
                    <div class="card-main-info">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px;">
                            <h3 style="margin-bottom: 6px; color: #1e3a8a;">${course.name}</h3>
                            <span class="preview-fee-btn"><i class="fa-solid fa-chevron-down"></i> View Details</span>
                        </div>
                        <p class="sub-course-desc">${course.desc}</p>
                        <div class="card-preview-meta">
                            <span><i class="fa-solid fa-calendar-days"></i> Duration: ${course.duration}</span>
                            <span><i class="fa-solid fa-wallet"></i> Fee: ${course.fee.split(' ')[0]}</span>
                        </div>
                    </div>
                    ${timelineHtml}
                </div>
            `;
        });

        htmlContent += `</div>`;
        container.innerHTML = htmlContent;

        // Interactive Accordion Dynamic Click Events
        const interactiveCards = container.querySelectorAll('.interactive-timeline-card');
        interactiveCards.forEach(card => {
            card.addEventListener('click', function(e) {
                // Ensure Accordion items inner clicks don't re-trigger toggle
                if (e.target.closest('.course-timeline-accordion') && !e.target.closest('.timeline-meta')) {
                    return;
                }
                
                const targetId = this.getAttribute('data-target');
                const accordion = document.getElementById(targetId);
                const toggleBtn = this.querySelector('.preview-fee-btn');
                
                if (accordion) {
                    const isOpen = accordion.classList.contains('open');
                    
                    if (isOpen) {
                        accordion.classList.remove('open');
                        this.classList.remove('active-card');
                        if (toggleBtn) toggleBtn.innerHTML = '<i class="fa-solid fa-chevron-down"></i> View Details';
                    } else {
                        accordion.classList.add('open');
                        this.classList.add('active-card');
                        if (toggleBtn) toggleBtn.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Close Details';
                    }
                }
            });
        });

    } else {
        container.innerHTML = `
            <div class="text-center" style="padding: 100px 0;">
                <h2 style="font-size: 32px; color: #111827;">Course Category Not Found</h2>
                <p style="margin-top: 15px; margin-bottom: 30px; color: #6b7280;">The course category you are looking for does not exist.</p>
                <a href="index.html#courses" class="back-btn"><i class="fa-solid fa-arrow-left"></i> Return to Homepage</a>
            </div>
        `;
    }
}