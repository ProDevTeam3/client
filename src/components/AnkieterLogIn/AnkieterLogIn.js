import React from "react";
import { Button, ButtonGroup, FormLabel, Input } from "@chakra-ui/react"
import PropTypes from 'prop-types';

const AnkieterLogIn = ({login, passwd, change}) => {
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
}
  
export default AnkieterLogIn;