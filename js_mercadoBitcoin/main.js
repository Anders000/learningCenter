var moedaForm = document.getElementById('coinForm');

moedaForm.addEventListener('change', function () {
  console.log(this.value)
  const urlApiTicker = 'https://www.mercadobitcoin.net/api/' + this.value + '/ticker/';
  const urlApiData = 'https://www.mercadobitcoin.net/api/' + this.value + '/day-summary/2018/6/20/';

  fetch(urlApiTicker).then(function (response) {
    response.json().then(function (data) {
      var coin = data.ticker
      console.log(coin.high);
      console.log(coin.low);
      console.log(coin.vol);
      console.log(coin.last);
      console.log(coin.buy);
      console.log(coin.sell);
    });
  }).catch(function (err) {
    console.error('Failed retrieving information', err);
  })
  var headers = {}

  fetch(urlApiData).then(function (response) {
    response.json().then(function (data) {
      var coinData = data
      console.log(coinData.amount + ' working no cors problem');
    });
  }).catch(function (err) {
    console.error('Failed retrieving information', err);
  })

})
