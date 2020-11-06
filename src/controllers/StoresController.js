const db = require('../database/connection');

module.exports = class StoresController {
  async index(request, response) {
    const stores = await db('stores').select('*');

    response.json(stores);
  }

  async create(request, response) {
    const { fantasyName, billing, city, address } = request.body;

    const store = {
      fantasyName,
      billing,
      city,
      address,
    };

    const [insertedId] = await db('stores').insert(store);

    return response.json({
      id: insertedId,
      ...store,
    });
  }

  async show(request, response) {
    const { id } = request.params;

    const store = await db('stores').where('id', id).first();

    if (!store) {
      return response.status(404).json({ message: 'Nenhuma loja encontrada' });
    }

    return response.json(store);
  }

  async delete(request, response) {
    const { id } = request.params;

    const store = await db('stores').where('id', id).first();

    if (!store) {
      return response
        .status(404)
        .json({ message: 'Nenhuma loja encontrada com esse identificador' });
    }

    await db('stores').where('id', id).del();

    return response.json({ message: 'Loja removida com sucesso!' });
  }
};
