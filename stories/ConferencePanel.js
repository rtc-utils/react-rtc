import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { css } from 'react-emotion';
import PanelFrame from '../src/PanelFrame';

storiesOf('Conference Panel', module).add('Panel Frame', () => {
  return (
    <Fragment>
      <PanelFrame className={css({ maxWidth: 1280, margin: '0 auto 24px' })}>
        Desktop
      </PanelFrame>
      <PanelFrame className={css({ maxWidth: 768, margin: '0 auto 24px' })}>
        Tablet
      </PanelFrame>
      <PanelFrame className={css({ maxWidth: 320, margin: '0 auto 24px' })}>
        Mobile
      </PanelFrame>
    </Fragment>
  );
});
