/*
* Author Edward Seufert
*/
'use strict';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from "react-router-native";
import * as memberActions from './member-actions';
import StatusView from '../coreView/status/status-view';
import LoadingView from '../coreView/status/loading-view';
import NavigationView from '../coreView/navigation/navigation-view';
import ProfileContainer from './profile/profile-container';
import DashboardContainer from './dashboard/dashboard-container';
import LogoutContainer from './logout/logout-container';
import MemberView from '../memberView/member-view';
import fuLogger from '../core/common/fu-logger';
import {PrivateRoute} from '../core/common/router-utils-native';

function MemberContainer() {
	const session = useSelector((state) => state.session);
	const appMenus = useSelector((state) => state.appMenus);
	const appPrefs = useSelector((state) => state.appPrefs);
	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();
  	
	useEffect(() => {
    	dispatch(memberActions.init({lang:session.selected.lang}));
  	}, []);

  	const changeTab = (code,index) => {
      navigate(index);
  	}

    fuLogger.log({level:'TRACE',loc:'MemberContainer::render',msg:"path "+ location.pathname});

    let myMenus = [];
    if (appMenus != null && appMenus[appPrefs.memberMenu] != null) {
      myMenus = appMenus[appPrefs.memberMenu];
    }
    let profileMenu = [];
    if (appMenus != null && appMenus.MEMBER_PROFILE_MENU_TOP != null) {
    	profileMenu = appMenus.MEMBER_PROFILE_MENU_TOP;
    }
    let myPermissions = {};
    if (session != null && session.selected != null && session.selected.permissions != null) {
      myPermissions = session.selected.permissions;
    }
    if (myMenus.length > 0) {
      return (
        <MemberView>
          <NavigationView appPrefs={appPrefs} permissions={myPermissions}
          menus={myMenus} changeTab={changeTab} activeTab={location.pathname} user={session.selected} profileMenu={profileMenu}/>
          <StatusView/>
          <Routes>
            <Route index element={<DashboardContainer />} />
            <Route element={<PrivateRoute permissions={myPermissions} code="MA" pathto="/access-denied" />} >
				<Route path="/acquaintances/*" element={<AcquaintancesContainer />} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMTEAM" pathto="/access-denied"/>} >
				<Route path="/pm-team/*" element={<PMTeamContainer />} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMTEAM" pathto="/access-denied"/>} >
				<Route path="/pm-member/*" element={<PMMemberContainer />} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMTEAM" pathto="/access-denied"/>} >
				<Route path="/pm-role/*" element={<PMRoleContainer />} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMTEAM" pathto="/access-denied"/>} >
				<Route path="/pm-permission/*" element={<PMPermissionContainer />} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMPROD" pathto="/access-denied"/>} >
				<Route path="/pm-product/*" element={<PMProductContainer />} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMPROJ" pathto="/access-denied"/>} >
				<Route path="/pm-project/*" element={<PMProjectContainer />} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMREL" pathto="/access-denied"/>} >
				<Route path="/pm-release/*" element={<PMReleaseContainer />} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMBAK" pathto="/access-denied"/>} >
				<Route path="/pm-backlog/*" element={<PMBacklogContainer />} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMSCR" pathto="/access-denied"/>} >
				<Route path="/pm-scrum/*" element={<PMScrumContainer />} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMDEF" pathto="/access-denied"/>} >
				<Route path="/pm-defect/*" element={<PMDefectContainer />} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMENH" pathto="/access-denied"/>} >
				<Route path="/pm-enhancement/*" element={<PMEnhancementContainer />} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMTASK" pathto="/access-denied"/>} >
				<Route path="/pm-task/*" element={<PMTaskContainer />} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMWF" pathto="/access-denied"/>} >
				<Route path="/pm-workflow/*" element={<PMWorkflowContainer />} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMWFS" pathto="/access-denied"/>} >
				<Route path="/pm-workflowstep/*" element={<PMWorkflowStepContainer />} />
			</Route>
			 <Route element={<PrivateRoute permissions={myPermissions} code="MPMDEF" pathto="/access-denied"/>} >
				<Route path="/pm-deploy/*" element={<PMDeployContainer />} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MG" pathto="/access-denied"/>} >
				<Route path="/groups/*" element={<GroupsContainer />} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MN" pathto="/access-denied"/>} >
				<Route path="/notes/*" element={<NotesContainer />} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MSM" pathto="/access-denied"/>} >
				<Route path="/member-submenu/*" element={<SubMenuContainer />} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MS" pathto="/access-denied"/>} >
				<Route path="/shopping/*" element={<ShoppingContainer />} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MP" minRights="W" pathto="/access-denied"/>} >
				<Route path="/profile/*" element={<ProfileContainer />} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="ML" pathto="/access-denied"/>} >
				<Route path="/logout/*" element={<LogoutContainer />} />
			</Route>
            <Route path="/admin" render={() => (
              <Redirect to="/admin"/>
            )}/>
          </Routes>
        </MemberView>
      );
    } else {
      	return (
        	<MemberView> <LoadingView/>
        	</MemberView>
      	);
    }
}

export default MemberContainer;
