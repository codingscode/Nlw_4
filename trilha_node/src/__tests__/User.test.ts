
import request from 'supertest'
import { app } from '../app'

import createConnection from '../database'


describe('Users', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    })

    it('Deve ser apto a criar um novo usuário', async () => {
        const response = await request(app).post('/users')
          .send({
             email: 'user@example.com', name: 'User Example'
          })

        expect(response.status).toBe(201)
    })
})




