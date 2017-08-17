// definindo e iniciando o módulo do angular
var app = angular.module("amanda", []);

// Controller do MAPA
app.controller('AmandaController', [ "$scope", "$http", function($scope, $http) {
    $scope.categoria = false;
    $scope.catRoupas = false; $scope.catSapatos = false; $scope.catAcessorios = false;
    $scope.corRoupas = false; $scope.corSapatos = false; $scope.corAcessorios = false;
    $scope.tamRoupas = false; $scope.tamSapatos = false; $scope.tamAcessorios = false;
    $scope.result = false;

    $scope.inicio = true;
    $scope.listCat = false;
    $scope.listRoupas = false; $scope.listSapatos = false; $scope.listAcessorios = false;
    $scope.colRoupas = false; $scope.colSapatos = false; $scope.colAcessorios = false;
    $scope.sRoupas = false; $scope.sSapatos = false; $scope.sAcessorios = false;

    $scope.inicio2 = false;
    $scope.listCat2 = false;
    $scope.listRoupas2 = false; $scope.listSapatos2 = false; $scope.listAcessorios2 = false;
    $scope.colRoupas2 = false; $scope.colSapatos2 = false; $scope.colAcessorios2 = false;
    $scope.sRoupas2 = false; $scope.sSapatos2 = false; $scope.sAcessorios2 = false;

    $scope.nome = [];
    $scope.busca = [];

    $scope.direcionarRou = function(){
      $scope.busca = $scope.roupas.toString();
      console.log($scope.busca);
      window.location.href = 'http://google.com';
    };

    $scope.direcionarSap = function(){
      $scope.busca = $scope.sapatos.toString();
      console.log($scope.busca);
      window.location.href = 'http://google.com';
    };

    $scope.direcionarAce = function(){
      $scope.busca = $scope.acessorios.toString();
      console.log($scope.busca);
      window.location.href = 'http://google.com';
    };

    setInterval(function(){
      window.scrollTo(0,document.body.scrollHeight);
    }, 100);

    $scope.irCat = function(){
      $scope.inicio2 = true;
      $scope.categoria = true;
      $scope.inicio = false;
      $scope.listCat = true;
    };

    $scope.irRou = function(){
      $scope.cat1 = true;
      $scope.listCat2 = true;
      $scope.listCat = false;
      $scope.catRoupas = true;
      $scope.listRoupas = true;
    };

    $scope.irSap = function(){
      $scope.cat2 = true;
      $scope.listCat2 = true;
      $scope.listCat = false;
      $scope.catSapatos = true;
      $scope.listSapatos = true;
    };

    $scope.irAce = function(){
      $scope.cat3 = true;
      $scope.listCat2 = true;
      $scope.listCat = false;
      $scope.catAcessorios = true;
      $scope.listAcessorios = true;
    };

    $scope.selRou = function(){
      $scope.listRoupas2 = true;
      $scope.listRoupas = false;
      $scope.corRoupas = true;
      $scope.colRoupas = true;
      console.log($scope.roupas)
    };

    $scope.selSap = function(){
      $scope.listSapatos2 = true;
      $scope.listSapatos = false;
      $scope.corSapatos = true;
      $scope.colSapatos = true;
      console.log($scope.sapatos)
    };

    $scope.selAce = function(){
      $scope.listAcessorios2 = true;
      $scope.listAcessorios = false;
      $scope.corAcessorios = true;
      $scope.colAcessorios = true;
      console.log($scope.acessorios)
    };

    $scope.selCorRou = function(){
      $scope.colRoupas2 = true;
      $scope.colRoupas = false;
      $scope.tamRoupas = true;
      $scope.sRoupas = true;
      console.log($scope.roupas)
    };

    $scope.selCorSap = function(){
      $scope.colSapatos2 = true;
      $scope.colSapatos = false;
      $scope.tamSapatos = true;
      $scope.sSapatos = true;
      console.log($scope.sapatos)
    };

    $scope.selCorAce = function(){
      $scope.colAcessorios2 = true;
      $scope.colAcessorios = false;
      $scope.tamAcessorios = true;
      $scope.sAcessorios = true;
      console.log($scope.acessorios)
    };

    $scope.selSizeRou = function(){
      $scope.sRoupas2 = true;
      $scope.sRoupas = false;
      $scope.result = true;
      console.log($scope.roupas)
      setTimeout(function() {
        $scope.direcionarRou();
      }, 5000);
    };

    $scope.selSizeSap = function(){
      $scope.sSapatos2 = true;
      $scope.sSapatos = false;
      $scope.result = true;
      console.log($scope.sapatos)
      setTimeout(function() {
        $scope.direcionarSap();
      }, 5000);
    };

    $scope.selSizeAce = function(){
      $scope.sAcessorios2 = true;
      $scope.sAcessorios = false;
      $scope.result = true;
      console.log($scope.acessorios)
      setTimeout(function() {
        $scope.direcionarAce();
      }, 5000);
    };

  $scope.roupas = [];
  $scope.sapatos = [];
  $scope.acessorios = [];

  $scope.roupaSelec = [];
  $scope.sapatoSelec = [];
  $scope.acessorioSelec = [];

  $scope.corRoupaSelec = [];
  $scope.corSapatoSelec = [];
  $scope.corAcessorioSelec = [];

  $scope.tamRoupaSelec = [];
  $scope.tamSapatoSelec = [];
  $scope.tamAcessorioSelec = [];

  $scope.selectRou = function(item){
    if(item == "Blazer "||item == "Blusa "||item == "Calca "||
    item == "Camisa "||item == "Casaco "||item == "Colete "||
    item == "Jaqueta "||item == "Jeans "||item == "Lingerie "||
    item == "Regata "||item == "Short "||item == "Vestido ") {
      $scope.roupaSelec.push(item);
      $scope.roupaSelecionada = $scope.roupaSelec.toString();
};
    if(item == "Amarelo "||item == "Azul "||item == "Rosa "||
    item == "Roxo "||item == "Vermelho ") {
      $scope.corRoupaSelec.push(item);
      $scope.corRoupaSelecionada = $scope.corRoupaSelec.toString();
};
    if(item == "PP/36 "||item == "P/38 "||item == "M/40 "||
    item == "G/42 "||item == "GG/44 ") {
      $scope.tamRoupaSelec.push(item);
      $scope.tamRoupaSelecionada = $scope.tamRoupaSelec.toString();
};
    $scope.roupas.push(item);
  };

  $scope.selectSap = function(item){
    if(item == "Bota "||item == "Rasteira "||item == "Salto fino "||
    item == "Salto grosso "||item == "Sandalia "||item == "Sapatilha "||
    item == "Tenis ") {
      $scope.sapatoSelec.push(item);
      $scope.sapatoSelecionado = $scope.sapatoSelec.toString();
};
    if(item == "Amarelo "||item == "Azul "||item == "Rosa "||
    item == "Roxo "||item == "Vermelho ") {
      $scope.corSapatoSelec.push(item);
      $scope.corSapatoSelecionado = $scope.corSapatoSelec.toString();
};
    if(item == "34 "||item == "35 "||item == "36 "||
    item == "37 "||item == "38 "||item == "39 ") {
      $scope.tamSapatoSelec.push(item);
      $scope.tamSapatoSelecionado = $scope.tamSapatoSelec.toString();
};
    $scope.sapatos.push(item);
  };

  $scope.selectAce = function(item){
    if(item == "Anel "||item == "Bolsa flap "||item == "Bolsa ombro "||
    item == "Brinco "||item == "Chapeu "||item == "Cinto "||
    item == "Colar "|| item == "Gorro "|| item == "Oculos de sol "||
    item == "Pulseira "|| item == "Tiara ") {
      $scope.acessorioSelec.push(item);
      $scope.acessorioSelecionado = $scope.acessorioSelec.toString();
};
    if(item == "Amarelo "||item == "Azul "||item == "Rosa "||
    item == "Roxo "||item == "Vermelho ") {
      $scope.corAcessorioSelec.push(item);
      $scope.corAcessorioSelecionado = $scope.corAcessorioSelec.toString();
};
    if(item == "P "||item == "M "||item == "G ") {
      $scope.tamAcessorioSelec.push(item);
      $scope.tamAcessorioSelecionado = $scope.tamAcessorioSelec.toString();
};
    $scope.acessorios.push(item);
  };

  }]);
