$(function () {
  var valor1, valor2, op;

  //funcao de colocar numero no input
  $("input[name=botao]").click(function () {
    $("#resultado").val($("#resultado").val() + $(this).val());
  });
  //funcao para limpar input
  $("input[name=c]").click(function () {
    $("#resultado").val("");
  });
  //funcao de soma
  $("input[name=soma]").click(function () {
    if ($("#resultado").val() != "") {
      valor1 = parseFloat($("#resultado").val());
      $("#resultado").val("");
      op = "soma";
      $("#op").text($(this).val());
    }
  });
  //funcao de subtração
  $("input[name=subtrai]").click(function () {
    if ($("#resultado").val() != "") {
      valor1 = parseFloat($("#resultado").val());
      $("#resultado").val("");
      op = "subtrai";
      $("#op").text($(this).val());
    }
  });
  //funcao de divisao
  $("input[name=divisao]").click(function () {
    if ($("#resultado").val() != "") {
      valor1 = parseFloat($("#resultado").val());
      $("#resultado").val("");
      op = "divisao";
      $("#op").text($(this).val());
    }
  });
  //funcao de multiplicao
  $("input[name=multiplicacao]").click(function () {
    if ($("#resultado").val() != "") {
      valor1 = parseFloat($("#resultado").val());
      $("#resultado").val("");
      op = "multiplicacao";
      $("#op").text($(this).val());
    }
  });
  //funcao de resultado
  $("input[name=igual]").click(function () {
    if ($("#resultado").val() != "") {
      valor2 = parseFloat($("#resultado").val());
      if (op == "soma") {
        $("#resultado").val(valor1 + valor2);
      } else if (op == "subtrai") {
        $("#resultado").val(valor1 - valor2);
      } else if (op == "divisao") {
        $("#resultado").val(valor1 / valor2);
      } else if (op == "multiplicacao") {
        $("#resultado").val(valor1 * valor2);
      }
    }
  });
});
