import React, { useEffect, useState } from 'react'
//IMPORTAMOS ESTAS LIBRERIAS PARA AÑADIR NUESTRO ICONO
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//IMPORTAMOS ESTAS LIBRERIAS PARA CREAR NUESTRA TABLA
import Datatable from 'react-data-table-component'
//EXPORTAMOS ESTOS DATOS NECESARIOS PARA LA CREACION DE NUESTRA TABLA
import { columnas, opcionesPagina } from '../config/configuracionTabla'
import { usuarioTransaciones } from '../db/datos'
//IMPORTAMOS NUESTRO HEADER 
import Header from './layout/header'



//CREAMOS NUESTRO COMPONENTE 
const Transaciones = () => {
     
//CREAMOS NUESTROS DOS ESTADOS TANTO PARA LA BUSQUEDA COMO PARA NUESTROS DATOS
     const [state, setState] = useState({ busqueda: "" })
     const [datos, setdatos] = useState({usuarios:[]})
     
     //CREAMOS NUESTROS FUNCION QUE NOS PERMITIRA REALIZAR NUESTRA BUSQUEDA
     const buscar = (e) => {
         
          //CAMBIAMOS NUESTRO ESTADO DE BUSQUEDA , CON LO QUE SE DIGITE EN NUESTRO INPUT
         setState({ busqueda: e.target.value })
         //LLAMAMOS NUESTRA FUNCUON PARA FILTRAR LA BUSQUEDA
          fitralElementos()
 //ENCASO  QUE NUESTRO INPUT ESTE VACIO NOS DEVOLVERA EL ARRAY COMPLETO
          if (e.target.value === "") {
               setdatos({usuarios:usuarioTransaciones})
          }
               




     }
     //FUNCION PARA FILTRAR NUESTROS ELEMENTOS
     const fitralElementos = () => {
          //LLAMAMOS LA FUNCION FILTER 
          const search = usuarioTransaciones.filter(dato => {
     
   //CREAMOS SENTENCIAS PARA REALIZAR LAS BUSQUEDAS
               if (dato.fecha.toString().includes(state.busqueda)) {
                    return dato
               }
               else if (dato.monto.toString().includes(state.busqueda)) {
                    return dato
               }
                   
               else if (dato.usuario.toLocaleLowerCase().toString().includes(state.busqueda)) {
                    return dato
               }
               else if (dato.descripcion.toLocaleLowerCase().toString().includes(state.busqueda)) {
                    return dato
               }
                   
            
           

          })
         //PASAMOS EL RESULTADO A NUESTRO ESTADO
          setdatos({ usuarios: search })
          
     }
    

//CARGAMOS LOS DATOS DE USUARIO AL RENDERIZAR NUESTRO COMPONENTE
 useEffect(() => {
     setdatos({ usuarios: usuarioTransaciones})
   
}, [])
     
     
  
     

     return (<>
         
          <Header/>  
          <div  style={{float: "right",
             padding: "20px"}}>  
          
            <input type="text"
              placeholder="Buscar"
              name="busqueda"
             value={state.busqueda || ""}
               onChange={buscar}
                    style={{
                         height: "32px",
                         width: "200px",
                         border: "1px solid #e5e5e5",
                         padding: "0 32px 0 16px"
               }}
               />
              
           
               <button style={{
               
               height: "34px",
               width: "32px",
               textAlign: "center",
               alignItems: "center",
               justifyContent: "center",
          }} type="button" >
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </button> 
          </div>   
          
         
          <Datatable
           columns={columnas}
           data={datos.usuarios}
           title='Transaciones'
           pagination
           fixedHeader
           paginationComponentOptions={opcionesPagina}
          
          ></Datatable>
     </>);
}
 
export default Transaciones;