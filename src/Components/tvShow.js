import React from 'react';
import {Card, Col} from 'react-materialize'

const tvShow = () {

  return (
    <Col m={6} s={12}>
      <Card className='blue-grey darken-1'
        textClassName='white-text'
        title="Title of Show"
      >
        Show Summary here!
      </Card>
    </Col>
  );


}

export default tvShow;
