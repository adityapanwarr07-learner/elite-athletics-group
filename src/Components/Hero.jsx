
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Left Side Content */}
      <div className="hero-content">
        <span className="hero-tag">
          ELITE ATHLETICS GROUP
        </span>

        <h1>
          READY TO BECOME.
          <br />
          <span>Your Best Athlete?</span>
        </h1>

        <p>
        Join our academy in Saharanpur and start your journey towards becoming a better athlete
        </p>

        <div className="hero-buttons">
          <a href="#courses" className="hero-btn">
            Explore Courses ↗
          </a>

          <a href="#contact" className="hero-btn secondary-btn">
            Get a Callback
          </a>
        </div>

        
      </div>

      {/* Right Side Image */}
      <div className="hero-image">
        <img
          src="/main.jpeg"
          
        />
      </div>
    </section>
  );
}

export default Hero;