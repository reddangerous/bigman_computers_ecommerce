import React, { useEffect, useRef, useState } from 'react'

const Categories = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => {
      if (!sectionRef.current) return
      const top = sectionRef.current.getBoundingClientRect().top
      const isVisible = top < window.innerHeight - 100
      setIsVisible(isVisible)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50'>
      {/* Animated Background */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute w-full h-full animate-float'>
          <div className='absolute top-1/4 left-1/4 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
          <div className='absolute top-1/3 right-1/4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
          <div className='absolute bottom-1/4 left-1/3 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
        </div>
      </div>

      {/* Main Content */}
      <div className='relative z-10 px-4 py-20'>
        {/* Category Label */}
        <div
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-20'
          }`}
        >
          <div className='bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-3 rounded-full text-xl font-bold shadow-lg'>
            Categories
          </div>
        </div>

        {/* Content Container */}
        <div
          ref={sectionRef}
          className={`max-w-7xl mx-auto mt-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className='backdrop-filter backdrop-blur-lg bg-white/30 p-8 rounded-3xl shadow-2xl border border-white/20'>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              {/* Text Content */}
              <div className='space-y-6'>
                <h2 className='text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent'>
                  Materials We Use
                </h2>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  Our furniture is crafted from high-quality materials that
                  ensure durability and style. We use plywood for its strength
                  and lightweight properties, wool fabric for comfort and
                  elegance, and oak wood for its timeless beauty and resilience.
                </p>
                <button
                  className='relative group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full 
                  text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-pink-500/50 hover:scale-105'
                >
                  <span className='relative z-10'>Get Started →</span>
                  <div className='absolute inset-0 rounded-full bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </button>
              </div>

              {/* Image Container */}
              <div className='relative group'>
                <div className='absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300'></div>
                <div className='relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-[1.02]'>
                  <div className='absolute inset-0 bg-gradient-to-tr from-pink-200/30 to-purple-200/30 mix-blend-overlay'></div>
                  <img
                    src='https://picsum.photos/800/600?random=1'
                    alt='Materials'
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  )
}

export default Categories
