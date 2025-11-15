import "./About.css";

const About = () => {
  return (
    <section id="about" className="aboutSection">
      <h4 className="aboutIntro">MY INTRODUCTION</h4>
      <h2 className="aboutTitle">About Me</h2>

      <p className="aboutDescription">
        I'm <strong>Sudeep Sahas</strong>, a passionate Web Developer from India.
        I enjoy building modern, responsive, and user-friendly websites. Skilled
        in <strong>HTML, CSS, JavaScript, and React</strong>, I have hands-on
        experience creating personal projects and learning real-world
        development patterns.
      </p>

      <p className="aboutDescription">
        I love clean UI, smooth user experiences, and writing code that brings
        ideas to life. I’m focused on becoming a strong developer and improving
        my skills every day.
      </p>

      <blockquote className="aboutQuote">
        “Clean design and clear code create meaningful digital experiences.”
      </blockquote>

      <div className="aboutDetails">
        <p><strong>Name:</strong> Sudeep Sahas</p>
        <p><strong>Date of birth:</strong> 27-February-2003</p>
        <p><strong>Address:</strong> Vijayawada, Andhra Pradesh, India</p>
        <p><strong>Email:</strong> sudeepsahas004@example.com</p>
        <p><strong>Phone:</strong> +91 9494055409</p>
      </div>

      <div className="aboutInterests">
        <span>🎵 Music</span>
        <span>✈️ Travel</span>
        <span>🎬 Movies</span>
        <span>⚽ Sports</span>
      </div>
    </section>
  );
};

export default About;
