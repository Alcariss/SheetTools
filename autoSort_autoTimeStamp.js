function onEdit(){
  //auto-time stamp: při editaci jakékoli hodnoty v jednom řádku, nastaví do určeného sloupce time-stamp
  var s = SpreadsheetApp.getActiveSheet();
  var r = s.getActiveCell();
  if( r.getColumn() != 6 ) { //zde pořadové číslo sloupce, kde má být time-stamp
    var row = r.getRow();
    var time = new Date();
    time = Utilities.formatDate(time, "GMT+02:00", "dd/MM/yyyy, HH:mm:ss"); //zde možno editovat formát time-stampu
    s.getRange('F' + row.toString()).setValue(time); // zde znovu místo 'F' písmeno sloupce, kde je time-stamp
  }  
  //auto-sort
  var sh = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var editedCell = sh.getActiveRange().getColumnIndex();
  if(editedCell) { 
    var range = sh.getRange("A2:I200"); //zde je nutno nastavit oblast, která bude řazena, tj. celou tabulku bez hlavičky. 'I100' může mít jakkoli vysoké číslo - to jsou jen prázdné řádky na konci tabulky
    range.sort({column: 5, ascending: true }); //toto číslo je pořadové číslo sloupce, podle kterého se řadí
  }
}