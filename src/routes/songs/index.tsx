import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/songs/')({
  component: SongsComponent,
})

function SongsComponent() {
  return (
    <div className="p-2">
      <h3>Songs</h3>
    </div>
  )
}
