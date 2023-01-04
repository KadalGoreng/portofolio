import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Revydo Renada<br />
          Saputra
        </SectionTitle>
        <SectionText>
          I'm a Junior Frontend Web Developer passionate about creating interactive applications and experiences on the web
        </SectionText>
        <Button onClick={props.handleClick}>Contact Me</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;