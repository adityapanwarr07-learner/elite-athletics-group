import { useState } from "react"; 
import "./Students.css";

const students = [
 {
  id: 1,
  name: "Rahul Kumar",
  event: "100m Sprinter",
  achievement: "District Level Gold Medal",
  medal: "🏆",
  image:
    "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80",
},

{
  id: 2,
  name: "Neha Sharma",
  event: "1600m Runner",
  achievement: "State Level Participant",
  medal: "⭐",
  image:
    "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
},

{
  id: 3,
  name: "Vikas Kumar",
  event: "Long Jumper",
  achievement: "District Level Silver Medal",
  medal: "🥈",
  image:
    "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?auto=format&fit=crop&w=800&q=80",
},

{
  id: 4,
  name: "Ankit Singh",
  event: "Javelin Thrower",
  achievement: "State Level Competition",
  medal: "🎖️",
  image:
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
},

{
  id: 5,
  name: "Aman Kumar",
  event: "500m Runner",
  achievement: "District Level Finalist",
  medal: "🏅",
  image:
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
},
];

function Students() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % students.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + students.length) % students.length);
  };

  return (
    <section className="students-section" id="students">

      <div className="students-heading">
        <span>ACHIEVEMNETS</span>

        <h2>
          Meet Our<strong>Students</strong>
        </h2>

        <p>
         Training today. Improving every day. Building athletes for tomorrow.
        </p>
      </div>

      <div className="students-slider">

        <button
          className="student-arrow student-prev"
          onClick={prevSlide}
          aria-label="Previous student"
        >
          ←
        </button>

        <div className="students-track">

          {students.map((student, index) => {
            const position =
              (index - current + students.length) % students.length;

            return (
              <div
                className={`student-card ${
                  position === 0 ? "active" : ""
                }`}
                key={student.id}
              >

                <div className="student-image">
                  <img
                    src={student.image}
                    alt={student.name}
                  />
                </div>

                <div className="student-event">
                  🏃 {student.event}
                </div>

                <h3>{student.name}</h3>

                <p className="student-achievement">
                  {student.medal} {student.achievement}
                </p>

              </div>
            );
          })}

        </div>

        <button
          className="student-arrow student-next"
          onClick={nextSlide}
          aria-label="Next student"
        >
          →
        </button>

      </div>

      <div className="student-dots">

        {students.map((student, index) => (
          <button
            key={student.id}
            className={index === current ? "active-dot" : ""}
            onClick={() => setCurrent(index)}
            aria-label={`Go to ${student.name}`}
          />
        ))}

      </div>

    </section>
  );
}

export default Students;
