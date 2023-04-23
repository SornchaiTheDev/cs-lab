import { useState } from 'react'
import Image from 'next/image'
interface ProfileImageProps {
    onClick: () => void
}
function ProfileImage({ onClick }: ProfileImageProps) {
    const [user, setUser] = useState((Math.random() * 100).toFixed(0))

    return (
        <div className="relative" onClick={onClick}>
            <div className="w-3 h-3 rounded-full bg-lime-400 absolute right-1 top-0 animate-pulse z-40"></div>
            <div className="relative w-12 h-12 rounded-full border-4 border-gray-300 dark:border-white bg-white overflow-hidden cursor-pointer">
                <Image
                    width={100}
                    height={100}
                    src={`https://randomuser.me/api/portraits/men/${user}.jpg`}
                    alt="Profile-image"
                />
            </div>
        </div>
    )
}

export default ProfileImage
