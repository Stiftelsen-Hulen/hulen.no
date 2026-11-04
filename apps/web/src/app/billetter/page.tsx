import { TicketPageContent } from '@/pageComponents/ticketPage'
import { getLanguageFromCookie } from '@/util/LanguageContext/LanguageCookie'


export async function generateMetadata() {
  const language = await getLanguageFromCookie()

  if (language == "en") {
    return {
      title: "Tickets | Hulen Bergen",
      description: "Information on tickets and upcoming events in Hulen"
    }
  } else {
    return { 
      title: "Billetter | Hulen Bergen",
      description: "Informasjon om billeter og kommendene hendelser i Hulen"
    }
  }

}


export default function TicketsPage() {
  return <TicketPageContent />
}
/**
 * Next js use implicit configuration of pages. By exporting a variable named revalidate, we have now switched to incremental static regeneration (ISR)
 * This means that the page will be rebuilt if a request comes in, and the page is more than two minutes old
 */
export const revalidate = 120
