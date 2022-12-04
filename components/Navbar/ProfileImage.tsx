interface ProfileImageProps {
    onClick: () => void
}
function ProfileImage({ onClick }: ProfileImageProps) {
    return (
        <div className="relative" onClick={onClick}>
            <div className="w-4 h-4 rounded-full bg-lime-400 absolute right-1 top-0 animate-pulse"></div>
            <div className="w-10 h-10 rounded-full border-4 border-white bg-white overflow-hidden cursor-pointer">
                <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Profile-image"/>
            </div>
        </div>
    )
}

export default ProfileImage