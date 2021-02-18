


function guardarEnTabla(cantidad , medidas) {

   var canti = 	document.getElementById("cantidad").value;
   var tablaoriginal = document.getElementById("tablasMedidasAcortar");
   //alert("la cantidad es:"+canti);

  //var miDiv = document.getElementsByTagName("tablaDeMedidas")[0];
  var miDiv = document.getElementById('tablaDeMedidas'); 

  var tamCeldas = tablaoriginal.rows.length;
  //alert(tamCeldas);

    // Crea un elemento <table> y un elemento <tbody>
  //var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");
 
  // Crea las celdas
  for (var i = 0; i < canti ; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");
 
    for (var j = 0; j < 2; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
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

}

