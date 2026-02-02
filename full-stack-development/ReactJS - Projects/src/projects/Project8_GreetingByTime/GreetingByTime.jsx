import "./GreetingByTime.css";

function GreetingByTime() {
  const hour = new Date().getHours();

  let greeting;

  if (hour < 12) {
    greeting = "Good Morning 🌄 ";
  } else if (hour < 17) {
    greeting = "Good Afternoon ☀️";
  } else if (hour < 21) {
    greeting = "Good Evening 🌆";
  } else {
    greeting = "Good Night 🌙";
  }

  return (
    <div className="greeting-container">
      <h2>{greeting}</h2>
      <p>Current Hour: {hour}</p>
    </div>
  );
}

export default GreetingByTime;
