import {
    acerDevelopment,
    calendarApp,
    kainetix,
    perspective,
    readingList,
    renWorldBank,
    tecky,
    yalla
} from "../components/includes/Pictures";

export const skills = [
    {
        name: 'Front-End',
        skills: [
            {
                name: 'Angular',
                type: 'i',
                icon: 'devicon-angularjs-plain',
            },
            {
                name: 'Bootstrap',
                type: 'i',
                icon: 'devicon-bootstrap-plain-wordmark',
                hideName: true
            },
            {
                name: 'CSS',
                type: 'i',
                icon: 'devicon-css3-plain-wordmark',
                hideName: true
            },
            {
                name: 'HTML',
                type: 'i',
                icon: 'devicon-html5-plain-wordmark',
                hideName: true
            },
            {
                name: 'Javascript',
                type: 'i',
                icon: 'devicon-javascript-plain',
            },
            {
                name: 'Jquery',
                type: 'i',
                icon: 'devicon-jquery-plain-wordmark',
                hideName: true
            },
            {
                name: 'Material UI',
                type: 'i',
                icon: 'devicon-materialui-plain',
            },
            {
                name: 'React',
                type: 'i',
                icon: 'devicon-react-original',
            },
            {
                name: 'React Native',
                type: 'i',
                icon: 'devicon-react-original',
            },
            {
                name: 'Redux',
                type: 'i',
                icon: 'devicon-redux-original',
            },
            {
                name: 'Sass',
                type: 'i',
                icon: 'devicon-sass-original',
                hideName: true
            },
            {
                name: 'Figma',
                type: 'i',
                icon: 'devicon-figma-plain',
            },
        ]
    },
    {
        name: 'Back-End',
        skills: [
            {
                name: 'PHP',
                type: 'i',
                icon: 'devicon-php-plain',
                hideName: true
            },
            {
                name: 'Laravel',
                type: 'i',
                icon: 'devicon-laravel-plain-wordmark',
                hideName: true
            },
            {
                name: 'Node JS',
                type: 'i',
                icon: 'devicon-nodejs-plain-wordmark',
                hideName: true
            },
            {
                name: 'Adonis JS',
                type: 'i',
                icon: 'devicon-adonisjs-original-wordmark',
                hideName: true
            },
            {
                name: 'GraphQL',
                type: 'i',
                icon: 'devicon-graphql-plain-wordmark',
                hideName: true
            },
        ]
    },
    {
        name: 'Cloud',
        skills: [
            {
                name: 'Docker',
                type: 'i',
                icon: 'devicon-docker-plain-wordmark',
                hideName: true
            },
            {
                name: 'AWS',
                type: 'i',
                icon: 'devicon-amazonwebservices-plain-wordmark',
                hideName: true
            },
            {
                name: 'Apache',
                type: 'i',
                icon: 'devicon-apache-plain-wordmark',
                hideName: true
            },
            {
                name: 'Nginx',
                type: 'i',
                icon: 'devicon-nginx-original',
                hideName: true
            },
            {
                name: 'Git',
                type: 'i',
                icon: 'devicon-git-plain-wordmark',
                hideName: true
            },
        ]
    },
    {
        name: 'Database',
        skills: [
            {
                name: 'MySQL',
                type: 'i',
                icon: 'devicon-mysql-plain-wordmark',
                hideName: true
            },
            {
                name: 'Mongo DB',
                type: 'i',
                icon: 'devicon-mongodb-plain-wordmark',
                hideName: true
            },
        ]
    },
    {
        name: 'Others',
        skills: [
            {
                name: 'Jest',
                type: 'i',
                icon: 'devicon-jest-plain',
            },
            {
                name: 'Jira',
                type: 'i',
                icon: 'devicon-jira-plain-wordmark',
                hideName: true
            },
            {
                name: 'Word',
                type: 'i',
                icon: 'fas fa-file-word',
            },
            {
                name: 'Powerpoint',
                type: 'i',
                icon: 'fas fa-file-powerpoint',
            },
            {
                name: 'Excel',
                type: 'i',
                icon: 'fas fa-file-excel',
            }
        ]
    }
];

export const websites = [
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
        title: 'Perspective MBTI',
        type: 'website',
        description: 'A project to calculate your MBTI based on questions',
        languages: 'Laravel, MySql, HTML, CSS, Bootstrap, React, Redux',
        timeline: '2 days',
        images: perspective,
        link: 'https://perspective-mbti-test.herokuapp.com/',
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
        link: 'https://tecky-frontend.herokuapp.com/'
    },
    {
        title: 'Yalla! Express',
        type: 'website',
        description: 'Yalla! Express is licensed by the Nigerian Postal Service Courier Regulatory Department (“NIPOST CRD”), to provide courier services to customers in Nigeria. They offer same day pickup and delivery solutions to individual and corporate customers across Lagos, Nigeria.',
        languages: 'React, Redux, Laravel, MySql, HTML, CSS, Bootstrap',
        timeline: '2 months',
        images: yalla,
        link: 'https://yallaexpress.herokuapp.com/'
    },
    {
        title: 'Reading List',
        type: 'website',
        description: 'A reading list application to create a book or an author, the major aspect of this project is to showcase my graphql skills.',
        languages: 'MongoDB, GraphQL, NodeJS, React, HTML, CSS, Bootstrap',
        timeline: '1 week',
        images: readingList,
        link: 'https://reading-list-graphql-frontend.herokuapp.com/',
        gitHubLink: 'https://github.com/kingeke/books-graphql-node-react-app'
    },
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
        title: 'Calendar App',
        type: 'website',
        description: 'A calendar application to manage a users appointments',
        languages: 'Laravel, MySql, HTML, CSS, Bootstrap, React, Redux',
        timeline: '4 days',
        images: calendarApp,
        link: 'https://calendar-appointments.herokuapp.com',
        gitHubLink: 'https://github.com/kingeke/Calendar-App'
    },
];