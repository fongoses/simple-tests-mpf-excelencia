angular.module('simpleTests').factory('TrataErroInterceptor', function($q){
	return {
		// não é obrigatório colocar todos os estados
		/*request: function(config) {
			console.log('passou no request');
			return config;
		},*/
		requestError: function(rejection) {
			console.log('requestError');
			console.log(rejection);
			return $q.reject(rejection);
		},
		/*response: function (response) {
			console.log('passou no response');
			console.log(response)
			return response;
		},*/
		responseError: function (rejection) {
			console.log('responseError');
			console.log(rejection);
			return $q.reject(rejection);
		}
	};
});