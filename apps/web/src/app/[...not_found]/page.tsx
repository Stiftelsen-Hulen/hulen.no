import { NotFoundPageContent } from '@/pageComponents/notFoundPage'
import { useLanguage } from '@/util/LanguageContext'
import { get404PageContent } from '@/util/sanity'
import { Metadata } from 'next'
import { cookies } from 'next/headers'

export async function generateMetadata() {
  const cookieStore = await cookies()

  const metadata = {
    "no": {
      title: "Side ikke funnet | Hulen Bergen",
    },

    "en": {
      title: "Page not found | Hulen Bergen",
    }
  }

  const language = cookieStore.get("language")
  if (!language) {
    return metadata.no 
  }

  if (language.value === "no") {
    return metadata.no
  } else {
    return metadata.en
  }

}

export default async function Not_Found() {
  const noPageContentData = await get404PageContent()

  return <NotFoundPageContent {...noPageContentData} />
}

/**
 * Next js use implicit configuration of pages. By exporting a variable named revalidate, we have now switched to incremental static regeneration (ISR)
 * This means that the page will be rebuilt if a request comes in, and the page is more than two minutes old
 */
export const revalidate = 120
