import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Sarah',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt nihil aliquid omnis consectetur labore! Hic, doloremque? Architecto, in laudantium, velit necessitatibus eveniet illo incidunt facilis possimus, voluptates unde soluta.'
  },
  {
    avatar: AVTR2,
    name: 'Sarah',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt nihil aliquid omnis consectetur labore! Hic, doloremque? Architecto, in laudantium, velit necessitatibus eveniet illo incidunt facilis possimus, voluptates unde soluta.'
  },
  {
    avatar: AVTR3,
    name: 'Sarah',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt nihil aliquid omnis consectetur labore! Hic, doloremque? Architecto, in laudantium, velit necessitatibus eveniet illo incidunt facilis possimus, voluptates unde soluta.'
  },
  {
    avatar: AVTR4,
    name: 'Sarah',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt nihil aliquid omnis consectetur labore! Hic, doloremque? Architecto, in laudantium, velit necessitatibus eveniet illo incidunt facilis possimus, voluptates unde soluta.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client_avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>
                  {review}
                </small>

              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials