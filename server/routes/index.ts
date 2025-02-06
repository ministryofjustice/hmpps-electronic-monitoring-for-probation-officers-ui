import { type RequestHandler, Router } from 'express'

import asyncMiddleware from '../middleware/asyncMiddleware'
import type { Services } from '../services'
import { Page } from '../services/auditService'
import config from '../config'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function routes({ auditService }: Services): Router {
  const router = Router()
  const get = (path: string | string[], handler: RequestHandler) => router.get(path, asyncMiddleware(handler))

  get('/', async (req, res, next) => {
    await auditService.logPageView(Page.EXAMPLE_PAGE, { who: 'Test User A', correlationId: req.id })
    // const mapData = {
    //   latitude: 51.570749, // New latitude
    //   longitude: 0.053851, // New longitude
    //   zoomLevel: 12, // Adjusted zoom level
    // }

    // Route data
    const mapData = {
      // new data
      routes: [
        {
          subheading: 'Pub',
          date: '22/11/2025',
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
          subheading: 'Casino',
          date: '22/11/2025',
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
          subheading: 'Betting Shop',
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
          subheading: 'Hospital',
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
      // old data
      route: [
        { lat: 51.570749, lng: 0.053851, name: 'Starting Point' },
        { lat: 51.57641451607295, lng: 0.04550462833836705 },
        { lat: 51.575658942892744, lng: 0.028824812996238663 },
        // { lat: 51.57073, lng: 0.13855 },
        { lat: 51.578081494306126, lng: 0.02587453690822975 },
      ],
    }

    const API_KEY = config.osMapsAPI

    res.render('pages/index', { mapData, API_KEY })
  })

  return router
}
