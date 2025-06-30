// React Portfolio with Bold Descriptions and Game Dev Styling + Full Resume Descriptions + Contact Tab

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function TabButton({ isActive, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-medium text-sm rounded transition-all ${
        isActive ? 'bg-blue-600 text-white' : 'text-zinc-300 hover:text-white hover:bg-blue-700'
      }`}
    >
      {children}
    </button>
  );
}

export default function Portfolio() {
  useEffect(() => {
    document.title = 'Deepak K | Unity Developer';
  }, []);

  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('All');
  const detailRef = useRef(null);

  const projects = [
    {
      id: 1,
      type: 'VR',
      title: 'Jurassic Plank',
      video: 'https://drive.google.com/file/d/1S77hLey6Hk0V8Ok93JUYkPnpKkrNdB5B/preview',
      sections: {
        description: 'Jurassic Plank is a VR adventure game set in a dinosaur world. It features immersive interactions like grabbing, throwing, and shooting using Oculus hand and controller tracking. The game includes levels such as walking a 100ft-high plank, helicopter 360° view, underwater environments, snowy zones, and shooting from a moving car.',
        role: 'Lead developer responsible for the game idea, design, logic, gameplay, and debugging.',
        tech: 'Unity, Oculus SDK, Visual Studio'
      }
    },
     {
      id: 3,
      type: 'VR',
      title: 'Home Walkthrough',
      video: 'https://drive.google.com/file/d/1vHX299gz87OAxMgYURyn0FA1ncOXvzsl/preview',
      sections: {
        description: 'An architectural VR walkthrough app where users explore a fully interactive 3D home. Users can walk through rooms, change wall, floor, and ceiling colors, and rearrange furniture using Oculus controllers.',
        role: 'Lead developer responsible for game idea, logic, interaction design, and debugging.',
        tech: 'Unity, Meta SDK, Visual Studio'
      }
    },
    {
      id: 7,
      type: 'VR',
      title: 'Boo Bangla',
      video: 'https://drive.google.com/file/d/1AQhxzVTS57ev6qyxNcPkJB99hFufj_GD/preview',
      sections: {
        description: 'A horror-themed VR walkthrough game where the player explores a haunted mansion filled with jumpscares and atmospheric effects.',
        role: 'Worked on game and level design with immersive UI.',
        tech: 'Unity, Oculus SDK, Visual Studio'
      }
    },
    {
      id: 2,
      type: 'VR',
      title: 'V20 Cricket',
      video: 'https://drive.google.com/file/d/1P-UvII9sA2ztHPO4Q14kqeIm8K6mKaNl/preview',
      sections: {
        description: 'V20 Cricket is a virtual reality cricket simulator where players use Oculus controllers as a bat in a 360° stadium. The game features various bowling types and animations.',
        role: 'Worked with animation states in Unity, designed interactive UI, implemented UI animation, and performed debugging.',
        tech: 'Unity, Oculus SDK, Visual Studio'
      }
    },
    {
      id: 5,
      type: 'VR',
      title: 'Zombie Fury VR',
      video: 'https://drive.google.com/file/d/1D9lRWYN6IO4BNaWg8HhtQ1hEI6hVJbJi/preview',
      sections: {
        description: 'A VR shooter game where the player survives a zombie apocalypse. Weapons include assault rifles, pistols, and shotguns. Includes multiple difficulty levels.',
        role: 'Worked on gun mechanics, game design, level design, interactive UI, and visual effects.',
        tech: 'Unity, Oculus SDK, Visual Studio'
      }
    },
    {
      id: 12,
      type: 'VR',
      title: 'Anatomy',
      video: 'https://drive.google.com/file/d/1i1hxx_HVvYK_53RD7HpAOASx3bWLo_UZ/preview',
      sections: {
        description: 'An eduactional VR project provides immersive, interactive experiences for learning and exploration of the human body and also allows users to visualize and interact with detailed 3D models of anatomical structures, offering a unique perspective and deeper understanding.',
        role: 'Lead developer responsible for full pipeline and interaction design.',
        tech: 'Unity, Oculus SDK, Visual Studio'
      }
    },
     {
      id: 4,
      type: 'VR',
      title: 'Indian Roads VR',
      video: 'https://www.youtube.com/embed/YOUR_VIDEO_4',
      sections: {
        description: 'Indian Roads VR is a racing game featuring NPC opponents and realistic Indian highway environments with obstacles and challenges. The game supports Logitech steering input.',
        role: 'Handled level design, game design, and interactive UI.',
        tech: 'Unity, Oculus SDK, Logitech Ghub, Visual Studio'
      }
    },
    {
      id: 6,
      type: 'MR',
      title: 'Zombie Fury MR',
      video: 'https://drive.google.com/file/d/1H1AazgHcdphimMPSd0KiZcaCxmslslKs/preview',
      sections: {
        description: 'Mixed Reality version of Zombie Fury, where players see and shoot zombies in their real-world environment using Oculus passthrough.',
        role: 'Handled MR logic, level design, UI, and visual effects.',
        tech: 'Unity, MR Utility Kit, Visual Studio'
      }
    },
    
    {
      id: 8,
      type: 'MR',
      title: 'Jio Learn',
      video: 'https://www.youtube.com/embed/YOUR_VIDEO_8',
      sections: {
        description: 'An educational MR application for the JioGlass headset. It visualizes body parts in 3D and teaches human anatomy through animations.',
        role: 'Built UI flow and body part animations for learning experience.',
        tech: 'Unity, JMRSDK, Visual Studio'
      }
    },
    {
      id: 9,
      type: 'WebGL',
      title: 'Warehouse 3D',
      video: 'https://drive.google.com/file/d/1xrE9mA7oBmbd8KB9oP9l1FHvInUsTUO7/preview',
      sections: {
        description: 'A WebGL platform displaying a dynamic 3D warehouse model. All warehouse objects and data are updated in real-time using backend values from a React-based API.',
        role: 'Developed Unity frontend that responds to backend data from React.',
        tech: 'Unity, WebGL, React API, Visual Studio'
      }
    },
    {
      id: 10,
      type: 'AR',
      title: 'AR Christmas',
      video: 'https://drive.google.com/file/d/1yFMtNJLZcFPjr1GcJMrLHTtKY18f57xE/preview',
      sections: {
        description: 'An AR app that overlays 3D animations or video on target images using image tracking. Features multiple image recognition support.',
        role: 'Led project design and AR workflow.',
        tech: 'Unity, MaxstAR, Visual Studio'
      }
    },
    {
      id: 11,
      type: 'AR',
      title: 'AR Home',
      video: 'https://drive.google.com/file/d/1SRz2gc0rXl2N2iDTldCITax8SpYbcCXk/preview',
      sections: {
        description: 'An AR project that places 3D home models on real-world surfaces using plane tracking.',
        role: 'Lead developer responsible for full pipeline and interaction design.',
        tech: 'Unity, ARCore, Visual Studio'
      }
    },
     
  ];

  const filtered =
    filter === 'All'
      ? projects
      : filter === 'Contact'
      ? []
      : projects.filter((p) => p.type === filter);
  const selectedProject = projects.find((p) => p.id === selected);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-mono">
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-extrabold text-center text-cyan-400 mb-10">Deepak K <span className='font-semibold'>| Unity Developer</span></h1>
        

        {!selected && (
          <>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {['All', 'VR', 'AR', 'MR', 'WebGL', 'Contact','About'].map((type) => (
                <TabButton key={type} isActive={filter === type} onClick={() => setFilter(type)}>
                  {type}
                </TabButton>
              ))}
            </div>

            {filter !== 'Contact' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {filtered.map((p) => (
                  <motion.div
                    key={p.id}
                    onClick={() => setSelected(p.id)}
                    className="bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer"
                    whileHover={{ y: -3 }}
                  >
                    <div className="p-6">
                      <span className={`inline-block text-xs font-bold px-2 py-1 rounded-full ${p.type === 'VR' ? 'bg-purple-700' : p.type === 'AR' ? 'bg-green-700' : p.type === 'MR' ? 'bg-red-700' : 'bg-blue-700'} text-white mb-2`}>
                        {p.type}
                      </span>
                      <h2 className="text-xl font-semibold text-cyan-300">{p.title}</h2>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {filter === 'Contact' && (
               <div className="text-center text-sm text-zinc-300 mt-20 space-y-5">
                 <p className="text-lg">Feel free to reach out:</p>
                 <p className="mt-2">
                   📧 <span className="text-2xl text-cyan-400">deepakkumarvj2512@gmail.com</span>
                 </p>
                 <p>
                  📞 <span className="text-2xl text-cyan-400">+91 8778200094</span> {/* Replace with your actual number */}
                 </p>
             </div>
            )}

            
           {filter === 'About' && (
  <div className="text-center text-base text-zinc-300 mt-0">
    <h2 className="text-3xl font-extrabold text-cyan-300 mb-8">About Me</h2>
    <div className="max-w-3xl mx-auto space-y-6 text-left">
      <div className="flex items-start gap-3">
        <span className="text-cyan-400 text-xl mt-1">🎮</span>
        <p className="text-lg leading-relaxed">
          <span className="text-cyan-200 font-semibold">Passionate and detail-oriented Unity Game Developer</span> with 5+ years of experience in designing, developing, optimizing, and delivering immersive gaming experiences across VR, AR, MR, and WebGL platforms.
        </p>
      </div>
      <div className="flex items-start gap-3">
        <span className="text-cyan-400 text-xl mt-1">🛠️</span>
        <p className="text-lg leading-relaxed">
          <span className="text-cyan-200 font-semibold">Proficient in C#, Unity Engine, and XR development</span> (VR/AR), with strong command over game physics, UI/UX, gameplay mechanics, and performance optimization.
        </p>
      </div>
      <div className="flex items-start gap-3">
        <span className="text-cyan-400 text-xl mt-1">🤝</span>
        <p className="text-lg leading-relaxed">
          <span className="text-cyan-200 font-semibold">Collaborates effectively with cross-functional teams</span> — including designers, artists, and producers — to meet milestones and deliver polished, engaging gameplay experiences.
        </p>
      </div>
    </div>
  </div>
)}

          </>
        )}

        {selectedProject && (
          <div ref={detailRef} className="mt-12">
            <button
              onClick={() => {
                setSelected(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-cyan-400 hover:underline mb-4"
            >
              ← Back to Projects
            </button>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <h2 className="text-3xl font-bold text-cyan-300">{selectedProject.title}</h2>

              <div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden">
                <iframe
                  src={selectedProject.video}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              <div className="space-y-2">
                <p><span className="font-bold text-cyan-200">Description:</span> {selectedProject.sections.description}</p>
                <p><span className="font-bold text-green-300">Role:</span> {selectedProject.sections.role}</p>
                <p><span className="font-bold text-purple-300">Tech:</span> {selectedProject.sections.tech}</p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
