import Image from "next/image"
import { FC } from "react"

export interface AvatarProps {
    /**  avatar url */
    src: string
    alt: string
}
export const Avatar: FC<AvatarProps> = ({ src, alt }) => {
    return <div className="flex-none relative h-12 w-12">
        <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            alt={alt}
            src={src} />
    </div>
}

