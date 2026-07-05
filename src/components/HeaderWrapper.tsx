import type { ReactNodeProps } from "@/types/CommonTypes";

import Header from "./Header";

const HeaderWrapper = ({ children }: ReactNodeProps) => {
  return (
    <div>
      <Header />
      <div className="px-3 py-2">
        <div className="border-2 border-gray-300 rounded-md bg-white px-2 py-1 min-h-[88vh] min-h-screen">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default HeaderWrapper;
