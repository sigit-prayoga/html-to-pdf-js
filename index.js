var htmlToPdf = require('html-to-pdf');
htmlToPdf.setDebug(true);
htmlToPdf.convertHTMLFile('template.html', 'template.pdf', function(err,suc){
    if(suc){
        console.log('success: ', suc)
    }else{
        console.log('error: ', err)
    }
});