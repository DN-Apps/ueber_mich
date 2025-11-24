import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Timeline.css";

const Timeline = () => {
  const { t, i18n } = useTranslation();

  /**
   * Holt die Einträge der Timeline aus der Übersetzungsdatei.
   * "returnObjects: true" → erlaubt Zugriff als Array.
   */
  const positions = t("timeline.positions", { returnObjects: true });

  // Referenzen auf DOM-Elemente, die zur Berechnung der Linie benötigt werden
  const timelineRef = useRef(null);
  const firstCircleRef = useRef(null);
  const lastCircleRef = useRef(null);

  // Hier speichern wir die berechneten Inline-Styles der horizontalen Linie
  const [lineStyle, setLineStyle] = useState(null);

  /**
   * Berechnet die exakte Position der horizontalen Linie:
   * - Linie soll exakt durch die Mitte der Kreise laufen
   * - Die Breite richtet sich nach dem ersten und letzten Kreis
   *
   * Wird ausgeführt:
   *   – beim ersten Rendern
   *   – wenn die Sprache wechselt (weil Texthöhen sich ändern)
   *   – beim Fenster-Resize
   */
  useEffect(() => {
    const updateLinePosition = () => {
      const timelineEl = timelineRef.current;
      const firstCircleEl = firstCircleRef.current;
      const lastCircleEl = lastCircleRef.current;

      // Wenn Elemente noch nicht existieren → abbrechen
      if (!timelineEl || !firstCircleEl || !lastCircleEl) return;

      const timelineRect = timelineEl.getBoundingClientRect();
      const firstRect = firstCircleEl.getBoundingClientRect();
      const lastRect = lastCircleEl.getBoundingClientRect();

      const lineHeight = 3;

      // Mittelpunkt des ersten Kreises
      const circleMidY = firstRect.top + firstRect.height / 2;

      // Position der Linie relativ zum Timeline-Container
      const top = circleMidY - timelineRect.top - lineHeight / 2;

      // Horizontale Start- und Endpunkte (von Kreis zu Kreis)
      const left =
        firstRect.left + firstRect.width / 2 - timelineRect.left;

      const right =
        timelineRect.right - (lastRect.left + lastRect.width / 2);

      // Inline-Styles setzen → Timeline-Line positioniert sich exakt
      setLineStyle({ top, left, right, height: lineHeight });
    };

    updateLinePosition(); // Initiale Berechnung

    window.addEventListener("resize", updateLinePosition); // Neu berechnen bei Fenster-Resize
    return () => window.removeEventListener("resize", updateLinePosition);
  }, [i18n.language]); // Fix: Re-Render bei Sprachwechsel

  return (
    <div className="timeline-container">
      <div className="timeline" ref={timelineRef}>

        {/* Horizontale Linie – nur sichtbar auf Desktop */}
        {lineStyle && <div className="timeline-line" style={lineStyle} />}

        {positions.map((pos, index) => (
          <div key={index} className="timeline-item">

            {/* Fix: Gleich hohe Header verhindern Verschiebung der Kreise */}
            <div className="timeline-header">
              <div className="timeline-company">{pos.company}</div>
              <div className="timeline-location">{pos.location}</div>
            </div>

            {/* Kreis – erhält ref, wenn erster oder letzter */}
            <div
              className="timeline-circle"
              ref={
                index === 0
                  ? firstCircleRef
                  : index === positions.length - 1
                    ? lastCircleRef
                    : null
              }
            />

            {/* Untere Infos: Jahr + Jobtitel */}
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
