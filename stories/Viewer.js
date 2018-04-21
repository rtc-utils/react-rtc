import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { css } from 'react-emotion';
import Viewer from '../src/Viewer';

storiesOf('Viewer Panel', module).add('Panel Frame', () => {
  return (
    <Fragment>
      <Viewer>
        <p>Shared Content</p>
      </Viewer>
    </Fragment>
  );
});
