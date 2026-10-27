import { formatMenuPrice, type MenuSize } from "@/data/menu";

export function MenuSizes({ sizes }: { sizes: MenuSize[] }) {
  return (
    <dl className="mt-4 divide-y divide-border/50">
      {sizes.map(({ size, price }) => (
        <div key={size} className="flex items-center justify-between gap-4 py-2">
          <dt className="text-sm text-muted-foreground">{size}</dt>
          <dd className="shrink-0 text-sm font-semibold tabular-nums text-gold">
            {formatMenuPrice(price)}
          </dd>
        </div>
      ))}
    </dl>
  );
}