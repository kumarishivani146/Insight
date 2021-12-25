import React, { useContext, useState } from "react";
import { auth, provider } from "../../firebase";
import { AccountContext } from "./accountContext";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "./marginer_index";
export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleRegister=(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password).then
        ((auth)=>{
            if(auth){
                console.log(auth);
            }
        }).catch((e)=>alert(e.message));
        setEmail("");
        setPassword("");
    }
    return (
      <BoxContainer>
        <FormContainer>
          <Input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Full Name" />
          <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"/>
          <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit" onClick={handleRegister}>Signup</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          Already have an account?
          <BoldLink href="#"  onClick={switchToSignin}>
            Signin
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    );
  }