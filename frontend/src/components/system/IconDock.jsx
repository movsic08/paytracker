export default function IconDock({ icon = "❔", label = "App?" }) {
    return (
        <div className="relative group">
            <div className="absolute right-0 z-50 hidden px-2 py-1 text-xs text-white rounded-lg shadow-lg bg-white/30 backdrop-blur-md -top-7 group-hover:flex">
                {label}
            </div>

            <button className="flex flex-col items-center p-2 text-2xl text-white transition hover:bg-white/20 rounded-xl">
                {icon}
            </button>
        </div>
    );
}