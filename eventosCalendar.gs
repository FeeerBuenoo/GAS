//Función que recoge información estructurada de una Hoja de Cálculo llamada 'Eventos' y los replica en la aplicación Calendar de Google.
function generarEventos() {
  //Función que controla la forma de almacenar la información para usarla en la creación del evento con la variable event.
  function darFormateoDate(fecha){
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var date = new Date(fecha);
    var mesWord=months[date.getMonth()];
    
    return mesWord+" "+date.getDate()+", "+date.getFullYear();
  }//Fin Función
  
  //Recogemos la información de la Hoja de Cálculo y la ordenamos por cada información mostrada.
  var proyecto = SpreadsheetApp.getActive().getSheetByName("Eventos");
  var fecha = proyecto.getRange("A2").getValue();
  var hora = proyecto.getRange("B2").getValue().split("-");
  var horaInicio = hora[0];
  var horaFinal = hora[1];
  var materia = proyecto.getRange("C2").getValue();
  var aula = proyecto.getRange("D2").getValue();
  var observaciones = proyecto.getRange("E2").getValue();
  var ciclo = proyecto.getRange("F2").getValue();
  
  //Mostramos información en consola.
  Logger.log(fecha+" "+hora[0]+" "+hora[1]+" "+materia+" "+aula+" "+observaciones+" "+ciclo);
  
  //Creamos el nuevo evento en Calendar.  
  var event = CalendarApp.getDefaultCalendar().createEvent(observaciones,
    new Date(darFormateoDate(fecha)+" "+horaInicio+" UTC+1"),
    new Date(darFormateoDate(fecha)+" "+horaFinal+" UTC+1"),
    {location: ciclo+", "+materia+", Aula: "+aula});
  Logger.log('Event ID: ' + event.getId());
}
