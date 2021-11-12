import styled from 'styled-components'
import PageTemplate from '../../components/PageTemplate'
import MainTitle from '../../components/MainTitle'
import UnderLine from '../../components/Underline'
import Skills from '../../components/Skills'
import Experience from '../../components/Experience'
import Education from '../../components/Education'

const Wrapper = styled.div`
  margin: 0px 0px 50px 84px;
`

const Profile = styled.div`
  margin: 33px 15px 0px 10px;
  font-size: ${(props) => props.theme.sizes.fonts.primaryText};
  max-width: 550px;
`

const Resume = () => (
  <PageTemplate>
    <Wrapper>
      <MainTitle>My Resume</MainTitle>
      <UnderLine />
      <Profile>Junior front-end developer.
        I approach my work responsibly and strive to write good code, not just working one.
        I want to participate in the implementation of cool projects,
        contribute and develop my skills.
      </Profile>
      <Skills />
      <Experience />
      <Education />
    </Wrapper>
  </PageTemplate>
)

export default Resume
