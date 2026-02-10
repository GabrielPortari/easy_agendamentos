import { NavigationContainer } from "@react-navigation/native";
import { SQLiteProvider } from 'expo-sqlite';
import Navigation from "./navigation/index.navigation";
import { DB_NAME, migrateDbIfNeeded } from './storage/database';

export default function Index(){
    return (
    <SQLiteProvider databaseName={DB_NAME} onInit={migrateDbIfNeeded}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SQLiteProvider>
  );
}
