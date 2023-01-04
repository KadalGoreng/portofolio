import React from "react";
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiCss3,
  DiJavascript1,
} from "react-icons/di";
import { FaHtml5, FaVuejs, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I work as a web developer especially frontend using the following
      technologies
    </SectionText>
    <List>
      <ListItem>
        <FaHtml5 size="3rem" />
        <DiCss3 size="3rem" />
        <FaBootstrap size="3rem" />
        <SiTailwindcss size="3rem" />
        <DiJavascript1 size="3rem" />
        <DiReact size="3rem" />
        <FaVuejs size="3rem" />
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
