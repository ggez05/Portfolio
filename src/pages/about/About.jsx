import React from 'react'
import myCV from '../../assets/Resume-Garvit-Bhatia.pdf'
import Cards from '../../components/skillsCards/Cards'
// components
import Blast from '../../components/BlastAnimation/Blast'
import './about.scss'

const About = () => {
  const [letterClass, setLetterClass] = React.useState('text-animate')
  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div>
        <div className="fake-big">About</div>
      </div>
      <div className="section-about-wrapper section__padding">
        <article className="section-about-description">
          <div className='about-width'>
            <h2 arial-aria-label="About and skills">
              <Blast
                letterClass={letterClass}
                arrayStr={[
                  'A',
                  'b',
                  'o',
                  'u',
                  't',
                  '',
                  '&',
                  '',
                  'S',
                  'k',
                  'i',
                  'l',
                  'l',
                  's',
                ]}
                indexLetter={3}
              />
            </h2>
            <div>
              <p className='para1'>
                I’m an ambitious Front-End Developer who's passionate about
                coding and looking for a role in the established IT company with
                the opportunity to work with the latest technologies on
                challenging and diverse projects.
              </p>
            </div>
            <div>
              <p className='para2'>
                I’m from Ivory Coast but currently living in Nigeria. I’m a
                person who loves to build dynamic webpages
                with creating intuitive and dynamic user
                experiences. I also love to reach out to new opportunities
                accross the globe that will enhance my skills and get the
                opporutinity to work with other programmers as well.
                I am currently Working on my Back-End skills so that I can become 
                a Full-Stack Developer.
              </p>
            </div>
            <div>
              <p className='para3'>
                If I could say one of the most interesting things about me, it's
                the fact that I'm always ready for any challenges that comes to
                my way. Here's my Resume below for more details.
              </p>
            </div>
            <div>
              <a
                style={{ marginTop: '2rem' }}
                href={myCV}
                download
                className="contact-button submit-button"
              >
                <div>
                  <span className="bg switch__bg"></span>
                  <span className="base switch__border-color"></span>
                  <span className="text">Download Resume</span>
                </div>
              </a>
            </div>
          </div>
        </article>
        <Cards/>
      </div>
    </>
  )
}

export default About


