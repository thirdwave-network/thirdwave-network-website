import React, { Fragment } from 'react'
import styled from 'styled-components'
import * as SocialIcons from '../icons/social'
import { media } from '@styles'

const SocialLinks = ({ fill = 'white' }) => (
  <Fragment>
    <SocialIconContainer
      target="_blank"
      href="https://www.facebook.com/thirdwave.network/"
    >
      <SocialIcons.FacebookIcon fill={fill} />
    </SocialIconContainer>
    <SocialIconContainer target="_blank" href="https://twitter.com/thirdwave_">
      <SocialIcons.TwitterIcon fill={fill} />
    </SocialIconContainer>
    <SocialIconContainer
      target="_blank"
      href="https://www.instagram.com/thirdwave.network/"
    >
      <SocialIcons.InstagramIcon fill={fill} />
    </SocialIconContainer>
    <SocialIconContainer
      target="_blank"
      href="https://www.linkedin.com/company/thirdwave.network/"
    >
      <SocialIcons.LinkedinIcon fill={fill} />
    </SocialIconContainer>
    <SocialIconContainer target="_blank" href="https://medium.com/thirdwave.network">
      <SocialIcons.MediumIcon fill={fill} />
    </SocialIconContainer>
  </Fragment>
)

export default SocialLinks

const SocialIconContainer = styled.a`
  margin-left: 3.2rem;
  text-decoration: none;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  ${media.tablet`
    margin: 0 1.6rem;
  `};
`
