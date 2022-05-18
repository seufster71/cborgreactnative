import { StyleSheet } from 'react-native';
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { NativeRouter } from "react-router-native";
import PageContainer from "./PageContainer.js";

const store = configureStore();

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
  return "NATIVE";
}