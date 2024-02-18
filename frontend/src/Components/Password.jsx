import { useState } from "react"

export const Password = ({setPassword}) => {
    const [showPassword, setShowPassword] = useState(false)


    const togglePasswordVisibilty = () => {
        setShowPassword(!showPassword)
    }
    return <div>
        <div   className="flex justify-between pr-2" >
            <label className="text-sm font-medium text-left py-2">Password:-</label>
            <button onClick={togglePasswordVisibilty}> 
            {showPassword ? (<i class="fa-solid fa-eye"></i>) : (<i class="fa-solid fa-eye-slash"></i>)}
                </button>
        </div>
        <input 
        type={showPassword ? 'text': 'password'}
        className="p-2 text-lg w-full border-slate-200 rounded border px-2"
        id="password"
        placeholder="***********"
        name="password"
        onChange={(e)=>{
            setPassword(e.target.value)
        }}
        ></input>
    </div>
}