import { useState } from 'react'
import GlobeAltIcon from '@heroicons/react/outline/GlobeAltIcon'

const langs = [
    {
        name: 'Spanish',
        code: 'es'
    },
    {
        name: 'English',
        code: 'en'
    }
]

export interface LanguageProps extends React.HTMLAttributes<HTMLDivElement> {
    isNavbar?: boolean
    changeLanguage?: (lang: string) => void
    getLangName?: (lang: string) => string
    defaultLanguage?: 'en' | 'es'
}

export function Language({ isNavbar, defaultLanguage, changeLanguage, getLangName, ...props }: LanguageProps) {
    const [language, setLanguage] = useState(defaultLanguage ?? 'es')
    const langName: { [key: string]: string } = {
        English: 'ENG',
        Spanish: 'ESP'
    }

    const toggleLanguage = () => {
        const lang = language === 'es' ? 'en' : 'es'
        changeLanguage && changeLanguage(lang)
        setLanguage(lang)
    }

    return (
        <div {...props} onClick={toggleLanguage} className="select-none flex items-center font-semibold cursor-pointer">
            <GlobeAltIcon className={`${isNavbar ? 'ml-1 mr-1' : 'mr-2'} text-blue-700`} width={isNavbar ? 20 : 25} height={isNavbar ? 20 : 25} />
            {langs.map(({ name, code }, index) => {
                return (
                    <div key={`lenguage-${index}`} className={`${isNavbar ? 'text-sm' : 'text-base'}`}>
                        <span className={`${language === code ? 'text-blue-700' : ''} uppercase mr-1`}>{getLangName ? getLangName(name) : langName[name]}</span>
                        {index !== langs.length - 1 ? <span className="mr-1">/</span> : null}
                    </div>
                )
            })}
        </div>
    )
}
