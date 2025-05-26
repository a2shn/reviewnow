import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, CreditCard, LogOut, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { auth } from "@/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { routes } from "@/lib/routes";

export async function UserDropdown() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = {
    name: session?.user.name,
    email: session?.user.email,
    avatarUrl: session?.user.image,
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={user.avatarUrl || "/placeholder.svg"}
              alt={user.name}
            />
            <AvatarFallback>
              {user.name !== undefined
                ? user.name.charAt(0)
                : user.email?.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <span className="hidden md:inline">{user.email}</span>
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={routes.settings}>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </Link>

          <Link href={routes.billing}>
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
