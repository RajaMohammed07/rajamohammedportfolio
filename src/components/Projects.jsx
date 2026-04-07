import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import businessWebsiteImg from "@/assets/projects/business-website.jpg";
import wordpressBlogImg from "@/assets/projects/wordpress-blog.jpg";
import ecommerceStoreImg from "@/assets/projects/ecommerce-store.jpg";
import reactDashboardImg from "@/assets/projects/react-dashboard.jpg";
import gymWebsiteImg from "@/assets/projects/gym-website.jpg";
import restaurantWebsiteImg from "@/assets/projects/restaurant-website.jpg";
import realestateWebsiteImg from "@/assets/projects/realestate-website.jpg";
import travelWebsiteImg from "@/assets/projects/travel-website.jpg";
import photographyWebsiteImg from "@/assets/projects/photography-website.jpg";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Business Website",
    description:
      "Modern responsive website with smooth animations and mobile-first design",
    tech: ["HTML", "CSS", "JavaScript"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    image: businessWebsiteImg,
  },
  {
    title: "WordPress Blog",
    description:
      "Custom WordPress theme with SEO optimization and fast loading times",
    tech: ["WordPress", "PHP", "CSS"],
    gradient: "from-purple-500/20 to-pink-500/20",
    link: "https://mridafoundation.org/",
    image: wordpressBlogImg,
  },
  {
    title: "E-Commerce Store",
    description:
      "Online shopping platform with Bootstrap framework and responsive layout",
    tech: ["Bootstrap", "JavaScript", "HTML"],
    gradient: "from-green-500/20 to-emerald-500/20",
    image: ecommerceStoreImg,
  },
  {
    title: "React Dashboard",
    description:
      "Learning project: Interactive dashboard with modern React components",
    tech: ["React.js", "CSS", "JavaScript"],
    gradient: "from-orange-500/20 to-red-500/20",
    image: reactDashboardImg,
  },
  {
    title: "Gym & Fitness Website",
    description:
      "Dynamic fitness website with membership plans, trainer profiles, and workout schedules",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    gradient: "from-red-500/20 to-rose-500/20",
    image: gymWebsiteImg,
  },
  {
    title: "Restaurant Website",
    description:
      "Elegant restaurant site with online menu, reservation system, and gallery",
    tech: ["HTML", "CSS", "JavaScript"],
    gradient: "from-amber-500/20 to-yellow-500/20",
    image: restaurantWebsiteImg,
  },
  {
    title: "Real Estate Platform",
    description:
      "Property listing website with search filters, image galleries, and contact forms",
    tech: ["React.js", "Bootstrap", "JavaScript"],
    gradient: "from-sky-500/20 to-blue-500/20",
    image: realestateWebsiteImg,
  },
  {
    title: "Travel Agency Website",
    description:
      "Vibrant travel site with destination packages, booking forms, and travel guides",
    tech: ["HTML", "CSS", "JavaScript"],
    gradient: "from-orange-500/20 to-amber-500/20",
    image: travelWebsiteImg,
  },
  {
    title: "Photography Portfolio",
    description:
      "Minimal photography portfolio with lightbox gallery, categories, and client proofing",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    gradient: "from-neutral-500/20 to-stone-500/20",
    image: photographyWebsiteImg,
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".projects-header",
            start: "top 80%",
          },
        }
      );

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardHover = (index, isHovering) => {
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.to(card, {
      scale: isHovering ? 1.02 : 1,
      y: isHovering ? -5 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section
      id="projects"
      className="section-padding bg-card/50"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div className="projects-header mb-16 opacity-0">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A selection of my recent work showcasing creative solutions and
            technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="opacity-0"
              onMouseEnter={() => handleCardHover(index, true)}
              onMouseLeave={() => handleCardHover(index, false)}
            >
              <Card className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />
                </div>

                <div className="relative p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      ) : (
                        <button className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
