import { FadeIn } from "../components/FadeIn"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-20">
      <FadeIn>
        <section className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="max-w-3xl">
            <p className="text-xl mb-6">
              At Paunify, we take your privacy seriously. This policy outlines how we collect, use, and protect your
              personal information when you use our service.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4">
              When you use Paunify, we collect information from your Spotify account through the Spotify API. This
              includes:
            </p>
            <ul className="list-disc list-inside mb-6">
              <li>Your Spotify username</li>
              <li>Your listening history</li>
              <li>Your top tracks, artists, and genres</li>
              <li>Your playlists</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-6">
              We use the collected information solely to provide you with personalized statistics and insights about
              your Spotify listening habits. We do not share, sell, or use your data for any other purposes.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="mb-6">
              We implement industry-standard security measures to protect your data from unauthorized access,
              alteration, or destruction. Your Spotify authentication tokens are encrypted and securely stored.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="mb-6">
              You have the right to access, correct, or delete your personal information at any time. You can also
              revoke Paunify's access to your Spotify data through your Spotify account settings.
            </p>
            <p className="text-xl">
              By using Paunify, you agree to the terms outlined in this privacy policy. If you have any questions or
              concerns, please don't hesitate to contact us.
            </p>
          </div>
        </section>
      </FadeIn>
    </main>
  )
}

