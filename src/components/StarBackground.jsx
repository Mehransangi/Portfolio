import React, { useEffect, useState } from 'react'

const StarBackground = () => {
    const [stars, setStars] = useState([])
    const [meteors, setmeteors] = useState([])
    const [meteor, setmeteor] = useState([])

    useEffect(() => {
        generateStars()
        generateMeteors()
        generateMeteor()

        const handleReSize = () => {
            generateStars()
        }
        
        window.addEventListener('resize', handleReSize)
        return ()=> window.removeEventListener('resize', handleReSize)
    }, [])

    const generateStars = () => {
        const numberOfStar = Math.floor((window.innerHeight * window.innerWidth) / 9000)

        const newStars = []

        for (let i = 0; i < numberOfStar; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.3 + 0.6,
                animationDuration: Math.random() * 4 + 2,
            })
        }

        setStars(newStars)
    }
    
    const generateMeteors = () => {
        const numberOfMeteors = 6

        const newMeteors = []

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 1 + 2,
                x: Math.random() * 100,
                y: Math.random() * 40,
                delay: Math.random() * 10,
                animationDuration: Math.random() * 3 + 3,
            })
        }

        setmeteors(newMeteors)
    }

    const generateMeteor = () => {
        const numberOfMeteor = 8

        const newMeteor = []

        for (let i = 0; i < numberOfMeteor; i++) {
            newMeteor.push({
                id: i,
                size: Math.random() * 2 + 2,
                x: Math.random() * 100,
                y: Math.random() * 40,
                delay: Math.random() * 10,
                animationDuration: Math.random() * 3 + 3,
            })
        }

        setmeteor(newMeteor)
    }
    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
            {stars.map((stars) => (
                <div key={stars.id} className='star animate-pulse-subtle' style={{
                    width: stars.size + 'px',
                    height: stars.size + 'px',
                    left: stars.x + '%',
                    top: stars.y + '%',
                    opacity: stars.opacity,
                    animationDuration: stars.animationDuration + 's',
                }} />
            ))}
            {meteors.map((meteor) => (
                <div key={meteor.id} className='meteor animate-meteor' style={{
                    width: meteor.size * 35 + 'px',
                    height: meteor.size + 'px',
                    left: meteor.x + '%',
                    top: meteor.y + '%',
                    animationDelay: meteor.delay,
                    animationDuration: meteor.animationDuration + 's',
                }} />
            ))}
            {meteor.map((meteor) => (
                <div key={meteor.id} className='meteor animate-meteor' style={{
                    width: meteor.size + 'px',
                    height: meteor.size + 'px',
                    left: meteor.x + '%',
                    top: meteor.y + '%',
                    animationDelay: meteor.delay,
                    animationDuration: meteor.animationDuration + 's',
                }} />
            ))}
        </div>
    )
}

export default StarBackground