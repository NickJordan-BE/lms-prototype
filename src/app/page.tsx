'use client';

import Image from 'next/image'
import VideoPlayer from './components/VideoPlayer'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import React, { useRef, useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const page = () => {
  const [showCards, setShowCards] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      title: 'Sarah M.',
      description: '"Absolutely transformative experience! The team was professional and the results exceeded my expectations."',
      image: '/images/lady1.png'
    },
    {
      title: 'Michael K.',
      description: '"Outstanding service and attention to detail. I couldn\'t be happier with the outcome."',
      image: '/images/guy.png'
    },
    {
      title: 'Jessica L.',
      description: '"Professional, caring, and incredibly skilled. The entire process was seamless."',
      image: '/images/lady2.png'
    },
    {
      title: 'Amanda R.',
      description: '"Exceptional quality and service. The results speak for themselves!"',
      image: '/images/lady3.png'
    }
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrev = () => setSlideIndex(idx => (idx === 0 ? slides.length - 1 : idx - 1));
  const handleNext = () => setSlideIndex(idx => (idx === slides.length - 1 ? 0 : idx + 1));

  useEffect(() => {
    if (!scrollRef.current) return;
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
    });

    setTimeout(() => {
      scroll.update();
    }, 1000);

    return () => {
      scroll.destroy();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(idx => (idx === slides.length - 1 ? 0 : idx + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div data-scroll-container ref={scrollRef} style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
      {/* Hero Section */}
      <section style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '4rem', 
        justifyContent: 'space-between', 
        padding: '4rem 2rem',
        minHeight: '80vh',
        background: 'linear-gradient(135deg, #f8f6f3 0%, #E1DCD5 100%)'
      }}>
        <div style={{ 
          width: '100%', 
          maxWidth: '450px', 
          height: 'auto'
        }}>
          <Image 
            src="/images/logo.png" 
            alt="Logo" 
            width={500} 
            height={120} 
            style={{ 
              width: '100%', 
              height: 'auto',
              marginBottom: '2rem'
            }} 
            className='logo'
          />
          <h1 
            data-scroll 
            data-scroll-speed="2" 
            style={{
              fontSize: '3.5rem',
              fontWeight: '300',
              margin: '0',
              color: '#775D47',
              letterSpacing: '2px'
            }}
            className='title'
          >
            Illuminance
          </h1>
          <h2 
            data-scroll 
            data-scroll-speed="2" 
            style={{
              fontSize: '2.5rem',
              fontWeight: '400',
              margin: '0.5rem 0 0 0',
              color: '#8B7355',
              letterSpacing: '1px'
            }}
            className='subtitle'
          >
            Esthetics
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            marginTop: '1.5rem',
            lineHeight: '1.6'
          }}>
            Transforming beauty through expert care and innovative treatments
          </p>
        </div>
        <div style={{ 
          position: 'relative', 
          width: '45%', 
          minWidth: '500px', 
          height: '300px',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(119, 93, 71, 0.2)'
        }}>
          <VideoPlayer videoId='R3v_u-vUbsU'/>
        </div>
      </section>

      {/* What We Do Section */}
      <section style={{ 
        padding: '5rem 2rem', 
        backgroundColor: '#E1DCD5',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '300',
          color: '#775D47',
          marginBottom: '2rem',
          letterSpacing: '1px'
        }}>
          What We Do
        </h2>
        <p style={{ 
          fontSize: '1.2rem',
          lineHeight: '1.8',
          color: '#666',
          maxWidth: '800px',
          margin: '0 auto',
          fontWeight: '300'
        }}>
          We provide comprehensive esthetic services designed to enhance your natural beauty. 
          Our expert team combines cutting-edge techniques with personalized care to deliver 
          exceptional results that boost your confidence and well-being.
        </p>
      </section>

      {/* Services Cards Section */}
      <section style={{ 
        padding: '5rem 2rem', 
        backgroundColor: '#E1DCD5'
      }}>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '2rem', 
          justifyContent: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { title: 'Facial Treatments', speed: "1", delay: 0 },
            { title: 'Skin Rejuvenation', speed: "2", delay: 200 },
            { title: 'Advanced Therapies', speed: "3", delay: 400 }
          ].map((service, index) => (
            <Card 
              key={index}
              data-scroll 
              data-scroll-speed={service.speed}
              sx={{ 
                width: '350px',
                backgroundColor: '#775D47',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(119, 93, 71, 0.3)'
                }
              }}
            >
              <CardActionArea>
                <CardMedia 
                  component="img" 
                  height="200" 
                  image="/images/tree.png" 
                  alt="service"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ padding: '2rem' }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="div" 
                    sx={{ 
                      color: '#fff',
                      fontWeight: '300',
                      fontSize: '1.5rem',
                      marginBottom: '1rem'
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'rgba(255,255,255,0.9)',
                      lineHeight: '1.6',
                      fontSize: '1rem'
                    }}
                  >
                    Professional treatments using the latest technology and techniques to help you 
                    achieve your aesthetic goals with natural, long-lasting results.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ padding: '0 2rem 2rem 2rem' }}>
                <Button 
                  size="large" 
                  sx={{
                    color: '#fff',
                    borderColor: '#fff',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '25px',
                    padding: '8px 24px',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderColor: '#fff'
                    }
                  }}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </section>

      {/* Values & Culture Section */}
      <section style={{ paddingTop: '5rem', paddingBottom: '2rem' }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '300',
          color: '#775D47',
          textAlign: 'center',
          marginBottom: '3rem',
          letterSpacing: '1px'
        }}>
          Our Values & Culture
        </h2>
        
        {/* Growth */}
        <div style={{ 
          backgroundColor: '#D2BDAC', 
          padding: '4rem 2rem',
          display: 'flex',
          justifyContent: 'flex-start'
        }}>
          <Paper 
            data-scroll 
            data-scroll-speed="2" 
            elevation={8} 
            sx={{
              maxWidth: '500px',
              width: '100%',
              background: 'rgba(255,255,255,0.95)',
              padding: '3rem',
              borderRadius: '20px',
              marginLeft: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
              }
            }}
          >
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ 
                color: '#775D47',
                fontWeight: '300',
                fontSize: '2rem',
                marginBottom: '1.5rem'
              }}
            >
              Growth
            </Typography>
            <Typography sx={{ 
              color: '#666',
              lineHeight: '1.7',
              fontSize: '1.1rem'
            }}>
              We believe in continuous improvement and innovation. Our commitment to growth 
              means staying at the forefront of aesthetic treatments while fostering personal 
              development for our team and transformative experiences for our clients.
            </Typography>
          </Paper>
        </div>

        {/* Quality */}
        <div style={{ 
          backgroundColor: '#E1DCD5', 
          padding: '4rem 2rem',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <Paper 
            data-scroll 
            data-scroll-speed="2" 
            elevation={8} 
            sx={{
              maxWidth: '500px',
              width: '100%',
              background: 'rgba(255,255,255,0.95)',
              padding: '3rem',
              borderRadius: '20px',
              marginRight: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
              }
            }}
          >
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ 
                color: '#775D47',
                fontWeight: '300',
                fontSize: '2rem',
                marginBottom: '1.5rem'
              }}
            >
              Quality
            </Typography>
            <Typography sx={{ 
              color: '#666',
              lineHeight: '1.7',
              fontSize: '1.1rem'
            }}>
              Excellence is our standard. From premium products to exceptional service, 
              we never compromise on quality. Every treatment is delivered with precision, 
              care, and attention to detail that exceeds expectations.
            </Typography>
          </Paper>
        </div>

        {/* Education */}
        <div style={{ 
          backgroundColor: '#775D47', 
          padding: '4rem 2rem',
          display: 'flex',
          justifyContent: 'flex-start'
        }}>
          <Paper 
            data-scroll 
            data-scroll-speed="2" 
            elevation={8} 
            sx={{
              maxWidth: '500px',
              width: '100%',
              background: 'rgba(255,255,255,0.95)',
              padding: '3rem',
              borderRadius: '20px',
              marginLeft: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
              }
            }}
          >
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ 
                color: '#775D47',
                fontWeight: '300',
                fontSize: '2rem',
                marginBottom: '1.5rem'
              }}
            >
              Education
            </Typography>
            <Typography sx={{ 
              color: '#666',
              lineHeight: '1.7',
              fontSize: '1.1rem'
            }}>
              Knowledge empowers both our team and our clients. We invest in ongoing education, 
              advanced training, and client consultation to ensure informed decisions and 
              optimal results for every individual journey.
            </Typography>
          </Paper>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ 
        padding: '5rem 2rem',
        backgroundColor: '#f8f6f3'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '300',
          color: '#775D47',
          textAlign: 'center',
          marginBottom: '3rem',
          letterSpacing: '1px'
        }}>
          What Our Clients Say
        </h2>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <Button 
              variant="contained" 
              onClick={handlePrev} 
              sx={{
                minWidth: 0,
                width: 56,
                height: 56,
                borderRadius: '50%',
                fontSize: '1.5rem',
                backgroundColor: '#775D47',
                '&:hover': {
                  backgroundColor: '#8B7355',
                  transform: 'scale(1.05)'
                },
                transition: 'all 0.3s ease'
              }}
              aria-label="Previous"
            >
              &#8592;
            </Button>
            
            <Card sx={{ 
              width: '400px',
              backgroundColor: '#fff',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 15px 35px rgba(119, 93, 71, 0.1)',
              transition: 'all 0.3s ease'
            }}>
              <CardActionArea>
                <CardMedia 
                  component="img" 
                  height="200" 
                  image={slides[slideIndex].image} 
                  alt={slides[slideIndex].title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ padding: '2rem', textAlign: 'center' }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="div" 
                    sx={{ 
                      color: '#775D47',
                      fontWeight: '400',
                      fontSize: '1.3rem',
                      marginBottom: '1rem'
                    }}
                  >
                    {slides[slideIndex].title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#666',
                      lineHeight: '1.6',
                      fontSize: '1rem',
                      fontStyle: 'italic'
                    }}
                  >
                    {slides[slideIndex].description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            
            <Button 
              variant="contained" 
              onClick={handleNext} 
              sx={{
                minWidth: 0,
                width: 56,
                height: 56,
                borderRadius: '50%',
                fontSize: '1.5rem',
                backgroundColor: '#775D47',
                '&:hover': {
                  backgroundColor: '#8B7355',
                  transform: 'scale(1.05)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              &#8594;
            </Button>
          </div>
          
          {/* Pagination dots */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {slides.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setSlideIndex(idx)}
                style={{
                  display: 'inline-block',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: idx === slideIndex ? '#775D47' : '#D2BDAC',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: idx === slideIndex ? 'scale(1.2)' : 'scale(1)'
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default page