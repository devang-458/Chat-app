export const FileBox = ({label , placeholder , onChange, type})=>{
    return <div>
        <input onChange={onChange} placeholder={placeholder} type={type} className="p-2 text-lg w-full border-slate-200 rounded-lg px-2"/>
    </div>
} 