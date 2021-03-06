import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Heading from '@components/Heading/Heading'
import Layout from '@components/Layout/Layout'
import SEO from '@components/SEO'
import SocialLinks from '@components/SocialLinks/SocialLinks'
import { Section } from '@components/Section/Section'

import media from '@styles/media'

function NotFound({ data, location }) {
  const { seo } = data.allContentfulHomePage.edges[0].node

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        image={seo.image.file.url}
        pathname={location.pathname}
      />
      <div style={{ overflow: 'hidden' }}>
        <Layout withFooter={false}>
          <Section hideOverflow>
            <GridContainer>
              <TextContainer>
                <div />
                <WelcomeHeader>
                  Oops, there’s nothing here. But don’t worry, you can just go{' '}
                  <TextLink to="/">back home</TextLink> or{' '}
                  <TextLink to="/contact">contact us</TextLink>.
                </WelcomeHeader>
                <SocialLinksContainer>
                  <p>Looking for something else?</p> <SocialLinks />
                </SocialLinksContainer>
              </TextContainer>
              <ImageContainer>
                <NotFoundIcon aria-hidden="true" />
              </ImageContainer>
            </GridContainer>
          </Section>
        </Layout>
      </div>
    </>
  )
}

export default NotFound

export const pageQuery = graphql`
  query NotFoundPageQuery {
    allContentfulHomePage {
      edges {
        node {
          seo {
            title
            description
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  }
`

const GridContainer = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;

  ${media.tablet`
    flex-direction: column;
    height: calc(100vh - 90px);
  `};
`

const WelcomeHeader = styled(Heading.h1)`
  color: ${p => p.theme.colors.grey};
  margin-bottom: 2rem;

  ${media.desktop`
    font-size: 2.2rem;
    margin-bottom: 5rem;
  `};
`

const TextLink = styled(Link)`
  color: #fff;
  text-decoration: underline;
  transition: color 0.25s ease;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.purple};
  }
`

const TextContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: calc(100vh - 130px);
  min-height: 500px;
  padding: 0 0 100px;
  max-width: 575px;

  ${media.desktop`
    padding: 170px 0 0;
    justify-content: flex-start;
    width: 100%;
    height: initial;
  `};
`

const ImageContainer = styled.div`
  position: absolute;
  right: 0;
  height: calc(100vh - 130px);
  min-height: 500px;
  pointer-events: none;
  user-select: none;

  display: flex;
  align-items: center;

  ${media.tablet`

    right: 0;
    height: 33rem;
    left: -320px;

    svg {
      height: 100%;
      top: 360px;
      position: relative;
    }

  `};
`

const SocialLinksContainer = styled.div`
  display: block;

  p {
    display: inline-block;
    color: ${p => p.theme.colors.grey};

    ${media.tablet`
      display: block;
   `};
  }

  ${media.tablet`
    svg {
      position: relative;
      top: 10px;
      left: -15px;
    }
  `};
`

