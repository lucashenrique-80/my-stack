const stack = require('./stack');

beforeEach(() => {
    s = new stack();
});

test('Testar pilha vazia na criação', () => {
    expect(s.isEmpty()).toEqual(true);
});

test('Testar pilha não vazia', () => {
    s.push(5);
    expect(s.isEmpty()).toEqual(false);
});

test('Testar pilha vazia após inserir e remover um elemento', () => {
    s.push(5);
    s.pop();
    expect(s.isEmpty()).toEqual(true);
});

test('Verificar tamanho correto da pilha', () => {
    s.push(5);
    s.push(10);
    s.push(15);
    s.push(20);
    expect(s.size()).toBe(4);
});

test('Testar remover elemento de pilha vazia', () => {
    s.push(5);
    s.pop();
    expect(() => {s.pop()}).toThrow();
});

test('Testar tamanho depois de inserir elementos e removendo', () => {
    s.push(5);
    s.push(10);
    s.push(15);
    s.pop();
    expect(s.size()).toBe(2);
});
test('Testar tamanho depois de inserir elementos, remover e inserir novamente', () => {
    s.push(7);
    s.push(14);
    s.pop();
    s.push(21);
    expect(s.size()).toBe(2);
});
test('Testar pilha vazia após inserir, remover um elemento, inserir e remover novamente', () => {
    s.push(1);
    s.pop();
    s.push(2);
    s.pop();
    expect(s.isEmpty()).toEqual(true);
});
test('Testar se a pilha não vazia depois de inserir, remove e inserir novamente um elemento.', () => {
    s.push(8);
    s.pop();
    s.push(9);
    expect(s.isEmpty()).toEqual(false);
});
test('Testa se aceita um valor vazio', () => {
    s.push('')
    expect(s.size()).toBe(1);
   
  });
  
  test('Testa se aceita um valor negativo', () => {
      s.push(-1);
      expect(s.size()).toBe(1);
  
  });
  
  test('Testa inserçao de concatenaçao na pilha', () => {
      s.push('lucas'+1)
      expect(s.size()).toBe(1);
   
  });
  
  test('Testa inserçao de concatenaçao de strings vazios na pilha', () => {
      s.push(' '+' ')
      expect(s.size()).toBe(1);
  
  })
  
  test('Testa inserçao de valor boleano', () => {
    s.push(3.4);
    expect(s.size()).toBe(1);
  
  })