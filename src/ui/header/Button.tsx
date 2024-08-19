import Link from "next/link"

interface Props {
    className?: string
    title: string
    href?: string
}

export function Button({ title, className, href = "/" }: Props) {
    return (
        <Link href={`#${href}`} className={`bg-gradient-to-b from-custom-purple to-custom-pink text-white font-bold rounded-full ${className}`}>
            {title}
        </Link>
    )
}
