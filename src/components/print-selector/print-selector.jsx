import { useState } from "react";

const PrintSelector = () => {
  const [query, setQuery] = useState('');

  const [value, setValue] = useState('');
  const [list, setList] = useState(['ghbdtn', 'ffjcng', 'dichds', 'dnbcv']);
  const [resaltSearch, setResaltSearch] = useState(list);
    
  const searchCard = (query) => {
    let result = list.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
    setResaltSearch(result);
  };

  const handleCline = () => {
    setResaltSearch(list);
    setValue('');
  }

  const handleQueryChange = (e) => {
    if (e.target.value === '') {
      setResaltSearch(list);
      setValue('');
    } else {
      setValue(e.target.value);
      setQuery(e.target.value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCard(query)
  }
  return (
    <>
      <h1>Коммерческая печать на шарах</h1>
      <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={handleQueryChange}
        type="text"
        placeholder="Поиск..."
        minLength="2"
        maxLength="200"
        autoComplete="off"
        required
      />
      {value && <button 
        onClick={handleCline}
      >+</button>}
      <button type="submit" >Найти</button>
      </form>
      {resaltSearch.map((item, index) => (
        <div key={index}>
          {item}
        </div>
      ))}
      
    </>
  )
};

export default PrintSelector;