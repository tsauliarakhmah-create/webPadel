export default function Card({ children, dark = false }) {
  const colors = dark ? "bg-ink text-white" : "bg-surface text-ink";

  return (
    <article className={`flex flex-col gap-3 rounded-3xl p-8 ${colors}`}>
      {children}
    </article>
  );
}
