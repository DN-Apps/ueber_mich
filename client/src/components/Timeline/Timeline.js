import React from "react";
import { useTranslation } from "react-i18next";
import "./Timeline.css";

const Timeline = () => {
  const { t } = useTranslation();

  const positions = t("timeline.positions", { returnObjects: true });

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
