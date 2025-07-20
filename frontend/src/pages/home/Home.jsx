import Docker from "../../components/partials/Docker";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";

export default function Home() {
    return (
        <AuthenticatedLayout>
            <Docker />
        </AuthenticatedLayout>
    )
}