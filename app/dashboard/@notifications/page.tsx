import Card from '@/components/card'
import Link from 'next/link'
import React from 'react'

export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <Link href="/dashboard/archived">Archived</Link>
    </Card>
  )
}
