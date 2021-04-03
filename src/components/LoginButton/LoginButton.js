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
      onClick={() => loginWithRedirect()}
    >
      {LoginPageStrings.loginButtonText}
    </Button>
  );
};

export default LoginButton;
