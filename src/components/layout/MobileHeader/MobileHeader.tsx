'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { brandConfig } from '@/config/brand.config';
import { navigationItems } from '@/data/navigation';
import styles from './MobileHeader.module.css';

export function MobileHeader() {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  const toggleDropdown = (index: number) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  return (
    <>
      <div className={styles.mobileHeader}>
        <div className="container">
          <div className={styles.inner}>
            <button
              onClick={() => setIsOpen(true)}
              className={styles.menuToggle}
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="24" height="24">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>

            <div className={styles.logoCol}>
              <Link href="/">
                <Image
                  src={brandConfig.logos.main}
                  alt={brandConfig.companyName}
                  width={150}
                  height={60}
                  className={styles.logo}
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide-out Menu Drawer */}
      {isOpen && <div className={styles.backdrop} onClick={() => setIsOpen(false)}></div>}
      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
          <div className={styles.drawerLogo}>
            <Image
              src={brandConfig.logos.main}
              alt={brandConfig.companyName}
              width={130}
              height={52}
            />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className={styles.closeBtn}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        <nav className={styles.drawerNav}>
          <ul className={styles.drawerMenu}>
            {navigationItems.map((item, index) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = expandedItem === index;

              return (
                <li key={index} className={styles.drawerItem}>
                  <div className={styles.itemRow}>
                    <Link
                      href={item.href}
                      className={`${styles.drawerLink} ${isActive ? styles.active : ''}`}
                    >
                      {item.label}
                    </Link>
                    {hasChildren && (
                      <button
                        onClick={() => toggleDropdown(index)}
                        className={`${styles.dropdownToggle} ${isExpanded ? styles.expanded : ''}`}
                        aria-label="Toggle submenu"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                    )}
                  </div>

                  {hasChildren && isExpanded && (
                    <ul className={styles.drawerSubmenu}>
                      {item.children?.map((child, childIndex) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <li key={childIndex} className={styles.submenuItem}>
                            <Link
                              href={child.href}
                              className={`${styles.submenuLink} ${isChildActive ? styles.submenuActive : ''}`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
