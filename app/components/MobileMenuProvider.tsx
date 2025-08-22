'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface MobileMenuContextType {
  isDrawerOpen: boolean
  setIsDrawerOpen: (isOpen: boolean) => void
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined)

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext)
  if (context === undefined) {
    throw new Error('useMobileMenu must be used within a MobileMenuProvider')
  }
  return context
}

interface MobileMenuProviderProps {
  children: React.ReactNode
}

const MobileMenuProvider = ({ children }: MobileMenuProviderProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    // Apply or remove the drawer-open class on the html element
    const htmlElement = document.documentElement
    if (isDrawerOpen) {
      htmlElement.classList.add('drawer-open')
    } else {
      htmlElement.classList.remove('drawer-open')
    }

    // Cleanup on unmount
    return () => {
      htmlElement.classList.remove('drawer-open')
    }
  }, [isDrawerOpen])

  return (
    <MobileMenuContext.Provider value={{ isDrawerOpen, setIsDrawerOpen }}>
      {children}
    </MobileMenuContext.Provider>
  )
}

export default MobileMenuProvider
