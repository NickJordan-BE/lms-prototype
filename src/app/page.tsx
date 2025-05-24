import React from 'react'
import Image from 'next/image'
import VideoPlayer from './components/VideoPlayer'




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
      <div style={{ marginTop: '7rem', minHeight: '120vh' }}>
        <h1>
          What We Do
        </h1>
        <p style={{ paddingLeft: '4rem', whiteSpace: 'normal', wordWrap: 'break-word' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
      </div>
    </div>

    
  )
}

export default page
