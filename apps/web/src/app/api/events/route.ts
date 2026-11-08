import { NextResponse } from "next/server"
import NodeCache from "node-cache"
import { env } from "process";

type Event = {
    title: string,
    subTitle: string,
    tags: string[],
    date: string,
    imageUrl: string,
    url: {
        no: string,
        en: string,
    },
}

export async function GET() {
    let events = await getTicketCoEvents()

    return NextResponse.json(events, { status: 200 });
}

async function getTicketCoEvents(): Promise<Event[]> {
    const apiKey = process.env.TICKETCO_API_KEY
    const ticketCoEventUrl = `https://ticketco.events:443/api/public/v1/events?token=${apiKey}&street_address=Olaf%20Ryes%20vei%2048%2C%20Bergen%2C%20Norge&status=active`
    const ticketCoResponse = await fetch(ticketCoEventUrl)

    const { events: ticketCoEvents } = await ticketCoResponse.json();
    
    let events: Event[] = []
    
    ticketCoEvents.forEach((ticketCoEvent: any) => {
        const { title, tags, start_at, image, locale_urls } = ticketCoEvent
        
        const event: Event = {
            title: title,
            subTitle: "",
            tags: tags,
            date: start_at,
            imageUrl: image.url,
            url: {
                no: locale_urls.no,
                en: locale_urls.en
            }
        }
        events.push(event) 
    })

    return events
}
