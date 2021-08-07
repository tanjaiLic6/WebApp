let figlet = require('figlet');
 

let getFiglet=(word,font)=>{
   return figlet.text(word, {
        font: font,
        horizontalLayout: 'controlled smushing',
        verticalLayout: 'controlled smushing ',
        width: 60,
        whitespaceBreak: true
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
    });
    

}

figlet.fonts(function(err, fonts) {
    if (err) {
        console.log('something went wrong...');
        console.dir(err);
        return;
    }
    console.dir(fonts);
});



getFiglet('Tanja','3D-ASCII');