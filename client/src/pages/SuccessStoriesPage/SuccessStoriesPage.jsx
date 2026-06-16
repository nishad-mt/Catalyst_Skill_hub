import React, { useEffect, useState } from 'react';
import styles from './SuccessStoriesPage.module.css';
import { testimonials, alumni } from '../../data/siteData';

const SuccessStoriesPage = () => {

    const [paused, setPaused] = useState(false);
    const [playingVideoIndex, setPlayingVideoIndex] = useState(null);

    useEffect(() => {
        window.scrollTo(0,0);
        
        const firstVidIndex = [...testimonials, ...testimonials].findIndex(t => t.video);
        let timeoutId;
        
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                timeoutId = setTimeout(() => {
                    const allVideos = document.querySelectorAll(`.${styles.video}`);
                    const isAnyPlaying = Array.from(allVideos).some(vid => !vid.paused);
                    
                    if (!isAnyPlaying) {
                        const firstVideo = allVideos[0];
                        if (firstVideo) {
                            firstVideo.muted = false;
                            firstVideo.volume = 1;
                            firstVideo.play().then(() => {
                                setPlayingVideoIndex(firstVidIndex);
                            }).catch(e => {
                                console.log("Unmuted autoplay blocked, trying muted", e);
                                firstVideo.muted = true;
                                firstVideo.play().then(() => {
                                    setPlayingVideoIndex(firstVidIndex);
                                }).catch(e2 => console.log("Autoplay entirely blocked", e2));
                            });
                        }
                    }
                }, 1800);
            } else {
                if (timeoutId) clearTimeout(timeoutId);
                const allVideos = document.querySelectorAll(`.${styles.video}`);
                allVideos.forEach(vid => {
                    vid.pause();
                    vid.muted = true;
                });
                setPlayingVideoIndex(null);
            }
        }, { threshold: 0.1 });
        
        const section = document.querySelector(`.${styles.careerSection}`);
        if (section) observer.observe(section);
        
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
            if (section) observer.unobserve(section);
        };
    }, []);

    const sliderRef = React.useRef(null);

    useEffect(() => {
        let animationId;
        const scrollStep = () => {
            if (sliderRef.current && !paused && playingVideoIndex === null) {
                sliderRef.current.scrollLeft += 1;
                if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth / 2) {
                    sliderRef.current.scrollLeft -= sliderRef.current.scrollWidth / 2;
                }
            }
            animationId = requestAnimationFrame(scrollStep);
        };
        animationId = requestAnimationFrame(scrollStep);
        return () => cancelAnimationFrame(animationId);
    }, [paused, playingVideoIndex]);

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

                        {/* <button
                            className={styles.playBtn}
                            onClick={() => setPaused(!paused)}
                        >
                            {paused ? '▶ Play' : '⏸ Pause'}
                        </button> */}

                        <div
                            className={styles.slider}
                            ref={sliderRef}
                            onMouseEnter={() => setPaused(true)}
                            onMouseLeave={() => setPaused(false)}
                            onTouchStart={() => setPaused(true)}
                            onTouchEnd={() => setPaused(false)}
                        >

                            <div
                                className={styles.track}
                            >

                                {[...testimonials, ...testimonials].map((item,index) => (

                                    <div
                                        className={`${styles.card} ${item.video ? styles.videoCard : ''}`}
                                        key={index}>
                                          
                                        {item.video ? (
                                        <div className={`${styles.videoWrapper} ${playingVideoIndex === index ? styles.isPlaying : styles.isPaused}`}>
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

            {/* PLACEMENTS SECTION */}
            <section className={styles.placementsSection}>
                <div className="container">
                    <h2 className={styles.placementsTitle}>Our Recent Placements</h2>
                    <p className={styles.placementsDesc}>
                        Meet our alumni who have successfully transitioned into high-growth tech careers at top-tier companies globally.
                    </p>
                    <div className={styles.placementsGrid}>
                        {alumni.map((person) => (
                            <div key={person.id} className={styles.placementCard}>
                                <div className={styles.placementImageWrap}>
                                    <img src={person.img} alt={person.name} className={styles.placementImg} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}

            <section className={styles.ctaSection}>

                <div className="container">

                    <div className={styles.ctaGrid}>

                        <div className={styles.ctaCardPrimary}>
                            <h2 className={styles.ctaTitlePrimary}>
                                Interested in a Tech Career For your Future ? We Can help
                            </h2>
                            <p className={styles.ctaDescPrimary}>
                                The mentors were incredibly supportive and always ready to help. I especially loved the hands-on projects they
                            </p>
                            <button className={styles.ctaBtnPrimary} onClick={handleOpenModal}>
                                Get Career Counselling
                            </button>
                        </div>

                        <div className={styles.ctaCardSecondary}>
                            <h2 className={styles.ctaTitleSecondary}>
                                Interested in a Tech Career For your Future ?
                            </h2>
                            <p className={styles.ctaDescSecondary}>
                                The mentors were incredibly supportive and always ready to help. I especially loved the hands-on projects they
                            </p>
                            <button className={styles.ctaBtnSecondary} onClick={() => {
                                window.history.pushState({}, '', '/courses');
                                window.dispatchEvent(new PopStateEvent('popstate'));
                                }}>
                                View All Courses
                            </button>
                        </div>

                    </div>

                </div>

            </section>

        </div>

    );
};

export default SuccessStoriesPage;