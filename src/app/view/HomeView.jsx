'use client'
import { Cube } from '@/components/firstProject_cube/cubeThreejs/Cube'
import styles from './styles.css'
import { CubeTwo } from '@/components/firstProject_cube/cubeReact_three/CubeTwo'
import { Container } from '@/components/container/Container'

export const HomeView = () => {
  return (
    <div className='containerHome'>
      <div className='title'>
        <h1>Projeto para Estudo e Prática de Desenvolvimento 3D</h1>
        <p>
        Este projeto está sendo criado para estudar, praticar e aprimorar meus conhecimentos em desenvolvimento 3D com THREE.js
        e react-three/fiber. Através dele, quero explorar desde o básico até técnicas avançadas, desenvolvendo elementos 
        tridimensionais e animações para consolidar minhas habilidades nessa área.
        </p>
      </div>
      <div className='containerProject'>
        <Cube/>
        <CubeTwo/> 
      </div>
    </div>
  )
}
