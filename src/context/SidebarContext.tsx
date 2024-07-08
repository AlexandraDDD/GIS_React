import React, { createContext, useState, ReactNode } from 'react';
import { SidebarContextType } from './sidebarType';

export const SidebarContext = createContext<SidebarContextType>({
  isSidebarOpen: false,
  handleOpenSidebar: () => {},
  handleCloseSidebar: () => {},
});

interface Props {
  children: ReactNode;
}
export const SidebarContextProvider: React.FC<Props> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const value = {
    isSidebarOpen,
    handleOpenSidebar,
    handleCloseSidebar,
  };

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
};






/* import React, { createContext, useState, ReactNode } from 'react';
import { SidebarContextType } from './sidebarType';

export const SidebarContext = createContext<SidebarContextType>({
    isSidebarOpen: false,
    handleOpenSidebar: () => {},
});


 */