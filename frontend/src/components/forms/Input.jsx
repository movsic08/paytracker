export default function Input({
    htmlFor = "id",
    label = "Input label",
    type = "text",
    placeholder = "Enter text here...",
    className = "",
    ...props
}) {
    return (
        <div className="flex flex-col items-start w-full gap-1 mt-1.5">
            <label
                htmlFor={htmlFor}
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
                {label}
            </label>
            <input
                id={htmlFor}
                type={type}
                placeholder={placeholder}
                className={`w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white ${className}`}
                {...props}
            />
        </div>
    );
}
