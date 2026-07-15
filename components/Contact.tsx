import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-white text-gray-900"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-10">
          Let's Connect
        </h2>

        <div className="flex justify-center gap-8">

          <a
            href="https://github.com/susanthkurma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/github.png"
              alt="GitHub"
              width={50}
              height={50}
              className="hover:scale-110 transition duration-300"
            />
          </a>

          <a
            href="https://linkedin.com/in/susanth-kurma-56aa76160"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/linkedin.png"
              alt="LinkedIn"
              width={50}
              height={50}
              className="hover:scale-110 transition duration-300"
            />
          </a>

          <a href="mailto:susanthkurma3@gmail.com">
            <Image
              src="/icons/gmail.png"
              alt="Email"
              width={50}
              height={50}
              className="hover:scale-110 transition duration-300"
            />
          </a>
          <a href="">
            <Image
              src="/icons/instagram.png"
              alt="Instagram"
              width={50}
              height={50}
              className="hover:scale-110 transition duration-300"
            />
          </a>

        </div>

      </div>
    </section>
  );
}
