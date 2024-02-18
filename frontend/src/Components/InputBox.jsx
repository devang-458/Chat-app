export const InputBox = ({label , placeholder , onChange, type})=>{
    return <div>
        <div className="text-sm font-medium text-left py-2">
            {label}
        </div>
        <input onChange={onChange} placeholder={placeholder} type={type} className="p-2 text-lg w-full border-slate-200 border rounded-lg px-2"/>
    </div>
} 