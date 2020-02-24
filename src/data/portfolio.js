import { afterEffects, reactNative, renWorldBank, calendarApp, perspective, kainetix, tecky, yalla, acerDevelopment } from "../components/includes/Pictures";

export const skills = [
    {
        name: 'Front-End',
        skills: [
            {
                name: 'bootstrap',
                type: 'i',
                icon: 'devicon-bootstrap-plain-wordmark colored',
                hoverTitle: 'Bootstrap'
            },
            {
                name: 'css',
                type: 'i',
                icon: 'devicon-css3-plain-wordmark colored',
                hoverTitle: 'CSS'
            },
            {
                name: 'html',
                type: 'i',
                icon: 'devicon-html5-plain-wordmark colored',
                hoverTitle: 'HTML'
            },
            {
                name: 'javascript',
                type: 'i',
                icon: 'devicon-javascript-plain colored',
                hoverTitle: 'Javascript'
            },
            {
                name: 'jquery',
                type: 'i',
                icon: 'devicon-jquery-plain-wordmark colored',
                hoverTitle: 'Jquery'
            },
            {
                name: 'react',
                type: 'i',
                icon: 'devicon-react-original-wordmark colored',
                hoverTitle: 'ReactJS'
            },
            {
                name: 'reactNative',
                type: 'img',
                icon: reactNative,
                hoverTitle: 'React Native'
            },
        ]
    },
    {
        name: 'Back-End',
        skills: [
            {
                name: 'php',
                type: 'i',
                icon: 'devicon-php-plain colored',
                hoverTitle: 'PHP'
            },
            {
                name: 'laravel',
                type: 'i',
                icon: 'devicon-laravel-plain-wordmark colored',
                hoverTitle: 'Laravel'
            },
            {
                name: 'nodejs',
                type: 'i',
                icon: 'devicon-nodejs-plain-wordmark colored',
                hoverTitle: 'Node JS'
            },
            {
                name: 'mysql',
                type: 'i',
                icon: 'devicon-mysql-plain-wordmark colored',
                hoverTitle: 'MySQL'
            },
            {
                name: 'mongodb',
                type: 'i',
                icon: 'devicon-mongodb-plain-wordmark',
                hoverTitle: 'Mongo DB'
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
                title: 'Adobe Illustrator',
            },
            {
                name: 'afterEffects',
                type: 'img',
                icon: afterEffects,
                title: 'Adobe After Effects',
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
]

export const websites = [
    {
        title: 'Acer Development Company',
        type: 'website',
        description: 'A real estate company established to deliver a higher standard of living driven by better quality designs and valuable features',
        languages: 'Laravel, MySql, HTML, CSS, Bootstrap',
        timeline: '2 weeks',
        images: acerDevelopment,
        link: 'https://acer-development.herokuapp.com/'
    },
    {
        title: 'RenWorld Bank',
        type: 'website',
        description: 'A banking application for users to create/close accounts, transfer or receive funds from other accounts.',
        languages: 'Laravel, MySql, HTML, CSS, Bootstrap, React, Redux',
        timeline: '1 day',
        images: renWorldBank,
        link: 'https://renworld-bank.herokuapp.com',
        gitHubLink: 'https://github.com/kingeke/renworld-bank-frontend',
    },
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
        languages: 'Laravel, MySql, HTML, CSS, Bootstrap, React, Redux',
        timeline: '1 month',
        images: tecky,
        link: 'https://tecky.com.ng/'
    },
    {
        title: 'Yalla! Express',
        type: 'website',
        description: 'Yalla! Express is licensed by the Nigerian Postal Service Courier Regulatory Department (“NIPOST CRD”), to provide courier services to customers in Nigeria. They offer same day pickup and delivery solutions to individual and corporate customers across Lagos, Nigeria.',
        languages: 'React, Redux, Laravel, MySql, HTML, CSS, Bootstrap',
        timeline: '2 months',
        images: yalla,
        link: 'https://yallaexpress.com/'
    }
]