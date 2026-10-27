import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import api from "../api/axios";

const emptyCart = { items: [] };

export default function Cart() {
    const userId = localStorage.getItem("userId");
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState(emptyCart);

    // Load cart items for the user
    const loadCart = async () => {
        if (!userId) {
            setCartItems(emptyCart);
            return;
        }

        try {
            const res = await api.get(`/cart/${userId}`);
            setCartItems(res.data?.cart ?? emptyCart);
        } catch (error) {
            console.error("Failed to load cart:", error);
            setCartItems(emptyCart);
        }
    };

    useEffect(() => {
        loadCart();
    }, [userId]);

    const removeItem = async (productId) => {
        if (!userId) return;

        await api.post("/cart/remove", { userId, productId });
        loadCart();
        window.dispatchEvent(new Event("cartUpdated"));
    };

    // Update item quantity in the cart
    const updateQuantity = async (productId, quantity) => {
        if (!userId) return;

        if (quantity <= 0) {
            await removeItem(productId);
            return;
        }
        await api.post("/cart/update", { userId, productId, quantity });
        loadCart();
        window.dispatchEvent(new Event("cartUpdated"));
    };

    const validItems = (cartItems?.items ?? []).filter((item) => item?.productId && item.productId._id);
    const totalPrice = validItems.reduce(
        (sum, item) => sum + (Number(item.productId.price) || 0) * Number(item.quantity || 0),
        0
    );

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

            {validItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {validItems.map((item) => (
                        <div
                            key={item.productId._id}
                            className="flex items-center justify-between border p-4 rounded"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.productId.image}
                                    alt={item.productId.title}
                                    className="w-16 h-16 object-contain bg-white rounded"
                                />
                                <div>
                                    <h2 className="font-semibold text-lg">{item.productId.title}</h2>
                                    <p className="text-gray-600">${item.productId.price}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => updateQuantity(item.productId._id, item.quantity - 1)}
                                    className="px-2 py-1 bg-gray-200 rounded"
                                >
                                    -
                                </button>

                                <span>{item.quantity}</span>
                                <button
                                    onClick={() => updateQuantity(item.productId._id, item.quantity + 1)}
                                    className="px-2 py-1 bg-gray-200 rounded"
                                >
                                    +
                                </button>
                            </div>
                            <div>
                                <p className="font-semibold">
                                    ${(Number(item.productId.price) * Number(item.quantity || 0)).toFixed(2)}
                                </p>
                            </div>
                            <button
                                onClick={() => removeItem(item.productId._id)}
                                className="text-red-500"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="text-right mt-4">
                        <h2 className="text-xl font-bold">
                            Total: ${totalPrice.toFixed(2)}
                        </h2>
                    </div>
                    <button
                        onClick={() => navigate("/checkout/address")}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
}
