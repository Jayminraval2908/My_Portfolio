export default function SectionHead({ n, title }) {
  return (
    <div data-r className="flex items-end justify-between border-b border-line pb-6 mb-12">
      <h2 className="font-display font-extrabold tracking-tight text-4xl md:text-6xl">{title}</h2>
      <span className="font-mono text-sm text-accent">{n}</span>
    </div>
  );
}
