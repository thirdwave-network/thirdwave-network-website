import React from 'react'
import styled from 'styled-components'

export const Hidden = ({ children }: { children: React.ReactChild }) => (
  <HiddenElement>{children}</HiddenElement>
)

const HiddenElement = styled.div`
  height: 1px;
  width: 1px;
  position: absolute !important;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
`
