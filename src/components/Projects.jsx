import React, { useEffect, useRef } from 'react'
import projects from '../data/projects'
import './SharedPageStyles.css'

function Projects({ scrollTarget }){
    const refs = useRef({})

    useEffect(() => {
        if (scrollTarget && refs.current[scrollTarget]){
            refs.current[scrollTarget].scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [scrollTarget])

    return(
        <div className="PageContainer">
            <h1>Projects</h1>
            {projects.map((p, idx) => {
                const tech = p.tech || (p.images ? p.images.map((_,i) => (['HTML','CSS','JS','Java','C++'][i] || 'Tool')) : [])
                const blurb = p.longBlurb || p.blurb || ''
                return (
                    <section key={p.id} id={p.id} ref={el => refs.current[p.id] = el} className={`projectCard ${idx % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="projectInner">
                            <div className="projectImage">
                                <a href={p.github || '#'} target="_blank" rel="noreferrer" aria-label={`${p.title} repo`}>
                                    <img src={p.images[0] || p.thumb} alt={p.title} />
                                </a>
                            </div>
                            <div className="projectContent">
                                <h2>{p.title}</h2>
                                <p>{blurb}</p>
                                <div className="techTags">
                                    {tech.slice(0,6).map((t,i) => (
                                        <span key={i} className="tag">{typeof t === 'string' ? t : (t.name || 'tech')}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )
            })}
        </div>
    )
}

export default Projects