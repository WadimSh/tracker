import React from "react";

import Container from "../../ui/container/container";

const PrintSelector = () => {

  return (
    <>
      <Container
        className='container p-3 mt-2'
      >
        <div className='row pb-2' style={{ width: '100%', borderBottom: '1px solid var(--color-inactive)' }}>
          <h2 className="text text_type_title">Заголвок</h2>
          <button type="button">+</button>
        </div>
      </Container>
      <Container
        className='container p-2 mt-2'
      >

      </Container>
      <Container
        className='container p-2 mt-2'
      >

      </Container>
    </>
  )
};

export default PrintSelector;