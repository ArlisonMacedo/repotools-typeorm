import { Router } from 'express'

import { store, destroy, index } from './controllers/RepoController'

const routes = Router()

routes.get('/tools', index)
routes.post('/tools', store)
// routes.put('/tools/:id', update)
routes.delete('/tools/:id', destroy)

export default routes
