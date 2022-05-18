import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from "react-router-native";
import { StyleSheet, View } from 'react-native';
import NavigationView from "./coreView/navigation/navigation-view";
import LoginContainer from "./core/usermgnt/login-container";
import StatusView from "./coreView/status/status-view";
import MemberContainer from "./member/member-container";
import PublicContainer from "./public/public-container";
import ServiceContainer from "./public/service-container";
//import AdminContainer from "./admin/admin-container";
//import SystemContainer from "./system/system-container";
//import AccessDeniedContainer from "./core/usermgnt/accessdenied-container";
import fuLogger from './core/common/fu-logger';

function PageContainer() {
	const session = useSelector((state) => state.session);
	const appMenus = useSelector((state) => state.appMenus);
	const appPrefs = useSelector((state) => state.appPrefs);
	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		fuLogger.log({level:'TRACE',loc:'PageContainer::useEffect',msg:"page "+ location.pathname});
		if (session.callComplete == true && session.sessionActive == true && session.status === 'JUST_LOGGEDIN') {
			fuLogger.log({level:'TRACE',loc:'PageContainer::session active',msg:"page "+ location.pathname});
			dispatch({ type: "CLEAR_SESSION_LOGIN" });
			navigate("/member");
		} else if (session.callComplete == true && session.sessionActive == false) {
			if (location.pathname === "/member-logout") {
		    	navigate("/login");
		    } else if ( !(location.pathname === "/" || location.pathname === "/login" 
	    		|| location.pathname === "/about" || location.pathname === "/services")) {
	    		navigate("/");
	    	}
		}
	}, [session]);
    
    if (session.callComplete == true && session.sessionActive == true) {
		fuLogger.log({level:'TRACE',loc:'PageContainer::render session Active',msg:"page "+ location.pathname });
     return (
      <Routes>
        <Route index element={<MemberContainer />} />
        <Route path="member/*" element={<MemberContainer />} />
        <Route path="access-denied" element={<AccessDeniedContainer />} />
        <Route path="admin/*" element={<AdminContainer />} />
        <Route path="system/*" element={<SystemContainer />} />
      </Routes>

      );
    } else {
		fuLogger.log({level:'TRACE',loc:'PageContainer::render session NOT Active',msg:"page "+ location.pathname });
      return (
        <View style={styles.container}>
			<NavigationView appPrefs={appPrefs} activeTab={location.pathname} menus={appMenus.PUBLIC_MENU_RIGHT}/>
			<StatusView />
 			<Routes>
            	<Route path="/*" element={<PublicContainer />}/>
            	<Route path="/login/*" element={<LoginContainer />}/>
           		<Route path="/about/*" element={<PublicContainer />}/>
            	<Route path="/services/*" element={<ServiceContainer />}/>
          	</Routes>
        </View>
      );
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3962FF',
		alignItems: 'center',
		justifyContent: 'center'
	},
});

export default PageContainer;
