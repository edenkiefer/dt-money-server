const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { Router } = require('express')
const TransactionsService = require('./services/transactionsService')
const transactionService = new TransactionsService();

const router = Router()

router
  .get('/transactions', async (req, res) => {
    const transactions = await transactionService.listTransactions(req.query);

    res.status(200).json(transactions)
  })
  .post('/transactions', async (req, res) => {
    const transaction = await transactionService.createTransaction(req.body)

    res.status(201).json(transaction)
  })

const app = express()
const port = 3000

app.use(cors())

app.use(bodyParser.json())

app.use(router)

app.listen(port, () => console.log(`Servidor roando na porta ${port}`))
