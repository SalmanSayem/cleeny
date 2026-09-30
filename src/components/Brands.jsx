import React from 'react'

const Brands = () => {
  return (
    <section className='bg-[#F3F4F8] pt-22 pb-19.25'>
        <div className="container">
            <div className='grid grid-cols-5 items-center'>
                <div>
                    <img className='m-auto' src="brand-img.png" alt="brand-img" />
                </div>
                <div>
                    <img className='m-auto' src="brand-img2.png" alt="brand-img" />
                </div>
                <div>
                    <img className='m-auto' src="brand-img3.png" alt="brand-img" />
                </div>
                <div>
                    <img className='m-auto' src="brand-img4.png" alt="brand-img" />
                </div>
                <div>
                    <img className='m-auto' src="brand-img5.png" alt="brand-img" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Brands
