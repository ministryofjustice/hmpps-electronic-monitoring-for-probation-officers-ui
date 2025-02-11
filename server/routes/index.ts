import { type RequestHandler, Router } from 'express'

import asyncMiddleware from '../middleware/asyncMiddleware'
import type { Services } from '../services'
import { Page } from '../services/auditService'
import config from '../config'

const API_KEY = config.osMapsAPI

// Route data
const mapData = {
  // new data
  routes: [
    {
      destination: 'Pub',
      date: '22/01/2025',
      timePeriod: '19:00 - 22:34',
      route: [
        { lat: 51.570749, lng: 0.053851 },
        { lat: 51.57641451607295, lng: 0.04550462833836705 },
        { lat: 51.575658942892744, lng: 0.028824812996238663 },
        // { lat: 51.57073, lng: 0.13855 },
        { lat: 51.578081494306126, lng: 0.02587453690822975 },
      ],
    },
    {
      destination: 'Casino',
      date: '22/01/2025',
      timePeriod: '22:34 - 02:19',
      route: [
        { lat: 51.570749, lng: 0.053851 },
        { lat: 51.57641451607295, lng: 0.04550462833836705 },
        { lat: 51.575658942892744, lng: 0.028824812996238663 },
        // { lat: 51.57073, lng: 0.13855 },
        { lat: 51.578081494306126, lng: 0.02587453690822975 },
      ],
    },
    {
      destination: 'Betting Shop',
      date: '18/12/2024',
      timePeriod: '19:00 - 22:34',
      route: [
        { lat: 51.570749, lng: 0.053851 },
        { lat: 51.57641451607295, lng: 0.04550462833836705 },
        { lat: 51.575658942892744, lng: 0.028824812996238663 },
        // { lat: 51.57073, lng: 0.13855 },
        { lat: 51.578081494306126, lng: 0.02587453690822975 },
      ],
    },
    {
      destination: 'Hospital',
      date: '18/12/2024',
      timePeriod: '22:34 - 05:11',
      route: [
        { lat: 51.570749, lng: 0.053851 },
        { lat: 51.57641451607295, lng: 0.04550462833836705 },
        { lat: 51.575658942892744, lng: 0.028824812996238663 },
        // { lat: 51.57073, lng: 0.13855 },
        { lat: 51.578081494306126, lng: 0.02587453690822975 },
      ],
    },
  ],
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function routes({ auditService }: Services): Router {
  const router = Router()
  const get = (path: string | string[], handler: RequestHandler) => router.get(path, asyncMiddleware(handler))

  get('/', async (req, res, next) => {
    await auditService.logPageView(Page.EXAMPLE_PAGE, { who: 'Test User A', correlationId: req.id })

    const selectedRoute = mapData.routes[0]
    res.render('pages/index', { mapData, API_KEY, selectedRoute })
  })

  // get('/:id', async (req, res) => {
  //   // Access the 'name' parameter from the route
  //   await auditService.logPageView(Page.EXAMPLE_PAGE, { who: 'Test User A', correlationId: req.id })

  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   const { id }: any = req.params

  //   const selectedRoute = mapData.routes[id]
  //   res.render('pages/index', { mapData, API_KEY, selectedRoute })
  // })

  return router
}
