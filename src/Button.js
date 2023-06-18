export default function Button({ setchange }) {
  function handleColor() {
    setchange((pre) => !pre);
  }

  return (
    <div>
      <button className="switch" onClick={handleColor}>
        Toggle button
      </button>
    </div>
  );
}
