const db = require('../models')
const { Op } = require("sequelize");

class TransactionsService {
  async listTransactions(params) {
    console.log(params)
    const where = params.q ? {
      description: {
        [Op.like]: `%${params.q}%`
      }
    } : {}
    
    const transactions = await db.transactions.findAll({
      where: where,
      order: [
        [params._sort, params._order]
      ]
    })

    return transactions
  } 

  async createTransaction(dto) {
    const newTransaction = await db.transactions.create({
      description: dto.description,
      type: dto.type,
      category: dto.category,
      price: dto.price
    })

    return newTransaction
  }
}

module.exports = TransactionsService