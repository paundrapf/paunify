import { FadeIn } from "../components/FadeIn"

export default function Contact() {
  return (
    <main className="min-h-screen pt-20">
      <FadeIn>
        <section className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <div className="max-w-3xl">
            <p className="text-xl mb-6">
              We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, don't
              hesitate to reach out.
            </p>
            <p className="text-xl mb-6">You can contact us via email at:</p>
            <p className="text-2xl font-semibold mb-8">
              <a href="mailto:paunndev@gmail.com" className="text-green-400 hover:underline">
                paunndev@gmail.com
              </a>
            </p>
            <p className="text-xl mb-6">
              We strive to respond to all inquiries within 24-48 hours. Your feedback is invaluable to us as we continue
              to improve Paunify and provide the best possible experience for our users.
            </p>
            <p className="text-xl">Thank you for using Paunify. We look forward to hearing from you!</p>
          </div>
        </section>
      </FadeIn>
    </main>
  )
}

