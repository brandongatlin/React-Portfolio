import React from 'react';
import About_Me from '../../assets/About_Me.jpg';


function About() {
    return (
        <section>
            <div>
            <h2>About Me</h2>
            </div>
            <div id="background">
            <div id="about">
                <img id="About_Me" src={About_Me} alt="Me" />

                <p id="bio">Hello! I'm a full stack web developer based in Houston,TX. I have a diverse set of skills that include
                    html 5, CSS, JavaScript and Git with a background in Graphic Design. Developing websites is my passion.
                    I live and breath creativity and love to learn and grow in my field.
                </p>
            </div>
            </div>
        </section>

    );
}

export default About;