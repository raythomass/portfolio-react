function Projects() {
    return(
        <projects>
            <h1>Projects</h1>
            <div id="cards">
                <section className="img-container col-4">
                    
                        <img src="../src/images/football-database.jpg"></img>
                        <a href="https://raythomass.github.io/project-one-team4/">
                    <section className="overlay">
                        <p className="img-text">Football Database</p>
                    </section>
                    </a>
                </section>

                <section className="img-container col-4">
                        <img src="../src/images/password-generator.jpg"></img>
                        <a href="https://raythomass.github.io/password-generator/">
                    <section className="overlay">
                        <p className="img-text">Password Generator</p>
                    </section>
                    </a>
                </section>

                <section className="img-container col-4">
                        <img src="../src/images/coding-quiz.jpg"></img>
                        <a href="https://raythomass.github.io/coding-quiz/">
                    <section className="overlay">
                        <p className="img-text">Coding Terms Quiz</p>
                    </section>
                    </a>
                </section>
            </div>

            <div id="cards">
                <section className="img-container col-4">
                    
                    <img src="../src/images/work-scheduler.jpg"></img>
                    <a href="https://raythomass.github.io/daily-planner/">
                    <section className="overlay">
                        <p className="img-text">Work Scheduler</p>
                    </section>
                    </a>
                </section>

                <section className="img-container col-4">
                    <img src="../src/images/weather-forecast.jpg"></img>
                    <a href="https://raythomass.github.io/weather-forecast/">
                    <section className="overlay">
                        <p className="img-text">Weather Forecast</p>
                    </section>
                    </a>
                </section>

                <section className="img-container col-4">
                    <img src="../src/images/text-editor.jpg"></img>
                    <a href="https://text-editor-pwa-u1j4.onrender.com/">
                    <section className="overlay">
                        <p className="img-text">Text Editor PWA</p>
                    </section>
                    </a>
                </section>
            </div>
            
        </projects>
    )
}

export default Projects;