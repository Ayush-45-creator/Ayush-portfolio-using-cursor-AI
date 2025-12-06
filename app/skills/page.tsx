import GlassCard from '../../components/GlassCard';

export default function Skills() {
  return (
    <div className="section-wrapper" id="skills">
      <h2 className="section-heading text-center">Technical <span className="gradient-text">Skills</span></h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <GlassCard className="p-6">
          <h3 className="font-semibold mb-3">Design</h3>
          <ul className="text-sm text-slate-600 space-y-2">
            <li>UI/UX Design</li>
            <li>Interface Design</li>
            <li>Interaction Design</li>
            <li>Prototyping</li>
          </ul>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="font-semibold mb-3">Development</h3>
          <ul className="text-sm text-slate-600 space-y-2">
            <li>HTML, CSS, JavaScript</li>
            <li>React, Next.js</li>
            <li>Python, Flask</li>
            <li>Responsive Design</li>
          </ul>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="font-semibold mb-3">Tools</h3>
          <ul className="text-sm text-slate-600 space-y-2">
            <li>Figma, Adobe XD</li>
            <li>VS Code</li>
            <li>Git, GitHub</li>
            <li>OpenCV, EasyOCR</li>
          </ul>
        </GlassCard>
      </div>
    </div>
  );
}
