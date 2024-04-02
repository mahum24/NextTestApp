import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const storedUserData = request.cookies.get('user');
    const LoggedInUserNotAccessPaths = request.nextUrl.pathname == "/Login"
    if (LoggedInUserNotAccessPaths) {
        if (storedUserData != undefined) {
            return NextResponse.redirect(new URL('/', request.url))
        }
    }
    else {
        if (storedUserData == undefined) {
            return NextResponse.redirect(new URL('/Login', request.url))
        }
    }
}

export const config = {
    matcher: ['/', '/Login', '/LeaveManagement/leave-calendar', '/LeaveManagement/overview',
    '/LeaveManagement/request-leave'],
}