import Image from 'next/image';

export default function Home() {
  return (
    <div className="section-wrapper">
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            I’m <span className="gradient-text">Ayush Bhosale</span>
          </h1>
          <p className="mt-6 text-slate-500 max-w-xl">
            I’m an AI/ML engineering student building practical AI applications —
            from healthcare chatbots to computer-vision security systems. I
            combine machine learning, Python tooling, and practical web frontends.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="/work" className="px-6 py-3 bg-gradient-to-r from-primaryStart to-primaryEnd text-white nav-tab shadow-glow inline-block">View Work</a>
            <a href="/contact" className="px-6 py-3 border-2 border-primaryStart text-primaryStart nav-tab">Contact Me</a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="rounded-full p-4 bg-white/80 shadow-lg" style={{ width: 260, height: 260 }}>
            <Image
              src="/me.jpeg"
              alt="Ayush"
              width={232}
              height={232}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
