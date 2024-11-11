import { useState, useEffect } from 'react'
import {  Coins, TreeDeciduous, Recycle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [
    '/placeholder.svg?height=600&width=1200',
    '/placeholder.svg?height=600&width=1200',
    '/placeholder.svg?height=600&width=1200'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-green-50">
      <header className="bg-green-600 text-white p-4 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">EcoTracker</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="/login" className="hover:underline">Login</a></li>
              <li><a href="/signup" className="hover:underline">Sign Up</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={img} alt={`Sustainability image ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center text-white">
            <h2 className="text-5xl font-bold mb-4 animate-fade-in-down">Track Your Impact, Earn Rewards</h2>
            <p className="text-xl mb-8 animate-fade-in-up">Join EcoTracker and turn your recycling efforts into eco-points!</p>
            <button className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition duration-300 animate-pulse">
              Get Started
            </button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center text-green-800 mb-12">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Recycle  className="w-12 h-12 text-green-600" />}
                title="Log Your Recycling"
                description="Record the weight and date of your recycled garbage."
              />
              <FeatureCard
                icon={<Coins  className="w-12 h-12 text-green-600" />}
                title="Earn Eco-Points"
                description="Get rewarded for your environmental efforts."
              />
              <FeatureCard
                icon={<TreeDeciduous className="w-12 h-12 text-green-600" />}
                title="Redeem Rewards"
                description="Exchange your points for eco-friendly products and services."
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-100">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="/placeholder.svg?height=400&width=600" alt="Eco-friendly lifestyle" className="rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h3 className="text-3xl font-bold text-green-800 mb-4">Join the Green Revolution</h3>
                <p className="text-xl text-green-700 mb-8">Start tracking your impact and earning rewards today!</p>
                <Link to='/signup'>
                <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300 flex items-center justify-center animate-bounce">
                  Sign Up Now
                  <ArrowRight  className="w-5 h-5 ml-2" />
                </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold text-green-800 mb-8">Our Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ImpactCard number="10,000+" label="Users" />
              <ImpactCard number="500,000 kg" label="Waste Recycled" />
              <ImpactCard number="50,000+" label="Trees Planted" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 EcoTracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105">
      <div className="flex justify-center mb-4">{icon}</div>
      <h4 className="text-xl font-semibold text-green-700 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function ImpactCard({ number, label }) {
  return (
    <div className="bg-green-600 text-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
      <h4 className="text-4xl font-bold mb-2">{number}</h4>
      <p className="text-xl">{label}</p>
    </div>
  )
}
