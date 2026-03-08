export const ButtonClick = () => {
  function handleClick() {
    console.log("Button clicked");
  }
  return (
    <div>
      {" "}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
