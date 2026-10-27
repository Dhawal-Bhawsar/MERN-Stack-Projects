import {Link, useNavigate} from "react-router";
import {useState, useEffect} from "react";
import api from "../api/axios";

export default function Navbar() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        const LoadCart = async () => {
            if(!userId) return setCartCount(0);

            const res = await api.get(`/cart/${userId}`);
            const total = (res.data.cart?.items ?? []).reduce(
                (sum, item) => sum + item.quantity, 0);
            setCartCount(total);
        }
        LoadCart();
        window.addEventListener("cartUpdated", LoadCart);

        return () => {
            window.removeEventListener("cartUpdated", LoadCart);
        }
    }, [userId]);

    const logout = () => {
        localStorage.clear();
        setCartCount(0);
        navigate("/login");
    }
    return (
        <nav className="flex justify-between p-4 shadow bg-black text-white">
            <Link to="/" className="text-xl font-bold">My Store</Link>
            
            <div className="flex items-center gap-4">
                <Link to="/cart" className="relative text-xl">
                    🛒
                    {
                        cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
                                {cartCount}
                            </span>
                        )
                    }
                </Link>

                {
                    !userId ? (
                        <>
                            <Link to="/login" className="text-blue-500">Login</Link>
                            <Link to="/signup" className="text-blue-500">Sign Up</Link>
                        </>
                    ) : (
                        <button onClick={logout} className="text-lg">Logout</button>
                    )
                }

            </div>
        </nav>
    )
}