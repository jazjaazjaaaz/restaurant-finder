import { Router } from 'express'
import { execute } from './execute'

const router = Router()

router.post('/execute', execute)

export default router
