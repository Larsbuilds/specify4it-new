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
    <div className="fixed top-0 left-0 right-0 z-50 bg-darkBlue/95 backdrop-blur-sm border-b border-darkBlue/30">
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
                <NavigationMenuTrigger className="bg-transparent">THE PRODUCT</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] md:w-[500px] p-4 bg-darkBlue/95 backdrop-blur-sm border border-darkBlue/30 rounded-md">
                    <div className="grid gap-3 md:grid-cols-2">
                      {components.map((component) => (
                        <NavigationMenuLink
                          key={component.title}
                          href={component.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{component.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                            {component.description}
                          </p>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">ABOUT US</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] p-4 bg-darkBlue/95 backdrop-blur-sm border border-darkBlue/30 rounded-md">
                    <div className="grid gap-3">
                      <NavigationMenuLink
                        href="/about#mission"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Our Mission</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                          Creating error-free software through mathematical precision.
                        </p>
                      </NavigationMenuLink>

                      <NavigationMenuLink
                        href="/about#team"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">The Team</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                          Meet the experts behind Specify4IT.
                        </p>
                      </NavigationMenuLink>

                      <NavigationMenuLink
                        href="/about#accomplishments"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">John's Accomplishments</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                          Chartered Engineer (C.Eng.), Chartered IT Practitioner (CITP), Chartered Fellow of BCS (FBCS), and MIET member with a Master's in Software Engineering from Oxford.
                        </p>
                      </NavigationMenuLink>

                      <div className="mt-4">
                        <h4 className="mb-2 text-sm font-medium text-blue-400">Selected Publications</h4>
                        <ul className="grid gap-2 text-sm text-muted-foreground">
                          <li>
                            <Link href="https://www.researchgate.net/publication/302370252_A_Rigorous_Specification_Technique_for_High_Quality_Software" className="hover:text-white transition-colors">
                              A rigorous specifying technique for high quality software. Safety Critical Systems Conference
                            </Link>
                          </li>
                          <li>
                            <Link href="https://scsc.uk/scsc-8" className="hover:text-white transition-colors">
                              Practical experience with integrated formal methods. Software Engineering Conference for Formal Methods
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.researchgate.net/publication/220795890_Generating_commercial_web_applications_from_precise_requirements_and_formal_specifications" className="hover:text-white transition-colors">
                              Generating commercial web applications from precise requirements and formal applications
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.wiley.com/en-ae/Industrial+Use+of+Formal+Methods%3A+Formal+Verification-p-9781848213630" className="hover:text-white transition-colors">
                              Industrial Use of Formal Methods (as a contributor). Edited by Jean-louis Boulangere
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
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
