import Card from '@/components/card'
import Link from 'next/link'
import React from 'react'

export default function Archived() {
  return (
    <Card>
         <div>Archived</div>
         <Link href="/dashboard">Default</Link>
    </Card>
  )
}
