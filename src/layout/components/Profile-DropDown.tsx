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
  LogOut,
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
import type { AppDispatch, RootState } from "@/store/store";

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
  coachingStaffPath = "#",
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
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user, teacher, coaching } = useSelector((state: RootState) => state.auth);

  const handleCoachingClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLSpanElement>) => {
    e.preventDefault();
    dispatch(updateRole("Coaching"));
    navigate(coaching ? "/coaching/profile" : "/coaching");
  };

  const handleTeacherClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLSpanElement>) => {
    e.preventDefault();
    dispatch(updateRole("Teacher"));
    navigate(teacher ? "/teachers" : "/becomeTeacher");
  };

  const menuItem = (icon: React.ReactNode, label: string) => (
    <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 cursor-pointer transition-colors group">
      <span className="w-7 h-7 rounded-md bg-slate-100 group-hover:bg-white group-hover:shadow-sm flex items-center justify-center transition-all shrink-0">
        <span className="text-slate-500 group-hover:text-slate-700 [&>svg]:w-3.5 [&>svg]:h-3.5">
          {icon}
        </span>
      </span>
      <span className="text-[13px] font-medium">{label}</span>
    </DropdownMenuItem>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full w-9 h-9 p-0 ring-2 ring-slate-200 hover:ring-blue-400 transition-all duration-200"
        >
          <Avatar className="w-9 h-9">
            <AvatarImage
              src={user?.avatar as string || "/public/riad.png"}
              alt={user?.name || "User"}
              className="object-cover"
            />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-violet-500 text-white text-xs font-bold">
              {user?.name?.slice(0, 2).toUpperCase() || "LR"}
            </AvatarFallback>
          </Avatar>
          {/* Online indicator */}
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-56 p-2 rounded-xl shadow-xl border border-slate-100 bg-white"
      >
        {/* User Info Header */}
        <div className="px-3 py-2.5 mb-1">
          <p className="text-[13px] font-semibold text-slate-800 truncate">
            {user?.name || "User"}
          </p>
          <p className="text-[11px] text-slate-400 truncate mt-0.5">
            {user?.email || ""}
          </p>
        </div>

        <DropdownMenuSeparator className="bg-slate-100 my-1" />

        <DropdownMenuGroup className="space-y-0.5">
          {profile && (
            <Link to={profilePath}>
              {menuItem(<UserPen />, "Profile")}
            </Link>
          )}
          {dashboard && (
            <Link to={dashboardPath}>
              {menuItem(<LayoutDashboard />, "Dashboard")}
            </Link>
          )}
          {becomeTeacher && (
            <span onClick={handleTeacherClick}>
              {menuItem(<TypeOutline />, "Become A Teacher")}
            </span>
          )}
          {enrolledBatch && (
            <Link to={enrolledBatchPath}>
              {menuItem(<Library />, "Enrolled Batch")}
            </Link>
          )}
          {becomeUser && (
            <Link to={becomeUserPath} onClick={() => dispatch(updateRole("User"))}>
              {menuItem(<UserPen />, "Become A User")}
            </Link>
          )}
          {coachingPage && (
            <span onClick={handleCoachingClick}>
              {menuItem(<AlignEndVertical />, "Coaching Page")}
            </span>
          )}
          {connectedBatch && (
            <Link to={connectedCoachingPath}>
              {menuItem(<School />, "Connected Coaching")}
            </Link>
          )}
          {coachingStaff && (
            <Link to={coachingStaffPath}>
              {menuItem(<ChessQueen />, "Staffs")}
            </Link>
          )}
          {coachingBatch && (
            <Link to={coachingBatchPath}>
              {menuItem(<Shapes />, "All Batch")}
            </Link>
          )}
          {enrolled && (
            <Link to={enrolledPath}>
              {menuItem(<Ticket />, "Enrolled")}
            </Link>
          )}
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="bg-slate-100 my-1" />

        {/* Sign Out */}
        <Link to="/teachers" onClick={() => dispatch(logoutAsyncThunk())}>
          <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-500 hover:text-red-600 hover:bg-red-50 cursor-pointer transition-colors group">
            <span className="w-7 h-7 rounded-md bg-red-50 group-hover:bg-red-100 flex items-center justify-center shrink-0 transition-all">
              <LogOut className="w-3.5 h-3.5" />
            </span>
            <span className="text-[13px] font-medium">Sign Out</span>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ProfileDropdown;