import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        <div className="w-full text-left mb-8">
          <h2 className="font-playfair text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Discover the{" "}
            <span className="text-sky-600">
              best of Hikkaduwa
            </span>
          </h2>

          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
            WhyNot sits at the heart of everything that makes this beach town magical
          </p>
        </div>
        {/* <Title align='left' title='Discover the best of Hikkaduwa' subTitle='WhyNot sits at the heart of everything that makes this beach town magical' /> */}
        <button
  className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12
             px-5 py-2.5 rounded-xl
             bg-white/10 border border-white/30 backdrop-blur-md
             shadow-[0_8px_25px_rgba(0,0,0,0.15)]
             hover:bg-white/20 transition-all"
  onClick={() =>
    window.open(
      "https://web.facebook.com/profile.php?id=61580964269684&sk=photos",
      "_blank"
    )
  }
>
  View All Offers
  <img
    src={assets.arrowIcon}
    alt="arrow-icon"
    className="group-hover:translate-x-1 transition-all"
  />
</button>


      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
        {exclusiveOffers.map((item)=>(
            <div key={item._id} className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url(${item.image})`}}>
                <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full'>{item.priceOff}% OFF</p>
                <div>
                    <p className='text-2xl font-medium font-playfair'>{item.title}</p>
                    <p>{item.description}</p>
                    <p className='text-xs text-white/70 mt-3'>Expires {item.expiryDate}</p>
                </div>
                <button
  onClick={() => window.open("https://web.facebook.com/profile.php?id=61580964269684&sk=photos", "_blank")}
  className='flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5'
>
  View Offers
  <img
    className='invert group-hover:translate-x-1 transition-all'
    src={assets.arrowIcon}
    alt="arrow-icon"
  />
</button>

            </div>
        ))}
      </div>
    </div>
  )
}

export default ExclusiveOffers
