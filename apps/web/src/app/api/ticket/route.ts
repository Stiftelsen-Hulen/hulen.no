import { NextResponse } from "next/server"
import NodeCache from "node-cache"

type Ticket = {
    title: String,
    subTitle: String,
    date: String,
    imageUrl: string,
    url: String,
}


export async function GET() {

    let tickets: Ticket[] = [
        {
            title: "Hello",
            subTitle: "World",
            date: "",
            imageUrl: "https://google.com",
            url: "https://google.com",
        }
    ]

    return NextResponse.json(tickets, { status: 200 });
}
