import { ArrowRight, ExternalLink, Github } from "lucide-react"


const projects = [
  {
    id: 1,
    title: "Slack Clone",
    description: "Slack-Clone is a full-stack, real-time chat application inspired by Slack, built to demonstrate modern web development skills in messaging, channel management, and real-time collaboration. It supports features such as workspace creation, multi-channel messaging, direct messages, and real-time updates.",
    image: "/projects/project7.png",
    tags: ["MERN", "Tailwind CSS", "STREAM", "SENTRY", "INNGEST", "CLERK"],
    demoUrl: "https://slack-clone-frontend-ochre.vercel.app/",
    githubUrl: "https://github.com/Mehransangi/Slack-Clone"
  },
  {
    id: 2,
    title: "Local Scholarship Portal - LSP",
    description: "To solve the problem of students of Pakistan who are looking for Local scholarship but are overwhelmed with many international level protal with a local scholarship FILTER in them, We have build LSP.",
    image: "/projects/project3.png",
    tags: ["React", "Express", "MongoDB", "Node.js", "TailwindCSS"],
    demoUrl: "http://lsp-frontend-sok5.vercel.app/",
    githubUrl: "https://github.com/Mehransangi/LSP"
  },
  {
    id: 3,
    title: "My Portfolio",
    description: "UI/UX design of a landing page for a restaurant,The dark color palette creates a sophisticated and inviting atmosphere, while vibrant orange accents add a touch of energy.",
    image: "/projects/project8.png",
    tags: ["React.js", "MongoDB", "Express.js", "tailwind CSS"],
    demoUrl: "https://mehransangi.vercel.app/",
    githubUrl: "https://github.com/Mehransangi/Portfolio"
  },
  {
    id: 4,
    title: "CRICLE - Looking for solution for your software problems?",
    description: "UI/UX design of a landing page for a software house firm,This UI kit reimagines the user experience for Infinite Software Solutions, delivering a modern and efficient platform for software solution.",
    image: "/projects/project4.webp",
    tags: ["Figma"],
    demoUrl: "https://dribbble.com/shots/24597911-CRICLE-Looking-for-solution-for-your-software-problems",
    githubUrl: ""
  },
  {
    id: 5,
    title: "DESTINE - TRAVEL TILL YOUR HEARTS CONTENT",
    description: "UI/UX design of a landing page for a Traveling agency, Explore the world with our beautifully designed travel website, Destine. Our user-friendly layout makes planning your next adventure a breeze.",
    image: "/projects/project5.webp",
    tags: ["Figma"],
    demoUrl: "https://dribbble.com/shots/24598258-DESTINE-TRAVEL-TILL-YOUR-HEARTS-CONTENT",
    githubUrl: ""
  },
  {
    id: 6,
    title: "BRIDES&DRINKS - DO NOT SPILL.",
    description: "UI/UX design of a landing page for a Night club/Bar, This captivating website design for a beverage brand immerses users in a world of luxury and indulgence.",
    image: "/projects/project6.webp",
    tags: ["Figma"],
    demoUrl: "https://dribbble.com/shots/24604428-BRIDES-DRINKS-DO-NOT-SPILL",
    githubUrl: ""
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary">Projects</span></h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recent projects. Each project was carefully crafted with attention to deatail, performace, and user experience.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 bg-secondary-foreground border">{tag}</span>
                  ))}
                </div>


                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 justify-center w-full">
                    <a target="_blank" href={project.demoUrl} className="text-foreground/80 hover:text-primary duration-300"><ExternalLink size={20} /></a>
                    <a href={project.githubUrl}
                      target="_blank" className="text-foreground/80 hover:text-primary duration-300"><Github size={20} /></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Mehransangi">Check My GitHub <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection