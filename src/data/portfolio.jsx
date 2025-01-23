import {
    acerDevelopment,
    calendarApp,
    kainetix,
    letschipin,
    perspective,
    newsAggregator,
    renWorldBank,
    tecky,
    yalla,
    soarTask
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
            {
                name: 'Typescript',
                type: 'i',
                icon: 'devicon-typescript-plain',
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
                icon: 'devicon-laravel-original',
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
            {
                name: 'Redis',
                type: 'i',
                icon: 'devicon-redis-plain-wordmark',
                hideName: true
            },
        ]
    },
    {
        name: 'Cloud',
        skills: [
            {
                name: 'Bitbucket',
                type: 'i',
                icon: 'devicon-bitbucket-original-wordmark',
                hideName: true
            },
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
                name: 'Github',
                type: 'i',
                icon: 'devicon-github-original-wordmark',
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
            {
                name: 'PostgresSQL',
                type: 'i',
                icon: 'devicon-postgresql-plain-wordmark',
                hideName: true
            },
        ]
    },
    {
        name: 'Testing',
        skills: [
            {
                name: 'Jest',
                type: 'i',
                icon: 'devicon-jest-plain',
            },
            {
                name: 'Cypress',
                type: 'i',
                icon: 'devicon-cypressio-plain-wordmark',
                hideName: true,
            },
        ]
    },
    {
        name: 'Others',
        skills: [
            {
                name: 'Jira',
                type: 'i',
                icon: 'devicon-jira-plain-wordmark',
                hideName: true
            },
            {
                name: 'Confluence',
                type: 'i',
                icon: 'devicon-confluence-plain-wordmark',
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
            },
            {
                name: 'Vercel',
                type: 'i',
                icon: 'devicon-vercel-original',
            },
            {
                name: 'ViteJS',
                type: 'i',
                icon: 'devicon-vitejs-plain',
            }
        ]
    }
];

export const websites = [
    {
        title: 'Letschipin',
        type: 'website',
        description: 'A contribution platform for adventures, parties, outings, send forths and all you can think of within friends, helps collate funds using a simple contribution link.',
        languages: 'Laravel, MySql, HTML, SCSS, MaterialUI, React, InertiaJS, Payments API',
        timeline: '1 month',
        images: letschipin,
        link: 'https://letschipin.vercel.app/'
    },
    {
        title: 'Soar Task',
        type: 'UI',
        description: 'A non-functional dashboard UI mockup of a financial service application, features includes, cards, recent transactions, activities, expense statistics and much more',
        timeline: '3 days',
        images: soarTask,
        link: 'https://soar-task-lovat.vercel.app/',
        gitHubLink: 'https://github.com/kingeke/soar-task'
    },
    {
        title: 'News Aggregator',
        type: 'website',
        description: `News aggregator is a Laravel application mixed with Inertia JS and React JS. It allows users to; Authenticate, register a profile, handle password resets, search and filter news articles by keyword, author, category, source and publication date.

        Customize a personalized news feed just for their profile.

        The application aggregates news data from multiple APIs, stores them in a database and serves them to users. The data sources used are as follows;

        - News API Service
        - New York Times API Service
        - Mediastack API Service.

        An API Key is required from at least one news source to be able to use the application properly, but don't worry the system would present you a UI to get that sorted ASAP.`,
        languages: 'Laravel, MySql, HTML, SCSS, MaterialUI, React, InertiaJS',
        timeline: '3 days',
        images: newsAggregator,
        link: 'https://news-aggregator-seven-ashen.vercel.app/',
        gitHubLink: 'https://github.com/kingeke/news-aggregator'
    },
    {
        title: 'RenWorld Bank',
        type: 'website',
        description: 'A banking application for users to create/close accounts, transfer or receive funds from other accounts.',
        languages: 'Laravel, MySql, HTML, CSS, Bootstrap, React, Redux',
        timeline: '1 day',
        images: renWorldBank,
        link: 'https://renworld-bank-frontend.vercel.app/',
        gitHubLink: 'https://github.com/kingeke/renworld-bank-frontend',
    },
    {
        title: 'Perspective MBTI',
        type: 'website',
        description: 'A project to calculate your MBTI based on questions',
        languages: 'Laravel, MySql, HTML, CSS, Bootstrap, React, Redux',
        timeline: '2 days',
        images: perspective,
        link: 'https://perspective-mbti-test.vercel.app/',
        gitHubLink: 'https://github.com/kingeke/Perspective-MBTI-Test'
    },
    {
        title: 'Kainetix Sports',
        type: 'website',
        description: 'Kainetix Sports Management is a talent management and sports marketing specialist, taking advantage of the abundance of talents in the African region',
        languages: 'Laravel, MySql, HTML, CSS, Bootstrap',
        timeline: '2 months',
        images: kainetix,
        link: 'https://kainetix-sports.vercel.app/'
    },
    {
        title: 'Tecky Solutions',
        type: 'website',
        description: 'Tecky is aimed at connecting freelance creators in programming, photoshop, designing e.t.c. with clients looking for these creators to build a project.',
        languages: 'Laravel, MySql, HTML, CSS, Bootstrap, React, Redux',
        timeline: '1 month',
        images: tecky,
        link: 'https://tecky-frontend.vercel.app/'
    },
    {
        title: 'Yalla! Express',
        type: 'website',
        description: 'Yalla! Express is licensed by the Nigerian Postal Service Courier Regulatory Department (“NIPOST CRD”), to provide courier services to customers in Nigeria. They offer same day pickup and delivery solutions to individual and corporate customers across Lagos, Nigeria.',
        languages: 'React, Redux, Laravel, MySql, HTML, CSS, Bootstrap',
        timeline: '2 months',
        images: yalla,
        link: 'https://yallaexpress.vercel.app/'
    },
    {
        title: 'Acer Development Company',
        type: 'website',
        description: 'A real estate company established to deliver a higher standard of living driven by better quality designs and valuable features',
        languages: 'Laravel, MySql, HTML, CSS, Bootstrap',
        timeline: '2 weeks',
        images: acerDevelopment,
        link: 'https://acer-development.vercel.app/'
    },
    {
        title: 'Calendar App',
        type: 'website',
        description: 'A calendar application to manage a users appointments',
        languages: 'Laravel, MySql, HTML, CSS, Bootstrap, React, Redux',
        timeline: '4 days',
        images: calendarApp,
        link: 'https://calendar-app-indol.vercel.app/',
        gitHubLink: 'https://github.com/kingeke/Calendar-App'
    },
];