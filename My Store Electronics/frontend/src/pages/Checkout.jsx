import { useState, useEffect } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router";

export default function Checkout() {
    const userId = localStorage.getItem("userId");
    const [address, setAddress] = useState([]);
    const [selectedAddress, setSelectAddress] = useState(null);
    const [cart, setCart] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userId) {
            navigate("/");
            return;
        }

        api.get(`/cart/${userId}`).then((res) => {
            setCart(res.data.cart);
        });

        api.get(`/address/${userId}`).then((res) => {
            const addresses = res.data.addresses ?? [];
            setAddress(addresses);
            setSelectAddress(addresses[0]?._id ?? null);
        })

    }, [userId, navigate]);

    if (!cart) {
        return <div>Loading...</div>;
    }

    const total = cart.items.reduce(
        (sum, item) => sum + item.productId.price * item.quantity,
        0
    );

    const placeOrder = async () => {
        if (!selectedAddress) {
            alert("Please select an address.");
            return;
        }
        const res = await api.post("/order/place", {
            userId,
            address: address.find((item) => item._id === selectedAddress),
        });

        navigate(`/order/success/${res.data.order}`);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <h2 className="font-semibold mb-2">Select Address</h2>
            {address.map((addr) => (
                <label key={addr._id} className="block mb-2">
                    <input
                        type="radio"
                        name="address"
                        checked={selectedAddress === addr._id}
                        onChange={() => setSelectAddress(addr._id)}
                        className="mr-2"
                    />
                    <strong>{addr.fullName}</strong>
                    <p className="text-sm">
                        {addr.addressLine}, {addr.city}, {addr.state}, {addr.postalCode}
                    </p>
                    <p className="text-sm">{addr.phone}</p>
                </label>    
            ))}
            <h2 className="font-semibold mb-2 mt-4">Order Summary</h2>
            <p>Total Amount: ${total.toFixed(2)}</p>
            <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
            onClick={placeOrder}>
                Place Order (COD)
            </button>
        </div>
    );
}
