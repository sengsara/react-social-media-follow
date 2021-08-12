import React from 'react';
import FollowAt from '../index';
import { storiesOf, action } from '@storybook/react';


const links = [
      'https://twitter.com/magicahmd',
      'https://www.facebook.com/ahmdsalhi',
      'https://www.youtube.com/magicahmd',
      'https://www.instagram.com/ahmdsalhi',
    ];

const App = () => {
  return (
    <FollowAt links = {links}/>
  );
}

storiesOf('Footer', module)
  .add('default view', () => (
    <FollowAt links = {links}/>
  ));
