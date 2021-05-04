$('#botao').on('click', function (evento){

    evento.preventDefault();

    var valor = $('#valor');
    valor.empty();
    
    var data = $('#data').val();
    var apikey = 'dCqlbssj7TbZTsk9tAFIxBNOPBVlvKRX5x2OHSda';

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${apikey}&date=${data}`,
        
        success: sucesso => {
            valor.append(`<h2>${sucesso.title}</h2>`);
            if(sucesso.copyright){
                valor.append(`<label>${sucesso.copyright}</label>`);
            }
            valor.append(`<p>${sucesso.explanation}</p>`);
            
            if(sucesso.media_type == 'image'){
                valor.append(`<center><img width="570" height="570" src="${sucesso.url}"></center>`)
            }
            else if(sucesso.media_type == 'video'){
                valor.append(`<center><iframe width="560" height="315" src="${sucesso.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>`)
            }
            else{
                valor.append(`<h1>Tipo de arquivo não reconhecido</h1>`);
            }
        },

        error: erro => {
            alert('Data inválida.');
        }
    });
});