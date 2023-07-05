/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigation/MainNavigation';

import 'react-native-gesture-handler';
import {store} from './src/redux/store';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';

const queryClient = new QueryClient();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <MainNavigation />
          </Provider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
