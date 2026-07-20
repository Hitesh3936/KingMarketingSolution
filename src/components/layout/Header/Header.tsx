'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { brandConfig } from '@/config/brand.config';
import { navigationItems } from '@/data/navigation';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import styles from './Header.module.css';

export function Header() {
  const pathname = usePathname();
  const { isScrolled } = useScrollDirection(80);

  const headerClass = `${styles.header} ${isScrolled ? styles.sticky : ''}`;

  return (
    <>
      <header className={headerClass}>
        <div className="container">
          <div className={styles.inner}>
            <div className={styles.logoCol}>
              <Link href="/" className={styles.logoLink}>
                <Image
                  src={brandConfig.logos.main}
                  alt={brandConfig.companyName}
                  width={180}
                  height={72}
                  className={styles.logo}
                  priority
                />
              </Link>
            </div>

            <nav className={styles.nav}>
              <ul className={styles.menuList}>
                {navigationItems.map((item, index) => {
                  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                  const hasChildren = item.children && item.children.length > 0;

                  return (
                    <li
                      key={index}
                      className={`${styles.menuItem} ${hasChildren ? styles.hasDropdown : ''}`}
                    >
                      <Link
                        href={item.href}
                        className={`${styles.menuLink} ${isActive ? styles.active : ''}`}
                      >
                        {item.label}
                        {hasChildren && <span className={styles.arrow}></span>}
                      </Link>

                      {hasChildren && (
                        <ul className={styles.dropdown}>
                          {item.children?.map((child, childIndex) => {
                            const isChildActive = pathname === child.href;
                            return (
                              <li key={childIndex} className={styles.dropdownItem}>
                                <Link
                                  href={child.href}
                                  className={`${styles.dropdownLink} ${isChildActive ? styles.dropdownActive : ''}`}
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
        </div>
      </header>
    </>
  );
}
