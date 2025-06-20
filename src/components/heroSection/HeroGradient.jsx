import React from 'react'

const HeroGradient = () => {
  return (
    <>
      {/* Cyan Glow - behind text */}
      <div className="absolute top-8 left-10 w-[250px] h-[250px] rounded-full bg-cyan-400 opacity-30 blur-3xl animate-ping -z-10" />

      {/* Orange Glow - bottom of text */}
      <div className="absolute bottom-16 left-20 w-[200px] h-[200px] rounded-full bg-orange-400 opacity-20 blur-2xl animate-pulse -z-10" />

      {/* Cyan Glow - behind image (hexagon) */}
      <div className="absolute top-10 right-28 w-[280px] h-[280px] rounded-full bg-cyan-400 opacity-40 blur-[100px] animate-pulse -z-10" />

      {/* Orange Glow - side of image */}
      <div className="absolute bottom-10 right-10 w-[200px] h-[200px] rounded-full bg-orange-500 opacity-25 blur-[90px] animate-ping -z-10" />
    </>
  )
}

export default HeroGradient
