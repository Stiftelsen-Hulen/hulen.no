import { ContactPageContent } from '@/pageComponents/contactPage/ContactPage'
import { getLanguageFromCookie } from '@/util/LanguageContext/LanguageCookie'
import { getContactPageContent } from '@/util/sanity'

export async function generateMetadata() {
  const language = await getLanguageFromCookie()

  if (language == "en") {
    return { 
      title: 'Kontakt oss | Hulen Bergen',
      description: 'Kontaktinformasjon for booking, frivillighet og styret ved Hulen i Bergen.',
    }
  } else {
    return { 
      title: "Contact us | Hulen Bergen",
      description: "Contact information for booking, volunteering and leadership at Hulen in Bergen"
    }
  }

}

export default async function ContactPage() {
  const data = await getContactPageContent()

  return <ContactPageContent content={data} />
}

/**
 * Next js use implicit configuration of pages. By exporting a variable named revalidate, we have now switched to incremental static regeneration (ISR)
 * This means that the page will be rebuilt if a request comes in, and the page is more than two minutes old
 */
export const revalidate = 120
