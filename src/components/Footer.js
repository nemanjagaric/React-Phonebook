import React from "react";

function Footer(){

    const year =new Date();

    return <div className="footer">
    <h4 >Copyright © React Phonebook {year.getFullYear()}</h4>
    </div>
}

export default Footer;