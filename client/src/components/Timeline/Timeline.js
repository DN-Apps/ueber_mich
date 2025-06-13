import React from "react";
import "./Timeline.css";

const Timeline = () => {
  const positions = [
    { year: "2015 - 2018", location: "Bad Friedrichshall, DE", title: "Ausbildung Informatikkaufmann", company: "Valmet Automotive Holding GmbH & Co. KG" },
    { year: "2018 - 2019", location: "Bad Friedrichshall, DE", title: "IT-Systemadministrator", company: "Valmet Automotive Holding GmbH & Co. KG" },
    { year: "2019 - 2021", location: "Neckarsulm, DE", title: "Mitarbeiter IT-Support", company: "Lidl Dienstleistung Dienstleistung GmbH & Co. KG" },
    { year: "2021 - heute", location: "Bad Wimpfen, DE", title: "Jr. Professional IT", company: "Lidl Dienstleistung Dienstleistung GmbH & Co. KG" },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline">
        {positions.map((pos, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-company">{pos.company}</div>
            <div className="timeline-location">{pos.location}</div>
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
