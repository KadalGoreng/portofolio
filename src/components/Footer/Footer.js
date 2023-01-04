import React from 'react';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:085875364869">085875364869</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:revydors@gmail.com">
            revydors@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;