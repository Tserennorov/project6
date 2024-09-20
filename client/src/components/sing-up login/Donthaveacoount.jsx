import Link from "next/link";
import React from "react";

export const Donthaveacoount = ({ title, description, href }) => {
  return (
    <div className="flex gap-2">
      <a href="">{title}</a>

      <Link href={href} className="text-blue-700">
        {description}
      </Link>
    </div>
  );
};
