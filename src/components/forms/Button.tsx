export default function Button({
  text = "Add item",
  handleClick,
}: {
  text?: string;
  handleClick: () => void;
}) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      {text}
    </button>
  );
}
