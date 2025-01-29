import Link from "next/link"
import { FadeIn } from "./components/FadeIn"
import Login from "./components/Login"

export default function Home() {
  return (
    <main className="min-h-screen">
      <FadeIn>
        <section className="h-screen flex items-center justify-center text-center">
          <div>
            <h1 className="text-6xl font-bold mb-4">Welcome to Paunify</h1>
            <p className="text-xl mb-8">Discover your Spotify listening habits in style</p>
            <Login />
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="min-h-screen flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-6">Dive Deep into Your Music Journey</h2>
            <p className="text-xl mb-8">
              Paunify offers a comprehensive look at your Spotify listening habits. From your top tracks and artists to
              your genre preferences and listening time, we've got it all covered.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-left">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Top Tracks
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Top Artists
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Genre Breakdown
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Listening Time
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Mood Analysis
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Playlist Insights
              </li>
            </ul>
          </div>
        </section>
      </FadeIn>
    </main>
  )
}

