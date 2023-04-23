import { Player } from '@lottiefiles/react-lottie-player'
import NotFound from '../../public/lottie/not-found.json'
import Head from 'next/head'
import { useRouter } from 'next/router'

function FouroFour() {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>ไม่พบหน้านี้ | CS LAB</title>
            </Head>
            <div className="fixed w-screen h-screen">
                <div className="flex flex-col items-center justify-center h-full gap-4">
                    <Player
                        autoplay
                        loop
                        src={NotFound}
                        style={{ height: '200px', width: '200px' }}
                    />

                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-1 px-4 py-2 transition-all border-b-4 rounded-lg bg-zinc-200 active:border-b-2 duration-50 border-zinc-300 text-zinc-800"
                    >
                        กลับไปหน้าก่อนหน้า
                    </button>
                </div>
            </div>
        </>
    )
}

export default FouroFour
