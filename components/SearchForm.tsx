import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search, SearchIcon } from "lucide-react";
const SearchForm = ({ query }: { query?: string }) => {
  // const query = "Test";

  return (
    <>
      <Form action={"/"} scroll={false} className="search-form">
        <input
          name="query"
          defaultValue={query}
          placeholder="Search Startups"
          className="search-input"
        />

        <div className="flex gap-2">
          {query && <SearchFormReset />}
          <button
            type="submit"
            className="search-btn text-white cursor-pointer"
          >
            <Search className="size-5" />
          </button>
        </div>
      </Form>
    </>
  );
};

export default SearchForm;
