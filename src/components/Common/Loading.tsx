import { Player } from '@lottiefiles/react-lottie-player'
import CoffeeDog1 from '@public/lottie/coffee-dog1.json'
import CoffeeDog2 from '@public/lottie/coffee-dog2.json'
import CoffeeDog3 from '@public/lottie/coffee-dog3.json'

let list_style: any[] = [CoffeeDog1, CoffeeDog2, CoffeeDog3]

function Loading() {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen min-h-screen bg-white dark:bg-primary-1 z-50 flex flex-col gap-4 justify-center items-center">
            <Player
                autoplay
                loop
                src={list_style[Math.floor(Math.random() * 3)]}
                style={{ height: '200px', width: '200px' }}
            />
            <p className="text-xl font-bold dark:text-ascent-1">
                กำลังโหลด...
            </p>
        </div>
    )
}

export default Loading
