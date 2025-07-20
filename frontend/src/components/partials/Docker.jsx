import IconDock from "../system/IconDock";

export default function Docker() {
    return (
        <div
            className="fixed z-50 flex gap-0.5 px-2 py-2 transform -translate-x-1/2 shadow-lg backdrop-blur-md bottom-2 left-1/2 max-w-fit rounded-xl ">
            <IconDock />
            <IconDock icon="💰" label="Wallet" />
            <IconDock icon="📊" label="Stats" />
            <IconDock icon="📅" label="Calendar" />
            <IconDock icon="💳" label="Credit" />
            <IconDock icon="💵" label="Cash" />
            <IconDock icon="💸" label="Expenses" />
            <IconDock icon="💼" label="Work" />
            <IconDock icon="🏦" label="Bank" />
            <IconDock icon="🏠" label="Home" />
            <IconDock icon="👤" label="User" />
            <IconDock icon="🛎️" label="Alerts" />
            <IconDock icon="⚙️" label="Settings" />
        </div>
    )
}