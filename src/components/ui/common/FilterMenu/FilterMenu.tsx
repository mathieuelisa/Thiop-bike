"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Typography from "../../Typography";
import CloseIcon from "../../Icons/CloseIcon";
import ArrowDownIcon from "../../Icons/ArrowDownIcon";
import { twJoin, twMerge } from "tailwind-merge";
import MagnifyingGlassIcon from "../../Icons/MagnifyingGlassIcon";
import Button from "../../Button";
import StarsFillIcon from "../../Icons/StarsFillIcon";
import { useFilterMenu } from "@/context/FilterMenuContext";
import { MOVIES_DATASET } from "@/components/templates/Movies/Movies.data";
import { TMenuFilterDataSet } from "@/components/templates/Movies/MovieFilter.data";

export type TFilterMenu = {
  isOpenFilter: number | null;
  setIsOpenFilter: Dispatch<SetStateAction<number | null>>;
  categoryListing: string[];
  setCategoryListing: Dispatch<SetStateAction<string[]>>;
  ratedListing: number[];
  setRatedListing: Dispatch<SetStateAction<number[]>>;
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
  menuFilterDataset: TMenuFilterDataSet[];
};

export default function FilterMenu({
  isOpenFilter,
  setIsOpenFilter,
  categoryListing,
  setCategoryListing,
  ratedListing,
  setRatedListing,
  searchInput,
  setSearchInput,
  handleSubmit,
  menuFilterDataset,
}: TFilterMenu) {
  const [contents, setContents] = useState(MOVIES_DATASET);
  const { setFilterMenuOpen } = useFilterMenu();

  const toggleRating = (option: number) => {
    if (ratedListing.includes(option)) {
      setRatedListing((prev) => prev.filter((rating) => rating !== option));
    } else {
      setRatedListing((prev) => [...prev, option]);
    }
  };

  const handleCategoryClick = (elementOption: string) => {
    if (categoryListing.includes(elementOption)) {
      setCategoryListing((prevCategories) =>
        prevCategories.filter((cat) => cat !== elementOption)
      );
    } else {
      setCategoryListing((prevCategories) => [
        ...prevCategories,
        elementOption,
      ]);
    }
  };

  const totalCategorySelected = categoryListing.length + ratedListing.length;

  const resetFilters = () => {
    setCategoryListing([]);
    setRatedListing([]);
    setIsOpenFilter(null);
    setSearchInput("");
    setContents(contents);
  };

  return (
    <div className='bg-zinc-900 z-50 text-colors-offWhite px-4 w-80 h-screen absolute'>
      <div className='flex items-center justify-between mt-3 mb-4'>
        <Typography className='font-clashDisplay text-xl '>FILTRES</Typography>
        <CloseIcon
          className='text-colors-offWhite duration-500 ease-in-out hover:text-red-700 h-4 w-8 cursor-pointer ml-auto '
          onClick={() => setFilterMenuOpen(false)}
        />
      </div>

      <section className='flex gap-3 flex-wrap mb-4'>
        {categoryListing.map((item) => {
          return (
            <button className='bg-red-600 rounded-md p-1 text-xs' key={item}>
              {item}
            </button>
          );
        })}

        {ratedListing.map((note) => {
          return (
            <div
              className='flex items-center bg-colors-offWhite rounded-md p-1 text-xs'
              key={note}
            >
              {Array.from({ length: Number(note) }, (_, index) => (
                <StarsFillIcon key={index} className='h-3 fill-red-600' />
              ))}
            </div>
          );
        })}
      </section>

      <section className='flex justify-between flex-col h-[550px]'>
        <section>
          {/* Search input part */}
          <div className='flex flex-col w-full mb-7'>
            <form onSubmit={handleSubmit} className='flex items-center gap-3'>
              <Button type='submit' className='px-0'>
                <MagnifyingGlassIcon className='h-5 text-colors-offWhite cursor-pointer hover:text-red-600' />
              </Button>
              <input
                id='search'
                placeholder='Votre recherche...'
                onChange={(evt) => setSearchInput(evt.target.value)}
                type='text'
                value={searchInput}
                className='w-full mr-4 focus:outline-none text-sm text-colors-offWhite placeholder:text-sm bg-zinc-900 border-b border-colors-gray-500'
              />
            </form>
          </div>

          {menuFilterDataset.map((element) => {
            return (
              <div key={element.id}>
                <div className='flex justify-between mb-2'>
                  <Button
                    className='pr-2 w-full flex pl-0 justify-between hover:text-red-600 duration-300 ease-in-out'
                    onClick={() =>
                      setIsOpenFilter(
                        isOpenFilter === element.id ? null : element.id
                      )
                    }
                  >
                    <Typography
                      className={twJoin(
                        isOpenFilter === element.id &&
                          "duration-300 ease-in-out text-red-600",
                        "font-muli"
                      )}
                    >
                      {element.title}
                    </Typography>

                    <ArrowDownIcon
                      className={twMerge(
                        "h-4 cursor-pointer",
                        isOpenFilter === element.id &&
                          "text-red-600 rotate-180 ease-in-out"
                      )}
                    />
                  </Button>
                </div>

                <div
                  key={element.id}
                  className={twJoin(
                    "overflow-y-scroll",
                    isOpenFilter === element.id && "h-52"
                  )}
                >
                  {isOpenFilter === element.id &&
                    element?.options?.map((element) => {
                      return (
                        <Button
                          className={twMerge(
                            "hover:text-red-600 w-full flex justify-start",
                            categoryListing.includes(String(element.name)) &&
                              "text-red-600"
                          )}
                          key={element.id}
                          onClick={() =>
                            handleCategoryClick(String(element.name))
                          }
                        >
                          {element?.name}
                        </Button>
                      );
                    })}

                  {isOpenFilter === element.id &&
                    element?.notes?.map((element) => {
                      return (
                        <Button
                          key={element.id}
                          className={twMerge(
                            "flex mb-3",
                            ratedListing.includes(Number(element.name)) &&
                              "bg-colors-gray-400"
                          )}
                          onClick={() => toggleRating(Number(element.name))}
                        >
                          {Array.from(
                            { length: Number(element.name) },
                            (_, index) => (
                              <StarsFillIcon
                                key={index}
                                className='fill-red-600 h-4'
                              />
                            )
                          )}
                        </Button>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </section>

        {/* Bouton reset et valide du filter */}
        <section className='flex justify-between gap-5'>
          <Button
            onClick={resetFilters}
            type='button'
            color='transparent'
            className='p-2 text-sm  font-clashDisplay'
          >
            Tout effacer
          </Button>
          <Button
            onClick={() => {
              setFilterMenuOpen(false);
            }}
            type='button'
            color='primary'
            className='p-2 text-sm w-40 font-clashDisplay'
            disabled={totalCategorySelected === 0}
          >
            Valider
          </Button>
        </section>
      </section>
    </div>
  );
}
