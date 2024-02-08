function showC2() {
  var C1_problem = document.getElementById("C1_problem").value;
  var C2_container = document.getElementById("C2_container");
  var C2_select = document.getElementById("C2_problem");

  C2_container.classList.remove("hidden");
  
  // Limpar opções anteriores e adicionar uma opção vazia
  C2_select.innerHTML = "<option value='' selected disabled hidden>Selecione...</option>";

  if (C1_problem === "retrieval_context") {
    C2_select.innerHTML += "<option value='retorno_confuso'>Retorno confuso das seções</option>" +
                           "<option value='conteudo_base'>Existe conteúdo na base</option>" +
                           "<option value='claudia_nao_usou'>Claudia não usou as seções</option>" +
                           "<option value='gerou_corretamente'>Gerou corretamente</option>";
  } else if (C1_problem === "no_retrieval_context") {
    C2_select.innerHTML += "<option value='nao_tinha_conteudo'>Não tinha conteúdo na IDS</option>" +
                           "<option value='retorno_confuso'>Retorno confuso das seções</option>" +
                           "<option value='conteudo_base'>Existe conteúdo na base</option>" +
                           "<option value='retrievel_falhou'>Retrievel falhou</option>";
  } else if (C1_problem === "multiprompt") {
    C2_select.innerHTML += "<option value='nao_tinha_conteudo'>Não tinha conteúdo na IDS</option>" +
                           "<option value='conteudo_base'>Existe conteúdo na base</option>" +
                           "<option value='errou_intencao'>Errou intenção</option>" +
                           "<option value='acertou_intencao'>Acertou intenção</option>";
  }
}

function showC3() {
  var C1_problem = document.getElementById("C1_problem").value;
  var C2_problem = document.getElementById("C2_problem").value;
  var C3_container = document.getElementById("C3_container");
  var C3_select = document.getElementById("C3_problem");
  var Multiprompt_container = document.getElementById("Multiprompt_container");

  C3_container.classList.remove("hidden");
  
  // Limpar opções anteriores e adicionar uma opção vazia
  C3_select.innerHTML = "<option value='' selected disabled hidden>Selecione...</option>";

  if ((C1_problem === "retrieval_context" && C2_problem !== "") || 
      (C1_problem === "no_retrieval_context" && C2_problem !== "") || 
      (C1_problem === "multiprompt" && C2_problem !== "")) {
    C3_container.classList.remove("hidden");
    if (C1_problem === "retrieval_context") {
      C3_select.innerHTML += "<option value='alucinou'>Alucinou</option>" +
                             "<option value='retornou_conteudo_parcial'>Retornou conteúdo parcial</option>" +
                             "<option value='conteudo_confuso_ids'>Conteúdo confuso na IDS</option>" +
                             "<option value='claudia_dificuldade'>Claudia teve dificuldade em usar seções</option>" +
                             "<option value='inventou_informacoes'>Inventou informações</option>" +
                             "<option value='experiencia_ruim'>Experiência ruim</option>" +
                             "<option value='gerou_informacoes_fora_retrievel'>Gerou informações fora do retrievel</option>" +
                             "<option value='conteudo_semelhante'>Tinha conteúdo semelhante</option>" +
                             "<option value='escalou_sem_necessidade'>Escalou sem necessidade</option>" +
                             "<option value='mensagem_duplicada'>Mensagem duplicada</option>" +
                             "<option value='nao_considerou_contexto_anterior'>Não considerou o contexto anterior</option>" +
                             "<option value='escalou_com_problema_resolvido'>Escalou com problema resolvido</option>" +
                             "<option value='nao_escalou'>Não escalou</option>";
    } else if (C1_problem === "no_retrieval_context") {
      C3_select.innerHTML += "<option value='alucinou'>Alucinou</option>" +
                             "<option value='retornou_conteudo_parcial'>Retornou conteúdo parcial</option>" +
                             "<option value='conteudo_confuso_ids'>Conteúdo confuso na IDS</option>" +
                             "<option value='inventou_informacoes'>Inventou informações</option>" +
                             "<option value='experiencia_ruim'>Experiência ruim</option>" +
                             "<option value='conteudo_semelhante'>Tinha conteúdo semelhante</option>" +
                             "<option value='escalou_sem_necessidade'>Escalou sem necessidade</option>" +
                             "<option value='mensagem_duplicada'>Mensagem duplicada</option>" +
                             "<option value='nao_considerou_contexto_anterior'>Não considerou o contexto anterior</option>" +
                             "<option value='nao_escalou'>Não escalou</option>";
    } else if (C1_problem === "multiprompt") {
      C3_select.innerHTML += "<option value='alucinou'>Alucinou</option>" +
                             "<option value='conteudo_confuso_ids'>Conteúdo confuso na IDS</option>" +
                             "<option value='inventou_informacoes'>Inventou informações</option>" +
                             "<option value='experiencia_ruim'>Experiência ruim</option>" +
                             "<option value='conteudo_semelhante'>Tinha conteúdo semelhante</option>" +
                             "<option value='multipromt'>Multipromt</option>" +
                             "<option value='escalou_sem_necessidade'>Escalou sem necessidade</option>" +
                             "<option value='mensagem_duplicada'>Mensagem duplicada</option>" +
                             "<option value='confundiu_intencoes'>Confundiu intenções</option>" +
                             "<option value='nao_considerou_contexto_anterior'>Não considerou o contexto anterior</option>" +
                             "<option value='nao_escalou'>Não escalou</option>";
    }
  }

  // Exibir input 4 (Multiprompt) quando todos os três inputs anteriores estiverem selecionados
  if (C1_problem && C2_problem && C3_select.options.length > 1) {
    Multiprompt_container.classList.remove("hidden");
  } else {
    Multiprompt_container.classList.add("hidden");
  }
}

function copyValues() {
  var C1_text = document.getElementById("C1_problem").options[document.getElementById("C1_problem").selectedIndex].text;
  var C2_text = document.getElementById("C2_problem").options[document.getElementById("C2_problem").selectedIndex].text;
  var C3_text = document.getElementById("C3_problem").options[document.getElementById("C3_problem").selectedIndex].text;
  var Multiprompt_text = document.getElementById("Multiprompt").options[document.getElementById("Multiprompt").selectedIndex].text;

  // Exibir os campos de texto após copiar os valores
  document.getElementById("inputtext1").value = C1_text;
  document.getElementById("inputtext2").value = C2_text;
  document.getElementById("inputtext3").value = C3_text;
  document.getElementById("inputtext4").value = Multiprompt_text;
  document.getElementById("hidden-fields").classList.remove("hidden");
}