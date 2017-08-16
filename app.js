// definindo e iniciando o módulo do angular
var app = angular.module("amanda", []);

// Controller do MAPA
app.controller('AmandaController', [ "$scope", "$http", function($scope, $http) {
    $scope.categoria = false;
    $scope.catRoupas = false;
    $scope.catSapatos = false;
    $scope.catAcessorios = false;
    $scope.corRoupas = false;
    $scope.corSapatos = false;
    $scope.corAcessorios = false;
    $scope.tamRoupas = false;
    $scope.tamSapatos = false;
    $scope.tamAcessorios = false;
    $scope.result = false;

    $scope.inicio = true;
    $scope.listCat = false;
    $scope.listRoupas = false;
    $scope.listSapatos = false;
    $scope.listAcessorios = false;
    $scope.colRoupas = false;
    $scope.colSapatos = false;
    $scope.colAcessorios = false;
    $scope.sRoupas = false;
    $scope.sSapatos = false;
    $scope.sAcessorios = false;

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
      $scope.categoria = true;
      $scope.inicio = false;
      $scope.listCat = true;
    };

    $scope.irRou = function(){
      $scope.listCat = false;
      $scope.catRoupas = true;
      $scope.listRoupas = true;
    };

    $scope.irSap = function(){
      $scope.listCat = false;
      $scope.catSapatos = true;
      $scope.listSapatos = true;
    };

    $scope.irAce = function(){
      $scope.listCat = false;
      $scope.catAcessorios = true;
      $scope.listAcessorios = true;
    };

    $scope.selRou = function(){
      $scope.listRoupas = false;
      $scope.corRoupas = true;
      $scope.colRoupas = true;
      console.log($scope.roupas)
    };

    $scope.selSap = function(){
      $scope.listSapatos = false;
      $scope.corSapatos = true;
      $scope.colSapatos = true;
      console.log($scope.sapatos)
    };

    $scope.selAce = function(){
      $scope.listAcessorios = false;
      $scope.corAcessorios = true;
      $scope.colAcessorios = true;
      console.log($scope.acessorios)
    };

    $scope.selCorRou = function(){
      $scope.colRoupas = false;
      $scope.tamRoupas = true;
      $scope.sRoupas = true;
      console.log($scope.roupas)
    };

    $scope.selCorSap = function(){
      $scope.colSapatos = false;
      $scope.tamSapatos = true;
      $scope.sSapatos = true;
      console.log($scope.sapatos)
    };

    $scope.selCorAce = function(){
      $scope.colAcessorios = false;
      $scope.tamAcessorios = true;
      $scope.sAcessorios = true;
      console.log($scope.acessorios)
    };

    $scope.selSizeRou = function(){
      $scope.sRoupas = false;
      $scope.result = true;
      console.log($scope.roupas)
      setTimeout(function() {
        $scope.direcionarRou();
      }, 5000);
    };

    $scope.selSizeSap = function(){
      $scope.sSapatos = false;
      $scope.result = true;
      console.log($scope.sapatos)
      setTimeout(function() {
        $scope.direcionarSap();
      }, 5000);
    };

    $scope.selSizeAce = function(){
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

  $scope.selectRou = function(item){
    $scope.roupas.push(item);
  };

  $scope.selectSap = function(item){
    $scope.sapatos.push(item);
  };

  $scope.selectAce = function(item){
    $scope.acessorios.push(item);
  };

  }]);
