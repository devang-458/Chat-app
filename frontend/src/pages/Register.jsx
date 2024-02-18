import { BottomWarning } from "../Components/BottomWarning";
import { Button } from "../Components/Button";
import { FileBox } from "../Components/FileBox";
import { Heading } from "../Components/Heading";
import { InputBox } from "../Components/InputBox";
import { Password } from "../Components/Password";
import { SubHeading } from "../Components/SubHeading";

export function Register() {
    return <div className=" bg-slate-500 h-screen justify-center flex">
        <div className="flex flex-col justify-center">
            <div className="bg-white rounded-lg text-center h-max px-5  py-5 w-96">
            <Heading label={"WOW CHAT"}/>
            <SubHeading label= {"Register"}/>
            <InputBox type={"text"} placeholder={"Eren"} label={"Name:-"}/>
            <InputBox type={"text"} placeholder={"Eren@gmail.com"} label={"Email:-"}/>
            <Password />
            <FileBox type={"file"} />
            <Button label={"Signup"}/>
            <BottomWarning label={"You have an account"} to={"/login"} buttonText={"login"}/> 
            </div>
        </div>
    </div>
}