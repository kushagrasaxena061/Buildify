'use client'

import { Button } from '@/components/ui/button'
import ContactUserForm from '@/components/website/contact-user-form'
import CustomModal from '@/components/website/custom-modal'
import { useModal } from '@/providers/modal-provider'
import React from 'react'

type Props = {
  subaccountId: string
}

const CraeteContactButton = ({ subaccountId }: Props) => {
  const { setOpen } = useModal()

  const handleCreateContact = async () => {
    setOpen(
      <CustomModal
        title="Create Or Update Contact information"
        subheading="Contacts are like customers."
      >
        <ContactUserForm subaccountId={subaccountId} />
      </CustomModal>
    )
  }

  return <Button onClick={handleCreateContact}>Create Contact</Button>
}

export default CraeteContactButton
