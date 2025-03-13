import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-4.jpg'
import ava05 from '../../assets/images/ava-5.jpg'

const Testimonials = () => {
    const settings = {
        dots:true,
        infinite: true,
        autoplay:true,
        speed: 1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
            breakpoint:992,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint:576,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            }  ,
        },
    ],
    };
  return (
 <Slider {...settings}>
<div className="testimonial py-4 px-3">
<p>I had an incredible time booking my vacation through 
    this website! The entire process was smooth and straightforward 
    — from selecting the destination to confirming the booking. The 
    website's clean design and intuitive navigation made it easy to 
    find the perfect tour. The real-time availability updates and 
    detailed descriptions helped me make an informed decision. After 
    the tour, I received a follow-up email with a feedback request, 
    which made me feel valued as a customer. Overall, a fantastic 
    experience — highly recommend it!.</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava01} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>John Doe</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>Booking my trip was a breeze, thanks to the well-organized 
    website. The search feature worked perfectly, and I could 
    easily filter tours based on price and preferences. The 
    payment process was secure, and I got an instant confirmation. 
    What stood out the most was the quick response from customer 
    support when I had a question about the itinerary. The trip 
    itself was well-planned, and I received updates through the 
    website — which made me feel more confident. Would definitely book here again!</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava02} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Lia Franklin</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>The website’s design is visually appealing and easy to 
    navigate. I loved how the tours were listed with high-quality
    images and detailed information about the itinerary. Booking was
    simple, and the Thank You page with the confirmation details 
    gave me peace of mind. The trip itself was amazing — everything 
    matched the descriptions on the website. It’s rare to find such 
    a well-designed and reliable booking platform. I’m already planning my next trip</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava03} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Jack</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>I was impressed with how fast the website loaded and 
    how detailed the tour descriptions were. The Tour Details 
    page had everything I needed to know — from accommodation 
    details to activity options. The booking process was quick, 
    and I appreciated the transparent pricing without hidden fees. 
    After the trip, I received a thoughtful follow-up asking for 
    feedback, which showed they care about improving the experience.
    Highly satisfied with the whole process!</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava04} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Masha</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>I’ve used other travel websites before, but this one
    stands out for its simplicity and reliability. 
    The search feature made it easy to find the right tour, 
    and the booking steps were clear and quick. The Thank You
    page provided all the necessary details, and I even got 
    an email with the itinerary and emergency contact info. 
    The tour itself was well-organized, and everything was 
    exactly as described. It felt like a premium experience 
    without the premium price. I’ll definitely recommend it to my friends!</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava05} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Rosy leo</h6>
    <p>Customer</p>
</div>
</div>
</div>
 </Slider>
  )
}

export default Testimonials
