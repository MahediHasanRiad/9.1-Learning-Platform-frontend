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
  Shapes,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { updateRole } from "@/feature/auth/redux/auth.slice";
import { toast } from "sonner";

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
  enrolled = false,
  enrolledPath = "#",
  coachingBatch = false,
  coachingBatchPath = "#",
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, teacher, coaching } = useSelector((state) => state.auth);

  const handleCoachingClick = (e) => {
    e.preventDefault();

    if (coaching) {
       dispatch(updateRole("Coaching"));
      navigate("/coaching/profile");
    } else {
       dispatch(updateRole("Coaching"));
      navigate("/coaching");
    }
  };

  // become teacher
  const handleTeacherClick = (e) => {
    e.preventDefault();

    if (teacher) {
      dispatch(updateRole("Teacher"));
      navigate("/teachers");
    } else {
      dispatch(updateRole("Teacher"));
      navigate("/becomeTeacher");
    }
  };

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
            <span onClick={handleTeacherClick}>
              <DropdownMenuItem>
                <TypeOutline />
                Become A Teacher
              </DropdownMenuItem>
            </span>
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
            <Link
              to={becomeUserPath}
              onClick={() => dispatch(updateRole("User"))}
            >
              <DropdownMenuItem>
                <UserPen />
                Become A User
              </DropdownMenuItem>
            </Link>
          )}
          {coachingPage && (
            <span onClick={handleCoachingClick}>
              <DropdownMenuItem>
                <AlignEndVertical />
                Coaching Page
              </DropdownMenuItem>
            </span>
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
                Staffs
              </DropdownMenuItem>
            </Link>
          )}
          {coachingBatch && (
            <Link to={coachingBatchPath}>
              <DropdownMenuItem>
                <Shapes />
                All Batch
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
