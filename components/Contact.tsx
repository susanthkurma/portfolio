import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-white text-gray-900"
    >
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Let's Connect
        </h2>

        <div className="flex justify-center gap-10">

          <a
            href="https://github.com/susanthkurma/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300"
            aria-label="GitHub"
          >
            <Github size={45} />
          </a>

          <a
            href="https://linkedin.com/in/susanth-kurma-56aa76160"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300 text-blue-600"
            aria-label="LinkedIn"
          >
            <Linkedin size={45} />
          </a>

          <a
            href="mailto:susanthkurma3@gmail.com"
            className="hover:scale-110 transition duration-300 text-red-500"
            aria-label="Email"
          >
            <Mail size={45} />
          </a>

        </div>

      </div>
    </section>
  );
}