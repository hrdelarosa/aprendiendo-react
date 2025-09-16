export default function Key({ children, padClick }) {
  return (
    <div onClick={padClick} className="key">
      <span id="num">{children}</span>
    </div>
  );
}
