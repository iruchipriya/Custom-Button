import React from 'react';
import Button from './Button';

const App = () => {
  const handleClick = () => {
    alert('Button Clicked');
  };
  return (
    <div>
      <Button onClick={handleClick}>Click me</Button>

      <Button disabled>Disabled</Button>
    </div>
  );
};

export default App;
