import './globals.css'
import Providers from '@/utils/Providers';
import Navbar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <title>Teste</title>
    <head />
    <body className="transition-all duration-100 ease-in bg-white tracking-tight text-gray-900 antialiased dark:bg-slate-900 dark:text-slate-300">
        <div className="min-h-screen mx-auto flex flex-col">
            <Providers>
                <Navbar />
                <main className="flex-grow container mx-auto px-4 sm:px-6">
                    {children}
                </main>
                <Footer />
            </Providers>
        </div>
    </body>
</html>
  )
}
