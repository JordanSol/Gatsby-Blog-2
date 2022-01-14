import React from 'react'
import Particles from 'react-particles-js'
import particleConfig from './config/particle-config'

const ParticleBackground = () => {
    return (
        <Particles params={particleConfig} height={window.innerHeight} width={window.innerWidth}>
        
        </Particles>
    )
}

export default ParticleBackground