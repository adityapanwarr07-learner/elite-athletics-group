import './Courses.css'

function Courses() {
  const courses = [
    {
      id: 1,
      title: "Running & Sprint Training",
      distance: "100m • 200m • 400m • 800m • 1600m",
      fees : "₹1,000 / Month",
      description:
        "Speed, stamina aur running technique improve karo. Beginners se lekar competition ki preparation karne wale students ke liye.",
      image: "/running.jpg",
    },
    {
      id: 2,
      title: "Jumping & Field Events",
      distance: "Long Jump • High Jump • Javelin Throw",
      fees : "₹1,000 / Month",
      description:
        "Jumping aur throwing events ki technique, strength aur performance par focused training.",
      image: "/jumping.jpeg",
    },
    {
      id: 3,
      title: "Fitness & Physical Training",
      distance: "Strength • Stamina • Flexibility",
      fees: "₹2,000 / Month",
      description:
        "Daily exercise, warm-up, endurance aur physical fitness ke saath apni performance ko next level par le jao.",
      image: "/fitness-health.jpeg",
    },
    {
  id: 4,
  title: "Long Jump Training",
  distance: "Speed • Power • Technique",
  fees: "₹1,000 / Month",
  description:
    "Speed, take-off technique aur landing practice ke saath apni long jump performance ko improve karo.",
  image:
    "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=80",
},
{
  id: 5,
  title: "Javelin Throw Training",
  distance: "Strength • Technique • Power",
  fees: "₹1,500 / Month",
  description:
    "Proper throwing technique, strength aur body coordination ke saath javelin throw mein apni performance improve karo.",
  image:
    "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80",
},
  ];

  return (
    <section className="courses-section" id="courses">
      <div className="courses-heading">
        <span className="courses-subtitle">OUR TRAINING PROGRAMS</span>

        <h2>
          Choose Your <span>Training</span>
        </h2>

        <p>
          Apni fitness aur sports goals ke according training program choose
          karo aur aaj se apni preparation shuru karo.
        </p>
      </div>

      <div className="courses-container">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <div className="course-image">
              <img src={course.image} alt={course.title} />
            </div>

            <div className="course-content">
              <h3>{course.title}</h3>

              <p className="course-distance">{course.distance}</p>

              

              <p className="course-description">{course.description}</p>

              <div className="course-actions">
              <a href="#contact" className="course-btn">
               {course.fees}<span>→</span>
               </a>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;