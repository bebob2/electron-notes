import { Content, DraggableTopBar, RootLayout, Sidebar } from './components'

export function App() {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2 bg-zinc-900/70">Sidebar</Sidebar>
        <Content className="border-l bg-zinc-900/80  border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}
