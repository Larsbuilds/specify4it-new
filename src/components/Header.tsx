"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const productMenuItems: { title: string; href: string; description: string }[] = [
  {
    title: "Create Error-Free Systems",
    href: "/product#intro",
    description: "Create error-free database systems faster with innovative axiomatic reasoning theory.",
  },
  {
    title: "Why Specify4IT?",
    href: "/product#why",
    description: "Understand the challenges of creating error-free software and why traditional methods fall short.",
  },
  {
    title: "Our Solution",
    href: "/product#deliver",
    description: "Mathematical proof of correctness and automated code generation from verified specifications.",
  },
  {
    title: "Key Features",
    href: "/product#features",
    description: "Check consistency, animate behavior, deduce requirements, and prove properties of your applications.",
  },
  {
    title: "Technical Details",
    href: "/product#technical",
    description: "Learn about our approach to testing, verification, and ensuring specification correctness.",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div className={`absolute inset-0 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'} bg-darkBlue/5 backdrop-blur-md`} />
      <div className="relative">
        <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center h-[64px] md:h-[80px]">
          <Link href="/" className="mr-auto">
            <Image
              src="/images/specify4itlogo.svg"
              alt="Specify4IT"
              width={180}
              height={40}
              priority
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList className="flex gap-12">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">THE PRODUCT</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] md:w-[600px] p-4">
                    <motion.div 
                      className="grid gap-4 md:grid-cols-2"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.2
                          }
                        }
                      }}
                    >
                      {productMenuItems.map((item, index) => (
                        <motion.div
                          key={item.title}
                          variants={{
                            hidden: { 
                              opacity: 0,
                              y: 10
                            },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                duration: 0.3,
                                ease: [0.16, 1, 0.3, 1]
                              }
                            }
                          }}
                        >
                          <NavigationMenuLink
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brandBlue/10 focus:bg-brandBlue/10"
                          >
                            <motion.div 
                              className="text-base font-zen-dots leading-tight text-white mb-2"
                              initial={{ textShadow: "0 0 8px rgba(255,255,255,0.8)" }}
                              animate={{
                                textShadow: "0 0 0px rgba(255,255,255,0)",
                                transition: {
                                  duration: 1,
                                  delay: 1
                                }
                              }}
                            >
                              {item.title}
                            </motion.div>
                            <p className="line-clamp-2 text-sm leading-snug text-white/70">
                              {item.description}
                            </p>
                          </NavigationMenuLink>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">ABOUT US</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] md:w-[600px] p-4">
                    <motion.div 
                      className="grid gap-4"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.2
                          }
                        }
                      }}
                    >
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.3,
                              ease: [0.16, 1, 0.3, 1]
                            }
                          }
                        }}
                      >
                        <NavigationMenuLink
                          href="/about#overview"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brandBlue/10 focus:bg-brandBlue/10"
                        >
                          <motion.div 
                            className="text-base font-zen-dots leading-tight text-white mb-2"
                            initial={{ textShadow: "0 0 8px rgba(255,255,255,0.8)" }}
                            animate={{
                              textShadow: "0 0 0px rgba(255,255,255,0)",
                              transition: {
                                duration: 1,
                                delay: 1
                              }
                            }}
                          >
                            Company Overview
                          </motion.div>
                          <p className="line-clamp-2 text-sm leading-snug text-white/70">
                            Learn about Specify4IT and Precision Design Technology Ltd.
                          </p>
                        </NavigationMenuLink>
                      </motion.div>

                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.3,
                              ease: [0.16, 1, 0.3, 1]
                            }
                          }
                        }}
                      >
                        <NavigationMenuLink
                          href="/about#career"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brandBlue/10 focus:bg-brandBlue/10"
                        >
                          <motion.div 
                            className="text-base font-zen-dots leading-tight text-white mb-2"
                            initial={{ textShadow: "0 0 8px rgba(255,255,255,0.8)" }}
                            animate={{
                              textShadow: "0 0 0px rgba(255,255,255,0)",
                              transition: {
                                duration: 1,
                                delay: 1
                              }
                            }}
                          >
                            Dedicated Career
                          </motion.div>
                          <p className="line-clamp-2 text-sm leading-snug text-white/70">
                            50 years of expertise in software engineering and specification.
                          </p>
                        </NavigationMenuLink>
                      </motion.div>

                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.3,
                              ease: [0.16, 1, 0.3, 1]
                            }
                          }
                        }}
                      >
                        <NavigationMenuLink
                          href="/about#accomplishments"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brandBlue/10 focus:bg-brandBlue/10"
                        >
                          <motion.div 
                            className="text-base font-zen-dots leading-tight text-white mb-2"
                            initial={{ textShadow: "0 0 8px rgba(255,255,255,0.8)" }}
                            animate={{
                              textShadow: "0 0 0px rgba(255,255,255,0)",
                              transition: {
                                duration: 1,
                                delay: 1
                              }
                            }}
                          >
                            Professional Accomplishments
                          </motion.div>
                          <p className="line-clamp-2 text-sm leading-snug text-white/70">
                            Certifications, education, and notable publications in the field.
                          </p>
                        </NavigationMenuLink>
                      </motion.div>

                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.3,
                              ease: [0.16, 1, 0.3, 1]
                            }
                          }
                        }}
                      >
                        <NavigationMenuLink
                          href="/about#contact"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brandBlue/10 focus:bg-brandBlue/10"
                        >
                          <motion.div 
                            className="text-base font-zen-dots leading-tight text-white mb-2"
                            initial={{ textShadow: "0 0 8px rgba(255,255,255,0.8)" }}
                            animate={{
                              textShadow: "0 0 0px rgba(255,255,255,0)",
                              transition: {
                                duration: 1,
                                delay: 1
                              }
                            }}
                          >
                            Contact Information
                          </motion.div>
                          <p className="line-clamp-2 text-sm leading-snug text-white/70">
                            Get in touch and find our office locations.
                          </p>
                        </NavigationMenuLink>
                      </motion.div>
                    </motion.div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()}
                  href="mailto:tim.warren@specify4it.com?subject=Interest%20in%20Specify4IT"
                >
                  CONTACT US
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      </div>
    </div>
  );
}

export const ListItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, children, ...props }, ref) => {
  return (
    <li
      ref={ref}
      className={className}
      {...props}
    >
      {children}
    </li>
  );
});

ListItem.displayName = "ListItem";
