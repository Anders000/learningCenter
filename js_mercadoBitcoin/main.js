var moedaForm = document.getElementById('coinForm');

moedaForm.addEventListener('change', function(){
  console.log(this.value)
  const urlApi = 'https://www.mercadobitcoin.net/api/'+ this.value +'/ticker/';

  
fetch(urlApi).then(function(response) {
  response.json().then(function(data) {    
  var coin = data.ticker
    console.log(coin.vol);
  });
}).catch(function(err) {
  console.error('Failed retrieving information', err);
})

})
