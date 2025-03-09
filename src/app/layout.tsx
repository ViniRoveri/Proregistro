import type { Metadata } from "next"
import "@/css/globals.css"
import 'remixicon/fonts/remixicon.css'
import Navbar from "@/components/layout/Navbar";
import BotaoSuporte from "@/components/layout/BotaoSuporte";
import InfosUsuario from "@/components/layout/InfosUsuario";

export const metadata: Metadata = {
  title: "Teste Técnico Vinícius Roveri"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar/>

        <main>
          <InfosUsuario/>

          {children}
        </main>
          
        <BotaoSuporte/>
      </body>
    </html>
  )
}
