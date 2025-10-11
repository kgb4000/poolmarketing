// app/pool-builder-web-design/ClientCTA.jsx
'use client'

import { useState } from 'react'
import Button from './Button'
import { event } from '@/lib/eventHelper'
import WebsiteAuditModal from '@/components/WebsiteAuditModal'

export default function WebDesignCTA() {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    event({
      action: 'get_free_website_audit_click',
      category: 'engagement',
      label,
      value: 1,
    })
  }

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        align="text-center"
        buttonText="Get My Free Website Audit"
        textSize="text-sm lg:text-2xl"
        bgColor="bg-green-500"
        textColor="text-white"
        hover="hover:bg-green-600"
      />
      <WebsiteAuditModal open={open} setOpen={setOpen} />
    </>
  )
}
