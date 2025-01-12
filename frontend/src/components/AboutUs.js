import React from 'react'

const AboutUs = () => {
  return (
    <div className='relative min-h-screen bg-gradient-to-br from-slate-50 to-white overflow-hidden'>
     ;<style>
  {`
    .notch {
      width: 180px;
      height: 40px;
      background: linear-gradient(90deg, #1e3a8a, #2563eb);
      border-radius: 0 0 20px 20px;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    .notch span {
      color: #ffffff;
      font-size: 1rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    .notch::before {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      background: #4ade80;
      border-radius: 50%;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
      box-shadow: 0 0 6px #4ade80;
    }

    .notch::after {
      content: '';
      position: absolute;
      width: 80px;
      height: 6px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 4px;
      top: 50%;
      left: calc(50% - 40px);
      transform: translateY(-50%);
    }
  `}
</style>


      {/* Background Dots */}
      {Array(15)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className='floating-dot absolute w-2 h-2 rounded-full bg-gray-200/40'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}

      {/* Notch with Contact */}
      <div className='notch'>
        <span className='text-white text-xs font-medium'>Contact Us</span>
      </div>

      {/* Main Content */}
      <div className='relative mt-8 bg-gradient-to-br from-slate-800 to-slate-900 py-20 px-4'>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCA0LTRzNCAxIDQgNGMwIDItMiA0LTQgNHMtNC0yLTQtNHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-10" />

        <div className='max-w-7xl mx-auto'>
          <div className='text-center max-w-4xl mx-auto mb-16 space-y-6'>
            <h2 className='text-4xl md:text-5xl font-bold text-white leading-tight'>
              A Modern Approach with
              <span className='block bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent'>
                Modern Furniture Pacific
              </span>
            </h2>

            <p className='text-lg md:text-xl text-gray-100/90 leading-relaxed'>
              Experience comfort and style with our handcrafted furniture.
              Discover the story behind our passionate mission to transform
              spaces into luxurious havens. With a commitment to quality and
              design, we create pieces that inspire and elevate every room in
              your home.
            </p>

            <button className='group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full font-semibold text-white text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
              Learn More
              <svg
                className='ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1'
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
          </div>

          {/* Image Grid Section */}
          <div className='max-w-5xl mx-auto px-4'>
            <div className='relative bg-white p-1 rounded-2xl shadow-2xl image-grid'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-1 rounded-xl overflow-hidden'>
                <img
                  src='https://picsum.photos/800/600?random=1'
                  alt='Modern Furniture'
                  className='w-full h-64 object-cover hover:opacity-90 transition-opacity duration-300'
                />
                <div className='grid grid-rows-2 gap-1'>
                  <img
                    src='https://picsum.photos/800/600?random=2'
                    alt='Interior Design'
                    className='w-full h-32 object-cover hover:opacity-90 transition-opacity duration-300'
                  />
                  <img
                    src='https://picsum.photos/800/600?random=3'
                    alt='Craftsmanship'
                    className='w-full h-32 object-cover hover:opacity-90 transition-opacity duration-300'
                  />
                </div>
              </div>

              {/* Stats Section */}
              <div className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white px-8 py-4 rounded-2xl shadow-xl flex gap-12'>
                {[
                  { value: '15+', label: 'Years Experience' },
                  { value: '2000+', label: 'Happy Clients' },
                  { value: '500+', label: 'Furniture Pieces' }
                ].map((stat, index) => (
                  <div key={index} className='text-center'>
                    <div className='text-2xl font-bold text-indigo-600'>
                      {stat.value}
                    </div>
                    <div className='text-sm text-gray-600'>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
