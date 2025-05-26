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


  useEffect(() => {
    if (!scrollRef.current) return;
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
    });

    return () => {
      scroll.destroy();
    };
  }, []);




  return (
    <div data-scroll-container ref={scrollRef}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '7rem', justifyContent: 'space-between', padding: '3rem'}}>
        <div style={{ width: '100%', maxWidth: '400px', height: 'auto'}}>
          <Image src="/images/logo.png" alt="Logo" width={500} height={120} style={{ width: '100%', height: 'auto'}} className='logo'/>
          <h1 data-scroll data-scroll-speed="2" className='title'>Illuminance</h1>
          <h1 data-scroll data-scroll-speed="2" className='subtitle'>Esthetics</h1>
        </div>
        <div style={{ position: 'relative', width: '40%', minWidth: 600, height: 200 }}>
          <VideoPlayer videoId='R3v_u-vUbsU'/>
        </div>

      </div>
      <div style={{ padding: '2rem', marginTop: '7rem', backgroundColor: '#E1DCD5'}}>
        <h1 >
          What We Do
        </h1>
        <p style={{ paddingLeft: '4rem', whiteSpace: 'normal', wordWrap: 'break-word' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
      </div>
      <div style={{ padding: '3rem', display: 'flex', flexWrap: 'wrap', gap: '5rem', justifyContent: 'center' , backgroundColor: '#E1DCD5'}}>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5rem', justifyContent: 'center' }}>
          <Card data-scroll data-scroll-speed="1" sx={{ maxWidth: '70%', minWidth: 250, flex: '1 1 300px', backgroundColor: '#775D47'}}>
            <CardActionArea>
              <CardMedia component="img" height="140" image="/images/tree.png" alt="tree"/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                  Licence 1
                </Typography>
                <Typography variant="body2" sx={{ color: '#fff' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Get Started
              </Button>
            </CardActions>
          </Card>

          <Card data-scroll data-scroll-speed="2" sx={{ maxWidth: '70%', minWidth: 250, flex: '1 1 300px', backgroundColor: '#775D47' }}>
            <CardActionArea>
              <CardMedia component="img" height="140" image="/images/tree.png" alt="tree"/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                  Licence 2
                </Typography>
                <Typography variant="body2" sx={{ color: '#fff'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Get Started
              </Button>
            </CardActions>
          </Card>

          <Card data-scroll data-scroll-speed="3" sx={{ maxWidth: '70%', minWidth: 250, flex: '1 1 300px', backgroundColor: '#775D47' }}>
            <CardActionArea>
              <CardMedia component="img" height="140" image="/images/tree.png" alt="tree"/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                  Licence 3
                </Typography>
                <Typography variant="body2" sx={{ color: '#fff'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Get Started
              </Button>
            </CardActions>
          </Card>
          </div>
 
      </div>
      <h1 style={{paddingTop: '4rem'}}>Our Values & Culture</h1>
      <div style={{ backgroundColor: '#D2BDAC', padding: '2rem', color: '#fff'}}>
        <Paper data-scroll data-scroll-speed="3" elevation={6} style={{maxWidth: '500', width: '50%', background: 'rgba(0,0,0,0.7', padding: '2rem', borderRadius: '1rem', color: '#fff', marginLeft: '4rem', boxShadow: '0 4px 24px rgba(0,0,0,0.15)'}}>
          <Typography variant="h5" gutterBottom>Growth</Typography>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
        </Paper>
      </div>
      <div style={{ backgroundColor: '#E1DCD5', padding: '2rem 0', display: 'flex', justifyContent: 'flex-end' }}>
        <Paper data-scroll data-scroll-speed="3" elevation={6} style={{maxWidth: '500', width: '50%', background: 'rgba(0,0,0,0.7', padding: '2rem', borderRadius: '1rem', color: '#fff', marginRight: '4rem', boxShadow: '0 4px 24px rgba(0,0,0,0.15)'}}>
          <Typography variant="h5" gutterBottom>Quality</Typography>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
        </Paper>
      </div>
      <div style={{ backgroundColor: '#775D47', padding: '2rem', paddingLeft: '4rem', paddingRight: '4rem', color: '#fff'}}>
        <Paper data-scroll data-scroll-speed="3" elevation={6} style={{maxWidth: '500', width: '50%', background: 'rgba(0,0,0,0.7', padding: '2rem', borderRadius: '1rem', color: '#fff', marginLeft: '4rem', boxShadow: '0 4px 24px rgba(0,0,0,0.15)'}}>
          <Typography variant="h5" gutterBottom>Education</Typography>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
        </Paper>
      </div>
    </div>

    
  )
}

export default page
