export default function AuthenticatedLayout({ children }) {
    return (
        <main className="flex flex-col items-center justify-center h-screen lg:flex-row ">
            {children}
        </main>
    );
}   