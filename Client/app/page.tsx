"use client"

import Link from "next/link"
import { Flex } from "@radix-ui/themes"

import { Button } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container ">
      <div className="flex flex-col justify-center gap-6 md:py-10 items-center ">
        <Flex direction="column" gap="4">
          <h1 className="px-[20px] pt-[60px] text-4xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            GiftHub!, your go-to platform for hassle-free token gifting
          </h1>
          <p className="px-[20px] text-center py-3 text-lg text-muted-foreground">
            GiftHub is a decentralised platform designed to simplify <br /> the distribution of tokens to community members
          </p>
        </Flex>
        <Link href="/Create">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            {" "}
            Gift Now
          </button>
        </Link>

        <div className="py-[40px]">
          <h1 className="text-center text-3xl py-[40px] font-bold leading-tight tracking-tighter">
            About GiftHub
          </h1>
          <h3 className="text-center text-lg text-muted-foreground">
            GIFTHUB offers a seamless and cost-effective solution for <br /> token distribution within decentralised communities.

          </h3>
          <h3 className="pt-[40px] text-center text-lg text-muted-foreground">
           Community leaders can create an account on GIFTHUB, <br /> specify the token, amount, and the number of recipients they <br /> want to give tokens to, and generate a transfer link.
          </h3>
          <h3 className="py-[40px] text-center text-lg text-muted-foreground">Our mission is to simplify the process and encourage <br /> community engagement in the cryptocurrency space</h3>
        </div>
      </div>
      <div>
        <div className="flex flex-col  justify-center gap-6 items-center ">
          <h1 className="text-center text-3xl py-[40px] font-bold leading-tight tracking-tighter">
            Explore Your Activity
          </h1>
          <p className="text-center text-lg text-muted-foreground">
            GIFTHUB provides analytics tools, allowing users to track <br /> responses to token distributions.
          </p>
          <p className="pb-[40px] text-center text-lg text-muted-foreground">
            Whether it's tracking token distributions or monitoring <br />{" "}
            community engagement, this feature keeps you informed every step of
            the way.
          </p>
          <Link href="/Transaction">
            <button className="bg-green-500 pb-2 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              {" "}
              View transactions
            </button>
          </Link>
        </div>
      </div>
      <div className="py-[100px]">
        <div className="text-center py-[40px] ">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter">
            How It Works: <br />
          </h1>
          <span>(PROJECT OWNERS/COMMUNITY LEADERS) </span>
        </div>
        <div className="text-center grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="text-center  grid ">
            <h1 className="font-bold text-sm sm:text-lg font-bold leading-loose">
              1. Create an Account:
            </h1>
            <p className="text-sm sm:text-lg font-normal leading-relaxed text-muted-foreground">
              •⁠ ⁠Sign up for a GIFTHUB account using your wallet address.
            </p>
          </div>
          <div className="text-center  grid ">
            <h1 className="font-bold text-sm sm:text-lg font-bold leading-loose">
              2. Initiate Token Distribution
            </h1>
            <p className="text-sm sm:text-lg font-normal leading-relaxed text-muted-foreground pb-2">
              •⁠ ⁠Specify the token parameterd you want to distribute and the
              amount.
            </p>
            <p className="text-sm sm:text-lg font-normal leading-relaxed text-muted-foreground">
              •⁠ ⁠Choose the number of recipients and the distribution method
              (random or first-come-first-serve).
            </p>
          </div>
          <div className="text-center  grid ">
            <h1 className="font-bold text-sm sm:text-lg font-bold leading-loose">
              3. Generate and share Transfer Link:
            </h1>
            <p className="text-sm sm:text-lg font-normal leading-relaxed text-muted-foreground pb-2">
              •⁠ Generate and share a transfer link for token distribution with
              the community
            </p>
            <p className="text-sm sm:text-lg font-normal leading-relaxed text-muted-foreground">
              •⁠ Community members connect wallets, verify identity, and claim
              tokens directly to their wallet addresses.
            </p>
          </div>
          <div className="text-center  grid ">
            <h1 className="font-bold text-sm sm:text-lg font-bold leading-loose">
              4. Track Engagement
            </h1>

            <p className="text-sm sm:text-lg font-normal leading-relaxed text-muted-foreground pb-2">
              •⁠ Monitor responses to token distributions and assess community
              engagement using GIFTHUB's analytics tools.
            </p>
            <p className="text-sm sm:text-lg font-normal leading-relaxed text-muted-foreground">
              •⁠ ⁠Gain insights into token distribution metrics and recipient
              engagement.
            </p>
          </div>
        </div>
      </div>



      <div className="pb-[100px]">
        <div className="text-center py-[40px] ">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter">
            How It Works: <br />
          </h1>
          <span>(for Community Members)</span>
        </div>
        <div className="text-center grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="text-center  grid ">
            <h1 className="font-bold text-sm sm:text-lg font-bold leading-loose">
              1. Receive Transfer Link:
            </h1>
            <p className="text-sm sm:text-lg font-normal leading-relaxed text-muted-foreground">
              •⁠ ⁠Community leaders share a transfer link with you via social media, forums, or direct messaging.
            </p>
          </div>
          <div className="text-center  grid ">
            <h1 className="font-bold text-sm sm:text-lg font-bold leading-loose">
              2. Click the Link:
            </h1>
            <p className="text-sm sm:text-lg font-normal leading-relaxed text-muted-foreground pb-2">
              •⁠ Click on the transfer link provided by the community leader to access GIFTHUB.
            </p>
           
          </div>
          <div className="text-center  grid ">
            <h1 className="font-bold text-sm sm:text-lg font-bold leading-loose">
              3. Connect Your Wallet:
            </h1>
            <p className="text-sm sm:text-lg font-normal leading-relaxed text-muted-foreground pb-2">
              •⁠ Connect your wallet to GIFTHUB to verify your identity and eligibility for token distribution.
            </p>
          </div>
          <div className="text-center  grid ">
            <h1 className="font-bold text-sm sm:text-lg font-bold leading-loose">
              4. Claim Your Tokens:
            </h1>

            <p className="text-sm sm:text-lg font-normal leading-relaxed text-muted-foreground pb-2">
              •⁠ Once verified, claim your allocated tokens with just a few clicks. Your tokens will be transferred directly to your connected wallet address.
            </p>
            
          </div>

          <div className="text-center  grid ">
            <h1 className="font-bold text-sm sm:text-lg font-bold leading-loose">
              5. Track Your Tokens:
            </h1>

            <p className="text-sm sm:text-lg font-normal leading-relaxed text-muted-foreground pb-2">
              •⁠ Monitor your token balance and transaction history directly from your connected wallet.

            </p>
            <p className="text-sm sm:text-lg font-normal leading-relaxed text-muted-foreground pb-2">
              •⁠ Stay updated on any additional token distributions or community activities.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  )
}
