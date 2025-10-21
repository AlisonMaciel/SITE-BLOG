'use client' // Error boundaries must be Client Components
 
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='min-h-[400px] flex flex-col items-center justify-center'>
      <h2 
      className='text-gray-300 font-medium text-xl mb-4'>
        Esta página mostraria os detalhes do erro
      </h2>
      <p className='text-gray-400 mb-4'>
        {error.message}
      </p>
      <Button 
        variant='primary'
        onClick={
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  )
}