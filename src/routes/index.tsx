import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="bg-red-400">

    </div>
  )
}
