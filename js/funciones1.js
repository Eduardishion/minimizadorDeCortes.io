
function mostrarValores(){
   //para obtener lso datos de las input de entrada 
   let medidaEstandar = 	document.getElementById("medidaEstandar").value;
   let cantidad = 	document.getElementById("cantidad").value;
   let medida = 	document.getElementById("medida").value;

   //para retornar en texto los datos procesados 
   document.getElementById("valores").innerHTML = 'los valores son:'+medidaEstandar+" "+cantidad+" "+medida;
   document.getElementById("mensaje").innerHTML = 'deseas agregar mas perfiles escribe nuevamente la cantidad y medida...';
   //document.getElementById("medidaEstandar").value = '';
   document.getElementById("cantidad").value = '';
   document.getElementById("medida").value = '';
}

function guardarEnTabla(cantidad , medidas) {
   
   
   let canti = 	document.getElementById("cantidad").value;
   let tablaoriginal = document.getElementById("tablasMedidasAcortar");
   //alert("la cantidad es:"+canti);

  //let miDiv = document.getElementsByTagName("tablaDeMedidas")[0];
  let miDiv = document.getElementById('tablaDeMedidas'); 

  let tamCeldas = tablaoriginal.rows.length;
  //alert(tamCeldas);

    // Crea un elemento <table> y un elemento <tbody>
  //let tabla   = document.createElement("table");
  let tblBody = document.createElement("tbody");
 
  // Crea las celdas
  for (let i = 0; i < canti ; i++) {
    // Crea las hileras de la tabla
    let hilera = document.createElement("tr");
 
    for (let j = 0; j < 2; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      let celda = document.createElement("td");
      let textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
 
    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }
 
  // posiciona el <tbody> debajo del elemento <table>
  tablaoriginal.appendChild(tblBody);
  // appends <table> into <body>
  miDiv.appendChild(tablaoriginal);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  //tablaoriginal.setAttribute("border", "2");
  //
 
  /*
  
  
  style="width: 300px; height: 400px;"
  <!-- <table id="tablasMedidasAcortar" class="table"  > 
				<thead>
					 <tr> <th>Identificador</th> <th>Medida a cortar</th> </tr>
			    </thead> 
			    <tbody id = "datos">
			    	
			        <tr> <th scope="row">1</th> <td>Mark</td>  </tr>
			    	<tr> <th scope="row">2</th> <td>Jacob</td> </tr> 
			    	<tr> <th scope="row">3</th> <td>Larry</td></tr> 
			    </tbody> 
			</table>
 		-->
   */
  mostrarValores();
}

