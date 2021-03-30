import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom"

const LogIn = props => {


        return (
            <div className="logInButtons">
                <button>
                <Link to ="/login/ankieter">Zaloguj jako ankieter</Link>
                </button>
                <button>Zaloguj jako administrator</button>
            </div>
                    
        )

}

export default withRouter(LogIn);