export default function GuestLayout({ children }) {
    return (
        <main className="flex flex-col items-center justify-center h-screen lg:flex-row backdrop-blur-2xl ">
            {children}
        </main>
    );
}
