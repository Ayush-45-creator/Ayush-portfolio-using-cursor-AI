'use client';

export default function Contact() {
  return (
    <div className="section-wrapper" id="contact">
      <h2 className="section-heading text-center mb-10">
        Get In <span className="gradient-text">Touch</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* LEFT SIDE SECTION */}
        <div>
          <p className="text-slate-700 text-lg mb-6">
            I’m always open to discussing new projects, collaborations, or opportunities. 
            Whether you have a question or just want to say hi, feel free to contact me using 
            any of the options below!
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ayush-bhosale-0ab131283/"
              target="_blank"
              className="p-4 rounded-lg border flex flex-col items-center justify-center hover:bg-slate-100 transition"
            >
              <span className="text-xl">💼</span>
              <p className="font-medium text-sm mt-2">LinkedIn</p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Ayush-45-creator"
              target="_blank"
              className="p-4 rounded-lg border flex flex-col items-center justify-center hover:bg-slate-100 transition"
            >
              <span className="text-xl">🐙</span>
              <p className="font-medium text-sm mt-2">GitHub</p>
            </a>

            {/* Email */}
            <a
              href="mailto:bhosaleayush31@gmail.com"
              className="p-4 rounded-lg border flex flex-col items-center justify-center hover:bg-slate-100 transition"
            >
              <span className="text-xl">📧</span>
              <p className="font-medium text-sm mt-2">Email</p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918010189233"
              target="_blank"
              className="p-4 rounded-lg border flex flex-col items-center justify-center hover:bg-slate-100 transition"
            >
              <span className="text-xl">📱</span>
              <p className="font-medium text-sm mt-2">WhatsApp</p>
            </a>

          </div>
        </div>

        {/* RIGHT SIDE FORM – Web3Forms */}
        <div className="border rounded-xl p-6 shadow-md bg-white">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-4"
          >
            <input
              type="hidden"
              name="access_key"
              value="e0aae5dc-974c-45d3-b714-f6903b1e1791"
            />

            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                name="name"
                required
                className="w-full p-3 border rounded-md mt-1"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full p-3 border rounded-md mt-1"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                required
                className="w-full p-3 border rounded-md h-32 mt-1"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-primaryStart text-white font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
