var app = new Vue({
  el: "#app",
  data: {
    city: "",
    cep: "",
    error: ""
  },
  methods: {
    getCity: function() {
      var self = this;
      $.getJSON("https://viacep.com.br/ws/" + this.cep+"/json", function(result) {
        if (("erro" in result)) {
          self.error = "CEP não encontrado";
          self.city = "";
          $(".error");
        } else {
          self.city = result.logradouro +" - "+result.bairro+ " - "+ result.uf + " - " + result.localidade;
          $(".display");
        }
        console.log(result);
      });
    }
  },
  watch: {
    cep: function() {
      if (this.cep.length === 8) {
        this.getCity();
        this.error = "";
        $(".error");
      }
      if (this.cep.length < 8) {
        this.city = "";
        this.error = "CEP Inválido";
        $(".error");
         $(".display");
      }
    }
  }, 
  mounted: function(){
    this.getCity();
  }
})