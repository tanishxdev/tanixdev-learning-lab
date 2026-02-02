// Card.jsx
// This component accepts any inner content using props.children.

export const Card = ({ children }) => {
  return (
    <div
      style={{
        border: "2px solid red",
        padding: "10px",
        margin: "10px 0",
      }}
    >
      {children}
    </div>
  );
};
