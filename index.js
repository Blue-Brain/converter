function getSourseText () {
    let sourseText = document.getElementById('sourseText');
    let arrStringSourse = sourseText.value.split('\n');
    let arrGeneral = [];
    arrStringSourse.forEach((item) => {
        let arrItem = item.split(";");
        let email = arrItem[0].trim(); //надо убрать пробелы перед email.
        let name = arrItem[1];
        let date = arrItem[3];
        date = date.split(" ");
        let forname = 'EscuelaApp';
        let line = `${email},${name},${forname},${date}`
        arrGeneral.push(line);
        console.log(line);
    });
    console.log(arrGeneral);
}  
