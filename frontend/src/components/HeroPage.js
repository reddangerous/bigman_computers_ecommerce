import React, { useEffect, useState } from 'react'

const HeroPage = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Generate dots programmatically
  const dots = Array(20).fill(null)

  return (
    <div className='relative min-h-screen bg-gradient-to-br from-slate-50 to-white overflow-hidden'>
      <style>
        {`
          @keyframes float {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-20px, -20px) scale(1.2); }
            100% { transform: translate(0, 0) scale(1); }
          }
          
          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .animate-float {
            animation: float 3s infinite ease-in-out;
          }

          .dot {
            position: absolute;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: rgba(244, 114, 182, 0.3);
            animation: float 3s infinite ease-in-out;
          }

          .hero-content {
            opacity: 0;
            transform: translateY(20px);
            animation: slideUp 0.8s forwards;
          }

          .hero-image {
            opacity: 0;
            transform: scale(0.8);
            animation: fadeIn 0.8s 0.2s forwards;
          }

          .is-loaded .hero-content {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>

      {/* Animated background dots */}
      {dots.map((_, i) => (
        <div
          key={i}
          className='dot'
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div
            className={`space-y-8 hero-content ${isLoaded ? 'is-loaded' : ''}`}
          >
            <div className='relative'>
              <div className='absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-green-300 to-green-500 rounded-full blur-xl opacity-20' />
              <h1 className='text-5xl md:text-6xl font-bold leading-tight'>
                <span className='bg-gradient-to-r from-green-600 to-pink-500 bg-clip-text text-transparent'>
                  Redefine
                </span>
                <br />
                Your Living Space
              </h1>
            </div>

            <p className='text-lg text-gray-600 max-w-lg'>
              Experience the perfect blend of comfort and style with our
              handcrafted furniture pieces, designed to transform your space
              into a pacific paradise.
            </p>

            <div className='flex gap-4'>
              <button className='px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold shadow-lg shadow-green-500/30 flex items-center gap-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
                Explore Collection
                <svg
                  className='w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </button>

              <button className='px-8 py-4 border-2 border-pink-400 text-pink-500 rounded-xl font-semibold hover:bg-pink-50 transition-all duration-300 hover:-translate-y-1'>
                View Catalog
              </button>
            </div>

            <div className='flex items-center gap-4 bg-white p-4 rounded-xl shadow-lg max-w-max transform transition-all duration-300 hover:-translate-y-1'>
              <div className='flex -space-x-2'>
                {[1, 2, 3].map(i => (
                  <div
                    key={i}
                    className='w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-red-400 border-2 border-white'
                  />
                ))}
              </div>
              <div>
                <div className='text-yellow-500 flex'>{'★'.repeat(5)}</div>
                <p className='text-sm text-gray-600'>
                  <span className='font-bold'>4.9</span> (10.2k+ Reviews)
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Furniture Image */}
          <div className='relative hero-image'>
            <div className='absolute inset-0 bg-gradient-to-r from-green-300/20 to-pink-300/20 rounded-3xl blur-3xl' />
            <div className='relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-white shadow-2xl transform transition-all duration-300 hover:-translate-y-2'>
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
              <img
                src='https://picsum.photos/1200/900?random=1'
                alt='Modern Furniture'
                className='w-full h-full object-cover'
              />

              {/* Floating card */}
              <div className='absolute bottom-4 left-4 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-1'>
                <p className='font-semibold text-gray-800'>Premium Quality</p>
                <p className='text-sm text-gray-600'>Handcrafted with love</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage
