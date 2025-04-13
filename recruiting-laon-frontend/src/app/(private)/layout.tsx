import Footer from "@/components/Footer"

export default function PrivateLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <main role="main" className='main-container'>
                {children}
            </main>
            <Footer/>
        </>
    )
}