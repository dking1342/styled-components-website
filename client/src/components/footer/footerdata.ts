import { AiOutlineInstagram,AiFillYoutube,AiOutlineTwitter,AiFillLinkedin } from 'react-icons/ai';
import { IoLogoFacebook } from 'react-icons/io';

export const footerdata = [
    {
        header:"About Us",
        categories:[
            {
                id:1,
                url:"/aboutus",
                label:"How it works",
            },
            {
                id:2,
                url:"/aboutus",
                label:"Testimonials",
            },
            {
                id:3,
                url:"/aboutus",
                label:"Careers",
            },
            {
                id:4,
                url:"/aboutus",
                label:"Investors",
            },
            {
                id:6,
                url:"/aboutus",
                label:"Terms of Service"
            }
        ]
    },
    {
        header:"Videos",
        categories:[
            {
                id:1,
                url:"/videos",
                label:"Submit Video"
            },
            {
                id:2,
                url:"/videos",
                label:"Ambassadors"
            },
            {
                id:3,
                url:"/videos",
                label:"Agency"
            },
            {
                id:4,
                url:"/videos",
                label:"Influencer"
            },
        ]
    },
    {
        header:"Contact Us",
        categories:[
            {
                id:1,
                url:"/contact",
                label:"Contact"
            },
            {
                id:2,
                url:"/contact",
                label:"Support"
            },
            {
                id:3,
                url:"/contact",
                label:"Destinations"
            },
            {
                id:4,
                url:"/contact",
                label:"Sponsorships"
            },
        ]
    },
    {
        header:"Social Media",
        categories:[
            {
                id:1,
                url:"/social",
                label:"Instagram"
            },
            {
                id:2,
                url:"/social",
                label:"Facebook"
            },
            {
                id:3,
                url:"/social",
                label:"YouTube"
            },
            {
                id:4,
                url:"/social",
                label:"Twitter"
            },
        ]
    }
];

export const FooterIcons = [
    {
        id:1,
        IconTitle:AiOutlineInstagram,
    },
    {
        id:2,
        IconTitle:IoLogoFacebook
    },
    {
        id:3,
        IconTitle:AiFillYoutube
    },
    {
        id:4,
        IconTitle:AiOutlineTwitter
    },
    {
        id:5,
        IconTitle:AiFillLinkedin
    }
]