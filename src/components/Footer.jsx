import { ArrowUp } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center'>
        <p className='text-sm text-muted-foreground'> &copy; {new Date().getFullYear()} Mehran Sangi. All rights reserved.</p>
        <a href="#home" aria-label='To The Top'> <ArrowUp className='p-2 w-fit rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors' size={35}/> </a>
    </footer>
  )
}

export default Footer