function calendarToSheet(){

  //
  // Exportar eventos del calendario de Google a una hoja de cálculo de Google
  //

  //Variables que definen la dirección de correo de Google para después enlazar el calendario de dicho usuario.  
  var mycal = "fernandobueno.16@campuscamara.es";
  var cal = CalendarApp.getCalendarById(mycal);
  
  //Opciones de uso de la variable events:
  //1. var events = cal.getEvents(new Date("January 3, 2014 00:00:00 CST"), new Date("January 14, 2014 23:59:59 CST")); --> Muestra los eventos entre 2 fechas.
  //2. var events = cal.getEvents(new Date("January 3, 2014 00:00:00 CST"), new Date("January 14, 2014 23:59:59 CST"), {search: 'word1'}); --> Muestra los eventos entre 2 fechas + el filtro de búsqueda de un evento concreto.
  // 
  //Explicación de cómo funciona la sección de búsqueda como parte de la función getEvents:
  //    {search: 'evento1'}                Búsqueda de eventos por un evento.
  //    {search: '-evento1'}               Búsqueda de eventos sin el evento en concreto.
  //    {search: 'evento1 evento2'}        Búsqueda de eventos por evento2 SOLAMENTE.
  //    {search: 'evento1 -evento2'}       Búsqueda de eventos SIN evento2.
  //    {search: 'evento1 +evento2'}       Búsqueda de eventos con evento1 y evento2.
  //    {search: 'evento1 +-evento2'}      Búsqueda de eventos con evento1 y sin evento2.
  //
  var events = cal.getEvents(new Date("December 1, 2018 00:00:00 CST"), new Date("December 31, 2018 23:59:59 CST"), {search: 'PROG'});
  
  //Enlazamos la hoja de cálculo de Google con el código calendarToSheet para que muestre la información recogida en el Spreadsheet.
  var sheet = SpreadsheetApp.getActiveSheet();
  
  //Con clearContents lo que conseguimos es borrar la tabla de contenido cada vez que realizamos la ejecución del código.
  sheet.clearContents();  
  
  //Generamos un header con la información clasificada por cada casilla.
  var header = [["Correo electrónico", "Título del evento", "Descripción", "Localización", "Comienzo", "Fin", "Duración", "Visibilidad", "Fecha de creación", "Última modificación", "MyStatus", "Creado por", "Evento de todo el día", "Evento recurrente"]]
  var range = sheet.getRange(1,1,1,14);
  range.setValues(header);

  
  //Con el siguiente for recorremos todos los eventos
  for (var i=0;i<events.length;i++) {
    var row=i+2;
    var myformula_placeholder = '';
    
    //Con la variable details recogemos toda la información necesaria para recoger de los eventos. Con range devolvemos los datos recogidos y los muestra en la hoja de cálculo.
    var details=[[mycal,events[i].getTitle(), events[i].getDescription(), events[i].getLocation(), events[i].getStartTime(), events[i].getEndTime(), myformula_placeholder, ('' + events[i].getVisibility()), events[i].getDateCreated(), events[i].getLastUpdated(), events[i].getMyStatus(), events[i].getCreators(), events[i].isAllDayEvent(), events[i].isRecurringEvent()]];
    var range=sheet.getRange(row,1,1,14);
    range.setValues(details);

    //Con la siguiente estructura de código conseguimos recoger la duración de los eventos y replicarlo la cabecera Duración de la hoja de cálculo.
    var cell=sheet.getRange(row,7);
    cell.setFormula('=(HOUR(F' +row+ ')+(MINUTE(F' +row+ ')/60))-(HOUR(E' +row+ ')+(MINUTE(E' +row+ ')/60))');
    cell.setNumberFormat('.00');

  }
}
