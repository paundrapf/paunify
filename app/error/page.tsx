export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Oops! Something went wrong</h1>
        <p className="mb-4">We encountered an error while processing your request.</p>
        <a href="/" className="text-blue-500 hover:underline">
          Go back to home
        </a>
      </div>
    </div>
  )
}

