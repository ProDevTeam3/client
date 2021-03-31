import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";

const LogIn = (props) => {
  return (
    <div className="logInButtons">
      <Button>
        <Link to="/login/ankieter">Zaloguj jako ankieter</Link>
      </Button>
      <Button>Zaloguj jako administrator</Button>
    </div>
  );
};

export default LogIn;
