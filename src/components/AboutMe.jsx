import './SharedPageStyles.css';

function AboutMe(){
    return(
        <div className='PageContainer'>
            <header>
                <h1>About Me</h1>
            </header>

            <section className="intro PageSection" style={{marginBottom:24}}>
                <div style={{flex:1}}>
                    <h2 style={{marginTop:0}}>Short Bio</h2>
                    <p>
                        Hi — I'm Calista LaPorte, a junior Computer Science student at Kutztown University. I focus on algorithms and class software projects.
                    </p>
                    <p>
                        Most of my experience is from coursework and projects in C++ and Java — implementing data structures and creating small projects.
                    </p>
                </div>
            </section>

            <section className="programming PageSection" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:18, marginBottom:22, textAlign:'center', alignItems:'start'}}>
                <h3>Programming Languages</h3>

                <div>
                    <ul className="lang-list" style={{listStyle:'none', padding:0, margin:0}}>
                        <li className="lang-item"><span className="name">C++</span><span className="level">Proficient</span></li>
                        <li className="lang-item"><span className="name">Java</span><span className="level">Proficient</span></li>
                        <li className="lang-item"><span className="name">Python</span><span className="level">Comfortable</span></li>
                    </ul>
                </div>

                <div>
                    <ul className="lang-list" style={{listStyle:'none', padding:0, margin:0}}>
                        <li className="lang-item"><span className="name">SQL</span><span className="level">Familiar</span></li>
                        <li className="lang-item"><span className="name">JavaScript</span><span className="level">Familiar</span></li>
                        <li className="lang-item"><span className="name">HTML/CSS</span><span className="level">Familiar</span></li>
                    </ul>
                </div>
            </section>

            <section className="contact PageSection" style={{marginBottom:28}}>
                <h3>Contact</h3>
                <div className="contact-grid">
                    <div className="contact-item">
                        <div className="label">Email</div>
                        <div className="value"><a href="mailto:calilaporte8@gmail.com">calilaporte8@gmail.com</a></div>
                    </div>

                    <div className="contact-item">
                        <div className="label">LinkedIn</div>
                        <div className="value"><a href="http://www.linkedin.com/in/calista-laporte/" target="_blank" rel="noreferrer">linkedin.com/in/calista-laporte</a></div>
                    </div>

                    <div className="contact-item">
                        <div className="label">Resume</div>
                        <div className="value"><a href="/C.LaPorteResume.pdf" className="btn outline" aria-label="Download Resume" download>Download Resume</a></div>
                    </div>
                </div>
            </section>

            {/* developer notes kept here */}
        </div>
    )
};

export default AboutMe
