import { cookies } from "next/headers"

/* 
    Function returns language that may or may not be stored in the clients cookie in LanguageContext
    to be run on the server
*/

type LanguageOptions = "no" | "en"
export async function getLanguageFromCookie(): Promise<LanguageOptions> {
    const cookieStore = await cookies()
    const lang = cookieStore.get("language")


    if (lang?.value == "no" || lang?.value == "en") {
        return lang.value
    }

    return "en"
}