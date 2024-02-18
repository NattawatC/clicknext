import { cn } from '@/lib/utils'
import React, { ComponentProps } from 'react'

export const MainLayout: React.FunctionComponent<ComponentProps<'main'>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <main
      className={cn(
        className,
        'min-h-screen sm:mx-auto w-full px-4 py-6 md:py-24 lg:w-full lg:py-0 lg:px-32'
      )}
      {...props}
    >
      {children}
    </main>
  )
}
