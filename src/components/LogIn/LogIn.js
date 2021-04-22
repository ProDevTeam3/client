import React from "react";
import { Button, VStack, StackDivider, Image } from "@chakra-ui/react";
import styles from "./LogIn.module.scss";
import { LoginPageStrings } from "../../constants/strings";
import LoginButton from "../LoginButton/LoginButton.js";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router";

const LogIn = () => {
  const { isAuthenticated } = useAuth0();

  const GUSLogo =
    "https://spis.gov.pl/wp-content/uploads/2021/01/cropped-logo-nsp.png";

  if (isAuthenticated) {
    return <Redirect to="/form" />;
  }
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.badge}>{LoginPageStrings.appVerison}</div>
        <div className={styles.logo}>
          <Image objectFit="cover" src={GUSLogo} alt="GUS Logo" />
        </div>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="center"
        >
          <LoginButton />
          <Button colorScheme="teal" variant="ghost">
            {LoginPageStrings.problemsButtonText}
          </Button>
        </VStack>
      </div>
    </div>
  );
};

export default LogIn;
