function myFunction() {
  var sh = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var time = new Date();
  time = Utilities.formatDate(time, "GMT+02:00", "dd/MM/yyyy, HH:mm:ss");
  sh.getRange('B1').setValue(time);
}