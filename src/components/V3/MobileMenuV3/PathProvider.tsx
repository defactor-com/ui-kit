import React, { createContext, useContext, ReactNode } from "react";

const PathContext = createContext<string | null>(null);

export const usePathname = () => {
    return useContext(PathContext);
};

export const PathProvider: React.FC<{ path: string; children: ReactNode }> = ({
    path,
    children,
}) => {
    return <PathContext.Provider value={path}>{children}</PathContext.Provider>;
};
