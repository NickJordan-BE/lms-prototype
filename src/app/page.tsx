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
import React, { useEffect, useState } from 'react';
import Fade from '@mui/material/Fade';



const page = () => {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    setShowCards(true);
  }, []);


  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '7rem', justifyContent: 'space-between', padding: '3rem'}}>
        <div style={{ width: '100%', maxWidth: '400px', height: 'auto'}}>
          <Image src="/images/logo.png" alt="Logo" width={500} height={120} style={{ width: '100%', height: 'auto'}} className='logo'/>
          <h1 className='title'>Illuminance</h1>
          <h1 className='subtitle'>Esthetics</h1>
        </div>
        <div style={{ position: 'relative', width: '40%', minWidth: 250, height: 200 }}>
          <VideoPlayer videoId='R3v_u-vUbsU'/>
        </div>

      </div>
      <div style={{ marginTop: '7rem', backgroundColor: '#E1DCD5'}}>
        <h1>
          What We Do
        </h1>
        <p style={{ paddingLeft: '4rem', whiteSpace: 'normal', wordWrap: 'break-word' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
      </div>
      <div style={{ padding: '3rem', display: 'flex', flexWrap: 'wrap', gap: '5rem', justifyContent: 'center' , backgroundColor: '#E1DCD5'}}>
        <Fade in={showCards} timeout={1000}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5rem', justifyContent: 'center' }}>
          <Card sx={{ maxWidth: '70%', minWidth: 250, flex: '1 1 300px', backgroundColor: '#775D47'}}>
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

          <Card sx={{ maxWidth: '70%', minWidth: 250, flex: '1 1 300px', backgroundColor: '#775D47' }}>
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

          <Card sx={{ maxWidth: '70%', minWidth: 250, flex: '1 1 300px', backgroundColor: '#775D47' }}>
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
        </Fade>
      </div>
      <h1 style={{paddingTop: '4rem'}}>Our Values & Culture</h1>
      <div style={{ backgroundColor: '#D2BDAC', padding: '4rem', color: '#fff'}}>
        <h2 >Growth</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <div style={{ backgroundColor: '#E1DCD5', padding: '4rem', textAlign: 'right', paddingLeft: '4rem', paddingRight: '4rem', color: '#fff'}}>
        <h2 >Quality</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <div style={{ backgroundColor: '#775D47', padding: '4rem', paddingLeft: '4rem', paddingRight: '4rem', color: '#fff'}}>
        <h2>Education</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </div>

    
  )
}

export default page
