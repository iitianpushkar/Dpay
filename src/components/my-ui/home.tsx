function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Welcome to Buy Now Pay Never</h1>
          <p className="text-lg text-gray-200 mb-8">
            Stake your ETH/MATIC to earn rewards while your yields take care of your expenditures. 
            A smarter way to maximize your crypto assets.
          </p>
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full shadow-lg">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition">
            <h3 className="text-2xl font-bold mb-4">Stake Tokens</h3>
            <p className="text-gray-400">
              Stake your ETH or MATIC to earn rewards and maximize your crypto potential.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition">
            <h3 className="text-2xl font-bold mb-4">Earn Rewards</h3>
            <p className="text-gray-400">
              Enjoy a consistent yield that helps cover your expenditures automatically.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition">
            <h3 className="text-2xl font-bold mb-4">Track Your Growth</h3>
            <p className="text-gray-400">
              Stay updated with real-time stats on your rewards and staking performance.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
        <p className="text-gray-400 mb-6">
          Join thousands of users who are staking smarter with Buy Now Pay Never.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg">
          Connect Wallet
        </button>
      </section>
    </div>
  );
}

export default Home;
