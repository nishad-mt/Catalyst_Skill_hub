import React, { useEffect, useState } from 'react';
import styles from './SuccessStoriesPage.module.css';
import { testimonials } from '../../data/siteData';

const SuccessStoriesPage = () => {

    const [paused, setPaused] = useState(false);
    const [playingVideoIndex, setPlayingVideoIndex] = useState(null);

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    const handleOpenModal = () => {
        window.dispatchEvent(
            new CustomEvent('openModal',{
                detail:{ type:'callback' }
            })
        );
    };

    return (

        <div className={styles.page}>

            {/* HERO SECTION */}

            <section className={styles.hero}>
                <div className="container">

                {/* Hero Content */}

                <div className={`${styles.heroContent} reveal`}>

                    <h1 className={styles.heroTitle}>
                        Begin your Tech Journey with the
                        <span className={styles.gradientText}>
                            best in the field
                        </span>
                    </h1>

                    <p className={styles.heroDesc}>
                        Discover how Catalyst Tech Hub has transformed careers
                        and helped our students land their dream jobs at top
                        tech companies worldwide.
                    </p>

                </div>

                {/* Images */}

                <div className={styles.imageSection}>

                    <div className={styles.imageCard}>
                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                            alt="Tech Team"
                        />
                    </div>

                    <div className={styles.imageCard}>
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                            alt="Students"
                        />
                    </div>

                    <div className={styles.imageCard}>
                        <img
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                            alt="Developers"
                        />
                    </div>

                </div>

                {/* CAREER / TESTIMONIAL SECTION */}

                <div className={styles.careerSection}>

                    <h1 className={styles.heroTitle}>
                        Explore our Alumni's 
                        <span className={styles.gradientText}>
                            Experience
                        </span>
                    </h1>

                    <div className={styles.sliderWrapper}>

                        <button
                            className={styles.playBtn}
                            onClick={() => setPaused(!paused)}
                        >
                            {paused ? '▶ Play' : '⏸ Pause'}
                        </button>

                        <div
                            className={styles.slider}
                            onMouseEnter={() => setPaused(true)}
                            onMouseLeave={() => setPaused(false)}
                        >

                            <div
                                className={`
                                    ${styles.track}
                                    ${paused ? styles.paused : ''}
                                `}
                            >

                                {[...testimonials, ...testimonials].map((item,index) => (

                                    <div
                                        className={`${styles.card} ${item.video ? styles.videoCard : ''}`}
                                        key={index}>
                                          
                                        {item.video ? (
                                        <div className={styles.videoWrapper}>
                                            <video
                                                src={item.video}
                                                loop
                                                muted
                                                playsInline
                                                className={styles.video}

                                                onClick={(e)=>{
                                                    const video = e.currentTarget;
                                                    
                                                    // Pause all other videos
                                                    const allVideos = document.querySelectorAll(`.${styles.video}`);
                                                    allVideos.forEach((vid) => {
                                                        if (vid !== video) {
                                                            vid.pause();
                                                            vid.muted = true;
                                                        }
                                                    });

                                                    if (video.paused) {
                                                        video.muted = false;
                                                        video.volume = 1;
                                                        video.play();
                                                        setPlayingVideoIndex(index);
                                                    } else {
                                                        if (video.muted) {
                                                            video.muted = false;
                                                            video.volume = 1;
                                                            setPlayingVideoIndex(index);
                                                        } else {
                                                            video.pause();
                                                            setPlayingVideoIndex(null);
                                                        }
                                                    }
                                                }}

                                                onMouseEnter={(e)=>{
                                                    // Only trigger hover effects if it's not a touch device
                                                    if(window.matchMedia("(hover: hover)").matches) {
                                                        const video = e.currentTarget;
                                                        video.muted = false;
                                                        video.volume = 1;
                                                        video.play();
                                                        setPlayingVideoIndex(index);
                                                    }
                                                }}

                                                onMouseLeave={(e)=>{
                                                    if(window.matchMedia("(hover: hover)").matches) {
                                                        const video = e.currentTarget;
                                                        video.muted = true;
                                                        setPlayingVideoIndex(null);
                                                    }
                                                }}
                                            />
                                            <div className={styles.playPauseOverlay} onClick={(e) => e.currentTarget.previousSibling.click()}>
                                                {playingVideoIndex === index ? (
                                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="6" y="4" width="4" height="16" />
                                                        <rect x="14" y="4" width="4" height="16" />
                                                    </svg>
                                                ) : (
                                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                                        <polygon points="5 3 19 12 5 21 5 3" />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                        ) : (

                                            <>
                                                <p className={styles.role}>
                                                    {item.role}
                                                </p>
                                                <p className={styles.text}>
                                                    {item.text}</p>
                                                <h4 className={styles.name}>
                                                    {item.name}
                                                </h4>
                                            </>

                                        )}

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

                </div>
            </section>

            {/* CTA SECTION */}

            <section className={styles.ctaSection}>

                <div className="container">

                    <div className={`${styles.ctaBox} reveal`}>

                        <div className={styles.ctaGlow}></div>

                        <div className={styles.ctaContent}>

                            <h2>
                                Ready to author your own success?
                            </h2>

                            <p>
                                Join our upcoming cohort and get the
                                cutting-edge skills, elite mentorship,
                                and premium placement support to launch
                                your tech career.
                            </p>

                            <button
                                className={styles.ctaBtn}
                                onClick={handleOpenModal}
                            >

                                Start Your Journey

                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line
                                        x1="5"
                                        y1="12"
                                        x2="19"
                                        y2="12"
                                    />

                                    <polyline
                                        points="12 5 19 12 19 19"
                                    />
                                </svg>

                            </button>

                        </div>

                    </div>

                </div>

            </section>

        </div>

    );
};

export default SuccessStoriesPage;