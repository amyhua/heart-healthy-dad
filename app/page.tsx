import HealthFacts from "@/components/HealthFacts";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 text-black min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex items-left flex-col justify-center">
        <div className="mb-10 text-right">
          <Link href="/search">
            <button className="inline-block p-3 rounded-full bg-blue-700 text-white text-xl font-bold">
              <MagnifyingGlassIcon className="inline-block h-8 w-8" /> 搜索食品 <span className="opacity-60 ml-2">Search GI Foods</span>
            </button>
          </Link>
        </div>
        <HealthFacts />
        <div className="mt-4 text-4xl font-bold mb-6">
          <strong>Phat 今天</strong>已經吃了:
          <div className="mt-1 text-xl opacity-50"><strong>Phat today</strong> already ate:</div>
        </div>
        {/* totals */}
        <div className="mt-4">
          <article className="mb-6 mr-6 rounded-lg inline-block rounded-lg min-w-[100px]">
            <div className="text-2xl mb-3"><strong>🧈 肥油:</strong> 30g / 45g</div>
          </article>
        </div>
        {/* meals */}
        <div className="ml-4 flex items-center border-b border-b-gray-300 border-b-4 my-5 pb-5">
          <div className="mt-5 min-w-[150px] text-4xl font-bold">
            <span><span className="text-green-500">✔</span> 3 餐</span>
            <div className="ml-10 mt-1 text-xl opacity-50">3 Meals</div>
          </div>
          <div className="flex-1 ml-12 text-xl">
            {
              new Array(3).fill(null).map((_, i) => (
                <article className="mb-6 mr-6 rounded-lg border border-gray-400 border-2 bg-white shadow-lg inline-block p-4 rounded-lg min-w-[100px]">
                  <header className="mb-3 font-bold">⏰ {new Date().toLocaleTimeString()}</header>
                  <div className="flex">
                    <div>
                      <div className="pb-1 mb-3 font-bold">🍨 碳水</div>
                      <div className="overflow-hidden rounded-full bg-gray-300">
                        <div style={{ width: '67.5%' }} className="h-2 rounded-full bg-indigo-600" />
                      </div>
                      <div className="mt-2 text-indigo-600"><strong>30g</strong> / 45-60g</div>
                    </div>
                    <div className="mx-5">
                      <div className="pb-1 mb-1 border-b border-b-black font-bold">🧈 肥油</div>
                      <div className="font-bold">15g</div>
                    </div>
                    <div>
                      <div>Chicken, Salad Greens</div>
                    </div>
                  </div>
                </article>
              ))
            }
          </div>
        </div>
        {/* snacks */}
        <div className="flex mt-4 ml-4">
          <div className="mt-5 text-4xl min-w-[150px] font-bold">
            <span className="text-green-500">✔</span> 2 小吃
            <div className="ml-10 mt-1 text-xl opacity-50">2 Snacks</div>
          </div>
          <div className="flex-1 ml-12 text-xl">
            {
              new Array(2).fill(null).map((_, i) => (
                <article className="mb-6 mr-6 rounded-lg border border-gray-400 border-2 bg-white shadow-lg inline-block p-4 rounded-lg min-w-[100px]">
                  <header className="mb-3 font-bold">⏰ {new Date().toLocaleTimeString()}</header>
                  <div className="flex">
                    <div>
                      <div className="pb-1 mb-1 border-b border-b-black font-bold">🍨 碳水</div>
                      <div className="font-bold">30g</div>
                    </div>
                    <div className="mx-5">
                      <div className="pb-1 mb-1 border-b border-b-black font-bold">🧈 肥油</div>
                      <div className="font-bold">15g</div>
                    </div>
                    <div>
                      <div>Chicken, Salad Greens</div>
                    </div>
                  </div>
                </article>
              ))
            }
          </div>
        </div>
        <h1 className="mt-10 font-bold text-4xl">
          總共吃了: <div className="mt-1 text-xl opacity-50">Total eaten:</div>
        </h1>
        <h1 className="mt-20 text-5xl font-bold border-t border-t-gray-600 border-t-4 my-5 pt-12">
          記錄一個新的...
        </h1>
        <div className="italic mt-4 text-3xl opacity-50 mb-5">
          Record a new...
        </div>
        <div className="my-5 flex flex-col">
          <button
            type="button"
            className="text-left rounded-md bg-green-600 hover:bg-green-500 focus:bg-green-500 py-5 px-5 min-w-[300px] text-4xl font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4"
          >
            餐 <div className="mt-2 opacity-50 text-2xl italics font-normal">Meal</div>
          </button>
          <button
            type="button"
            className="mt-10 text-left rounded-md bg-orange-600 hover:bg-orange-500 focus:bg-orange-500 py-5 px-5 min-w-[300px] text-4xl font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4"
          >
            小吃 <div className="mt-2 opacity-50 text-2xl italics font-normal">Snack</div>
          </button>
        </div>
      </main>
    </div>
  );
}
