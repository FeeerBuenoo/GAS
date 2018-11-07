function crearDocs() {
 //Abrimos un Doc donde vamos a escibir el contenido.
 var doc=DocumentApp.openById('1wcEO9kpbOISsB0s5cyKkycWYMON7MElzCiGtoOm4ljg'); /* <-- ruta del doc donde quieres escribir la información. */
  
 //Contenido de nombres de inscripción al Máster.
 var sheet =  SpreadsheetApp.openById("ruta del Doc con la lista de nombres.");
  
 //Obtenemos los títulos de los Másters.
 var titulo1 = sheet.getRange("A1:B1").getValues();
 var titulo2 = sheet.getRange("A2:D2").getValues();
  
 //Rellenamos la lista de los alumnos que van a asistir.
 var contenido = sheet.getRange("A3:B6").getValues();
 
 //Fechas de los Másters.
 var sheets =  SpreadsheetApp.openById("1sVatBcQiLpepA2Dxxc92OvbPnHXFoxY44FMyW6BfupE"); /* <-- ruta del sheet donde están los eventos restringidos por fechas. */
 var fechas= sheets.getRange("E2:E4").getValues();

 //Cambio de fecha.
 for(i=0;i < fechas.length;i++){
  var date=Utilities.formatDate(new Date(fechas[i]), "GMT+1","yyyy/MM/dd");
 }

 //Generación de estructura para mostrarla en el Doc.
 doc.setText(titulo1+"\n"+titulo2);
 var body = doc.getBody();
 var celda=[
   ['Nombres',date[1],date[1],date[2],date[2]],
   [contenido[1], '', '', ''],
   [contenido[2], '', '', ''],
   [contenido[3], '', '', ''],
   ]
 body.appendTable(celda);

}
