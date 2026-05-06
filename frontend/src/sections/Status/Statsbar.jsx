// StatsBar.jsx
import { useEffect, useRef, useState } from "react";
import styles from "./StatsBar.module.css";

const stats = [
  { value: 100, suffix: "%", label: "Placement Assistance", icon: "🎯" },
  { value: 2500, suffix: "+", label: "Students Yearly", icon: "🎓" },
  { value: 150, suffix: "+", label: "Expert Faculties", icon: "👨‍🏫" },
  { value: 25, suffix: "+", label: "Academic Coordinators", icon: "🏅" },
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
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
          {animate ? count.toLocaleString() : 0}
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
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.bar}>
        {stats.map((stat, i) => (
          <StatItem key={i} stat={stat} animate={animate} index={i} />
        ))}
      </div>
    </div>
  );
}