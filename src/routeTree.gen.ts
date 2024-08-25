/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as BoardImport } from './routes/$board'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const BoardRoute = BoardImport.update({
  path: '/$board',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/$board': {
      id: '/$board'
      path: '/$board'
      fullPath: '/$board'
      preLoaderRoute: typeof BoardImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({ IndexRoute, BoardRoute })

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/$board"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/$board": {
      "filePath": "$board.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
