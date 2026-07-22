export function ExpandableList({ visibleItems, hiddenItems, label = 'Ver todas las funciones' }: { visibleItems: readonly string[]; hiddenItems: readonly string[]; label?: string }) {
  return (
    <>
      <ul className="mt-4 grid gap-2 md:hidden">
        {visibleItems.map((item) => <li className="flex gap-2 text-sm leading-6 text-muted" key={item}><span className="mt-2 size-1.5 shrink-0 rounded-full bg-mechanic" />{item}</li>)}
      </ul>
      {hiddenItems.length > 0 ? (
        <details className="mt-3 md:hidden">
          <summary className="focus-ring min-h-11 cursor-pointer rounded-2xl border border-mechanic/30 bg-mechanic/10 px-4 py-3 text-sm font-bold text-mechanic marker:text-mechanic">{label}</summary>
          <ul className="mt-3 grid gap-2 rounded-2xl border border-white/10 bg-carbon/45 p-4">
            {hiddenItems.map((item) => <li className="flex gap-2 text-sm leading-6 text-muted" key={item}><span className="mt-2 size-1.5 shrink-0 rounded-full bg-mechanic/70" />{item}</li>)}
          </ul>
        </details>
      ) : null}
      <ul className="mt-5 hidden gap-3 md:grid md:grid-cols-2">
        {[...visibleItems, ...hiddenItems].map((item) => <li className="flex gap-3 text-sm leading-6 text-muted" key={item}><span className="mt-2 size-1.5 shrink-0 rounded-full bg-mechanic" />{item}</li>)}
      </ul>
    </>
  );
}
