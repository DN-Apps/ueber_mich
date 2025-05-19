import React from "react";
import "./Timeline.css";

const Timeline = () => {
  const positions = [
    { year: "2015 - 2018", title: "Ausbildung Informatikkaufmann", company: "Valmet Automotive" },
    { year: "2018 - 2019", title: "IT-Systemadministrator", company: "Valmet Automotive" },
    { year: "2019 - 2021", title: "Mitarbeiter IT-Support", company: "Lidl Dienstleistung" },
    { year: "2021 - heute", title: "Jr. Professional IT", company: "Lidl Dienstleistung" },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline">
        {positions.map((pos, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-company">{pos.company}</div>
            <div className="timeline-circle"></div>
            <div className="timeline-content">
              <div className="timeline-year">{pos.year}</div>
              <div className="timeline-title">{pos.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
