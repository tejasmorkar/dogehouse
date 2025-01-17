import React from "react";
import { SolidSearch } from "../../icons";
import { Input } from "../Input";

export interface SearchBarProps
  extends React.ComponentPropsWithoutRef<"input"> {
  inputClassName?: string;
  mobile?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  className = "",
  inputClassName = "",
  mobile = false,
  ...props
}) => {
  return (
    <div
      className={`w-full bg-primary-700 text-primary-300 focus-within:text-primary-100 rounded-lg ${
        mobile ? "px-4" : ""
      } ${className}`}
    >
      {!mobile && (
        <div className="h-full mx-4 flex items-center pointer-events-none">
          <SolidSearch />
        </div>
      )}
      <Input className={inputClassName} {...props} />
    </div>
  );
};
