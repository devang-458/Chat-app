import { Link } from "react-router-dom";

export function BottomWarning({label, buttonText, to}) {
    return <div className="flex flex-grow justify-center py-2 " >
        <div className="py-2">
            {label}
        </div>
        <Link to={to} className=" p-1 border rounded-lg bg-slate-200 m-2 text-sm  justify-center"> {buttonText} </Link>
    </div>
}