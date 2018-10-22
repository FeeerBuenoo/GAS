function controlDate() {
  /*
  var proyecto = SpreadsheetApp.getActivateSpreadsheet();
  var hoja = proyecto.getSheetByName("Hoja 1");
  var bloque = hoja.getRange(7,7).getValue();
  */
  
  //Definimos las variables para recoger tanto la información del tipo de fecha y la fecha concreta.
  var proyecto = SpreadsheetApp.getActive().getSheetByName("Formulario");
  var tipo = proyecto.getRange(7, 6).getValue();
  var fecha = proyecto.getRange(7, 7).getValue();
  
  /*
  switch(tipo) {
    case tipo == "Japonés":
      var fechaJaponesa = Utilities.formatDate(new Date(fecha), "GMT+1", "yyyy-MM-dd");
      Logger.log("La fecha en el formato OSI 8601 es: "+fechaJaponesa);
      proyecto.getRange(12, 7).setValue(fechaJaponesa);
      break;
    case fecha == "Europeo":
      var fechaEuropea = Utilities.formatDate(new Date(fecha), "GMT+1", "dd-MM-yyyy");
      proyecto.getRange(12, 7).setValue(fechaEuropea);
      Logger.log("La fecha en el formato OSI 8601 es: "+fechaEuropea);
      break;
    case fecha == "Estadounidense":
      var fechaEstadounidense = Utilities.formatDate(new Date(fecha), "GMT+1", "MM-dd-yyyy");
      proyecto.getRange(12, 7).setValue(fechaEstadounidense);
      Logger.log("La fecha en el formato OSI 8601 es: "+fechaEstadounidense);
      break;
  }
  */
  
  //Controlamos que el tipo de fecha sea correcto y convertimos la fecha al formato internacional.
  if(tipo == "Japonés" || tipo == "Europeo" || tipo == "Estadounidense") {
    var formatoFecha = Utilities.formatDate(new Date(fecha), "GMT+2", "yyyy/MM/dd");
    proyecto.getRange(12, 7).setValue(formatoFecha);
    Logger.log("La fecha en el formato OSI 8601 es: "+formatoFecha);
  }
}
