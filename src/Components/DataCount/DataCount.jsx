import React, { useEffect } from "react";
import "./dataCount.css";

const DataCount = () => {
  // Function to animate the counter
  const animateCounter = (element) => {
    const target = +element.getAttribute("data-target");
    const speed = 200;
    const increment = Math.ceil(target / speed);

    let count = 0;

    const updateCount = () => {
      if (count < target) {
        count += increment;
        element.textContent = count;
        setTimeout(updateCount, 10);
      } else {
        element.textContent = target;
      }
    };

    updateCount();
  };

  useEffect(() => {
    const statNumbers = document.querySelectorAll(".stat-number");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            statNumbers.forEach((statNumber) => animateCounter(statNumber));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 } // This is now correctly formatted
    );

    const statsSection = document.querySelector(".stats-section");
    if (statsSection) observer.observe(statsSection);
  }, []);

  return (
    <section className="stats-section">
      <div className="stat-item">
        <h2 className="stat-number" data-target="150">0</h2>
        <p>Projects Completed</p>
      </div>
      <div className="stat-item">
        <h2 className="stat-number" data-target="78">0</h2>
        <p>Satisfied Clients</p>
      </div>
      <div className="stat-item">
        <h2 className="stat-number" data-target="20">0</h2>
        <p>Expert Teams</p>
      </div>
      <div className="stat-item">
        <h2 className="stat-number" data-target="20">0</h2>
        <p>Expert Teams</p>
      </div>
    </section>
  );
};

export default DataCount;