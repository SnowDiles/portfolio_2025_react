import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-[#0a1930]  text-white min-h-screen p-8" >
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-8">
          <span className="text-[#63edd1] font-mono">01. </span>
          <span className="text-2xl font-semibold">À Propos de Moi</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <p className="mb-6 text-gray-300">
              Bonjour ! Je m'appelle Brahim Boulahia et j'ai toujours été passionné par le développement web. Mon intérêt pour le développement a commencé lorsque j'avais 14 ans en codant mon propre serveur Minecraft — il s'est avéré que cette expérience m'a beaucoup appris sur la programmation et m'a donné envie d'en apprendre davantage !
            </p>

            <p className="mb-6 text-gray-300">
              Après avoir commencé des études qui ne me correspondaient pas, je me suis réorienté vers le développement web en suivant une 
              {' '}
              <span className="text-[#63edd1]">formation Java JEE pendant 6 mois</span>,
              {' '}puis j'ai intégré 
              {' '}
              <span className="text-[#63edd1]">B-tech à Euratechnologie</span>,
              {' '}ce qui m'a permis de rejoindre 
              {' '}
              <span className="text-[#63edd1]">Epitech</span>.
              {' '}La pédagogie par projets d'Epitech m'a permis de développer ma capacité à apprendre par moi-même ainsi que mon aptitude à travailler efficacement en équipe grâce aux nombreux projets de groupe.
            </p>

            <p className="mb-6 text-gray-300">
              J'ai développé plusieurs projets qui m'ont permis d'approfondir mes compétences, notamment 
              {' '}
              <span className="text-[#63edd1]">My-Twitter</span>, une reproduction des principales fonctionnalités de Twitter, ainsi que 
              {' '}
              <span className="text-[#63edd1]">My-Meetic</span>, qui simule le fonctionnement d'un site de rencontre. Je prévois prochainement de travailler sur 
              {' '}
              <span className="text-[#63edd1]">My-Spotify</span> pour améliorer mes compétences en React et l'utilisation de l'API Spotify.
            </p>

            <p className="mb-6 text-gray-300">
              Voici quelques technologies avec lesquelles je travaille régulièrement :
            </p>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[#63edd1]">▹</span>
                <span className="text-gray-300">JavaScript (ES6+)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#63edd1]">▹</span>
                <span className="text-gray-300">React</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#63edd1]">▹</span>
                <span className="text-gray-300">Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#63edd1]">▹</span>
                <span className="text-gray-300">Java</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#63edd1]">▹</span>
                <span className="text-gray-300">PHP</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#63edd1]">▹</span>
                <span className="text-gray-300">Tailwind CSS</span>
              </div>
            </div>
          </div>

            <div className='hover:cursor-pointer transition-all '>
              <div className="relative w-full max-w-xs mx-auto border-2 border-[#63edd1] rounded-lg group ">
                <div className="absolute inset-0 bg-[#63edd1] opacity-40 group-hover:opacity-0 transition-opacity duration-300"></div>
                <img  src="images/face.jpg" className="rounded-lg " alt="visage humain" />
              </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default About;