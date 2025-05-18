import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/contact-form";
import { Navbar } from "@/components/navbar";
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
        "Input all invoice into the accounting program (Accurate 05), Making financial Statements (Income Statement, Balance Sheet, Cash Flow Statement, Statement of Changes in Equity, Notes to Financial Statements), Calculating pph 21, pph 23, Make ID Billing and reporting vat and pph every month, Communicate with clients who collaborate with the company (official travel)",
    },
    {
      id: 2,
      company: "PT. Sehat Alami Nusantara",
      position: "Finance and Accounting",
      duration: "Jan, 2022 - Apr, 2024",
      location: "Tangerang, Indonesia",
      description:
        "Input all invoice into the accounting program (Accurate 04), Making financial Statements (Income Statement, Balance Sheet, Cash Flow Statement, Statement of Changes in Equity, Notes to Financial Statements), Calculating pph 23, pph 4 (2) and make tax invoice, Determine transactions that are affected by pph and reporting Vat every month, Communicating with internal and external parties related to corporate (official travel)",
    },
    {
      id: 3,
      company: "PT. Daiho Indonesia (a branch of the Japanese Daiho Group)",
      position: "Finance and Accounting",
      duration: "Aug, 2019 - Apr, 2020",
      location: "Cikarang, Indonesia",
      description:
        "Input all invoice into the accounting program (Sage 300 ERP), Conducting corporate financial transactions, Make evidence of deduction and calculation pph 23, 26 and 4 (2), Determine transactions that are affected by pph, Connecting with internal or external parties related to corporate",
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
      institution: "MA PERSIS Cianjur",
      degree: "Bachelor of Computer Science",
      duration: "Jul, 2010 - Jun, 2013",
      location: "Cianjur, Indonesia",
      description: "Major in social education",
    },
    {
      id: 3,
      institution: "HariSenin.com (course)",
      degree: "Fullstack Developer",
      duration: "Des, 2024 - Mei, 2025",
      location: "Jakarta, Indonesia",
      description: "Major in Fullstack Developer",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Video Belajar Frontend ",
      description:
        "I designed the code and created 3 pages with React + React Router: login, register, homepage. Added interaction with usestate (data stored in an array of objects. Built the create, read, update, delete (CRUD) feature and stored data in a local JS array. Replaced the array data from the fake API using fetch/axios to fetch and send data (CRUD with data from the API)",
      imageUrl: "/VideoBelajarFrontend.png",
      githubUrl:
        "https://github.com/Ista07-ui/mission-intermediate-frontend-1a",
      liveUrl: "https://mission-intermediate-frontend-1a.vercel.app/",
      tags: ["react", "git", "html", "css", "javascript"],
    },
    {
      id: 2,
      title: "Todo List App",
      description:
        "I created the app from scratch, defined the UI and created the logic with using plain HTML, CSS and Javascript",
      imageUrl: "/TodoApp.png",
      githubUrl: "https://github.com/Ista07-ui/mission-4",
      liveUrl: "https://ista07-ui.github.io/mission-4/",
      tags: ["git", "html", "css", "javascript"],
    },
  ];

  const links = {
    github: "https://github.com/Ista07-ui",
    linkedin: "https://www.linkedin.com/in/istacahyak/",
    instagram: "https://www.instagram.com/isthackh0247/",
    email: "istacahyakh@gmail.com",
  };

  const skills = [
    "HTML5",
    "CSS",
    "Javascript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MySQL",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-20 pb-16 md:pt-32 md:pb-24 dark:bg-gray-950"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{" "}
                <span className="text-cornflower-600 dark:text-cornflower-400">
                  <p>Ista CK.</p>
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
                Front End Developer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg text-justify">
                Currently, I am transitioning my career to Full-Stack
                Development, with basic skills in HTML, CSS, and JavaScript. I
                want to combine my analytical skills and thoroughness to build
                efficient, user-friendly, and impactful web applications.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#contact"
                  className="px-6 py-3 bg-cornflower-600 hover:bg-cornflower-700 text-white font-medium rounded-lg transition-colors"
                >
                  Contact Me
                </Link>
                <Link
                  href="#projects"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  View Work
                </Link>
              </div>
              <div className="flex gap-4 mt-8">
                {links.github && (
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-400 hover:text-cornflower-600 dark:hover:text-cornflower-400 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                    <span className="sr-only">GitHub</span>
                  </a>
                )}

                {links.linkedin && (
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-400 hover:text-cornflower-600 dark:hover:text-cornflower-400 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                )}

                {links.instagram && (
                  <a
                    href={links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-400 hover:text-cornflower-600 dark:hover:text-cornflower-400 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                    <span className="sr-only">Instagram</span>
                  </a>
                )}

                {links.email && (
                  <a
                    href={`mailto:${links.email}`}
                    className="text-gray-700 dark:text-gray-400 hover:text-cornflower-600 dark:hover:text-cornflower-400 transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                    <span className="sr-only">Email</span>
                  </a>
                )}
              </div>
            </div>
            <div className="md:w-1/2 flex justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cornflower-100 dark:border-cornflower-900">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  width={320}
                  height={320}
                  className="object-cover object-bottom h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-justify">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              A Bachelor of Accounting graduate, experienced accounting
              professional with almost 3 years of experience in managing
              financial statement calculations for income statements, balance
              sheets, cash flow statements, equity change statements, and notes
              to financial statements and tax administration, including
              recording and reporting of VAT, Income Tax Article 21, Income Tax
              Article 23, and Income Tax Article 4 paragraph 2, making tax
              invoices. Currently transitioning to Full-Stack Development, with
              proficiency in HTML, CSS, and JavaScript. Aspiring to utilize
              analytical skills and attention to detail to build efficient and
              easy-to-use web applications and grow as a Full-Stack Developer
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I am a passionate and dedicated Full-Stack Developer with a strong
              foundation in HTML, CSS, and JavaScript.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300"></p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
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
      <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
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
      <section id="skills" className="py-16 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-center hover:shadow-md transition-shadow"
              >
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
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
      <section id="contact" className="py-16 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm email={links.email} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Ista. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cornflower-400 transition-colors"
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
                  className="text-white hover:text-cornflower-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              )}

              {links.email && (
                <a
                  href={`mailto:${links.email}`}
                  className="text-white hover:text-cornflower-400 transition-colors"
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
