import Axios from 'axios';
import React, { Component } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/includes/Navbar';
import { graphics } from './components/includes/Pictures';
import RecentWorks from './components/RecentWorks';
import { skills, websites } from './data/portfolio';

export default class App extends Component {

	state = {
		websiteVisitLink: 'https://api.tecky.com.ng/api/website-visit',
		navbarActive: false,
		skills,
		websites,
		graphics
	}

	componentDidMount = () => {
		Axios.get('https://geoip-db.com/json/')
			.then((response) => {

				var ip = response.data.IPv4

				var visitor = sessionStorage.getItem('visitor')

				if (!visitor || visitor !== ip) {
					Axios.post(this.state.websiteVisitLink, response.data)
						.then(() => {
							sessionStorage.setItem("visitor", ip)
						})
						.catch(() => null)
				}
			})
			.catch(() => null)
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