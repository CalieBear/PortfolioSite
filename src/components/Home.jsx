import React, { useState } from 'react'
import './Home.css'
import nextArrow from '../assets/arrow-next.svg'
import prevArrow from '../assets/arrow-prev.svg'
import projectsData from '../data/projects'

const projects = projectsData.slice(1);

function Home({ onNavigate }){
    const [index, setIndex] = useState(0)

    const goLeft = () => setIndex(i => (i - 1 + projects.length) % projects.length)
    const goRight = () => setIndex(i => (i + 1) % projects.length)
    const goTo = (i) => setIndex(i)

    const handleClickCard = (project) => {
        if (onNavigate) onNavigate('project', project.id)
    }

    const project = projects[index]

    return(
        <div>
            <h1 style={{textAlign: 'center', color:'#6f5980'}}><img src={'/src/assets/star2.png'} alt="" style={{height:22, marginRight:8}}/> Welcome!</h1>

            <p className="homeSummary" style={{textAlign: 'center', color:'#6f5980', fontSize:'1.15rem', margin:'18px 0 8px 0'}}>
                I'm Calista LaPorte, a junior Computer Science student at Kutztown University. <br />
                I enjoy building systems, solving algorithmic challenges, and collaborating on software projects. <br />
                My experience spans Java, Python, and web development, with a passion for learning and sharing new ideas.
                <br />  <br />
            </p>

            <div className="carousel large">
                <button className="nav btn-left" onClick={goLeft} aria-label="Previous">
                    <img src={prevArrow} alt="previous" />
                </button>

                <div className="card largeCard" key={project.id}>
                    <div className="thumbWrap" role="button" tabIndex={0} onClick={() => handleClickCard(project)} onKeyDown={(e)=> e.key==='Enter' && handleClickCard(project)} aria-label={`Open ${project.title}`}>
                        <img className="thumb largeThumb" src={project.images[0] || project.thumb} alt={project.title} />
                    </div>

                    <div className="cardFooter" onClick={() => handleClickCard(project)} role="link" tabIndex={0} onKeyDown={(e)=> e.key==='Enter' && handleClickCard(project)}>
                        <div className="meta largeMeta">
                            <div className="title">{project.title}</div>
                            <div className="blurb">{project.blurb}</div>
                        </div>
                    </div>
                </div>

                <button className="nav btn-right" onClick={goRight} aria-label="Next">
                    <img src={nextArrow} alt="next" />
                </button>
            </div>

            <div className="dots">
                {projects.map((p, i) => (
                    <button key={p.id} className={`dot ${i===index? 'active':''}`} onClick={() => goTo(i)} aria-label={`Go to ${p.title}`}></button>
                ))}
            </div>
        </div>
    )
}

export default Home