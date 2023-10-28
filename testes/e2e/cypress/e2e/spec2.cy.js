describe('Primeiro teste end-to-end', () => {
  it('Cadastra uma pergunta e verifica se ela é listada', () => {
    cy.visit('localhost:3000');
    
    cy.get('#textarea-pergunta').as('perg').click();
    cy.get('@perg').type('Qual eh a resposta para A Vida, O Universo e Tudo Mais?');
    cy.get('#btn-pergunta').click();
    cy.get('#tabela-perguntas').contains('Qual eh a resposta para A Vida, O Universo e Tudo Mais?');
    
    cy.visit('localhost:3000/resposta/1');
    cy.get('#textarea-resposta').as('resp').click();
    cy.get('@resp').type('42');
    cy.get('#btn-resposta').click()
    cy.get('#tabela-respostas').contains('42');
    cy.get('@resp').type('"Forty-two," said Deep Thought, with infinite majesty and calm.');
    cy.get('#btn-resposta').click()
    cy.get('#tabela-respostas').contains('"Forty-two," said Deep Thought, with infinite majesty and calm.');
  });
});





