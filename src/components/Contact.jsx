import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/RajaMohammed07" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/raja-mohammed-251005312" },
  { icon: Mail, label: "Email", href: "mailto:therajamohammed@gmail.com" },
];

const Contact = () => {
  const sectionRef = useRef(null);
  const socialsRef = useRef([]);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".contact-header",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".contact-description",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          scrollTrigger: {
            trigger: ".contact-description",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".contact-form",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.3,
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 85%",
          },
        }
      );

      socialsRef.current.forEach((social, index) => {
        if (!social) return;
        gsap.fromTo(
          social,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            delay: 0.4 + index * 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: social,
              start: "top 90%",
            },
          }
        );
      });

      gsap.fromTo(
        ".contact-footer",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          delay: 0.8,
          scrollTrigger: {
            trigger: ".contact-footer",
            start: "top 95%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSocialHover = (index, isHovering) => {
    const social = socialsRef.current[index];
    if (!social) return;
    gsap.to(social, {
      scale: isHovering ? 1.1 : 1,
      y: isHovering ? -5 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:therajamohammed@gmail.com?subject=${subject}&body=${body}`, '_self');
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="section-padding bg-card/50"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="contact-header font-display text-5xl md:text-7xl font-bold mb-8 opacity-0">
            Let's Build Something
            <br />
            <span className="text-gradient">Amazing Together</span>
          </h2>

          <p className="contact-description text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed opacity-0">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form max-w-xl mx-auto mb-12 opacity-0 space-y-4 text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Your Name</label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Your Email</label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg rounded-xl shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.5)] hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </form>

          <div className="mb-8">
            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-12 py-8 text-xl rounded-xl transition-all"
            >
              <a href="/Raja_Mohammed_Resume.pdf" download="Raja_Mohammed_Resume.pdf">
                <Download className="w-6 h-6 mr-3" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6 flex-wrap">
            {socials.map((social, index) => (
              <a
                key={social.label}
                ref={(el) => (socialsRef.current[index] = el)}
                href={social.href}
                className="p-4 rounded-xl bg-secondary hover:bg-primary/20 border border-border hover:border-primary/50 transition-all group opacity-0"
                aria-label={social.label}
                onMouseEnter={() => handleSocialHover(index, true)}
                onMouseLeave={() => handleSocialHover(index, false)}
              >
                <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          <div className="contact-footer mt-20 pt-12 border-t border-border opacity-0">
            <p className="text-muted-foreground">
              © 2024 Raja Mohammed. Built with passion and creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
