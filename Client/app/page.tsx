'use client'
import { Button } from "@/components/ui/button"
import { Flex } from "@radix-ui/themes"
import Link from 'next/link';




export default function IndexPage() {
   


    return (
        <section className="container flex flex-col justify-center gap-6 md:py-10 h-[calc(100vh-150px)] items-center ">
            <Flex direction="column" gap="4">
            <Link href="/Transaction">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"> View transactions</button>
            </Link>
             

            </Flex>
        </section>
    )
}
