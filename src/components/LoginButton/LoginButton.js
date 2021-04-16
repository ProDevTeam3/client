import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";
import { LoginPageStrings } from "../../constants/strings";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      colorScheme="teal"
      size="lg"
      className="btn btn-primary btn-block"
      onClick={loginWithRedirect}
      width="max(40vw, 100%)"
      height="12vh"
    >
      {LoginPageStrings.loginButtonText}
    </Button>
  );
};

export default LoginButton;
