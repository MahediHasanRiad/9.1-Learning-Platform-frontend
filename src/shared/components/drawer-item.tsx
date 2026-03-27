import type { LucideIcon } from "lucide-react";

interface DrawerItemType {
  Icon: LucideIcon;
  label: string;
  text: number | string | string[];
}

function DrawerItem({ Icon, label, text }: DrawerItemType) {
  return (
    <div className="flex items-center gap-4 py-2 group cursor-default">
      <div className="flex shrink-0 items-center justify-center bg-primary-0/5 border border-primary-0/10 p-3 rounded-xl group-hover:bg-primary-0/10 transition-colors duration-200">
        <Icon size={20} className="text-primary-0" strokeWidth={2} />
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
          {label}
        </span>
        <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
          {text}
        </span>
      </div>
    </div>
  );
}

export default DrawerItem;
