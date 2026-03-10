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
import { logoutAsyncThunk } from "@/feature/auth/redux/logout.thunk";
import {
  UserPen,
  LayoutDashboard,
  Library,
  LogOutIcon,
  School,
  ChessQueen,
  TypeOutline,
  AlignEndVertical,
  Ticket,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router";
import { useProfileDropDown } from "../hook/userProfile";

function ProfileDropdown({
  profile = false,
  profilePath = "#",
  dashboard = false,
  dashboardPath = "#",
  enrolledBatch = false,
  enrolledBatchPath = "#",
  connectedBatch = false,
  connectedCoachingPath = "#",
  coachingStaff = false,
  coachingStaffPath = false,
  becomeTeacher = false,
  becomeTeacherPath = "#",
  becomeUser = false,
  becomeUserPath = "#",
  coachingPage = false,
  coachingPagePath = "#",
  enrolled= false,
  enrolledPath = '#'
}) {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth)
  const {updateInTeacherRole} = useProfileDropDown({id: user._id})

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
          {becomeTeacher && (
            <Link to={becomeTeacherPath}>
              <DropdownMenuItem>
                <TypeOutline />
                Become A Teacher
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
          {becomeUser && (
            <Link to={becomeUserPath}>
              <DropdownMenuItem>
                <UserPen />
                Become A User
              </DropdownMenuItem>
            </Link>
          )}
          {coachingPage && (
            <Link to={coachingPagePath}>
              <DropdownMenuItem>
                <AlignEndVertical />
                Coaching Page
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
          {enrolled && (
            <Link to={enrolledPath}>
              <DropdownMenuItem>
                <Ticket />
                Entolled
              </DropdownMenuItem>
            </Link>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <Link to={"/teachers"} onClick={() => dispatch(logoutAsyncThunk())}>
          <DropdownMenuItem>
            <LogOutIcon />
            Sign Out
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ProfileDropdown;
