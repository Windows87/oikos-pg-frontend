import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import GroupCode from "./screens/GroupCode";
import LeaderAttendanceList from "./screens/LeaderAttendanceList";
import LeaderMeeting from "./screens/LeaderMeeting";
import LeaderMeetings from "./screens/LeaderMeetings";
import LeaderMemberAttendances from "./screens/LeaderMemberAttendances";
import LeaderMemberInfo from "./screens/LeaderMemberInfo";
import LeaderMembersList from "./screens/LeaderMembersList";
import LeaderNewMeeting from "./screens/LeaderNewMeeting";
import Login from "./screens/Login";
import MemberMeeting from "./screens/MemberMeeting";
import MemberMeetings from "./screens/MemberMeetings";
import Register from "./screens/Register";
import SplashScreen from "./screens/SplashScreen";
import Starter from "./screens/Starter";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<SplashScreen />} />
        <Route path="/starter" element={<Starter />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/group-code" element={<GroupCode />} />

        <Route path="/leader/meetings" element={<LeaderMeetings />} />
        <Route path="/leader/meeting/new" element={<LeaderNewMeeting />} />
        <Route path="/leader/meeting/" element={<LeaderMeeting />} />

        <Route path="/leader/members" element={<LeaderMembersList />} />
        <Route path="/leader/member/info" element={<LeaderMemberInfo />} />
        <Route
          path="/leader/member/attendance"
          element={<LeaderMemberAttendances />}
        />
        <Route
          path="/leader/meeting/attendance"
          element={<LeaderAttendanceList />}
        />

        <Route path="/member/meetings" element={<MemberMeetings />} />
        <Route path="/member/meeting" element={<MemberMeeting />} />
      </Routes>
    </Router>
  );
}

export default App;
