import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

const spinner = () => (
  <Segment style={{height:"675px"}}>
    <Dimmer active>
      <Loader>Loading </Loader>
    </Dimmer>

    <Image src='/assets/images/wireframe/short-paragraph.png' />
  </Segment>
)

export default spinner