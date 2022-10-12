import React from 'react';
import About_Me from '../../assets/About_Me.jpg';


function About() {
    return (
        <section>
            <h2>Who am I?</h2>
            <div id="about">
                <img src={About_Me} className="my-2" style={{ width: "30%" }} alt="About-Image" />

                <p id="bio">Hello! I'm a full stack web developer based in Houston,TX. I have a diverse set of skills that include
                    html 5, CSS, JavaScript and Git with a background in Graphic Design. Developing websites is my passion.
                    I live and breath creativity and love to learn and grow in my field.
                </p>
            </div>
        </section>

    );
}

export default About;