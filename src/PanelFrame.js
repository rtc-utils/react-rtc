import React from 'react';
import styled from 'react-emotion';

export default styled('section')(({ borderColor = 'rgba(0, 0, 0, 0.12)', bodyPadding = 16 }) => {
  return {
    padding: bodyPadding,
    border: `1px solid ${borderColor}`,
    borderRadius: 4,
  };
});
