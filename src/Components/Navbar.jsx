
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>ELITE</h2>
        <span>ATHELETICS GROUP</span>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#courses">Courses</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact</a>
      </div>

       
        <a href="#contact" className="join-btn">
  Join Us ↗
         </a> 
    </nav>
  );
}

export default Navbar;