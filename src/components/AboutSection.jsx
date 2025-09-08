import { Briefcase, Code, User } from 'lucide-react'

const AboutSection = () => {
    return (
        <section id='about' className='py-24 px-4 relative'>
            <div className="container mx-auto max-w-5xl">
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    About <span className='text-primary'>Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className='text-2xl font-semibold'>Passionate MERN Stack Developer</h3>

                        <p className='text-muted-foreground'>With over a year of experience in mern stack development, I have skills in building responsive, eye-catching and performant web applications, I also have specialties in building scalable backends and smooth API intergrations.</p>
                        <p className='text-muted-foreground'>In the near future I plan to learn AI/ML to keep up with the current order of technology of the world so that I can stay relevent in the industry decades ahead, I also have a keen interset in learning about the linix systems.</p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className='cosmic-button md:px-8'>Get In Touch</a>

                            <a href={"./src/assets/MEHRAN-SANGI.docx"} className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition-all duration-300'>Download CV</a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className='h-6 w-6 text-primary' />
                                </div>

                                <div className="text-left">
                                    <h4 className='font-semibold text-lg'>MERN STACK Development</h4>
                                    <p className='text-muted-foreground'>Pasionate about creating responsive websites with scalable back-ends.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover"><div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className='h-6 w-6 text-primary' />
                            </div>

                              <div className="text-left">
                                <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                                <p className='text-muted-foreground'>Over a year of experience in creating one of the most eye-catching, scalable and modern design. </p>
                            </div>
                        </div>
                        </div>
                        <div className="gradient-border p-6 card-hover"><div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className='h-6 w-6 text-primary' />
                            </div>

                              <div className="text-left">
                                <h4 className='font-semibold text-lg'>Project Management</h4>
                                <p className='text-muted-foreground'>Leading projects from conception to compilition with agile methodologies.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
