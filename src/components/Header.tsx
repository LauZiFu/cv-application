export default function Header({ text = "Untitled" }: { text?: string }) {
  return (
    <header>
      <h1>{text}</h1>
    </header>
  );
}
