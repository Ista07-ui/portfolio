import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail, Tally1Icon } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/contact-form";
import { ExperienceItem } from "@/components/experience-item";
import { EducationItem } from "@/components/education-item";

export default function Home() {
  const experiences = [
    {
      id: 1,
      company: "PT. Trijasa Utama Consultindo",
      position: "Junior Consultant (Contract)",
      duration: "May, 2024 - Oct, 2024",
      location: "Jakarta, Indonesia",
      description:
        "Recorded and processed all invoices using Accurate 05 accounting software. Made financial Statements (including Income Statement, Balance Sheet, Cash Flow Statement, Statement of Changes in Equity, and Notes to Financial Statement) for multiple clients. Calculated PPh 21, and PPh 23, made ID Billing, and reported VAT and PPh monthly. Made ID Billing and reporting vat and pph every month 100% on time every month during the 6 month contract period. Communicated with clients who collaborate with the company (official travel)",
    },
    {
      id: 2,
      company: "PT. Sehat Alami Nusantara",
      position: "Finance and Accounting",
      duration: "Jan, 2022 - Apr, 2024",
      location: "Tangerang, Indonesia",
      description:
        "Managed and processed 100% of daily invoices and transaction using the accurate 04. Prepared monthly financial Statements (including Income Statement, Balance Sheet, Cash Flow Statement, Statement of Changes in Equity, and Notes to Financial Statement) to support company financial analysis. Calculated and managed PPh Article 23 and PPh Article 4 (2) Final liabilities, and issued tax invoices (e-Faktur) with a verified accuracy rate of 99% to minimize potential tax corrections. Proactively identified PPh-affected transactions and submitted monthly VAT reports consistently on time for 27 consecutive periods (January 2022 to April 2024).)",
    },
    {
      id: 3,
      company: "PT. Daiho Indonesia (a branch of the Japanese Daiho Group)",
      position: "Finance and Accounting",
      duration: "Aug, 2019 - Apr, 2020",
      location: "Cikarang, Indonesia",
      description:
        "Managed all invoicing and processed an average of 60 monthly corporate financial transactions directly within the Sage 300 ERP system, ensuring the integrity of financial data in a multinational environment. Dailed exchange rate update input (Singapore dollar, Baht, Yen, Rupiah). Prepared Deduction Evidence and accurately calculated corporate tax liabilities, including PPh Article 23, PPh Article 26 (Foreign Tax), and PPh Article 4 (2) Final. Coordinated and maintained efficient communication with internal departments and external parties",
    },
  ];

  const educations = [
    {
      id: 1,
      institution: "As-Syafi'iyah Islamic University",
      degree: "Bachelor Degree of Accounting",
      duration: "Sep, 2014 - Aug, 2018",
      location: "Bekasi, Indonesia",
      description: "Major in Accounting",
    },
    {
      id: 2,
      institution: "HariSenin.com (course)",
      degree: "Fullstack Developer",
      duration: "Des, 2024 - Mei, 2025",
      location: "Jakarta, Indonesia",
      description: "Major in Fullstack Developer",
    },
    {
      id: 3,
      institution: "MySkill (course)",
      degree: "Web Developer",
      duration: "Oct, 2024 - Des, 2024",
      location: "Jakarta, Indonesia",
      description: "Major in Web Developer",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Web Video Belajar ",
      description:
        "I designed the code and created 3 pages with React + React Router: login, register, homepage. Added interaction with usestate (data stored in an array of objects. Built the create, read, update, delete (CRUD) feature and stored data in a local JS array. Replaced the array data from the fake API using fetch/axios to fetch and send data (CRUD with data from the API)",
      imageUrl: "/project/VideoBelajarFrontend.png",
      githubUrl:
        "https://github.com/Ista07-ui/mission-intermediate-frontend-1a",
      liveUrl: "https://mission-intermediate-frontend-1a.vercel.app/",
      tags: ["react", "git", "html", "css", "javascript"],
    },
    {
      id: 2,
      title: "Web Hadeon_Spot",
      description:
        "I created a web food ordering application for a cafe business, Hadeon Spot. I designed the user interface (UI) and user experience (UX) to be attractive and easy to use. Implemented responsive design so that the website can be accessed well on various devices, such as desktops, tablets, and smartphones",
      imageUrl: "/project/Hadeon_Spot.png",
      githubUrl:
        "https://github.com/Ista07-ui/Assignment-Day-Extra-Class4-FE25ISTA/tree/main",
      liveUrl:
        "https://github.com/Ista07-ui/Assignment-Day-Extra-Class4-FE25ISTA/tree/main",
      tags: ["git", "typescript", "css", "javascript"],
    },
    {
      id: 3,
      title: "Web Smoothies and Pastries (React Styling CRUD and API)",
      description:
        "I created a front-end application using React and integrated the Reqres API. I also implemented user authentication features (login and registration), displayed user data, and implemented pagination. I also created protected routes and a responsive design for mobile and desktop.",
      imageUrl: "/project/CRUDandAPIReactPages.png",
      githubUrl:
        "https://github.com/Ista07-ui/ASSIGNMENT-Day26-Day28-Mini-Project-React",
      liveUrl:
        "https://github.com/Ista07-ui/ASSIGNMENT-Day26-Day28-Mini-Project-React",
      tags: ["git", "typescript", "react", "tailwindcss"],
    },
    {
      id: 4,
      title: "Create Accessible UI Design",
      description:
        "I created a design that involved several steps to create a responsive mobile app (Android) and website for a cafe business, Thatha Smoothies and Cake. A basic structure or wireframe was created to define the layout and functionality, without focusing on aesthetics. This is where the designer mapped out user flows, such as login, registration, and menu navigation. All UI elements (buttons, forms, product images) were created into reusable components",
      imageUrl: "/project/projectFigma.png",
      githubUrl:
        "https://www.figma.com/design/8brkxp73AuiB2pAiUcCOtw/AssignmentDayEC1_FE25_ISTA?node-id=0-1&p=f&t=xF02RF256onnJPNi-0",
      liveUrl:
        "https://www.figma.com/design/8brkxp73AuiB2pAiUcCOtw/AssignmentDayEC1_FE25_ISTA?node-id=0-1&p=f&t=xF02RF256onnJPNi-0",
      tags: ["Figma", "design"],
    },
    {
      id: 5,
      title: "Todo List App",
      description:
        "I created the app from scratch, defined the UI and created the logic with using plain HTML, CSS and Javascript",
      imageUrl: "/project/TodoApp.png",
      githubUrl: "https://github.com/Ista07-ui/mission-4",
      liveUrl: "https://ista07-ui.github.io/mission-4/",
      tags: ["git", "html", "css", "javascript"],
    },
    {
      id: 6,
      title: "Slicing Figma to HTML and CSS",
      description:
        "I exported design elements such as images, icons, and defined text properties (font, size, color) directly from the Figma inspection panel, and created a web page skeleton using semantic HTML according to the layout seen in the Figma design and applied: Apply visual styles using CSS to match the pixel-perfect design in Figma, including element placement (layout), color scheme, typography, and ensure the website display functions well on various screen sizes (responsiveness)",
      imageUrl: "/project/SlicingAssign18git_diBimbing.png",
      githubUrl: "https://github.com/Ista07-ui/git-diBimbing",
      liveUrl: "https://github.com/Ista07-ui/git-diBimbing",
      tags: ["git", "html", "css"],
    },
  ];

  const links = {
    github: "https://github.com/Ista07-ui",
    linkedin: "https://www.linkedin.com/in/istacahyak/",
    instagram: "https://www.instagram.com/isthackh0247/",
    email: "istacahyakh@gmail.com",
  };

  const skills = [
    {
      name: "HTML5",
      icon: "/assets/tools/html.png",
      credit: {
        title: "HTML icons created by Freepik",
        url: "https://www.flaticon.com/free-icons/html",
      },
      animation: "animate-float",
    },
    {
      name: "CSS",
      icon: "/assets/tools/css.png",
      credit: {
        title: "CSS icons created by iconsimple",
        url: "https://www.flaticon.com/free-icons/css",
      },
      animation: "animate-float-slow",
    },
    {
      name: "Javascript",
      icon: "/assets/tools/javascript.png",
      credit: {
        title: "JavaScript icons created by Pixel perfect",
        url: "https://www.flaticon.com/free-icons/javascript",
      },
      animation: "animate-float",
    },
    {
      name: "React",
      icon: "/assets/tools/reactjs.png",
      credit: {
        title: "React icons created by Pixel perfect",
        url: "https://www.flaticon.com/free-icons/react",
      },
      animation: "animate-bounce-slow",
    },
    {
      name: "Next.js",
      icon: "/assets/tools/nextjs.png",
      credit: {
        title: "Framework icons",
        url: "https://nextjs.org",
      },
      animation: "animate-float",
    },
    {
      name: "Node.js",
      icon: "/assets/tools/nodejs.png",
      credit: {
        title: "Node.js icons",
        url: "https://nodejs.org",
      },
      animation: "animate-float-slow",
    },
    // {
    //   name: "Bootstrap",
    //   icon: "/assets/tools/bootstrap.png",
    //   credit: {
    //     title: "Bootstrap icons",
    //     url: "https://getbootstrap.com",
    //   },
    //   animation: "animate-bounce-slow",
    // },
    {
      name: "Tailwind CSS",
      icon: "/assets/tools/tailwind.png",
      credit: {
        title: "Tailwind CSS icons",
        url: "https://tailwindcss.com",
      },
      animation: "animate-float",
    },
    {
      name: "GitHub",
      icon: "/assets/tools/github.png",
      credit: {
        title: "Version control icons",
        url: "https://github.com",
      },
      animation: "animate-float-slow",
    },
    {
      name: "VS Code",
      icon: "/assets/tools/vscode.png",
      credit: {
        title: "Code editor icons",
        url: "https://code.visualstudio.com",
      },
      animation: "animate-float",
    },
    {
      name: "Figma",
      icon: "/assets/tools/figma.png",
      credit: {
        title: "Design tool icons",
        url: "https://www.figma.com",
      },
      animation: "animate-float-slow",
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-matte-black font-sans text-slate-200 antialiased">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full glass-nav">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-1 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-20 items-center justify-center bg-transparent">
              {/* <span className="text-gold text-xl">⚡</span> */}
              <img
                src="iconPortfolio.png"
                alt="Logo"
                className="h-20 w-20 object-contain"
              />
            </div>
            <span className="text-xl font-extrabold tracking-[0.2em] uppercase text-white">
              Portfolio<span className="gold-gradient-text">_ISTA</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav>
            <ul className="hidden items-center gap-10 lg:flex">
              <li>
                <a
                  className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-gold transition-colors"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-gold transition-colors"
                  href="#education"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-gold transition-colors"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-gold transition-colors"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-gold transition-colors"
                  href="#skills"
                >
                  Skills
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-6">
            <a
              className="hidden sm:inline-flex items-center justify-center rounded-none border border-gold/50 px-8 py-2.5 text-xs font-bold uppercase tracking-widest text-gold hover:bg-gold hover:text-black transition-all duration-300"
              href="#contact"
            >
              Collaborate
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="luxury-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCCDwnrS9dwBmC3YCm3TN8csARx-4T0SIYl_27gQDMifm2dm-0XeD8QjBXHnGGBHRmj2ylY69IjtBM_SEeRzYhzwfdNXbmRvYc5LRy7ssC1OxQRMvtwS7EM0I8oZ4YX1doOurYIa-4QFSEXjeyY5S7IsXhCm0m0bhKyWY8TwWVSct2zIdnsPvYH43RGhZKs7cPlRtgRe8rke0W3JirXyhdBpO7bK0qT9bEtHDrqs9k-6QoKA6icm5unFK8jbOv05shqu69U9SX2Eg')",
            }}
          ></div>

          <div className="relative z-10 mx-auto max-w-7xl w-full flex-grow flex items-center">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left opacity-0 animate-fade-in-up">
                <div className="mb-8 inline-flex items-center gap-4 rounded-none border-l-2 border-gold bg-gold/5 px-6 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-light">
                    Front-End Web Developer
                  </span>
                </div>

                <h1 className="font-serif text-5xl font-black leading-tight text-white md:text-6xl">
                  Hi, I'm <br />
                  <span className="gold-gradient-text">Ista CK.</span> <br />
                  Front End Developer
                </h1>

                <p className="mt-10 max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl font-light mx-auto lg:mx-0 opacity-0 animate-fade-in-up delay-100 text-justify">
                  Currently, I am transitioning my career to Front End
                  Developer, with a strong basic foundation in HTML, CSS, and
                  JavaScript. I want to combine my analytical skills and
                  thoroughness to build efficient, user-friendly, and impactful
                  web applications.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row lg:justify-start opacity-0 animate-fade-in-up delay-200">
                  <Link
                    href="#projects"
                    className="gold-emerald-btn group flex h-16 min-w-[240px] items-center justify-center gap-4 px-10 text-sm font-black uppercase tracking-widest text-black"
                  >
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                      View Projects
                    </span>
                  </Link>
                  <a
                    href={`https://drive.google.com/file/d/1FXBmW9XZ/view`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-16 min-w-[180px] items-center justify-center gap-4 border border-white/10 bg-white/5 px-10 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:border-gold/50 hover:text-gold"
                  >
                    <span className="material-symbols-outlined">download</span>
                    <span>CV</span>
                  </a>
                </div>
              </div>

              {/* Right Profile Image */}
              <div className="relative flex-1 flex justify-center lg:justify-end opacity-0 animate-fade-in-up delay-200">
                <div className="relative group">
                  <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border border-gold/10 rounded-full"></div>
                  <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-emerald-900/20 rounded-full"></div>

                  <div className="profile-frame relative h-80 w-80 md:h-[500px] md:w-[450px] overflow-hidden rounded-[40px] bg-neutral-900 p-1">
                    <Image
                      alt="Professional Profile"
                      className="h-full w-full object-cover rounded-[38px] transition-all duration-700"
                      src="/FotoSemiFormal.jpg"
                      width={450}
                      height={500}
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-matte-black/60 to-transparent pointer-events-none"></div>
                  </div>

                  {/* Tech Icons */}
                  <div className="absolute -top-10 -left-10 tech-icon-gold p-4 rounded-2xl emerald-highlight">
                    <span className="text-2xl">⚛️</span>
                  </div>

                  <div className="absolute top-1/4 -right-8 tech-icon-gold p-3 rounded-xl">
                    <span className="text-lg">JS</span>
                  </div>

                  <div className="absolute -bottom-6 left-1/4 tech-icon-gold p-4 rounded-2xl">
                    <span className="text-2xl">📄</span>
                  </div>

                  <div className="absolute bottom-1/3 -left-12 tech-icon-gold p-3 rounded-xl emerald-highlight">
                    <span className="text-lg">CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="w-full py-12 relative z-10">
            <div className="mx-auto max-w-7xl w-full border-t border-gold/10 pt-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  {links.github && (
                    <a
                      className="footer-social-link flex items-center gap-2 group"
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-gold group-hover:text-gold-light transition-colors">
                        <Github className="w-5 h-5" />
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-gold transition-colors">
                        GitHub
                      </span>
                    </a>
                  )}
                  <div className="w-1 h-1 rounded-full bg-gold/30"></div>
                  {links.linkedin && (
                    <a
                      className="footer-social-link flex items-center gap-2 group"
                      href={links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-gold group-hover:text-gold-light transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-gold transition-colors">
                        LinkedIn
                      </span>
                    </a>
                  )}
                  <div className="w-1 h-1 rounded-full bg-gold/30"></div>
                  {links.email && (
                    <a
                      className="footer-social-link flex items-center gap-2 group"
                      href={`mailto:${links.email}`}
                    >
                      <span className="text-gold group-hover:text-gold-light transition-colors">
                        <Mail className="w-5 h-5" />
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-gold transition-colors">
                        Email
                      </span>
                    </a>
                  )}
                </div>

                <div className="flex flex-col items-center md:items-end">
                  <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gold-dark/60 mb-1">
                    Status
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_5px_rgba(16,185,129,0.5)]"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      Available for projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-950 border-t border-gold/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-justify">
            <p className="text-lg text-slate-400 mb-6">
              I'm a Bachelor of Accounting graduate, accounting professional
              transitioning to Frond End Developer with hands-on experience in
              HTML, CSS, JavaScript, Node.js, and React Native through intensive
              bootcamp training. Leveraging 3 years of analytical experience in
              financial management to build detail-oriented, efficient web
              applications. Quick learner with strong problem-solving skills,
              currently building portfolio projects and seeking opportunities to
              grow as a Frond End Developer.
            </p>
            <p className="text-lg text-slate-400 mb-6">
              {/* I am a passionate and dedicated frontend Developer with a strong
              foundation in HTML, CSS, and JavaScript. */}
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-16 bg-matte-black border-t border-gold/10"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Work Experience
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {experiences.map((experience) => (
              <ExperienceItem key={experience.id} {...experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-16 bg-gray-950 border-t border-gold/10"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Education
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {educations.map((education) => (
              <EducationItem key={education.id} {...education} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 bg-matte-black border-t border-gold/10"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white/5 p-6 rounded-lg shadow-sm border border-gold/10 text-center hover:shadow-lg hover:border-gold/50 transition-all duration-300 opacity-0 animate-fade-in-up hover:bg-white/10 hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div
                  className={`h-16 w-16 mx-auto mb-3 flex items-center justify-center ${skill.animation}`}
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={64}
                    height={64}
                    className="object-contain filter brightness-110 hover:brightness-125 transition-all duration-300"
                  />
                </div>
                <p className="font-medium text-slate-200 hover:text-gold transition-colors mb-1">
                  {skill.name}
                </p>
                <a
                  href={skill.credit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-slate-500 hover:text-gold-light transition-colors block"
                  title={skill.credit.title}
                >
                  Credits
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Attribution Section */}
        {/* <div className="mt-16 pt-12 border-t border-gold/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-lg font-bold text-gold mb-6 text-center">
              Icon Attribution
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[10px] text-slate-500">
              {skills.map((skill) => (
                <a
                  key={skill.name}
                  href={skill.credit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-light transition-colors"
                >
                  <span className="text-gold">•</span> {skill.credit.title} -{" "}
                  <span className="text-gold-light">{skill.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div> */}
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 bg-gray-950 border-t border-gold/10"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            My Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-matte-black border-t border-gold/10"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm email={links.email} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-matte-black border-t border-gold/10 text-white">
        <div className="mx-auto max-w-7xl w-full px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600 font-medium">
              © {new Date().getFullYear()} Ista CK. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gold-light transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              )}
              {links.linkedin && (
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gold-light transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              )}

              {links.email && (
                <a
                  href={`mailto:${links.email}`}
                  className="text-white hover:text-gold-light transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="sr-only">Email</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
