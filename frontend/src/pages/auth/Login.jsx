import { useNavigate } from "react-router-dom";
import Input from "../../components/forms/Input";

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Do your login logic here...
        // Then navigate to another page
        navigate('/home');
    };
    return (
        <div className="flex flex-col items-center justify-center flex-1 max-w-md text-center drop-shadow-3xl">
            <div className="flex flex-col w-full lg:flex-row ">
                <div className="flex-1 w-full px-6 py-4 bg-orange-700 rounded-l-xl">

                </div>
                <div className="h-full px-6 py-4 bg-white/40 w-fit rounded-r-xl">
                    <form action="">
                        <Input label="Email" type="email" />
                        <Input label="Password" type="password" />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
