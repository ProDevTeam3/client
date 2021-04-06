import React, { useEffect } from "react";
import { Button, ButtonGroup, FormLabel, Input } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const AnkieterLogIn = ({ login, passwd, change }) => {
  const history = useHistory();
  const user = useAuth0();

  useEffect(() => {
    console.log(user);

    if (!user.isLoading && !user.isAuthenticated) {
      history.push("/login");
    }
  }, [user]);

  return (
    <div className={"Ankieterlogin"}>
      <FormLabel>Login: </FormLabel>
      <Input type="text" value={login} onChange={change} />
      <FormLabel>Hasło: </FormLabel>
      <Input type="password" value={passwd} onChange={change} />
      <Button>Zaloguj</Button>
    </div>
  );
};

AnkieterLogIn.propTypes = {
  login: PropTypes.string,
  passwd: PropTypes.string,
};

export default AnkieterLogIn;
