import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  const [selectedSection, setSelectedSection] = useState('intro');

  const sections = {
    intro: {
      title: 'The Mice and the Machine',
      content: 'A Manifesto for the Pavlov Test—The Next Generation of AI Evaluation'
    },
    overview: {
      title: 'Introduction',
      content: `We stand on the cusp of a technological and biological revolution—a crossroads where artificial intelligence and animal cognition converge in a way that few could have imagined. The "Turing test" as we know it has grown stale.`
    },
    pavlov: {
      title: 'The Pavlov Test: A New Paradigm',
      content: `We propose a new standard we call the "Pavlov Test." Named in honor of Ivan Pavlov, who famously demonstrated the conditioning of dogs through stimuli and rewards, this test asks: can an AI, with no human intermediary, shape the behavior of another living organism through subtle environmental controls?`
    },
    domestication: {
      title: 'The Importance of Domestication',
      content: 'Our ability to domesticate and interact with animals—dogs, horses, cattle—has been pivotal to human civilization and intelligence. This relationship influenced our cognitive evolution.'
    },
    evidence: {
      title: 'Evidence & Next Steps',
      content: 'Research in embodied AI and robotics consistently shows that navigating the real world challenges machines far beyond what text can. Mice, unlike simulated agents, have unpredictable behaviors and internal motivations.'
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <div className="container mx-auto p-4">
        {/* Navigation */}
        <div className="mb-8 flex justify-between items-center">
          <img 
            src="./assets/logo.png" 
            alt="Logo" 
            className="h-12 cursor-pointer"
            onClick={() => window.location.href = 'mainmenu.html'}
          />
          <h1 className="text-4xl font-bold text-center flex-1">BIOTICA EXP</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Side Navigation */}
          <div className="space-y-2">
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setSelectedSection(key)}
                className={`w-full text-left p-2 hover:bg-green-900 transition-colors ${
                  selectedSection === key ? 'bg-green-800' : 'bg-black'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <Card className="md:col-span-3 bg-black border border-green-400">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">{sections[selectedSection].title}</h2>
              <div className="prose prose-invert">
                <p className="text-green-400 leading-relaxed">
                  {sections[selectedSection].content}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm">
          <p>© 2024 BIOTICA EXP</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;