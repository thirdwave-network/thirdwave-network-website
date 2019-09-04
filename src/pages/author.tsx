import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>Author</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>Author</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
              Tomasz Waszczyk – absolwent Wydziału Automatyki, Elektroniki i Informatyki Politechniki Śląskiej w Gliwicach na kierunku Informatyka oraz Uniwersytetu w Monachium, przez parę lat zajmowałem się implementacją oraz wdrażaniem strategii algorytmicznych w banku z grupy Tier 1. Obecnie zajmuję się rynkiem internetu rzeczy pracując jako programista oraz współpracuję z inwestorami instytucjonalnymi w celu zaprojektowania przekształcenia tradycjnego portfela w stronę zdygitalizowanych firm mających globalny potencjał poprzez między innymi analizę modelu insentywizacji oraz tokenomiki. Prywatnie pasjonat historii (myślę, że przed nami czasy kiedy coraz bardziej będzie cenna znajomość historii), sauny oraz muzyki klasycznej (Glenn Gould), założyciel Silesia Blockchain Meetup – cyklicznych spotkań gdzie można posłuchać merytorycznych prelekcji.
              </p>
              <p>

              </p>
              <p>
                https://www.meetup.com/Silesia-Blockchain-Meetup/
              </p>
              <p>
                https://www.linkedin.com/in/tomaszwaszczyk/
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
