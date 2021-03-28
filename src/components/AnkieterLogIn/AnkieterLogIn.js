import React from "react";

const AnkieterLogIn = props => {


        return (
            <div className={"Ankieterlogin"}>
                <label>Login: </label>
                <input type="text"
                       value={props.login}
                       onChange={props.change}/>
                <label>Hasło: </label>
                <input type="password"
                       value={props.passwd}
                       onChange={props.change}/>
                <button>Zaloguj</button>
            </div>
                    
                )

}

export default AnkieterLogIn;