//AQUI ESPECIFICAMOS LAS COLUMNAS DE NUESTRA TABLA
export const columnas = [
	{
		name: 'ID',
		selector: 'id',
		sortable: true
	},
	{
		name: 'USUARIO',
		selector: 'usuario',
		sortable: true
	},
	{
		name: 'MONTO',
		selector: 'monto',
		sortable: true,
		grow: 3
	},
	{
		name: 'DESCRIPCION',
		selector: 'descripcion',
		sortable: true,
		grow: 3
	},
	{
		name: 'FECHA',
		selector: 'fecha',
		sortable: true,
		right: true
	}
];

//AQUI PASAMOS LA COMFIGURACION DE NUESTRA TABLA
export const opcionesPagina = {
	rowsPerPageText: 'Filas por pagina',
	rangeSeparatorText: 'de',
	selectAllRowsItem: true,
	selectAllRowsItemText: 'Todos'
};
