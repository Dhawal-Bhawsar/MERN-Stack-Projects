import { useParams, useNavigate } from "react-router";

export default function OrderSuccess() {
    const {id} = useParams();
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    }
    return(
        <div className="p-6 max-w-md mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4 text-green-600">Order Placed Successfully!</h1>
            <p className="mt-4">Your order ID is: <span className="font-semibold">{id}</span></p> 

            <button
                onClick={goHome}
                className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Go to Home
            </button>
        </div>
    )
}