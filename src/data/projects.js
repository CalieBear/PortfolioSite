import reactImg from '../assets/react.svg'
import snake from '../assets/Python-Snake.png'
import baccarat from '../assets/Baccarat.png'
const projects = [
  {
    id: 'p1',
    title: 'Portfolio Site',
    blurb: 'Personal portfolio built with React.',
    longBlurb: 'A responsive portfolio built with React and Vite. Includes a custom carousel, animated background, and accessible navigation to showcase projects and experience.',
    thumb: reactImg,
    images: [reactImg],
    tech: ['React', 'Vite', 'CSS', 'JavaScript'],
    github: 'https://github.com/CalieBear/PortfolioSite'
  },
  {
    id: 'p2',
    title: 'Baccarat',
    blurb: 'A card game made with Java.',
    longBlurb: 'A Java implementation of the Baccarat card game created for a coursework project. Handles deck shuffling, hand evaluation, simple betting, and game flow using object-oriented design.',
    thumb: baccarat,
    images: [baccarat],
    tech: ['Java'],
    github: 'https://github.com/CalieBear/Baccarat'
  },
  {
    id: 'p3',
    title: 'Snake Game',
    blurb: 'A small browser game using Python and tkinter.',
    longBlurb: 'Classic Snake implemented using Python and tkinter. Demonstrates event-driven programming, collision detection, scoring, and progressively increasing difficulty.',
    thumb: snake,
    images: [snake],
    tech: ['Python', 'tkinter'],
    github: 'https://github.com/CalieBear/CSP-Snake-Game'
  },
]

export default projects
