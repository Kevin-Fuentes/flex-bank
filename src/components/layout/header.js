import React from 'react'
import logo from '../../asset/img/flex-bank.png'

const imagenStyle = {
     width:"200px",
     height: "100px",
}

const Header = () => {
     return (<>
      <div style={{ margin: "0px auto",
               textAlign: "center"
          }}>
               <h1>Flex-Bank</h1>
          <img style={imagenStyle} src={logo} alt="Logo de flex-bank"/>
          </div>
     </>);
}
 
export default Header;