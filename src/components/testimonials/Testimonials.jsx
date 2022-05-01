import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

import "swiper/css";
import "swiper/css/pagination";

const data = [
	{
		id: 1,
		avatar: AVTR1,
		name: 'Tina Snow'
	},
	{
		id: 2,
		avatar: AVTR2,
		name: 'Shatta Wale'
	},
	{
		id: 3,
		avatar: AVTR3,
		name: 'Kwame Despite'
	},
	{
		id: 4,
		avatar: AVTR4,
		name: 'Nana Ama McBrown'
	}
]

const Testimonials = () => {
	return (
		<section id='testimonials'>
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<Swiper pagination={true} modules={[Pagination]} className='container testimonials__container mySwiper'>
				{
					data.map(({id,avatar,name})=> {
						return (
							<SwiperSlide className='testimonial' key={id}>
								<div className='client__avatar'>
									<img src={avatar} alt="Avatar" />
								</div>
								<h5 className='client__name'>{name}</h5>
								<small className='client__review'>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat perferendis porro corrupti sed fuga autem magnam, laboriosam, aperiam soluta omnis qui deleniti ipsum non sequi, dolorem recusandae nisi vitae ab?
								</small>
							</SwiperSlide>
						)
					})
				}
			</Swiper>
		</section>
	)
}

export default Testimonials;