import React from 'react';
import Navbar from '@/components/navbar';
import Presentation from '@/components/presentation';
import About from '@/components/about'
import Projects from '@/components/projects';
import ListIcon from '@/components/listicon';
import AnimatedCursor from "react-animated-cursor"
import ContactPage from '@/components/contact';
import ProjectShowcase from '@/components/projetShowCase'
import Image from 'next/image';

const PortfolioPage: React.FC = () => {
  return (
    <div className='bg-[#0a1930]  h-screen' style={{ fontFamily: "'Roboto Mono', monospace" }}>
      <Navbar />
      <div>
        <AnimatedCursor
          innerSize={12}
          outerSize={35}
          color="152, 211, 219"
          outerAlpha={0.3}
          innerScale={0.8}
          outerScale={2}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
          trailingSpeed={7}
          outerStyle={{
            border: `2px solid rgba(152, 211, 219)`,
          }}
          innerStyle={{
            backgroundColor: `rgba(152, 211, 219)`,
          }}
        />
        <Presentation />
        <About />
        <ProjectShowcase
          title="My twitter"
          description="Un projet permettant de reproduire les fonctionnalités principales de Twitter."
          platforms={['PHP', 'Tailwind', 'Sql', 'JavaScript']}
          direction="right"
          imageUrl="/images/twitter.png"
          skills={[
            "Rédiger un Cahier Des Charges",
            "Déployer un environnement de travail",
            "Implémenter des règles d’authentification",
            "Rédiger une documentation technique "
          ]}
          gitHubLink="https://github.com/SnowDiles/twitter_clone_php"
        />

        <ProjectShowcase
          title="My spotify"
          description="Une application permettant de reproduire les principales fonctionnalité de spotify."
          platforms={['React', 'Docker', 'Api', 'Tailwind', 'Librairie React']}
          direction="left"
          imageUrl="/images/spotify.png"
          skills={[
            "Identifier des améliorations qualitatives et de performance",
            "Rédiger des spécifications techniques",
            "Réaliser une maquette ",
            "Implémenter la partie “front-end”",
            "Rédiger une présentation",
            "Intégrer les différents éléments"
          ]}
          gitHubLink="https://github.com/SnowDiles/spotify-clone-react"
        />

        <ProjectShowcase
          title="My Meetic"
          description="Une application permettant de reproduire les fonctionnalités d'un site de rencontre tel que Meetic."
          platforms={['Php', 'CSS', 'SQL']}
          direction="right"
          imageUrl="/images/meetic.png"
          skills={[
            "Intégrer les différents éléments",
            "Implémenter des règles d’authentification",
            "Réaliser une maquette ",
            "Implémenter la logique et la base de données"
           
          ]}
          gitHubLink="https://github.com/SnowDiles/Meetic-clone-dating-app-php"
        />
        <Projects />
        <ListIcon />
        <ContactPage />

      </div>
    </div>
  );
};

export default PortfolioPage;