const ButtonClick = () => {
  function handleClick(e) {
    e.preventDefault(); // stops page reload
    console.log("Button Clicked!");
  }
  return <button onClick={handleClick}>Click Me</button>;
};

export default ButtonClick;
