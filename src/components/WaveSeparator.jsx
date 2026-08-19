import React from "react";
import { useLocation } from 'react-router-dom'

/**
 * Onda dupla estilo Solex/AO Scan
 * - Coloque o header como relative
 * - Este componente fica absolute no bottom do header
 */

const WaveSeparator = ({ height = 160, defaultColor = "#ffffff" }) => {
  const location = useLocation()
  const isFaqPage = location.pathname === '/faq'
  const isStoriesPage = location.pathname === '/success-stories'
  const isConnectPage = location.pathname === '/connect'

  let waveColor = defaultColor;
  
  if(isFaqPage || isStoriesPage) {
    waveColor = '#f8fafc'
  } else if(isConnectPage) {
    waveColor = '#eff6fe'
  }


  return (
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-[1]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full"
        style={{ height }}
      >
        {/* Camada 1 (fundo) - levemente translúcida para criar profundidade */}
        <path
          d="
            M0,60
            C120,72,240,98,360,104
            C480,110,600,96,720,82
            C840,68,960,54,1080,60
            C1200,66,1320,92,1440,102
            L1440,120 L0,120 Z
          "
          fill={waveColor}
          fillOpacity="0.55"
        />
        {/* Camada 2 (frente) - onda principal mais marcada */}
        <path
          d="
            M0,68
            C120,78,240,86,360,96
            C480,106,600,114,720,100
            C840,86,960,58,1080,50
            C1200,42,1320,52,1440,70
            L1440,120 L0,120 Z
          "
          fill={waveColor}
        />
      </svg>
    </div>
  );
};

export default WaveSeparator;
