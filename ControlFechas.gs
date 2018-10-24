function controlDate() {  
  //Definimos las variables para recoger tanto la información del tipo de fecha y la fecha concreta.
  var proyecto = SpreadsheetApp.getActive().getSheetByName("Formulario");
  var tipo = proyecto.getRange(6, 6).getValue();
  var fecha = proyecto.getRange(6, 7).getValue();
  
  //Controlamos que el tipo de fecha sea correcto y convertimos la fecha al formato internacional.
  if(tipo == "Japonés" || tipo == "Europeo" || tipo == "Estadounidense") {
    var formatoFecha = Utilities.formatDate(new Date(fecha), "GMT+2", "yyyy/MM/dd");
    proyecto.getRange(11, 7).setValue(formatoFecha);
    Logger.log("La fecha en el formato OSI 8601 es: "+formatoFecha);
  }
}


function estandarizarFechas() {
  var proyecto = SpreadsheetApp.getActive().getSheetByName("Formulario");
  var arrayFechas = proyecto.getRange("C15:C20").getValues();
  
  for(var i = 0;i < arrayFechas.length; i++) {
    var formatoFecha = Utilities.formatDate(new Date(arrayFechas[i]), "GMT+2", "yyyy/MM/dd");
    var fila = i + 15;
    proyecto.getRange(fila, 8).setValue(formatoFecha);
    Logger.log("La fecha "+arrayFechas[i]+" es equivalente a la fecha "+formatoFecha+" en el formato internacional.");
  }
}

function cambioTipoFecha() {
  var proyecto = SpreadsheetApp.getActive().getSheetByName("Formulario");
  var tipo = proyecto.getRange(26, 6).getValue();
  var arrayFechas = proyecto.getRange("C15:C20").getValues();
  
  switch(tipo) {
    case tipo == "Europeo":
      proyecto.getRange(28, 8).setValue("DD/MM/YYYY");
      Logger.log("exito");
      break;
    case tipo == "Japonés":
      proyecto.getRange(28, 8).setValue("YYYY/DD/MM");
      break;
    case tipo == "Estadounidense":
      proyecto.getRange(28, 8).setValue("MM/DD/YYYY");
      break;
  }
}