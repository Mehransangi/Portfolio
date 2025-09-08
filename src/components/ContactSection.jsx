import { Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from '../lib/utils'
import toast from "react-hot-toast"
import { useState } from "react"

const ContactSection = () => {
    const [submitting, setIsSubmitting] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            const res = await fetch(`http://localhost:3000/api/v1/auth/contactus`, {
                method: "POST", headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: name, email: email, message: message })
            })
            const data = await res.json();
            if (data?.success) {
                toast.success('Thank You for your Message, I will get back to you soon!', {
                    style: {
                        border: '1px solid #e1e7ef',
                        padding: '16px',
                        color: "#ffffff",
                        backgroundColor: "#000000"
                    },
                    iconTheme: {
                        primary: '#7969c9',
                        secondary: '#FFFAEE',
                    },
                })
                setName("")
                setEmail("")
                setMessage("")
            } else {
                toast.error(data?.message || "Something Went Wrong!!!", {
                    style: {
                        border: '1px solid #e1e7ef',
                        padding: '16px',
                        color: "#ffffff",
                        backgroundColor: "#000000"
                    },
                    iconTheme: {
                        primary: '#7969c9',
                        secondary: '#FFFAEE',
                    }
                })
            }

            setIsSubmitting(false)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Inforamtion</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10"><Mail className="h-6 w-6 text-primary" />
                                </div>

                                <div className="w-full text-start">
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:sangimehran1@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">sangimehran1@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10"><Phone className="h-6 w-6 text-primary" />
                                </div>

                                <div className="w-full text-start">
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:03321366901" className="text-muted-foreground hover:text-primary transition-colors">+(92) 332 1366901</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10"><MapPin className="h-6 w-6 text-primary" />
                                </div>

                                <div className="w-full text-start">
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">Karachi, Pakistan</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>

                        <form onSubmit={handleSubmit}>
                            <div className="">
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-start">Your Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" className="w-full px-4 py-3 mb-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Mehran Sangi" />
                            </div>
                            <div className="">
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-start">Your Email</label>
                                <input type="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} name="email" className="w-full mb-2 px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="sangimehran1@gmail.com" />
                            </div>
                            <div className="">
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-start">Your Message</label>
                                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} name="message" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary  mb-2" placeholder="Write your message." />
                            </div>

                            <button disabled={submitting} type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2 outline-none")}>
                                {submitting === true ? "Sending..." : "Send Message"}<Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection