import './SharedPageStyles.css';

function Education() {
    return (
        <div className="PageContainer">
            <header>
                <h1>Education</h1>
            </header>

            <section className="education PageSection" style={{ display: 'flex', gap: 20, alignItems: 'flex-start', marginBottom: 24 }}>
                <div style={{ flex: 1 }}>
                    <p>
                        <strong>B.S. Computer Science (in progress)</strong><br />
                        Kutztown University, Junior
                    </p>
                    <div style={{ marginTop: 8, color: '#533a5a', fontWeight: 500 }}>
                        GPA: <span style={{ color: '#6f5980' }}>3.95</span>
                    </div>
                </div>
            </section>

            <section className="coursework PageSection" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 22, textAlign: 'center', alignItems: 'start' }}>
                <h3 style={{ gridColumn: '1 / -1' }}>Related Coursework</h3>
                <div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li>Java Programming</li>
                        <li>Server Side Web Development</li>
                    </ul>
                </div>
                <div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li>SQL Programming</li>
                        <li>Data Structures</li>
                    </ul>
                </div>
            </section>

            <section className="clubs-honors PageSection">
                <h3>Clubs & Honors</h3>
                <div className="clubs-honors-grid">
                    <div className="club-honor-card">
                        Dean's List Fall 2024, Spring 2025
                    </div>
                    <div className="club-honor-card">
                        Kutztown Tech Association
                    </div>
                    <div className="club-honor-card">
                        Women in STEM
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education