import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "News Summarizer with Text-to-Speech",
    description:
      "A Python-based application that summarizes long news articles and reads them aloud using TTS engines.",
    image: "/projects/project1.png",
    tags: ["Python", "NLP", "TTS", "Summarization"],
    demoUrl: "https://huggingface.co/spaces/pandeyshikhar/news_summarizer_tts", 
    githubUrl: "https://github.com/pandeyshikhar18/News_Summarizer_TTS", 
  },
  {
    id: 2,
    title: "Crop Disease Prediction",
    description:
      "A deep learning project using CNN to detect and classify crop diseases from leaf images. Built with Python and Streamlit.",
    image: "/projects/project2.png",
    tags: ["Python", "CNN", "Deep Learning", "Streamlit"],
    demoUrl: "https://huggingface.co/spaces/pandeyshikhar/Crop_Diseas_Prediction", // Replace with your live demo if available
    githubUrl: "https://github.com/pandeyshikhar18/Crop-Disease-Prediction",
  },
{
  id: 3,
  title: "CodAIED",
  description:
    "Web-based AI-powered code editor built with React and Monaco, featuring GPT-3.5 Turbo via OpenRouter and voice-to-code integration.",
  image: "/projects/screenshot.png",  // Update this path if needed
  tags: ["React", "TypeScript", "Vite", "Monaco", "OpenRouter", "Voice AI"],
  demoUrl: "https://ai-code-editor-pi.vercel.app/",
  githubUrl: "https://github.com/pandeyshikhar18/ai-code-editor"
},

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are a few projects I’ve developed to solve real-world problems using
          machine learning, deep learning, and user-friendly tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/pandeyshikhar18"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
