'use client'
import { Button } from "@/components/ui/button"
import { Flex } from "@radix-ui/themes"
import Link from 'next/link';




export default function IndexPage() {
   


    return (
        <section className="container ">
            <div className="flex flex-col justify-center gap-6 md:py-10 items-center ">
            <Flex direction="column" gap="4">
                <h1 className="px-[20px] pt-[60px] text-4xl font-extrabold leading-tight tracking-tighter md:text-4xl">GiftHub!,  your go-to platform for hassle-free token gifting</h1>
                <p className="px-[20px] text-center py-3 text-lg text-muted-foreground">you can easily distribute tokens to multiple addresses in just a few clicks.</p>
               
            </Flex>
            <Link href="/">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"> Gift Now</button>
            </Link>

            <div className="py-[40px]">
                <h1 className="text-center text-3xl py-[40px] font-bold leading-tight tracking-tighter">About GiftHub</h1>
                <h3 className="text-center text-lg text-muted-foreground">GiftHub aims to revolutionize token gifting by offering a <br /> seamless platform for distributing tokens to a wider audience</h3>
                <h3 className="py-[40px] text-center text-lg text-muted-foreground">Our mission is to simplify the process and encourage <br /> community engagement in the cryptocurrency space</h3>
            </div>
            </div>
            <div>
            <div className="flex flex-col  justify-center gap-6 items-center ">
                    <h1 className="text-center text-3xl py-[40px] font-bold leading-tight tracking-tighter">Explore Your Activity</h1>
                    <p className="text-center text-lg text-muted-foreground">Your transaction history provides a comprehensive overview of <br /> all activities associated with your GiftHub address. </p>
                    <p className="pb-[40px] text-center text-lg text-muted-foreground">Whether it's tracking token distributions or monitoring <br /> community engagement, this feature keeps you informed every step of the way.</p>
                    <Link href="/Transaction">
                <button className="bg-green-500 pb-2 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"> View transactions</button>
            </Link>
                </div>
            
            </div>
            <div className="py-[100px]">
                <h1 className="text-center text-3xl py-[40px] font-bold leading-tight tracking-tighter">How It Works</h1>
                <div className="text-center grid grid-cols-2 sm:grid-cols-4 gap-6">
                    <div className="text-center  grid ">
                        <h1 className="font-bold text-sm sm:text-lg font-bold leading-loose">1. Create a Mechanism</h1>
                        <p className="text-sm sm:text-lg font-normal leading-relaxed text-muted-foreground">Begin by specifying the amount of tokens you want to airdrop and the name of the collection containing the recipient wallet addresses. This step involves setting up the parameters for your token distribution</p>
                    </div>
                    <div className="text-center  grid ">
                        <h1 className="font-bold text-sm sm:text-lg font-bold leading-loose">2. Execute the Airdrop</h1>
                        <p className="text-sm sm:text-lg font-normal leading-relaxed text-muted-foreground">Proceed to execute the airdrop process. GiftHub streamlines this process, allowing you to efficiently distribute tokens to multiple addresses in just a few clicks. Sit back and let GiftHub handle the distribution for you.</p>
                    </div>
                    <div className="text-center  grid ">
                        <h1 className="font-bold text-sm sm:text-lg font-bold leading-loose">3. Track Progress </h1>
                        <p className="text-sm sm:text-lg font-normal leading-relaxed text-muted-foreground">After initiating the airdrop, keep track of its progress using GiftHub's monitoring tools. Monitor the status of each transaction and engage with your community throughout the process.</p>
                    </div>
                    <div className="text-center  grid ">
                    <h1 className="font-bold text-sm sm:text-lg font-bold leading-loose">4. Engage</h1>

                        <p className="text-sm sm:text-lg font-normal leading-relaxed text-muted-foreground">Whether it's providing updates or answering questions, staying connected with your audience enhances the overall experience.</p>
                    </div>
                    
                </div>
            </div>
            
        </section>
    )
}
