'use client'
import { Button } from "@/components/ui/button"
import { Flex } from "@radix-ui/themes"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useContext, useEffect, useState } from "react"
import { WalletContext } from "@/lib/store"
import { CovalentClient } from "@covalenthq/client-sdk"
import { COVALENT_API_KEY} from "@/lib/utils"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"


export default function TransactionPage() {
   

    return (
        <section className="container py-[70px] flex flex-col justify-center gap-6 md:py-10 h-[calc(100vh-150px)] items-center ">
            <Flex direction="column" gap="4">
              
               <h1>Under development...</h1>
            </Flex>
        </section>
    )
}
