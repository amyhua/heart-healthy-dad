"use client";
// import Fuse from 'fuse.js'
import LangSwitcher from "@/components/LangSwitcher";
import SearchBox from "@/components/SearchBox";
import withLangSwitcher from "@/components/withLangSwitcher";
import {
  getGlycemicIndexColor,
  getGlycemicLoadColor,
} from "@/utils/colorCodes";
import axios from "axios";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

const LoadingSpinner: React.FC<{ className: string }> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={classNames(className, "animate-spin")}
  >
    <path
      d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
      opacity=".25"
    />
    <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" />
  </svg>
);

const ItemTile: React.FC<{
  item: Item;
  lang: Language;
}> = ({ lang, item }) => {
  return (
    <li
      key={item.id}
      className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
    >
      <div className="flex w-full items-center justify-between">
        {item.fields.Image && (
          <img
            alt={item.fields.Name}
            src={item.fields.Image[0].thumbnails.full.url}
            className="size-24 shrink-0 bg-gray-300"
          />
        )}
        <div className="flex-1 truncate py-2 px-4">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-xl font-medium text-gray-900">
              {lang === "chinese"
                ? item.fields["Chinese Name"]
                : item.fields.Name}
            </h3>
            <span className="inline-flex shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              {item.fields.Category}
            </span>
          </div>
          <p className="mt-1 truncate text-sm text-gray-500">
            {lang === "english"
              ? item.fields["Chinese Name"]
              : item.fields.Name}
          </p>
          <p className="mt-1 truncate mt-2 mb-1 text-base text-black ">
            <span
              className="block md:inline-block md:mb-0 mb-2 text-black py-1 px-2 rounded-md font-monospace"
              style={{
                backgroundColor: getGlycemicIndexColor(
                  item.fields["Glycemic Index"]
                ).background,
                color: getGlycemicIndexColor(item.fields["Glycemic Index"]).color,
              }}
            >
              GI: {item.fields["Glycemic Index"]}
            </span>
            <span
              className="block md:inline-block md:ml-4 text-black py-1 px-2 rounded-md font-monospace"
              style={{
                backgroundColor: getGlycemicLoadColor(
                  item.fields["Glycemic Load"]
                ).background,
                color: getGlycemicLoadColor(item.fields["Glycemic Load"]).color,
              }}
            >
              GL: {item.fields["Glycemic Load"]}
            </span>
          </p>
        </div>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <a
              href={`#`}
              className="bg-slate-100 border-r border-r-slate-300 border-r-2 text-lg relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-2 font-semibold text-gray-900"
            >
              <span className="text-2xl">🍽️</span>+餐 <span className="opacity-50 text-sm">Add to Meal</span>
            </a>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <a
              href={`#`}
              className="bg-slate-100 text-lg relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-2 font-semibold text-gray-900"
            >
              <span className="text-2xl">🍡</span>+小吃 <span className="opacity-50 text-sm">Add to Snack</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

function SearchPage({
  lang,
  setLang,
}: {
  lang: Language;
  setLang: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [items, setItems] = useState<Array<Item>>([]);
  const [loading, setLoading] = useState(false);

  // const enFuse = useMemo(() => {
  //   return new Fuse(items.map(item => item.fields.Name), {
  //     includeScore: true,
  //     threshold: 0.2
  //   });
  // }, [items]);

  const loadItems = async (search?: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.airtable.com/v0/app6MX2h2nibYYlKy/Items`,
        {
          headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          },
          params: {
            pageSize: 100,
            view: "Items",
            ...(search
              ? {
                  filterByFormula: `OR(SEARCH("${search.toLowerCase()}", LOWER(Name)) >= 1, SEARCH("${search}", LOWER({Chinese Name})) >= 1)`,
                }
              : {}),
          },
        }
      );
      const items = response.data;
      console.log(items);
      setLoading(false);
      setItems(items.records);
    } catch (error) {
      console.error(error);
    }
  };
  const loadItemsDebounced = debounce(loadItems, 250);

  const onSearch = async (search: string) => {
    setLoading(true);
    loadItemsDebounced(search);
    setLoading(false);
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div className="bg-white1 text-black min-h-screen p-8 pb-20 md:p-20 sm:p-4 font-[family-name:var(--font-geist-sans)]">
      <main className="flex items-left flex-col justify-center max-w-7xl mx-auto">
        <header className="sticky top-0 py-2 bg-white1 mb-10 z-10">
          <div className="text-right">
            <LangSwitcher lang={lang} setLang={setLang} />
          </div>
        </header>
        <SearchBox onChange={onSearch} icon={loading ? <LoadingSpinner className="p-1 ml-1 mt-0.5 h-10 w-10" /> : <MagnifyingGlassIcon className="p-1 ml-1 mt-0.5 h-10 w-10" />} />
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-5 mb-5"
        >
          {items.map((item) => (
            <ItemTile lang={lang} key={item.id} item={item} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default withLangSwitcher(SearchPage);
