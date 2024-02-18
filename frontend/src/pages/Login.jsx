import { BottomWarning } from "../Components/BottomWarning";
import { Button } from "../Components/Button";
import { FileBox } from "../Components/FileBox";
import { Heading } from "../Components/Heading";
import { InputBox } from "../Components/InputBox";
import { Password } from "../Components/Password";
import { SubHeading } from "../Components/SubHeading";

export function Login() {
    return <div className=" bg-slate-500 h-screen justify-center flex">
        <div className="flex flex-col justify-center">
            <div className="bg-white rounded-lg text-center h-max px-5  py-5 w-96">
            <Heading label={"WOW CHAT"}/>
            <SubHeading label= {"Login"}/>
            <InputBox type={"text"} placeholder={"Eren@gmail.com"} label={"Email:-"}/>
            <Password />
            <Button label={"Signin"}/>
            <BottomWarning label={"You don't have an account"} to={"/register"} buttonText={"Register"}/> 
            </div>
        </div>
    </div>
}