import React, { useEffect, useState } from 'react'
//IMPORTAMOS ESTAS LIBRERIAS PARA AÑADIR NUESTRO ICONO
import { faSearch, faSpa } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//IMPORTAMOS ESTAS LIBRERIAS PARA CREAR NUESTRA TABLA
import Datatable from 'react-data-table-component'
//EXPORTAMOS ESTOS DATOS NECESARIOS PARA LA CREACION DE NUESTRA TABLA
import { columnas, opcionesPagina } from '../config/configuracionTabla'
import { usuarioTransacciones } from '../db/datos'
//IMPORTAMOS NUESTRO HEADER 
import Header from './layout/header'



          //CREAMOS NUESTRO COMPONENTE 
          const Transaciones = () => {
               
          //CREAMOS NUESTROS DOS ESTADOS TANTO PARA LA BUSQUEDA COMO PARA NUESTROS DATOS FILTRADOS
               const [state, setState] = useState({ busqueda: "" })
               const [datos, setdatos] = useState({usuarios:[]})
               const [valorFiltro, setFiltro] = useState({ filtro: "" })
    
          //CREAMOS NUESTROS FUNCION QUE NOS PERMITIRA REALIZAR NUESTRA BUSQUEDA
          const buscar = (e) => {
          
               //CAMBIAMOS NUESTRO ESTADO DE BUSQUEDA , CON LO QUE SE DIGITE EN NUESTRO INPUT
               setState({ busqueda: e.target.value })
               
          //LLAMAMOS NUESTRA FUNCUON PARA FILTRAR LA BUSQUEDA
               fitralElementos()
          
     //ENCASO  QUE NUESTRO INPUT ESTE VACIO NOS DEVOLVERA EL ARRAY COMPLETO
               if (e.target.value === "") {
                    setdatos({usuarios:usuarioTransacciones})
               }
                    
     }
//FUNCION PARA SELECIONAR NUESTRO FILTRO
     const seleccionarFiltro = (e) => {
          setFiltro({filtro:e.target.value}) 
     }

           //FUNCION PARA FILTRAR NUESTROS ELEMENTOS
               const fitralElementos = () => {
          
          //LLAMAMOS LA FUNCION FILTER 
               const search = usuarioTransacciones.filter(dato => {
               const fecha = dato.fecha.toString().includes(state.busqueda)   
               const monto = dato.monto.toString().includes(state.busqueda)
               const descripcion = dato.descripcion.toLowerCase().includes(state.busqueda.toLocaleLowerCase()) 
                  
     //CREAMOS SENTENCIAS PARA REALIZAR LAS BUSQUEDAS
               if (fecha && valorFiltro.filtro === "fecha") {
                    return dato
               }
               else if (monto && valorFiltro.filtro === "monto"
               ) {
                    
                    return dato
               }
                   
               else if (descripcion && valorFiltro.filtro === "descripcion") {
                    return dato
               }
                 
            
           

               })
                    
         //PASAMOS EL RESULTADO A NUESTRO ESTADO
          setdatos({ usuarios: search })
          
     }
    

          //USEFFECT PARA QUE NUESTROS FILTROS NO TENGAN RETRASO
          useEffect(() => {
               fitralElementos()
          }, [state.busqueda])

      //CARGAMOS LOS DATOS DE USUARIO AL RENDERIZAR NUESTRO COMPONENTE
          useEffect(() => {
               setdatos({ usuarios: usuarioTransacciones})
          
          }, [])
     
   
     

     return (<>
         
          <Header/>  
          <div style={{
               float: "right",
               padding: "20px"
          }}>  
               

               <select
                    style={{
                         height: "32px",
                         width: "200px",
                         border: "1px solid #e5e5e5",
                         padding: "0 32px 0 16px"
                                              }}
                     
                    onChange={seleccionarFiltro}
                    name="filtro" id="filtro"
                    defaultValue={"todo"}
               >
               <option value="todos" disabled >Todos</option> 
               <option value="monto">Monto</option> 
               <option value="fecha" >Fecha</option>
               <option value="descripcion">Descripcion</option>
                    
               </select>

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
               }}
                    type="button"
               >

                    <FontAwesomeIcon
                         icon={faSearch}/>
               </button> 
               
          </div>   
          
                    <Datatable
                    columns={columnas}
                    data={datos.usuarios}
                    title='Transacciones'
                    pagination
                    fixedHeader
                    paginationComponentOptions={opcionesPagina}
                    noDataComponent={<h1>No se Encontro ningun elemento </h1>   }
                    ></Datatable>
                               </>);
}
 
export default Transaciones;