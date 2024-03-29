import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { useState } from "react";

import useCategoryWithPagination from "../../hooks/useCategoryWithPagination";
import CartCard from "../../Components/Card/CartCard";

const ShopTab = ({ category }) => {
  const categories = ["salad", "pizza", "soup", "dessert", "drink"];
  const [sortType, setSortType] = useState("");
  const [sortField, setSortField] = useState("");

  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const limit = 5;
  const [saladPage, setSaladPage] = useState(1);

  const [pizzaPage, setPizzaPage] = useState(1);
  const [soupPage, setSoupPage] = useState(1);
  const [dessertPage, setDessertPage] = useState(1);
  const [drinkPage, setDrinkPage] = useState(1);

  const handleSort = (e) => {
    const selectOptions = e.target.value;

    if (selectOptions === "Low to High") {
      setSortField("price");
      setSortType("asc");
    }
    if (selectOptions === "High to Low") {
      setSortField("price");
      setSortType("desc");
    }
    if (selectOptions === "Default") {
      setSortField("");
      setSortType("");
    }
  };
  // salad
  const [salad, saladLoading] = useCategoryWithPagination({
    category: "salad",
    limit: limit,
    currentPage: saladPage,
    sortField: sortField,
    sortType: sortType,
  });
  const saladTotal = salad?.total;
  const saladTotalPage = Number(Math.ceil(saladTotal / limit));

  //   pizza
  const [pizza, pizzaLoading] = useCategoryWithPagination({
    category: "pizza",
    limit: limit,
    currentPage: pizzaPage,
    sortField: sortField,
    sortType: sortType,
  });
  const pizzaTotal = pizza?.total;
  const pizzaTotalPage = Number(Math.ceil(pizzaTotal / limit));
  //   soup
  const [soup, soupLoading] = useCategoryWithPagination({
    category: "soup",
    limit: limit,
    currentPage: soupPage,
    sortField: sortField,
    sortType: sortType,
  });
  const soupTotal = soup?.total;
  const soupTotalPage = Number(Math.ceil(soupTotal / limit));
  //   dessert
  const [dessert, dessertLoading] = useCategoryWithPagination({
    category: "dessert",
    limit: limit,
    currentPage: dessertPage,
    sortField: sortField,
    sortType: sortType,
  });
  const dessertTotal = dessert?.total;
  const dessertTotalPage = Number(Math.ceil(dessertTotal / limit));

  // drinks
  const [drink, drinkLoading] = useCategoryWithPagination({
    category: "drinks",
    limit: limit,
    currentPage: drinkPage,
    sortField: sortField,
    sortType: sortType,
  });
  const drinkTotal = drink?.total;
  const drinkTotalPage = Number(Math.ceil(drinkTotal / limit));

  return (
    <div className="max-w-7xl min-h-screen mx-auto">
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(tabIndex) => setTabIndex(tabIndex)}
      >
        <div className="flex justify-center pt-24 ">
          <TabList>
            <Tab>Salads</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
        </div>
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={handleSort}
        >
          <option disabled selected>
            Sort by Price
          </option>
          <option>Default</option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>
        {/* salad */}
        <TabPanel>
          {saladLoading ? (
            <div className="flex justify-center items-center">
              <span className="loading loading-spinner text-warning"></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12  ">
              {salad?.result?.map((item) => (
                <CartCard menu={item}></CartCard>
              ))}
            </div>
          )}

          <div className="mt-12">
            {Array.from({ length: saladTotalPage }, (_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setSaladPage(pageNumber)}
                  className={
                    pageNumber === saladPage
                      ? "join-item btn btn-primary"
                      : "join-item btn btn-ghost"
                  }
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>
        </TabPanel>
        {/* pizza */}
        <TabPanel>
          {pizzaLoading ? (
            <div className="flex justify-center items-center">
              <span className="loading loading-spinner text-warning"></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12  ">
              {pizza?.result?.map((item) => (
                <CartCard menu={item}></CartCard>
              ))}
            </div>
          )}{" "}
          <div className="mt-12">
            {Array.from({ length: pizzaTotalPage }, (_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setPizzaPage(pageNumber)}
                  className={
                    pageNumber === pizzaPage
                      ? "join-item btn btn-primary"
                      : "join-item btn btn-ghost"
                  }
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>
        </TabPanel>
        {/* Soup */}
        <TabPanel>
          {soupLoading ? (
            <div className="flex justify-center items-center">
              <span className="loading loading-spinner text-warning"></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12  ">
              {soup?.result?.map((item) => (
                <CartCard menu={item}></CartCard>
              ))}
            </div>
          )}

          <div className="mt-12">
            {Array.from({ length: soupTotalPage }, (_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setSoupPage(pageNumber)}
                  className={
                    pageNumber === soupPage
                      ? "join-item btn btn-primary"
                      : "join-item btn btn-ghost"
                  }
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>
        </TabPanel>
        {/* dessert */}
        <TabPanel>
          {dessertLoading ? (
            <div className="flex justify-center items-center">
              <span className="loading loading-spinner text-warning"></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12  ">
              {dessert?.result?.map((item) => (
                <CartCard menu={item}></CartCard>
              ))}
            </div>
          )}
          <div className="mt-12">
            {Array.from({ length: dessertTotalPage }, (_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setDessertPage(pageNumber)}
                  className={
                    pageNumber === dessertPage
                      ? "join-item btn btn-primary"
                      : "join-item btn btn-ghost"
                  }
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>
        </TabPanel>
        {/* drinks */}
        <TabPanel>
          {dessertLoading ? (
            <div className="flex justify-center items-center">
              <span className="loading loading-spinner text-warning"></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12  ">
              {drink?.result?.map((item) => (
                <CartCard menu={item}></CartCard>
              ))}
            </div>
          )}
          <div className="mt-12">
            {Array.from({ length: drinkTotalPage }, (_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setDrinkPage(pageNumber)}
                  className={
                    pageNumber === drinkPage
                      ? "join-item btn btn-primary"
                      : "join-item btn btn-ghost"
                  }
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopTab;
