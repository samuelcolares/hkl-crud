import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/movies/')({
  component: MoviesComponent,
})

function MoviesComponent() {
  return (
    <div className="p-2">
      <h3>Movies</h3>
    </div>
  )
}
