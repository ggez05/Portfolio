import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'

// images from the asset folder in the image file
import {
  Portfolio,
  GSM,
  JOKEAPI,
  CountryLIST,
  githubfinder,
  GSM2
} from '../../assets/images'

// projects' id, name, stacks, icon and url data
export const projects = [
  {
    id: 1,
    name: 'Shopping Website',
    desc:
      'A complicated project that enhanced my skills a lot',
    stack: 'REACTJS Firebase HTML SASS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/ggez05/gsm-clothing',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://nimble-salmiakki-3b142b.netlify.app/',
    },
    imgUrl: GSM,
  },
  {
    id: 2,
    name: 'GitHub Finder',
    desc: 'App Shows Github users info and repos on searching',
    stack: 'HTML CSS JAVASCRIPT',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/ggez05/github-finder',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://ggez05.github.io/github-finder/',
    },
    imgUrl: githubfinder,
  },
  {
    id: 3,
    name: 'Portfolio Website',
    desc: 'My Own Portfolio Website with Theme Templates',
    stack: 'React JS HTML SASS',
    imgUrl: Portfolio,

    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/ggez05/portfolio',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://joyful-parfait-2aa7af.netlify.app/',
    },
  },
  {
    id: 4,
    name: 'Joke Generator',
    desc: 'A simple API based Jokes Generator',
    stack: 'React JS HTML CSS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/ggez05/dad-jokes',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://lambent-chebakia-4959e3.netlify.app/',
    },
    imgUrl:
      JOKEAPI,
  },
  {
    id: 5,
    name: 'Rest Country API',
    desc: 'A project that displays all information about a country',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/ggez05/CountryList',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://cosmic-scone-59f7d3.netlify.app/',
    },
    imgUrl: CountryLIST,
  },
  {
    id: 1,
    name: 'Shopping Website',
    desc:
      'Same project Implemented using REDUX',
    stack: 'REACTJS REDUX',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/ggez05/gsm-clothing',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://nimble-salmiakki-3b142b.netlify.app/',
    },
    imgUrl: GSM2,
  },
]
