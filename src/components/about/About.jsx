import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
	return (
		<section id='about'>
			<h5>Get to know</h5>
			<h2>About me</h2>

			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={ME} alt="About image" />
					</div>
				</div>

				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<FaAward className='about__icon'/>
							<h5>Experience</h5>
							<small>7+ month working</small>
						</article>

						<article className='about__card'>
							<FiUsers className='about__icon'/>
							<h5>Clients</h5>
							<small>10+ worldwide</small>
						</article>

						<article className='about__card'>
							<VscFolderLibrary className='about__icon'/>
							<h5>Projects</h5>
							<small>20+ completed</small>
						</article>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eveniet nam temporibus molestias accusantium eum id optio reprehenderit fuga dolore rerum dolor, aliquam voluptas hic! A facilis rerum exercitationem nulla?
					</p>

					<a href="#contact" className='btn btn-primary'>Let's talk</a>
				</div>
			</div>
		</section>
	)
}

export default About;