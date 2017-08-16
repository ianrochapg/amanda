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

    $scope.dados = {};


    var irCat = function(){
      console.log("Olar")
      $scope.categoria = true;
      $scope.listCat = true;
    };



  }]);
