import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import RecentWorks from './components/RecentWorks';
import Navbar from './components/includes/Navbar';
import { graphics } from './components/includes/Pictures';
import { skills, websites } from './data/portfolio';

export default function App() {

    const [state, setState] = useState({
        websiteVisitLink: 'https://hooks.slack.com/services/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',
        navbarActive: false,
        skills,
        websites,
        graphics
    });

    useEffect(() => {

        logVisit();

    }, []);

    const logVisit = async () => {

        if (window.location.href.includes("localhost") || window.location.href.includes("127.0.0.1")) {

            return;
        }

        try {

            let ipResponse = await Axios.get("https://api.ipify.org/?format=json");

            let ip = ipResponse?.data?.ip;

            if (ip) {

                let ipInfoResponse = await Axios.get(`https://ipapi.co/${ip}/json`);

                if (ipInfoResponse?.data?.country_name) {

                    let request = ipInfoResponse?.data;

                    let data = [
                        {
                            key: 'Country Code',
                            value: request?.country_code
                        },
                        {
                            key: 'Country Name',
                            value: request?.country_name
                        },
                        {
                            key: 'City',
                            value: request?.city
                        },
                        {
                            key: 'Latitude',
                            value: request?.latitude
                        },
                        {
                            key: 'Longitude',
                            value: request?.longitude
                        },
                        {
                            key: 'IP',
                            value: ip
                        },
                        {
                            key: 'Timezone',
                            value: request?.timezone
                        },
                    ];

                    let payload = {
                        "blocks": [
                            {
                                "type": "header",
                                "text": {
                                    "type": "plain_text",
                                    "text": "New website visit",
                                    "emoji": true
                                }
                            },
                            {
                                "type": "section",
                                "block_id": "section789",
                                "fields": data.map((item) => ({
                                    type: "mrkdwn",
                                    text: `*${item.key}*: ${item.value}`
                                }))
                            }
                        ]
                    };

                    await Axios.post(state.websiteVisitLink, payload);
                }
            }

        } catch (e) {


        }
    };

    const handleNavBar = () => {
        setState((old) => ({
            ...old,
            navbarActive: !state.navbarActive
        }));
    };

    return (
        <div className={state.navbarActive ? 'side-nav-active' : ''}>
            <Navbar handleNavBar={handleNavBar} />
            <div className="main-content">
                <Home handleNavBar={handleNavBar} />
                <About skills={state.skills} />
                <RecentWorks websites={state.websites} graphics={state.graphics} />
                <Contact />
            </div>
        </div>
    );
}
