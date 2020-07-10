module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        cacheKiller: {
          options: {
            prepend: '',
            append: '',
            mask: '{datetimestamp}',
            length: -1 // set -1 para o tamanho que quiser -- set 0 para sumir
          },
          taskName: {
            files: {
              'css/style[mask].css': [      'index.html', 
                                            'textos.html', 
                                            'sobre.html', 
                                            'programacao.html', 
                                            'mostras.html', 
                                            'campanha.html', 
                                            'acervo.html', 
                                            
                                            'textos/urgencias.html', 
                                            'textos/revista-eco-pos.html', 
                                            'textos/o-cinema-pode-salvar.html', 
                                            'textos/levante-corpo.html',
                                            'textos/estamos-todos.html', 
                                            'textos/enquadrando-o-enquadrador.html',
                                            'textos/agora-que-sao-elas.html', 
                                            
                                            'sessoes/abertura.html',
                                            'sessoes/30-sabado.html',
                                            'sessoes/29-sexta.html',
                                            'sessoes/28-quinta.html',
                                            'sessoes/27-quarta.html',
                                            'sessoes/26-terca.html',
                                            'sessoes/25-segunda.html',
                                            'sessoes/24-domingo.html',
                                            'sessoes/23-sabado.html',
                                        
                                            'mostras/fruto-da-terra.html',
                                            'mostras/homenagem.html',
                                            'mostras/pinheirinho.html',
                                            'mostras/terra-para-rose.html',
                                            
                                            'acervo/a-rua-e-publica.html',
                                            'acervo/aniversario-e-castigo.html',
                                            'acervo/carolinas.html',
                                            'acervo/casa-com-parede.html',
                                            'acervo/casa-na-marra.html',
                                            'acervo/conte-isso.html',
                                            'acervo/izidora-2.html',
                                            'acervo/izidora-dias-de-luta.html',
                                            'acervo/lanceiros.html',
                                            'acervo/lenigrado.html',
                                            'acervo/memorias-de-izidora.html',
                                            'acervo/menino-mitou.html',
                                            'acervo/na-missao.html',
                                            'acervo/ocupar-resistir-construir.html',
                                            'acervo/palmilha.html',
                                            'acervo/quem-luta.html',
                                            'acervo/ultima-noite.html',
                                            'acervo/voce-faria.html',
                                            'acervo/zaga-de-bonecas.html'   ]
            }
          }
        }
      });

      grunt.registerTask('default', ["cacheKiller"]);

};