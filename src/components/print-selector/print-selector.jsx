import React, { useState } from "react";

import Container from "../../ui/container/container";

const PrintSelector = () => {
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleClick1 = () => {
    setClick1(true);
    setShow1(!show1)
  }

  const handleClick2 = () => {
    setClick2(true);
    setShow2(!show2)
  }

  const handleClick3 = () => {
    setClick3(true);
    setShow3(!show3)
  }

  return (
    <>
      <Container
        className='container column p-3 mt-2'
      >
        <div className='row' style={{ width: '100%' }}>
          <h2 className="text text_type_title">{!click1 ? 'Заголвок 1' : 'Ваш выбор сделан'}</h2>
          <button type="button" onClick={() => setShow1(!show1)}>+</button>
        </div>
        {show1 && <div>
          <button type="button" onClick={handleClick1}>Далее</button>
        </div>}
      </Container>
      {click1 && <Container
        className='container column p-2 mt-2'
      >
        <div className='row' style={{ width: '100%' }}>
          <h2 className="text text_type_title">{!click2 ? 'Заголвок 2' : 'Ваш выбор сделан ещё раз'}</h2>
          <button type="button" onClick={() => setShow2(!show2)}>+</button>
        </div>
        {show2 && <div>
          <button type="button" onClick={handleClick2}>Далее</button>
        </div>}
      </Container>}
      {click2 && <Container
        className='container column p-2 mt-2'
      >
        <div className='row' style={{ width: '100%' }}>
          <h2 className="text text_type_title">{!click3 ? 'Заголвок 3' : 'Вы сделали заказ'}</h2>
          <button type="button" onClick={() => setShow3(!show3)}>+</button>
        </div>
        {show3 && <div>
          <button type="button" onClick={handleClick3}>Заказ</button>
        </div>}
      </Container>}
    </>
  )
};

export default PrintSelector;