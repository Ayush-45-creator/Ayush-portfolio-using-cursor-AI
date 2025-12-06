import GlassCard from '../../components/GlassCard';

const projects = [
  {
    title: 'AI Healthcare Chatbot',
    description: 'An intelligent chatbot that provides health guidance, symptom analysis, and diet suggestions using NLP and ML.',
    img: '/work1.jpg',
    github: 'https://github.com/Ayush-45-creator/Health-care-Chatbot'
  },
  {
    title: 'OCR to Word Converter',
    description: 'Converts scanned documents and images into editable Word docs using OCR.',
    img: '/work2.jpg',
    github: 'https://github.com/Ayush-45-creator/OCR-to-word'
  },
  {
    title: 'Smart Gate Entry System',
    description: 'Computer-vision system for number plate recognition using OpenCV and EasyOCR with database logging.',
    img: '/work3.jpg',
    github: 'https://github.com/Ayush-45-creator/Gate_-Guardian'
  }
];

export default function Work() {
  return (
    <div className="section-wrapper" id="work">
      <h2 className="section-heading text-center">
        My <span className="gradient-text">Work</span>
      </h2>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {projects.map((p) => (
          <GlassCard key={p.title} className="p-4">
            <div>
              <div className="h-44 w-full overflow-hidden rounded-md mb-4 bg-slate-100 flex items-center justify-center">
                <img src={p.img} alt={p.title} className="object-cover h-full w-full" />
              </div>

              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-slate-600 mb-3">{p.description}</p>

              <a
                href={p.github}
                target="_blank"
                className="inline-block mt-2 px-4 py-2 text-sm font-medium border rounded-md text-primaryStart hover:bg-primaryStart hover:text-white transition"
              >
                View on GitHub →
              </a>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
