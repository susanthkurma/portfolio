export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-white text-gray-900"
    >
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-lg text-gray-600 mb-10">
          Feel free to connect with me for opportunities,
          collaborations, or just to say hello.
        </p>

        <div className="space-y-4 text-lg">

          <p>
            <span className="font-semibold">📧 Email:</span>{"susanthkurma3@gmail.com "}
            susanthkurma3@gmail.com
          </p>

          <p>
            <span className="font-semibold">💼 LinkedIn:</span>{" "}
            <a
              href="https://linkedin.com/in/susanth-kurma-56aa76160"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/susanth-kurma-56aa76160
            </a>
          </p>

          <p>
            <span className="font-semibold">💻 GitHub:</span>{" "}
            <a
              href="https://github.com/susanthkurma/portfolio"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              github.com/susanthkurma/portfolio
            </a>
          </p>

        </div>

      </div>
    </section>
  );
}