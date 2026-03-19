// import { cn } from "@/shared/lib/cn";

// export type RedactorTab = "dishes" | "categories";

// interface TabsSwitcherProps {
//     activeTab: RedactorTab;
//     onChange: (tab: RedactorTab) => void;
// }

// const tabs: Array<{ value: RedactorTab; label: string }> = [
//     { value: "dishes", label: "Блюда" },
//     { value: "categories", label: "Категории" },
// ];

// export const TabsSwitcher = ({ activeTab, onChange }: TabsSwitcherProps) => {
//     return (
//         <div className="inline-flex w-full gap-1 rounded-xl bg-slate-100 p-1">
//             {tabs.map((tab) => (
//                 <button
//                     key={tab.value}
//                     type="button"
//                     onClick={() => onChange(tab.value)}
//                     className={cn(
//                         "rounded-lg px-4 py-2 text-xl font-medium transition-colors",
//                         activeTab === tab.value
//                             ? "bg-white text-black"
//                             : "text-slate-600",
//                     )}
//                 >
//                     {tab.label}
//                 </button>
//             ))}
//         </div>
//     );
// };
