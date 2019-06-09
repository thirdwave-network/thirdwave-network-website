import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  { title: 'Github', href: 'https://github.com/thirdwave-network' }
];

const CustomResources = () => <ResourceLinks links={links} />;

export default CustomResources;
