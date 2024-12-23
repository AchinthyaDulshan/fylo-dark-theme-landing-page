import Logo from '../assets/images/logo.svg'
import Illustration_1 from '../assets/images/illustration-intro.png'
import Illustration_2 from '../assets/images/illustration-stay-productive.png'
import BgQuote from '../assets/images/bg-quotes.png'
import IconAccessAnyWhere from '../assets/images/icon-access-anywhere.svg'
import IconSecurity from '../assets/images/icon-security.svg'
import IconAnyFile from '../assets/images/icon-any-file.svg'
import IconCollaboration from '../assets/images/icon-collaboration.svg'
import ProfileImage_1 from '../assets/images/profile-1.jpg'
import ProfileImage_2 from '../assets/images/profile-2.jpg'
import ProfileImage_3 from '../assets/images/profile-3.jpg'
import { FaCircleArrowRight,FaLocationDot, FaPhoneVolume, FaEnvelope } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export const NavBarContent = {
    logo: Logo,
    navLinks: [
        {
            text: 'Features',
            link: '/'
        },
        {
            text: 'Team',
            link: '/'
        },
        {
            text: 'Sign In',
            link: '/'
        },
    ]
}

export const HeroContent = {
    illustration: Illustration_1,
    heading: 'All your files in one secure location, accessible anywhere.',
    text: 'Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.',
    btn: {
        text: 'Get Started',
        link: '/'
    }

}

export const FeaturesSection = {
    cards: [{
        icon: IconAccessAnyWhere,
        title: 'Access your files, anywhere',
        description: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
    }, {
        icon: IconSecurity,
        title: 'Security you can trust',
        description: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
    }, {
        icon: IconCollaboration,
        title: 'Real-time collaboration',
        description: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
    }, {
        icon: IconAnyFile,
        title: 'Store any type of file',
        description: 'Whether you\'re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.'
    }]
}

export const StayProductiveContent = {
    illustration: Illustration_2,
    heading: 'Stay productive, wherever you are',
    para_1: 'Never let location be an issue when accessing your files. Fylo has you covered for all of your file needs.',
    para_2: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
    link: {
        icon: <FaCircleArrowRight />,
        text: 'See how Fylo works',
        linkTo: '/'
    }
}

export const TestamonialContent = {
    bgQuote: BgQuote,
    testamoniaCards: [
        {
            text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
            image: ProfileImage_1,
            person: 'Satish Patel',
            jobTitle: 'Founder & CEO, Huddle'
        },
        {
            text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
            image: ProfileImage_2,
            person: 'Bruce McKenzie',
            jobTitle: 'Founder & CEO, Huddle'
        },
        {
            text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
            image: ProfileImage_3,
            person: 'Iva Boyd',
            jobTitle: 'Founder & CEO, Huddle'
        }
    ]
}

export const GetEarlyAccessContent = {
    heading:'Get early access today',
    text:'It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.',
    errorMeg:'Please enter a valid email address.',
    btn:{
        text:'Get Started For Free',
    }
}

export const FooterSection = {
    logo: Logo,
    location: {
        icon: <FaLocationDot />,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: '/'
    },
    mobile: {
        icon: <FaPhoneVolume />,
        text: '+1-543-123-4567',
        link: '/'
    },
    email: {
        icon: <FaEnvelope />,
        text: 'example@fylo.com',
        link: '/'
    },
    navLinks: [
        {
            text: "About Us",
            Link: '/',
        }, {
            text: "Contact Us",
            Link: '/',
        }, {
            text: "Jobs",
            Link: '/',
        }, {
            text: "Terms",
            Link: '/',
        }, {
            text: "Press",
            Link: '/',
        }, {
            text: "Privacy",
            Link: '/',
        }, {
            text: "Blog",
            Link: '/',
        }],

    socialMedialinks: [
        {
            icon: <FaFacebookF />,
            link: '/'
        },
        {
            icon: <FaTwitter />,
            link: '/'
        },
        {
            icon: <FaInstagram />,
            link: '/'
        }
    ]
}

export const animateVariants = {
    // From left to viewport animation
    fromLeft: {
      stayLeft: { opacity: 0, translateX: '-10vw' },
      normal: { opacity: 1, translateX: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    },
  
    // Zoom in viewport animation
    zoomIn: {
      staySmall: { scale: 0 },
      normal: { scale: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    },
  
    // From right to viewport animation
    fromRight: {
      stayRight: { opacity: 0, translateX: '10vw' },
      normal: { opacity: 1, translateX: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    },
  
    // From top to viewport animation
    fromTop: {
      stayTop: { translateY: -50, opacity: 0},
      normal: { translateY: 0 ,opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    },
  
  };