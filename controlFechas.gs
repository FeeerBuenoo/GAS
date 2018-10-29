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
  //Definimos las variables para recoger tanto la información del tipo de fecha y la fecha concreta.
  var proyecto = SpreadsheetApp.getActive().getSheetByName("Formulario");
  var arrayFechas = proyecto.getRange("C15:C20").getValues();
  
  //Seleccionamos de manera ordenada cada fecha y convertimos la fecha al formato internacional.
  for(var i = 0;i < arrayFechas.length; i++) {
    var formatoFecha = Utilities.formatDate(new Date(arrayFechas[i]), "GMT+2", "yyyy/MM/dd");
    var fila = i + 15;
    proyecto.getRange(fila, 8).setValue(formatoFecha);
    Logger.log("La fecha "+arrayFechas[i]+" es equivalente a la fecha "+formatoFecha+" en el formato internacional.");
  }
}

function cambioTipoFecha() {
  //Definimos las variables para recoger tanto la información del tipo de fecha y la fecha concreta.
  var proyecto = SpreadsheetApp.getActive().getSheetByName("Formulario");
  var tipo = proyecto.getRange(26, 6).getValue();
  var arrayFechas = proyecto.getRange("C24:C29").getValues();
  
  //Convertimos la fecha al formato seleccionado mediante un Switch y los colocamos de manera ordenada.
  switch(tipo) {
    case tipo == "Europeo":
      proyecto.getRange(28, 8).setValue("DD/MM/YYYY");
      for(var i = 0;i < arrayFechas.length; i++) {
        var formatoFecha = Utilities.formatDate(new Date(arrayFechas[i]), "GMT+2", "dd/MM/yyyy");
        var fila = i + 24;
        proyecto.getRange(fila, 8).setValue(formatoFecha);
        Logger.log("La fecha "+arrayFechas[i]+" es equivalente a la fecha "+formatoFecha+" en el formato europeo.");
      }
      break;
    case tipo == "Japonés":
      proyecto.getRange(28, 8).setValue("YYYY/DD/MM");
      for(var i = 0;i < arrayFechas.length; i++) {
        var formatoFecha = Utilities.formatDate(new Date(arrayFechas[i]), "GMT+2", "yyyy/dd/MM");
        var fila = i + 24;
        proyecto.getRange(fila, 8).setValue(formatoFecha);
        Logger.log("La fecha "+arrayFechas[i]+" es equivalente a la fecha "+formatoFecha+" en el formato japonés.");
      }
      break;
    case tipo == "Estadounidense":
      proyecto.getRange(28, 8).setValue("MM/DD/YYYY");
      for(var i = 0;i < arrayFechas.length; i++) {
        var formatoFecha = Utilities.formatDate(new Date(arrayFechas[i]), "GMT+2", "MM/dd/yyyy");
        var fila = i + 24;
        proyecto.getRange(fila, 8).setValue(formatoFecha);
        Logger.log("La fecha "+arrayFechas[i]+" es equivalente a la fecha "+formatoFecha+" en el formato estadounidense.");
      }
      break;
  }
}
