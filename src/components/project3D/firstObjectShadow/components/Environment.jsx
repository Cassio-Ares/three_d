'use client'

import { useLoader } from "@react-three/fiber"
import { RGBELoader } from 'three-stdlib';
import * as THREE from 'three';

export const Environment = () => {
  const texture = useLoader(RGBELoader, '/utils/photo_studio_01_2k.hdr' )

  texture.mapping = THREE.EquirectangularReflectionMapping;
  
  return (
    <primitive object={texture} attach="environment" />
  )
}

