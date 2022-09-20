import { Head } from "../components/Head";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MainPage = () => {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center py-20 px-4">
      <Head>
        <title>Coffee Delivery</title>
      </Head>
    </div>
  );
};

export default MainPage;
