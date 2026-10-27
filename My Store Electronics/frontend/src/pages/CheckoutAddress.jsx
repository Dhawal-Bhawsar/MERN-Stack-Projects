import {useState} from "react";
import api from "../api/axios";
import { useNavigate } from "react-router";

export default function CheckoutAddress() {
    const userId = localStorage.getItem("userId");
    const navigate = useNavigate();

    const [form, setForm] = useState({
        fullName: "",
        phoneNumber: "",
        addressLine: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const saveAddress = async (e) => {
        e.preventDefault();
        await api.post("/address/add", {
            userId,
            ...form,
            phone: form.phoneNumber,
            postalCode: form.zipCode,
        });
        navigate("/checkout");
    };

    return(
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Delivery Address</h1>
            <form onSubmit={saveAddress}>
                {Object.keys(form).map((key) => (
                    <input
                        key={key}
                        name={key}
                        placeholder={key}
                        onChange={handleChange}
                        className="border border-gray-300 px-3 py-2 rounded w-full mb-3"
                    />
                ))}
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Save Address
                </button>
            </form>
        </div>
    )
}