import React, { useState} from "react";

function LoginModal(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div>
            <div className="modal">
                <div className="modal__content">
                    <div className="modal__header">
                        Login
                    </div>
                    <div className="modal__body">
                        <form>
                            <div className="login__username">
                                <label htmlFor="login__username">Username: </label>
                                <input type="text" id="login__username" name="login__username"></input>
                            </div>
                            <div className="login__password">
                                <label htmlFor="login__password">Password: </label>
                                <input type="text" id="login__password" name="login__password"></input>
                            </div>
                        </form>
                    </div>
                    <div className="modal__footer">
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginModal;