'use client'

import { useLoader } from "@react-three/fiber"
import { RGBELoader } from 'three-stdlib';
import * as THREE from 'three';

export const Environment = () => {
  /**
   * RGBELoader: Um loader da Three.js para carregar imagens HDR, que são usadas para iluminação e por reflexos.
   */
  const texture = useLoader(RGBELoader, '/utils/photo_studio_01_2k.hdr' )

  /**
   * texture.mapping: configura o mapiamento de RGBELoader
   * 
   * EquirectangularReflectionMapping: é um tipo de mapeamento de textura usado em gráficos 3D para simular reflexos realistas em superfícies
   *   Detalhe:  o EquirectangularReflectionMapping é usado para configurar como uma textura HDR (High Dynamic Range) interage com objetos na cena.
   *                                       
   * 
   */
  texture.mapping = THREE.EquirectangularReflectionMapping;
  
  return (
    <primitive object={texture} castShadow attach="environment" />
  )
}
/**
 * primitive : componente especial do @react-three que permite renderizar diretamente objetos
 *             dentro de uma cena,
 *           PROPS:
 *           * object ={} define a scene 3D carregada
 *
 *           * ref={} atribui a referência modelRef ao objeto para que ele possa ser manipulado diretamente
 *
 *           * dispose={}  define que o objeto não deve ser descartado automaticamente 
 * 
 *           * castShadow receiveShadow: Habilita sombras para o modelo
 */
