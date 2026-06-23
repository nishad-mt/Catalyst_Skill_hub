import React, { useEffect, useState } from 'react';
import styles from './SuccessStoriesPage.module.css';
import { testimonials, alumni } from '../../data/siteData';

const SuccessStoriesPage = () => {

    const [paused, setPaused] = useState(false);
    const [playingVideoIndex, setPlayingVideoIndex] = useState(null);
    const [lightboxVideo, setLightboxVideo] = useState(null);

    useEffect(() => {
        window.scrollTo(0,0);
        
        let timeoutId;

        // Strict observer to pause videos if they scroll out of view (vertically or horizontally)
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    const vid = entry.target;
                    if (!vid.paused) {
                        vid.pause();
                        vid.muted = true;
                        setPlayingVideoIndex(null);
                    }
                }
            });
        }, { threshold: 0.1 });

        const allVideos = document.querySelectorAll(`.${styles.video}`);
        allVideos.forEach(vid => videoObserver.observe(vid));
        
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
            allVideos.forEach(vid => videoObserver.unobserve(vid));
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

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                const allVideos = document.querySelectorAll(`.${styles.video}`);
                allVideos.forEach(vid => {
                    vid.pause();
                    vid.muted = true;
                });
                setPlayingVideoIndex(null);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
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

                    <div className={styles.imageCard} onClick={() => setLightboxVideo('Z5uczTHbM3c')}>
                        <img
                            src="https://img.youtube.com/vi/Z5uczTHbM3c/maxresdefault.jpg"
                            alt="Success Story 1"
                        />
                    </div>

                    <div className={styles.imageCard} onClick={() => setLightboxVideo('psAizMpIIhs')}>
                        <img
                            src="https://img.youtube.com/vi/psAizMpIIhs/maxresdefault.jpg"
                            alt="Success Story 2"
                        />
                    </div>

                    <div className={styles.imageCard} onClick={() => setLightboxVideo('1FIM_oFl56Y')}>
                        <img
                            src="https://img.youtube.com/vi/1FIM_oFl56Y/maxresdefault.jpg"
                            alt="Success Story 3"
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
                                            <div className={styles.videoTextOverlay}>
                                                <p className={styles.videoName}>{item.name}</p>
                                                <p className={styles.videoRole}>{item.role}</p>
                                            </div>
                                        </div>
                                        ) : (

                                            <>
                                                <p className={styles.text}>
                                                    "{item.text}"
                                                </p>
                                                <div className={styles.authorInfo}>
                                                    <h4 className={styles.name}>
                                                        {item.name}
                                                    </h4>
                                                    <p className={styles.role}>
                                                        {item.role}
                                                    </p>
                                                </div>
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

            {/* Full Screen YouTube Lightbox */}
            {lightboxVideo && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.85)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 99999,
                        backdropFilter: 'blur(8px)',
                        cursor: 'zoom-out'
                    }}
                    onClick={() => setLightboxVideo(null)}
                >
                    <button
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: 'rgba(255, 255, 255, 0.2)',
                            border: 'none',
                            color: 'white',
                            fontSize: '2rem',
                            width: '45px',
                            height: '45px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            zIndex: 100000
                        }}
                        onClick={() => setLightboxVideo(null)}
                    >
                        ×
                    </button>
                    <div 
                        style={{ width: '90%', maxWidth: '1000px', aspectRatio: '16/9', position: 'relative' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${lightboxVideo}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                        ></iframe>
                    </div>
                </div>
            )}
        </div>

    );

};

export default SuccessStoriesPage;