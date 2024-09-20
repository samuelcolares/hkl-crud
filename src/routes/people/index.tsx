import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/people/')({
  component: PeopleComponent,
})

function PeopleComponent() {
  return (
    <div className="p-2">
      <h3>People</h3>
    </div>
  )
}
