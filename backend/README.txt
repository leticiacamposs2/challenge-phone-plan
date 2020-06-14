# Challenge Vortx backend
Api desenvolvida em Node.js com o intuito de retornar os valores dos planos de telefonia da VxTel

---

## Estrutra de pastas

- api => (contém nosso código da api)
    - /controllers/ => contém todos controladores da api.
    - /data/ => contém os mocks.
    - /routes/ => contém as rotas da api.

- config => (contém as configurações do servidor)

---

## Métodos

- POST 
    - Endpoint: /api/v1/standard-price-list
    - Exemplo de body - {"dddsOrigin": 11, "dddsDestiny": 16, "minute": 20, "phonePlan": 30}

- GET 
    - Endpoint: /api/v1/phone-plan
