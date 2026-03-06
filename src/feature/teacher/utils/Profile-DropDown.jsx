import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserPen, LayoutDashboard, Library, LogOutIcon, School, ChessQueen } from "lucide-react";
import { Link } from "react-router";

function ProfileDropdown({
  profile = false,
  profilePath = '#',
  dashboard = false,
  dashboardPath = '#',
  enrolledBatch = false,
  enrolledBatchPath = '#',
  connectedBatch = false,
  connectedCoachingPath = '#',
  coachingStaff= false,
  coachingStaffPath= false,
  coachingBatch = false,
  coachingBatchPath = false,
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar>
            <AvatarImage src={"/public/riad.png"} alt="shadcn" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          {profile && (
            <Link to={profilePath}>
              <DropdownMenuItem>
                <UserPen />
                Profile
              </DropdownMenuItem>
            </Link>
          )}
          {dashboard && (
            <Link to={dashboardPath}>
              <DropdownMenuItem>
                <LayoutDashboard />
                Dashboard
              </DropdownMenuItem>
            </Link>
          )}
          {enrolledBatch && (
            <Link to={enrolledBatchPath}>
              <DropdownMenuItem>
                <Library />
                Enrolled Batch
              </DropdownMenuItem>
            </Link>
          )}
          {connectedBatch && (
            <Link to={connectedCoachingPath}>
              <DropdownMenuItem>
                <School />
                Connected Coaching
              </DropdownMenuItem>
            </Link>
          )}
          {coachingStaff && (
            <Link to={coachingStaffPath}>
              <DropdownMenuItem>
                <ChessQueen />
                Staff
              </DropdownMenuItem>
            </Link>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ProfileDropdown;
