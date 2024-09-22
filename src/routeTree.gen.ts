/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as PessoasIndexImport } from './routes/pessoas/index'
import { Route as MusicasIndexImport } from './routes/musicas/index'
import { Route as FilmesIndexImport } from './routes/filmes/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PessoasIndexRoute = PessoasIndexImport.update({
  path: '/pessoas/',
  getParentRoute: () => rootRoute,
} as any)

const MusicasIndexRoute = MusicasIndexImport.update({
  path: '/musicas/',
  getParentRoute: () => rootRoute,
} as any)

const FilmesIndexRoute = FilmesIndexImport.update({
  path: '/filmes/',
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
    '/filmes/': {
      id: '/filmes/'
      path: '/filmes'
      fullPath: '/filmes'
      preLoaderRoute: typeof FilmesIndexImport
      parentRoute: typeof rootRoute
    }
    '/musicas/': {
      id: '/musicas/'
      path: '/musicas'
      fullPath: '/musicas'
      preLoaderRoute: typeof MusicasIndexImport
      parentRoute: typeof rootRoute
    }
    '/pessoas/': {
      id: '/pessoas/'
      path: '/pessoas'
      fullPath: '/pessoas'
      preLoaderRoute: typeof PessoasIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/filmes': typeof FilmesIndexRoute
  '/musicas': typeof MusicasIndexRoute
  '/pessoas': typeof PessoasIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/filmes': typeof FilmesIndexRoute
  '/musicas': typeof MusicasIndexRoute
  '/pessoas': typeof PessoasIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/filmes/': typeof FilmesIndexRoute
  '/musicas/': typeof MusicasIndexRoute
  '/pessoas/': typeof PessoasIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/filmes' | '/musicas' | '/pessoas'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/filmes' | '/musicas' | '/pessoas'
  id: '__root__' | '/' | '/filmes/' | '/musicas/' | '/pessoas/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  FilmesIndexRoute: typeof FilmesIndexRoute
  MusicasIndexRoute: typeof MusicasIndexRoute
  PessoasIndexRoute: typeof PessoasIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  FilmesIndexRoute: FilmesIndexRoute,
  MusicasIndexRoute: MusicasIndexRoute,
  PessoasIndexRoute: PessoasIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/filmes/",
        "/musicas/",
        "/pessoas/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/filmes/": {
      "filePath": "filmes/index.tsx"
    },
    "/musicas/": {
      "filePath": "musicas/index.tsx"
    },
    "/pessoas/": {
      "filePath": "pessoas/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
