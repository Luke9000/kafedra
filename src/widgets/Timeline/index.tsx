import React, { useState } from 'react';
import './Timeline.css';

interface TimelineItem {
  year: string;
  text: string;
}

interface TimelineProps {
  data: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="timeline">
      <div className="timeline__content">
        <h2>{data[activeIndex].year}</h2>
        <p>{data[activeIndex].text}</p>
      </div>
      <div className="timeline__years">
        <ul>
          {data.map((item, index) => (
            <li
              key={index}
              className={activeIndex === index ? 'active' : ''}
              onClick={() => setActiveIndex(index)}
            >
              {item.year}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
