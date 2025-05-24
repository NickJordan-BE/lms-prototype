import React from 'react'
import Image from 'next/image'
import VideoPlayer from './components/VideoPlayer'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';



const page = () => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '7rem'}}>
        <div>
          <Image src="/images/logo.png" alt="Logo" width={500} height={120} />
          <h1>Illuminance</h1>
          <h1>Esthetics</h1>
        </div>
        <div style={{ width: 600, height: 200 }}>
          <VideoPlayer videoId='R3v_u-vUbsU'/>
        </div>

      </div>
      <div style={{ marginTop: '7rem'}}>
        <h1>
          What We Do
        </h1>
        <p style={{ paddingLeft: '4rem', whiteSpace: 'normal', wordWrap: 'break-word' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
      </div>
      <div style={{ paddingLeft: '4rem', paddingTop: '4rem', display: 'flex', alignItems: 'center', gap: '3rem'}}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image="/images/tree.png" alt="tree"/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Esthetics & Eyelashes
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary'}}>
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

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image="/images/tree.png" alt="tree"/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Esthetics & Eyelashes
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary'}}>
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

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image="/images/tree.png" alt="tree"/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Esthetics & Eyelashes
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary'}}>
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

    
  )
}

export default page
