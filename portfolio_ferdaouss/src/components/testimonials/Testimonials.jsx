import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

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

      <div className="container testimonials_container">
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <article key={index} className='testimonial'>
                <div className="client_avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>
                  {review}
                </small>

              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials