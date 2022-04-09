var moedaForm = document.getElementById('coinForm');

moedaForm.addEventListener('change', function () {

  document.getElementById('tipoAtivo').innerHTML="";
  document.getElementById('nome').innerHTML="";
  document.getElementById('valor').innerHTML="";
  document.getElementById('valorizacao').innerHTML="";

  const timeStamp = new Date().getTime();
  const yesterdayTimeStamp = Math.round((timeStamp - 24 * 60 * 60 * 1000) / 1000);
  const yesterdayDate = new Date(yesterdayTimeStamp);

  const urlApiTicker = 'https://api.mercadobitcoin.net/api/v4/tickers?symbols=' + this.value;
  const urlApiCandle = 'https://api.mercadobitcoin.net/api/v4/candles?symbol=' + this.value + '&resolution=1h&to=' + Date.now() + '&from=' + yesterdayTimeStamp;
  const urlApiSymbol = 'https://api.mercadobitcoin.net/api/v4/symbols?symbols=' + this.value;

  fetch(urlApiTicker).then(function (response) {
    response.json().then(function (data) {
      var coinTicker = data[0]
      document.getElementById('valor').innerHTML += '<p>R$ ' + Math.round(coinTicker.last) + '</p>'
    });
  }).catch(function (err) {
    console.error('Failed retrieving information', err);
  }),

    fetch(urlApiCandle).then(function (response) {
      response.json().then(function (data) {
        var coinCandle = data
        var variacaoValor = (((coinCandle.c[23] / coinCandle.o[0]) - 1) * 100).toFixed(2)

        if (variacaoValor < 0) {
          document.getElementById('valorizacao').innerHTML += '<p><span class="red">' + Math.round(variacaoValor) + '% </span> nas últimas 24 horas</p>'
        } else {
          document.getElementById('valorização').innerHTML += '<p class="green">' + Math.round(variacaoValor) + '%  nas últimas 24 horas</p>'
        }
      });
    }).catch(function (err) {
      console.error('Failed retrieving information', err);
    })

  fetch(urlApiSymbol).then(function (response) {
    response.json().then(function (data) {
      var coinSymbol = data
      console.log(coinSymbol)
      document.getElementById('tipoAtivo').innerHTML += '<p>' + coinSymbol.type + '</p>'
      document.getElementById('nome').innerHTML += '<p>' + coinSymbol.description+ '</p>'
    });
  }).catch(function (err) {
    console.error('Failed retrieving information', err);
  })
})

Date.now()