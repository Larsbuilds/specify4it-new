"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Automated Reasoning",
    href: "/product#automated-reasoning",
    description: "Generate error-free code through mathematically proven specifications.",
  },
  {
    title: "Database Design",
    href: "/product#database-design",
    description: "Create relational database software right the first time.",
  },
  {
    title: "Specification Management",
    href: "/product#specification",
    description: "Manage and validate your specifications with precision.",
  },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-darkBlue/95 backdrop-blur-sm border-b border-darkBlue/30">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center h-[64px] md:h-[80px]">
          <Link href="/" className="mr-auto">
            <Image
              src="/images/specify4itlogo.svg"
              alt="Specify4IT"
              width={180}
              height={40}
              priority
              className="h-8 md:h-10 w-auto"
            />
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList className="flex gap-8">
              <NavigationMenuItem>
                <NavigationMenuTrigger>THE PRODUCT</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>ABOUT US</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[300px]">
                    <ListItem
                      title="Our Mission"
                      href="/about#mission"
                    >
                      Creating error-free software through mathematical precision.
                    </ListItem>
                    <ListItem
                      title="The Team"
                      href="/about#team"
                    >
                      Meet the experts behind Specify4IT.
                    </ListItem>
                  </ul>
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
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
