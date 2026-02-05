import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation/index.navigation";
import { initAppointmentsTable } from "./storage/appointments.setup";

export default function Index(){
  initAppointmentsTable();
    return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
