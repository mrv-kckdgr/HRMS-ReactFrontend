import React, {useState} from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import SearchJobPositions from "./SearchJobPositions";
import CandidateProfile from "./CandidateProfile";
import SignedOut from "./SignedOut";
import { NavLink, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(true)

  const history = useHistory()

  function handleSignOut(params){
    setIsAuthenticated(false);
    history.push("/")
  }

  function handleSignIn(){
    setIsAuthenticated(true);
  }
  return (
    <div>
      <Menu inverted fixed="top" size="large" color={"pink"}>
        <Container>
          <Menu.Menu position="left">
            <Menu.Item name="home" as={NavLink} to="/"/>
            <Menu.Item name="about" />
            <SearchJobPositions />
          </Menu.Menu>
          
          
          <Menu.Menu position="right">
          <Link to="/sign-in">
          <Button color="orange" type="submit">Login</Button>
          </Link>
          <Link to="/sign-up">
          <Button color="teal" type="submit">Sign Up</Button>
          </Link>
            {isAuthenticated?<CandidateProfile signOut={handleSignOut} bısey={1}/>:<SignedOut signIn={handleSignIn}/>}
            
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
