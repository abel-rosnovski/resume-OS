export default function OtherWorksGallery({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-border rounded-lg overflow-hidden hover:border-accent transition-colors"
        >
          <div className="aspect-video bg-black/40 flex items-center justify-center text-muted text-sm">
            {item.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
            ) : (
              <span>[image placeholder]</span>
            )}
          </div>
          <p className="text-sm text-center py-2 text-muted">{item.label}</p>
        </div>
      ))}
    </div>
  );
}