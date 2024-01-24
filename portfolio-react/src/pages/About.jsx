function About() {
    return(
        <about>
            <h1>About Me:</h1>
            <section>
            <p>My name is Ray Thomas and I am a 24 year old web-developer from Phoenix, AZ. I graduated from Grand Canyon University in 2021 with a bachelor's degree in 
                Advertising and Graphic Design. I then went on to complete the Full-Stack Web Developer Bootcamp with Arizona State University in Febrauary 2024. I love 
                being able to use multiple coding languages as well as my graphic design background to solve problems. Having knowledge of both design and development, I have
                 a wide variety of skills that are useful to developing web applications and websites.</p>
            </section>
            <section className="h2"> Education:
                <ul className="list-unstyled">
                    <li className="h3">Full-Stack Web Development Bootcamp</li>
                    <li className="h6">08/2023 - Present</li>
                    <li className="h6">Developed full-stack applications using a variety of different methodologies and development tools</li>
                </ul>
            </section>
            <section>
                <ul className="list-unstyled">
                    <li className="h3">Bachelor's of Fine Art in Advertising and Graphic Design</li>
                    <li className="h6">08/2017 - 04/2021</li>
                    <li className="h6">Created advertising packages using multiple design mediums as well as learned user interface and user experience.</li>
                </ul>
            </section>
        </about>
    )
}

export default About;