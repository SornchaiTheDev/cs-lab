import type { NextPage } from 'next'
import Head from 'next/head'
import WithUsernamePassword from '@/components/Login/WithUsernamePassword'
import Divider from '@/components/Login/Divider'
import Github from '@/components/Login/Github'
import WithGoogle from '@/components/Login/WithGoogle'
import Header from '@/components/Login/Header'

const Login: NextPage = () => {
    return (
        <>
            <Head>
                <title>Login | CS-LAB</title>
            </Head>
            <div className="fixed w-screen bg-white dark:bg-primary-1">
                <div className="flex justify-center items-center h-screen">
                    <div className="w-full flex flex-col items-center p-4 max-w-md">
                        <Header />
                        <div className="w-full flex flex-col items-center mt-6 gap-6">
                            <WithGoogle />
                            <Divider />
                            <WithUsernamePassword />
                        </div>
                        <Github />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
