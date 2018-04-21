import React from 'react';
import styled, { css } from 'react-emotion';
import PanelFrame from './PanelFrame';
import { mobile, tablet } from './media-constants';

const Flex = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end'
});

const FlexItem = styled('div')({
  textAlign: 'right',
});

export default function Viewer({
  children,
  renderPeerViewer,
  peerViewerProps,
  ...rest
}) {
  return (
    <PanelFrame className={css({ height: 'auto' })}>
      {children}
      <Flex>
        <FlexItem>
          <PanelFrame
            bodyPadding={0}
            className={css({
              width: 120,
              height: 80,
              [tablet]: {
                width: 60,
                height: 60,
              },
            })}
          >
            {renderPeerViewer && renderPeerViewer(rest)}
          </PanelFrame>
        </FlexItem>
      </Flex>
    </PanelFrame>
  );
}
