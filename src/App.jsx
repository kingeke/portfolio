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
        websiteVisitLink: 'https://hooks.slack.com/services/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',
        navbarActive: false,
        skills,
        websites,
        graphics
    };

    componentDidMount = async () => {

        if (window.location.href.includes("localhost") || window.location.href.includes("127.0.0.1")) {

            return;
        }

        try {

            let ipResponse = await Axios.get("https://api.ipify.org/?format=json");

            let ip = ipResponse?.data?.ip;

            if (ip) {

                let ipInfoResponse = await Axios.get(`http://api.ipstack.com/${ip}?access_key=59b101f39fe0b4aafecbcdcbbbbd2100`);

                if (ipInfoResponse?.data?.country_name) {

                    let request = ipInfoResponse?.data;

                    await Axios.post(this.state.websiteVisitLink, {
                        "text": `
                            Country Code: ${request?.country_code} /n
                            Country Name: ${request?.country_name} /n
                            City: ${request?.city} /n   
                            Postal: ${request?.postal} /n   
                            Latitude: ${request?.latitude} /n   
                            Longitude: ${request?.longitude} /n   
                            IPv4: ${request?.ip} /n   
                            Continent: ${request?.continent_name} /n   
                        `
                    });
                }
            }

        } catch (e) {


        }

    };

    handleNavBar = () => {
        this.setState({
            navbarActive: !this.state.navbarActive
        });
    };

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
        );
    }
}