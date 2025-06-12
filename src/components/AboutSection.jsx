import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* === LEFT: About Text === */}
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <h3 className="text-2xl font-semibold text-foreground">
            ML Enthusiast & Full-Stack Developer 
            </h3>

            <p>
              I'm a pre-final year Computer Science student with hands-on
              experience in building full-stack web applications and delivering
              data-driven machine learning solutions.
            </p>

            <p>
              I enjoy turning complex problems into simple, beautiful, and
              intuitive software. My projects span from crop disease prediction
              systems to AI-based news summarizers, reflecting my passion for
              impactful tech.
            </p>

            <p>
              Currently seeking exciting internship or entry-level roles where I
              can grow as a developer and contribute meaningfully to real-world
              projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button shadow-md">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1C29hTjxvyrLOvH0YwRHqgO6NMx8ErbPY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* === RIGHT: Skill Cards === */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover shadow-md bg-card/40 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-foreground">Web Development</h4>
                  <p className="text-muted-foreground text-sm">
                    Built and deployed responsive web apps using ReactJS, NodeJS, and MongoDB.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover shadow-md bg-card/40 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-foreground">Machine Learning</h4>
                  <p className="text-muted-foreground text-sm">
                    Created ML models for crop disease detection and text summarization using TensorFlow and NLP.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover shadow-md bg-card/40 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg text-foreground">Industry Exposure</h4>
                  <p className="text-muted-foreground text-sm">
                    Interned at SAIL where I developed a Joomla-based website and a Java-SQL budgeting tool.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
