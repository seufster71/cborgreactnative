import { StyleSheet } from 'react-native';
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { NativeRouter } from "react-router-native";
import { initPublic } from "./core/common/apppref-actions";
import { sessionCheck, viewPortChange } from "./member/session/session-actions";
import PageContainer from "./PageContainer.js";

const store = configureStore();
store.dispatch(initPublic());
store.dispatch(sessionCheck());

export default function App() {
  return (
	<Provider store={store}>
		<NativeRouter>
			<PageContainer />
		</NativeRouter>
	</Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export function getDebugClient() {
  let state = store.getState();
  return state.appPrefs.debugClient;
}
export function getHost() {
  return "http://localhost:8090";
}