const NotFoundIcon = () => (
  <svg
    width="891"
    height="655"
    viewBox="0 0 891 655"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M397.094 150.953H336.234L164.058 402.365V432.555H333.633V498.141H397.094V432.555H437.667V378.421H397.094V150.953ZM244.164 378.421L333.633 246.209V378.421H244.164Z"
      fill="url(#paint0_linear)"
    />
    <path
      d="M586.322 505.948C655.504 505.948 720.525 444.006 720.525 324.807C720.525 205.087 655.504 143.146 586.322 143.146C517.139 143.146 452.118 205.087 452.118 324.287C452.118 444.006 517.139 505.948 586.322 505.948ZM586.322 201.444C615.451 201.444 652.903 234.237 652.903 324.287C652.903 414.857 615.971 447.65 586.322 447.65C556.672 447.65 519.74 414.857 519.74 324.287C519.74 234.237 557.192 201.444 586.322 201.444Z"
      fill="url(#paint1_linear)"
    />
    <path
      d="M954.557 150.953H893.697L721.521 402.365V432.555H891.096V498.141H954.557V432.555H995.13V378.421H954.557V150.953ZM801.627 378.421L891.096 246.209V378.421H801.627Z"
      fill="url(#paint2_linear)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M334.428 497.407V433.662H396.269V497.407H334.428ZM333.428 498.407V512.689H334.428V498.407H396.269V512.689H397.269V498.407H402.982V497.407H397.269V433.662H437.21V439.375H438.21V433.662H442.019V432.662H438.21V379.391H442.019V378.391H438.21V373.678H437.21V378.391H397.269L397.269 156.141L400.236 151.832L442.019 151.832V150.832L400.924 150.832L406.79 142.311L405.966 141.744L399.71 150.832H397.269V128.028L396.269 128.028V150.832L336.198 150.832L342.045 142.31L341.221 141.744L334.985 150.832H334.428V128.028L333.428 128.028V150.832L316.338 150.832V151.832L333.428 151.832V153.101L178.832 378.391H171.614V379.391H178.146L163.996 400.011L163.996 373.678L162.996 373.678L162.996 401.468L151.746 417.863L152.571 418.428L162.996 403.236L162.996 432.663H149.715L149.715 433.663H162.996L162.996 455.562H163.996L163.996 433.663H205.001L185.072 462.612L185.896 463.179L206.216 433.663L333.428 433.662V497.407H325.859V498.407H333.428ZM437.21 379.391V432.662H397.269V379.391H437.21ZM163.996 432.663H205.69L242.363 379.391H179.359L163.996 401.778L163.996 432.663ZM399.022 151.832L397.269 154.378V151.832H399.022ZM334.428 245.659L396.269 155.83V151.832L335.512 151.832L334.428 153.411V245.659ZM396.269 157.594L334.428 247.423L334.428 378.391L396.269 378.391L396.269 157.594ZM333.428 154.868V247.112L243.052 378.391H180.045L333.428 154.868ZM333.428 248.875L244.266 378.391L333.428 378.391L333.428 248.875ZM206.904 432.663L243.577 379.391L333.428 379.391V432.662L206.904 432.663ZM396.269 432.662H334.428V379.391L396.269 379.391V432.662Z"
      fill="url(#paint3_linear)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M892.132 497.407V433.662H953.973V497.407H892.132ZM891.132 498.407V512.689H892.132V498.407H953.973V512.689H954.973V498.407H960.686V497.407H954.973V433.662H994.914V439.375H995.914V433.662H999.723V432.662H995.914V379.391H999.723V378.391H995.914V373.678H994.914V378.391H954.973L954.973 156.141L957.94 151.832L999.723 151.832V150.832L958.628 150.832L964.494 142.311L963.671 141.744L957.414 150.832H954.973V128.028L953.973 128.028V150.832L893.902 150.832L899.749 142.31L898.925 141.744L892.689 150.832H892.132V128.028L891.132 128.028V150.832L874.042 150.832V151.832L891.132 151.832V153.1L736.536 378.391H729.318V379.391H735.85L721.7 400.011L721.7 373.678L720.7 373.678L720.7 401.468L709.451 417.863L710.275 418.428L720.7 403.236L720.7 432.663H707.419L707.419 433.663H720.7L720.7 455.562H721.7L721.7 433.663H762.706L742.776 462.612L743.6 463.179L763.92 433.663L891.132 433.662V497.407H883.563V498.407H891.132ZM994.914 379.391V432.662H954.973V379.391H994.914ZM721.7 432.663H763.394L800.067 379.391H737.063L721.7 401.778L721.7 432.663ZM956.726 151.832L954.973 154.378V151.832H956.726ZM892.132 245.659L953.973 155.83V151.832L893.216 151.832L892.132 153.411V245.659ZM953.973 157.594L892.132 247.423L892.132 378.391L953.973 378.391L953.973 157.594ZM891.132 154.868V247.112L800.756 378.391H737.749L891.132 154.868ZM891.132 248.875L801.97 378.391L891.132 378.391L891.132 248.875ZM764.608 432.663L801.281 379.391L891.132 379.391V432.662L764.608 432.663ZM953.973 432.662H892.132V379.391L953.973 379.391V432.662Z"
      fill="url(#paint4_linear)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M706.999 267.37C706.999 287.644 702.123 306.766 693.493 323.602C679.375 296.994 655.943 276.227 627.625 265.798C630.44 259.797 632.014 253.096 632.014 246.026C632.014 220.328 611.224 199.495 585.578 199.495C559.932 199.495 539.142 220.328 539.142 246.026C539.142 253.201 540.763 259.997 543.657 266.065C515.661 276.579 492.505 297.219 478.507 323.602C469.877 306.766 465.001 287.644 465.001 267.37C465.001 199.794 519.174 145.012 586 145.012C652.826 145.012 706.999 199.794 706.999 267.37ZM708 267.37C708 288.061 702.963 307.562 694.062 324.687C702.963 341.872 708 361.441 708 382.203C708 450.574 653.379 506 586 506C518.621 506 464 450.574 464 382.203C464 361.441 469.037 341.872 477.938 324.687C469.037 307.562 464 288.061 464 267.37C464 199.235 518.621 144 586 144C653.379 144 708 199.235 708 267.37ZM627.184 266.713C655.528 277.123 678.947 297.973 692.93 324.686C679.063 351.087 655.914 371.742 627.883 382.2C620.584 366.087 604.387 354.882 585.578 354.882C566.875 354.882 550.754 365.962 543.397 381.929C515.69 371.387 492.818 350.861 479.07 324.686C492.935 298.197 516.08 277.474 544.104 266.977C551.754 282.151 567.453 292.557 585.578 292.557C603.808 292.557 619.584 282.031 627.184 266.713ZM542.983 382.853C515.29 372.299 492.394 351.851 478.509 325.772C469.877 342.667 465.001 361.857 465.001 382.203C465.001 450.019 519.177 504.988 586 504.988C652.823 504.988 706.999 450.019 706.999 382.203C706.999 361.857 702.123 342.667 693.491 325.772C679.485 352.079 656.309 372.655 628.291 383.127C630.687 388.74 632.014 394.921 632.014 401.412C632.014 427.111 611.224 447.943 585.578 447.943C559.932 447.943 539.142 427.111 539.142 401.412C539.142 394.815 540.512 388.538 542.983 382.853ZM627.349 383.474C629.707 388.979 631.013 395.044 631.013 401.412C631.013 426.543 610.68 446.931 585.578 446.931C560.476 446.931 540.143 426.543 540.143 401.412C540.143 394.94 541.491 388.782 543.923 383.206C557.039 388.08 571.212 390.741 586 390.741C600.514 390.741 614.437 388.177 627.349 383.474ZM626.939 382.548C614.153 387.196 600.369 389.729 586 389.729C571.36 389.729 557.327 387.099 544.338 382.282C551.551 366.703 567.3 355.894 585.578 355.894C603.959 355.894 619.784 366.826 626.939 382.548ZM585.578 291.545C567.881 291.545 552.554 281.411 545.052 266.627C557.841 261.96 571.628 259.418 586 259.418C600.105 259.418 613.647 261.867 626.234 266.369C618.779 281.293 603.377 291.545 585.578 291.545ZM631.013 246.026C631.013 252.975 629.459 259.561 626.678 265.454C613.955 260.89 600.263 258.406 586 258.406C571.467 258.406 557.528 260.984 544.602 265.715C541.744 259.756 540.143 253.078 540.143 246.026C540.143 220.895 560.476 200.507 585.578 200.507C610.68 200.507 631.013 220.895 631.013 246.026Z"
      fill="url(#paint5_linear)"
      fillOpacity="0.5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M808.13 652.268C798.938 653.047 789.638 653.444 780.245 653.444C600.231 653.444 454.3 507.514 454.3 327.5C454.3 147.486 600.231 1.55542 780.245 1.55542C789.638 1.55542 798.938 1.95275 808.13 2.73152C645.43 21.5261 519.111 159.761 519.111 327.5C519.111 495.238 645.43 633.474 808.13 652.268ZM813.15 651.804C648.589 635.307 520.111 496.407 520.111 327.5C520.111 158.593 648.589 19.6931 813.15 3.1958C977.711 19.6931 1106.19 158.593 1106.19 327.5C1106.19 496.407 977.711 635.307 813.15 651.804ZM813.15 652.809C802.328 653.891 791.351 654.444 780.245 654.444C599.678 654.444 453.3 508.066 453.3 327.5C453.3 146.933 599.678 0.55542 780.245 0.55542C791.351 0.55542 802.328 1.10923 813.15 2.19073C823.972 1.10923 834.949 0.55542 846.056 0.55542C1026.62 0.55542 1173 146.933 1173 327.5C1173 508.066 1026.62 654.444 846.056 654.444C834.949 654.444 823.972 653.891 813.15 652.809ZM818.171 2.73152C827.362 1.95275 836.662 1.55542 846.056 1.55542C1026.07 1.55542 1172 147.486 1172 327.5C1172 507.514 1026.07 653.444 846.056 653.444C836.662 653.444 827.362 653.047 818.171 652.268C980.871 633.474 1107.19 495.238 1107.19 327.5C1107.19 159.761 980.871 21.5261 818.171 2.73152Z"
      fill="url(#paint6_linear)"
      fillOpacity="0.5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M718.7 327.5C718.7 507.514 572.769 653.444 392.755 653.444C383.363 653.444 374.063 653.047 364.872 652.268C527.571 633.473 653.889 495.238 653.889 327.5C653.889 159.761 527.569 21.5255 364.869 2.73165C374.061 1.9528 383.362 1.55542 392.755 1.55542C572.769 1.55542 718.7 147.486 718.7 327.5ZM359.848 3.19596C524.41 19.6925 652.889 158.592 652.889 327.5C652.889 496.407 524.412 635.306 359.852 651.804C195.29 635.308 66.8108 496.408 66.8108 327.5C66.8108 158.593 195.288 19.694 359.848 3.19596ZM354.828 2.7317C192.129 21.527 65.8108 159.762 65.8108 327.5C65.8108 495.239 192.13 633.475 354.831 652.268C345.639 653.047 336.338 653.445 326.944 653.445C146.93 653.445 1 507.514 1 327.5C1 147.486 146.93 1.55575 326.944 1.55575C336.337 1.55575 345.637 1.95303 354.828 2.7317ZM359.848 2.19089C349.027 1.1095 338.05 0.555745 326.944 0.555745C146.378 0.555745 0 146.934 0 327.5C0 508.067 146.378 654.445 326.944 654.445C338.052 654.445 349.029 653.891 359.852 652.809C370.673 653.891 381.649 654.444 392.755 654.444C573.322 654.444 719.7 508.066 719.7 327.5C719.7 146.933 573.322 0.55542 392.755 0.55542C381.648 0.55542 370.67 1.10928 359.848 2.19089Z"
      fill="url(#paint7_linear)"
      fillOpacity="0.5"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="462.5"
        y1="-21"
        x2="632.46"
        y2="535.36"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2E384B" stopOpacity="0.38" />
        <stop offset="0.403315" stopColor="#424446" stopOpacity="0.18" />
        <stop offset="0.766365" stopColor="#393A3F" stopOpacity="0.14" />
        <stop offset="1" stopColor="#2E384B" stopOpacity="0.12" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="462.5"
        y1="-21"
        x2="632.46"
        y2="535.36"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2E384B" stopOpacity="0.38" />
        <stop offset="0.403315" stopColor="#424446" stopOpacity="0.18" />
        <stop offset="0.766365" stopColor="#393A3F" stopOpacity="0.14" />
        <stop offset="1" stopColor="#2E384B" stopOpacity="0.12" />
      </linearGradient>
      <linearGradient
        id="paint2_linear"
        x1="462.5"
        y1="-21"
        x2="632.46"
        y2="535.36"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2E384B" stopOpacity="0.38" />
        <stop offset="0.403315" stopColor="#424446" stopOpacity="0.18" />
        <stop offset="0.766365" stopColor="#393A3F" stopOpacity="0.14" />
        <stop offset="1" stopColor="#2E384B" stopOpacity="0.12" />
      </linearGradient>
      <linearGradient
        id="paint3_linear"
        x1="202.38"
        y1="121.038"
        x2="459.157"
        y2="441.585"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E9DAAC" />
        <stop offset="1" stopColor="#E9DAAC" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint4_linear"
        x1="760.084"
        y1="121.038"
        x2="1016.86"
        y2="441.585"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E9DAAC" />
        <stop offset="0.648108" stopColor="#E9DAAC" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint5_linear"
        x1="464.152"
        y1="71.8177"
        x2="795.266"
        y2="439.579"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E9DAAC" />
        <stop offset="1" stopColor="#E9DAAC" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint6_linear"
        x1="337.5"
        y1="357"
        x2="702.238"
        y2="270.253"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E9DAAC" />
        <stop offset="1" stopColor="#E9DAAC" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint7_linear"
        x1="709.575"
        y1="87.8813"
        x2="262.988"
        y2="330.814"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E9DAAC" />
        <stop offset="0.562647" stopColor="#E9DAAC" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
)
