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
import { Julius_Sans_One } from 'next/font/google';

const julius = Julius_Sans_One({ subsets: ['latin'], weight: '400'});

const page = () => {
  const [showCards, setShowCards] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  

  const slides = [
    {
      title: 'Person',
      description: '"Amazing!"',
      image: '/images/lady1.png'
    },
    {
      title: 'Person',
      description: '"Absolutely stunning!"',
      image: '/images/guy.png'
    },
    {
      title: 'Person',
      description: '"Cool!"',
      image: '/images/lady2.png'
    },
    {
      title: 'Person',
      description: '"Wonderful!"',
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
    }, 3500);

    return () => clearInterval(interval);
  }, [slides.length]);




  return (
    <div data-scroll-container ref={scrollRef}>
      <div style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', gap: '7rem', justifyContent: 'space-between', padding: '3rem', paddingBottom: '4rem'}}>
        <div style={{ width: '100%', maxWidth: '400px', height: 'auto'}}>
          <Image src="/images/logo.png" alt="Logo" width={500} height={120} style={{ width: '100%', height: 'auto'}} className='logo'/>
          <h1 data-scroll data-scroll-speed="2" className={`${julius.className} title`} style={{ color: 'black', fontSize: '4.5rem' }}>Illuminance</h1>
          <h1 data-scroll data-scroll-speed="2" className={`${julius.className} subtitle`} style={{ color: 'black' }}>Esthetics</h1>
          <h1 data-scroll data-scroll-speed="2" style={{ color: 'black', fontSize: '2rem' }}>To provide, and to help.</h1>
        </div>
        <div style={{ position: 'relative', width: '40%', minWidth: 600, height: 200 }}>
          <VideoPlayer videoId='R3v_u-vUbsU'/>
        </div>

      </div>
      <div style={{ display: 'flex', padding: '2rem', paddingBottom: '4rem', marginTop: '7rem', marginBottom: '6rem' }}>
        <div style={{ position: 'relative', width: '40%', minWidth: 400, height: 200 }}>
          <Image src="/images/lmsview.png" alt="What We Do" fill style={{ objectFit: 'cover', borderRadius: '1rem' }} />
        </div>
        <div style={{ flex: 1 }}>
          <h1 className={`${julius.className}`} style={{ fontSize: '3rem', marginLeft: '1.5rem' }}>
            What We Do
          </h1>
          <h2 style={{ font: 'Inter', paddingLeft: '4rem', fontSize: '2rem', whiteSpace: 'normal', wordWrap: 'break-word' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </h2>
           <Button 
    variant="contained" 
    sx={{
      marginTop: '2rem',
      marginLeft: '4rem',
      backgroundColor: '#775D47',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#5C4033'
      }
    }}
  >
    Get Started
  </Button>
        </div>
      </div>
      <div style={{ backgroundColor: '#E1DCD5', paddingTop: '3rem', paddingLeft: '3rem', paddingRight: '3rem', paddingBottom: '1rem' }}>
        <h1 className={`${julius.className} title`} style={{ textAlign: 'left', fontSize: '3rem' }}>
          What We Offer
        </h1>
        <div style={{ padding: '3rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' , backgroundColor: '#E1DCD5'}}>        
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Card data-scroll data-scroll-speed="1" sx={{ maxWidth: '70%', minWidth: 250, flex: '1 1 300px', backgroundColor: '#775D47'}}>
            <CardActionArea>
              <CardMedia component="img" height="140" image="/images/flower1.png" alt="flower1"/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                  Learning 1
                </Typography>
                <Typography variant="body2" sx={{ color: '#fff' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" sx={{ color: '#fff'}}>
                Learn More
              </Button>
            </CardActions>
          </Card>

          <Card data-scroll data-scroll-speed="2" sx={{ maxWidth: '70%', minWidth: 250, flex: '1 1 300px', backgroundColor: '#775D47' }}>
            <CardActionArea>
              <CardMedia component="img" height="140" image="/images/flower1.png" alt="flower1"/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                  Learning 2
                </Typography>
                <Typography variant="body2" sx={{ color: '#fff'}}>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur eu fugiat nulla pariatur.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" sx={{ color: '#fff'}}>
                Learn More
              </Button>
            </CardActions>
          </Card>

          <Card data-scroll data-scroll-speed="3" sx={{ maxWidth: '70%', minWidth: 250, flex: '1 1 300px', backgroundColor: '#775D47' }}>
            <CardActionArea>
              <CardMedia component="img" height="140" image="/images/flower1.png" alt="flower1"/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                  Learning 3
                </Typography>
                <Typography variant="body2" sx={{ color: '#fff'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" sx={{ color: '#fff'}}>
                Learn More
              </Button>
            </CardActions>
          </Card>
          </div>
        </div>
      </div>
      <h1 className={`${julius.className} title`} style={{paddingTop: '4rem', paddingLeft: '5rem', fontSize: '3rem'}}>Our Values & Culture</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '1rem', paddingBottom: '3rem', textAlign: 'center', backgroundColor: 'white'}}>
      
      <div style={{ display: 'flex', padding: '1rem', color: '#1F1F1F'}}>
        <Paper data-scroll data-scroll-speed="3" elevation={6} style={{    width: '300px',
    height: '300px',
    backgroundColor: '#E1DCD5',
    borderRadius: '50%',
    color: '#1F1F1F',
    margin: '2rem',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0 4px 24px rgba(0,0,0,0.15)'}}>
          <Typography variant="h4" gutterBottom>Growth</Typography>
          <Typography variant="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </Paper>
      </div>
      <div style={{ padding: '1rem' }}>
        <Paper data-scroll data-scroll-speed="6" elevation={6} style={{    width: '350px',
    height: '350px',
    backgroundColor: '#E1DCD5',
    borderRadius: '50%',
    color: '#1F1F1F',
    margin: '2rem',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0 4px 24px rgba(0,0,0,0.15)'}}>
          <Typography variant="h4" gutterBottom>Quality</Typography>
          <Typography variant="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </Paper>
      </div>
      <div style={{ padding: '1rem', color: '#fff'}}>
        <Paper data-scroll data-scroll-speed="3" elevation={6} style={{    width: '300px',
    height: '300px',
    backgroundColor: '#E1DCD5',
    borderRadius: '50%',
    color: '#1F1F1F',
    margin: '2rem',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0 4px 24px rgba(0,0,0,0.15)'}}>
          <Typography variant="h4" gutterBottom>Education</Typography>
          <Typography variant="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </Paper>
      </div>
      </div>
      {/* Testimonials */}
      <h2 className={`${julius.className} title`} style={{ fontSize: '3rem', paddingLeft: '4rem', marginBottom: '1rem' }}>Testimonials</h2>
      <h2 style={{ fontSize: '1.5rem', paddingLeft: '4rem', marginBottom: '1rem' }}>Hear first hand how students are benefiting from our service.</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '3rem 3rem 0 3rem' }}>
        

        {/* Slideshow */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
          <Button variant="contained" onClick={handlePrev} style={{ minWidth: 0, width: 48, height: 48, borderRadius: '50%', fontSize: 28, padding: 0, backgroundColor: '#222' }} aria-label="Previous">
            &#8592;
          </Button>

          {/* Show 3 cards at a time */}
          {[0,1,2].map(offset => {
            const idx = (slideIndex + offset) % slides.length;
            const slide = slides[idx];
            return (
              <Card key={idx} sx={{ maxWidth: 300, backgroundColor: '#222', color: '#fff' }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image={slide.image} alt={slide.title} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                      {slide.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#fff' }}>
                      {slide.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            )
          })}

          <Button variant="contained" onClick={handleNext} style={{ minWidth: 0, width: 48, height: 48, borderRadius: '50%', fontSize: 28, padding: 0, backgroundColor: '#222' }}>
            &#8594;
          </Button>
        </div>

        {/* Dots */}
        <div style={{ marginTop: '1rem' }}>
          {slides.map((_, idx) => (
            <span
              key={idx}
              style={{
                display: 'inline-block',
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: idx === slideIndex ? '#775D47' : '#ccc',
                margin: '0 4px'
              }}
            />
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div style={{
        backgroundColor: '#1F1F1F',
        color: '#fff',
        padding: '4rem 2rem',
        marginTop: '4rem'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Info</h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.6 }}>
          This is some information about our company. We are committed to providing the best services
          to our clients. Contact us for more details.
        </p>
        <p style={{ marginTop: '2rem', fontSize: '1rem' }}>
          © 2025 Company Name. All rights reserved.
        </p>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default page