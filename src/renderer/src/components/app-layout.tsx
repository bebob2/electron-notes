import { cn } from '@renderer/utils'
import { ComponentProps, forwardRef } from 'react'

export const RootLayout = ({ children, className, ...props }: ComponentProps<'main'>) => {
  return (
    <main className={cn('flex-row flex h-screen', className)} {...props}>
      {children}
    </main>
  )
}

export const Sidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside className={cn('w-[250px] mt-10 h-[100vh+10px] overflow-auto', className)} {...props}>
      {children}
    </aside>
  )
}

type ContentProps = ComponentProps<'div'>

export const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ children, className, ...props }) => {
    return (
      <div className={cn('flex-1 overflow-auto', className)} {...props}>
        {children}
      </div>
    )
  }
)
