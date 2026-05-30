import { Sidebar } from "@/layout/sidebar/Sidebar";
import DoctorsPanel from "@/components/dashboard/doctors-panel/DoctorsPanel";
export default function DoctorsPanelPage() {
  return (
    <>
      <Sidebar>
        <DoctorsPanel />
      </Sidebar>
    </>
  );
}
