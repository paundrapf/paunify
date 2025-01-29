import { FadeIn } from "../components/FadeIn"

export default function About() {
  return (
    <main className="min-h-screen pt-20">
      <FadeIn>
        <section className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">About Paunify</h1>
          <div className="max-w-3xl">
            <p className="text-xl mb-6">
              Paunify is your gateway to a deeper understanding of your musical journey on Spotify. Born from a passion
              for music and data visualization, our platform offers a unique and aesthetically pleasing way to explore
              your listening habits.
            </p>
            <p className="text-xl mb-6">
              We believe that your music taste is a reflection of your personality, experiences, and emotions. Paunify
              aims to bring these insights to life through beautiful, interactive visualizations that allow you to see
              your musical story unfold.
            </p>
            <p className="text-xl mb-6">
              From tracking your top artists and songs across different time periods to analyzing your genre preferences
              and listening patterns, Paunify provides a comprehensive view of your Spotify activity. Our goal is to
              help you discover new insights about your music taste and rediscover forgotten favorites.
            </p>
            <p className="text-xl">
              Whether you're a casual listener or a music aficionado, Paunify offers something for everyone. Dive in,
              explore your stats, and let the music tell your story.
            </p>
          </div>
        </section>
      </FadeIn>
    </main>
  )
}

