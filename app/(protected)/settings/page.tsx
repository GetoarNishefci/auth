import {auth} from "@/auth"
import SettingsClient from "./components/SettingsClient";
import SignOutButton from "./components/SignOut";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <SignOutButton />

      <SettingsClient />
    </div>
  );
};

export default SettingsPage;
