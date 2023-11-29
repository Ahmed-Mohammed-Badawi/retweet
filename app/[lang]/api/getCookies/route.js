import {cookies} from 'next/headers';


export const dynamic = 'force-dynamic' // defaults to force-static
export async function GET(request) {
    console.log("IN GET COOKIES")
    const cookiesObject = cookies(request.nextUrl).getAll();
    return Response.json({cookies: JSON.stringify(cookiesObject)})
}