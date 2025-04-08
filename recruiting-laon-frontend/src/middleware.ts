import { NextRequest, NextResponse } from 'next/server'

const publicRoutes = ['/login', '/register']

export const middleware = (request: NextRequest) => {   
    const token = request.cookies.get('recruiting-laon-token')?.value

    const isPublicRoute = publicRoutes.some((route) => request.nextUrl.pathname.startsWith(route))

    if (!token && !isPublicRoute) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if (token && isPublicRoute) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
}