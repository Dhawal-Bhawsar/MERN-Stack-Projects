export default function LoadingSpinner({ full = false }) {
  return <div className={full ? "min-h-[40vh] flex items-center justify-center" : "py-4 text-center"}>Loading...</div>;
}
