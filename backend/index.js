const express    = require('express')
const bodyParser = require('body-parser')
const cors       = require('cors')
const path       = require('path')

const app  = express()
const port = 3001

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'media')))

const shirt = {
  "filters": [
      {
          "color": "Cor"
      }
  ],
  "items": [
    {
      "id": 1,
      "sku": "sku-1",
      "path": "camiseta-preta",
      "name": "Camiseta Preta",
      "image": "http://localhost:3001/shirt-1.jpg",
      "price": 59.9,
      "filter": [
        {
          "color": "Preta"
        }
      ]
    },
    {
      "id": 2,
      "sku": "sku-2",
      "path": "camiseta-laranja",
      "name": "Camiseta Laranja",
      "image": "http://localhost:3001/shirt-2.jpg",
      "price": 40.5,
      "filter": [
          {
            "color": "Laranja"
          }
      ]
    },
    {
      "id": 3,
      "sku": "sku-3",
      "path": "camiseta-amarela",
      "name": "Camiseta Amarela",
      "image": "http://localhost:3001/shirt-3.jpg",
      "price": 61.49,
      "filter": [
          {
            "color": "Amarela"
          }
      ]
    },
    {
      "id": 4,
      "sku": "sku-4",
      "path": "camiseta-rosa",
      "name": "Camiseta Rosa",
      "image": "http://localhost:3001/shirt-4.jpg",
      "price": 52.0,
      "filter": [
          {
            "color": "Rosa"
          }
      ]
    }
  ]
}


const shoes = {
  "filters": [
      {
          "color": "Cor"
      }
  ],
  "items": [
    {
      "id": 31,
      "sku": "sku-31",
      "path": "tenis-preto-couro",
      "name": "Tênis Preto Couro",
      "image": "http://localhost:3001/shoes-1.jpg",
      "price": 129.9,
      "filter": [
        {
          "color": "Preta"
        }
      ]
    },
    {
      "id": 32,
      "sku": "sku-32",
      "path": "tenis-preto",
      "name": "Tênis Preto Masculino",
      "image": "http://localhost:3001/shoes-2.jpg",
      "price": 140.5,
      "filter": [
          {
            "color": "Laranja"
          }
      ]
    },
    {
      "id": 33,
      "sku": "sku-33",
      "path": "tenis-corrida",
      "name": "Tênis Corrida",
      "image": "http://localhost:3001/shoes-3.jpg",
      "price": 261.49,
      "filter": [
          {
            "color": "Amarela"
          }
      ]
    },
    {
      "id": 34,
      "sku": "sku-34",
      "path": "tenis-corrida-gel",
      "name": "Tênis Corrida Gel",
      "image": "http://localhost:3001/shoes-4.jpg",
      "price": 352.0,
      "filter": [
          {
            "color": "Cinza"
          }
      ]
    },
    {
      "id": 35,
      "sku": "sku-35",
      "path": "tenis-slip",
      "name": "Tênis Slip Azul",
      "image": "http://localhost:3001/shoes-5.jpg",
      "price": 92.0,
      "filter": [
          {
            "color": "Azul"
          }
      ]
    },
    {
      "id": 36,
      "sku": "sku-36",
      "path": "tenis-slip-preto",
      "name": "Tênis Slip Preto",
      "image": "http://localhost:3001/shoes-6.jpg",
      "price": 90.0,
      "specialPrice": 50.9,
      "filter": [
          {
            "color": "Preto"
          }
      ]
    },
    {
      "id": 37,
      "sku": "sku-37",
      "path": "tenis-corrida-rosa",
      "name": "Tênis Corrida - Rosa ",
      "image": "http://localhost:3001/shoes-7.jpg",
      "price": 315.0,
      "filter": [
          {
            "color": "Rosa"
          }
      ]
    },
    {
      "id": 38,
      "sku": "sku-38",
      "path": "tenis-rosa",
      "name": "Tênis Rosa Feminino",
      "image": "http://localhost:3001/shoes-8.jpg",
      "price": 281.0,
      "filter": [
          {
            "color": "Rosa"
          }
      ]
    },
    {
      "id": 39,
      "sku": "sku-39",
      "path": "tenis-casual",
      "name": "Tênis Casual Bege",
      "image": "http://localhost:3001/shoes-9.jpg",
      "price": 198.0,
      "specialPrice": 180.9,
      "filter": [
          {
            "color": "Bege"
          }
      ]
    },
    {
      "id": 40,
      "sku": "sku-40",
      "path": "tenis-corrida-feminino-azul",
      "name": "Tênis Corrida Feminino Azul",
      "image": "http://localhost:3001/shoes-10.jpg",
      "price": 329.0,
      "filter": [
          {
            "color": "Azul"
          }
      ]
    }
  ]
}

const jeans = {
  "filters": [
      {
          "gender": "Gênero"
      }
  ],
  "items": [
    {
      "id": 10,
      "sku": "sku-10",
      "path": "calca-social",
      "name": "Calça Social",
      "image": "http://localhost:3001/pants-1.jpg",
      "price": 39.9,
      "specialPrice": 29.9,
      "filter": [
        {
          "gender": "Masculina"
        }
      ]
    },
    {
      "id": 11,
      "sku": "sku-11",
      "path": "calca-feminina",
      "name": "Calça Feminina",
      "image": "http://localhost:3001/pants-2.jpg",
      "price": 24.15,
      "filter": [
          {
            "gender": "Feminina"
          }
      ]
    },
    {
      "id": 12,
      "sku": "sku-12",
      "path": "calca-la-feminina",
      "name": "Calça de Lã Feminina",
      "image": "http://localhost:3001/pants-3.jpg",
      "price": 61.49,
      "filter": [
          {
            "gender": "Feminina"
          }
      ]
    },
    {
      "id": 13,
      "sku": "sku-13",
      "path": "calca-caminhada-masculina",
      "name": "Calça Caminhada Masculina",
      "image": "http://localhost:3001/pants-4.jpg",
      "price": 70.0,
      "specialPrice": 58,
      "filter": [
        {
          "gender": "Masculina"
        }
      ]
    },
    {
      "id": 14,
      "sku": "sku-14",
      "path": "calca-caminhada-feminina",
      "name": "Calça Caminhada Feminina",
      "image": "http://localhost:3001/pants-5.jpg",
      "price": 70.0,
      "filter": [
        {
          "gender": "Feminina"
        }
      ]
    }
  ]
}


app.get('/shirt', (req, res) => {
  res.json(shirt)
})

app.get('/shoes', (req, res) => {
  res.json(shoes)
})

app.get('/jeans', (req, res) => {
  res.json(jeans)
})

app.listen(port, () => console.log(`Server is running ${port}`))
