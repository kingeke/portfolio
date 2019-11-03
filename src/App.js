import React, { Component } from 'react'
import Navbar from './components/includes/Navbar';
import { reactNative, afterEffects, kainetix, yalla, tecky, graphics, calendarApp, perspective } from './components/includes/Pictures';
import Home from './components/Home';
import About from './components/About';
import RecentWorks from './components/RecentWorks';
import Contact from './components/Contact';

export default class App extends Component {

	state = {
		navbarActive: false,
		skills: [
			{
				name: 'Front-End',
				skills: [
					{
						name: 'bootstrap',
						type: 'i',
						icon: 'devicon-bootstrap-plain-wordmark colored'
					},
					{
						name: 'css',
						type: 'i',
						icon: 'devicon-css3-plain-wordmark colored'
					},
					{
						name: 'html',
						type: 'i',
						icon: 'devicon-html5-plain-wordmark colored'
					},
					{
						name: 'javascript',
						type: 'i',
						icon: 'devicon-javascript-plain colored'
					},
					{
						name: 'jquery',
						type: 'i',
						icon: 'devicon-jquery-plain-wordmark colored'
					},
					{
						name: 'react',
						type: 'i',
						icon: 'devicon-react-original-wordmark colored'
					},
					{
						name: 'reactNative',
						type: 'img',
						icon: reactNative
					},
					{
						name: 'vue',
						type: 'i',
						icon: 'devicon-vuejs-plain-wordmark colored'
					}
				]
			},
			{
				name: 'Back-End',
				skills: [
					{
						name: 'laravel',
						type: 'i',
						icon: 'devicon-laravel-plain-wordmark colored'
					},
					{
						name: 'nodejs',
						type: 'i',
						icon: 'devicon-nodejs-plain-wordmark colored'
					},
					{
						name: 'php',
						type: 'i',
						icon: 'devicon-php-plain colored'
					},
					{
						name: 'mysql',
						type: 'i',
						icon: 'devicon-mysql-plain-wordmark colored'
					}
				]
			},
			{
				name: 'Graphics',
				skills: [
					{
						name: 'illustrator',
						type: 'i',
						icon: 'devicon-illustrator-plain colored',
						title: 'Adobe Illustrator'
					},
					{
						name: 'afterEffects',
						type: 'img',
						icon: afterEffects,
						title: 'Adobe After Effects'
					},
					{
						name: 'figma',
						type: 'i',
						icon: 'fab fa-figma',
						title: 'Figma'
					}
				]
			},
			{
				name: 'Others',
				skills: [
					{
						name: 'word',
						type: 'i',
						icon: 'fas fa-file-word',
						title: 'Microsoft Word'
					},
					{
						name: 'powerpoint',
						type: 'i',
						icon: 'fas fa-file-powerpoint',
						title: 'Microsoft Powerpoint'
					},
					{
						name: 'excel',
						type: 'i',
						icon: 'fas fa-file-excel',
						title: 'Microsoft Excel'
					}
				]
			}
		],
		websites: [
			{
				title: 'Calendar App',
				type: 'website',
				description: 'A calendar application to manage a users appointments',
				languages: 'Laravel, MySql, HTML, CSS, Bootstrap, React, Redux',
				timeline: '4 days',
				images: calendarApp,
				link: 'https://calendar-appointments.herokuapp.com',
				gitHubLink: 'https://github.com/kingeke/Calendar-App'
			},
			{
				title: 'Perspective MBTI',
				type: 'website',
				description: 'A project to calculate your MBTI based on questions',
				languages: 'Laravel, MySql, HTML, CSS, Bootstrap, React, Redux',
				timeline: '2 days',
				images: perspective,
				gitHubLink: 'https://github.com/kingeke/Perspective-MBTI-Test'
			},
			{
				title: 'Kainetix Sports',
				type: 'website',
				description: 'Kainetix Sports Management is a talent management and sports marketing specialist, taking advantage of the abundance of talents in the African region',
				languages: 'Laravel, MySql, HTML, CSS, Bootstrap',
				timeline: '2 months',
				images: kainetix,
				link: 'http://kainetix-sports.herokuapp.com'
			},
			{
				title: 'Tecky Solutions',
				type: 'website',
				description: 'Tecky is aimed at connecting freelance creators in programming, photoshop, designing e.t.c. with clients looking for these creators to build a project.',
				languages: 'Laravel, MySql, HTML, CSS, Bootstrap',
				timeline: '1 month',
				images: tecky,
				link: 'https://tecky.com.ng/'
			},
			{
				title: 'Yalla! Express',
				type: 'website',
				description: 'Yalla! Express is licensed by the Nigerian Postal Service Courier Regulatory Department (“NIPOST CRD”), to provide courier services to customers in Nigeria. They offer same day pickup and delivery solutions to individual and corporate customers across Lagos, Nigeria.',
				languages: 'React, Laravel, MySql, HTML, CSS, Bootstrap',
				timeline: '2 months',
				images: yalla,
				link: 'https://yallaexpress.com/'
			}
		],
		graphics: graphics
	}


	handleNavBar = () => {
		this.setState({
			navbarActive: !this.state.navbarActive
		})
	}

	render() {
		return (
			<div className={this.state.navbarActive ? 'side-nav-active' : ''}>
				<Navbar handleNavBar={this.handleNavBar} />
				<div className="main-content">
					<Home handleNavBar={this.handleNavBar} />
					<About skills={this.state.skills} />
					<RecentWorks websites={this.state.websites} graphics={this.state.graphics} />
					<Contact />
				</div>
			</div>
		)
	}
}