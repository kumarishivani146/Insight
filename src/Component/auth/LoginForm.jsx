import React, { useContext,useState } from "react";
import {auth} from "../../firebase";
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
export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin=()=>{
    auth.signInWithEmailAndPassword(email , password)
    .then((userCredential)=>{
        // send verification mail.
      console.log(auth.currentUser.emailVerified);
      if(!auth.currentUser.emailVerified)
      {
        auth.signOut();
        alert("Verify the email and login back!!");
      }
    })
    .catch(alert);
  }
    return (
      <BoxContainer>
        <FormContainer>
          <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"/>
          <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Forget your password?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit" onClick={handleLogin}>Signin</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          Don't have an accoun?{" "}
          <BoldLink href="#"  onClick={switchToSignup}>
            Signup
          </BoldLink>
        </MutedLink>  
      </BoxContainer>
    );
  }