import React, { useState } from "react";

import Container from "../../ui/container/container";

const PrintSelector = () => {
  const [show, setShow] = useState({ 1: false, 2: false, 3: false });
  const [click, setClick] = useState({ 1: false, 2: false, 3: false });

  const handleShow = (num) => {
    setShow((prevState) => ({ ...prevState, [num]: !prevState[num] }));
  };

  const handleNext = (num) => {
    setClick((prevState) => ({ ...prevState, [num]: true }));
    handleShow(num);
  };

  const renderSelector = (number, title, buttonText, finalText) => {
    return (
      <Container
        className='container column p-3 mt-2'
      >
        <div className='row' style={{ width: '100%' }}>
          <h2 className="text text_type_title">{!click[number] ? title : finalText}</h2>
          <button type="button" onClick={() => handleShow(number)}>+</button>
        </div>
        {show[number] && <div>
          <button type="button" onClick={() => handleNext(number)}>{buttonText}</button>
        </div>}
      </Container>
    )
  }

  return (
    <>
      {renderSelector(1, 'Заголвок 1', 'Далее', 'Ваш выбор сделан')}
      {click[1] && renderSelector(2, 'Заголвок 2', 'Далее', 'Ваш выбор сделан ещё раз')}
      {click[2] && renderSelector(3, 'Заголвок 3', 'Заказать', 'Вы сделали заказ')}
    </>
  )
};

export default PrintSelector;