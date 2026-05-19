// StatsBar.jsx
import { useEffect, useRef, useState } from "react";
import styles from "./Statsbar.module.css";

const stats = [
  { value: 100, suffix: "%", label: "Placement Assistance", icon: "" },
  { value: 2500, suffix: "+", label: "Students Yearly", icon: "" },
  { value: 150, suffix: "+", label: "Expert Faculties", icon: "" },
  { value: 25, suffix: "+", label: "Academic Coordinators", icon: "" },
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }
    let startTime = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [start, target, duration]);

  return count;
}

function StatItem({ stat, animate, index }) {
  const count = useCountUp(stat.value, 1600 + index * 100, animate);

  return (
    <div className={styles.statItem} style={{ "--i": index }}>
      <div className={styles.iconWrap}>
        <span className={styles.icon}>{stat.icon}</span>
      </div>
      <div className={styles.statContent}>
        <span className={styles.number}>
          {count.toLocaleString()}
          <span className={styles.suffix}>{stat.suffix}</span>
        </span>
        <span className={styles.label}>{stat.label}</span>
      </div>
    </div>
  );
}

export default function StatsBar() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger when entering from below or resetting when far away
        if (entry.isIntersecting) {
          setAnimate(true);
        } else if (entry.boundingClientRect.top > 0) {
          // Reset when scrolled back up above the section
          setAnimate(false);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.wrapper} ref={ref}>
      <div className={`container ${styles.noPadding}`}>
        <div className={styles.bar}>
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} animate={animate} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}