'use client'

import { useEffect } from "react"

export default function UserError() {
  useEffect(() => {
    throw new Error('Esta mensagem está sendo o resultado do erro, poderia ser uma mensagem do servidor.')
  }, [])
  return (
    <>
    </>
  )
}