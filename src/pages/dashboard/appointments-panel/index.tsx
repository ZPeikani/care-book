import AppointmentsPanel from "@/components/dashboard/appointments-panel/AppointmentsPanel";
import { Sidebar } from "@/layout/sidebar/Sidebar";
import React from "react";

export default function AppointmentsPanelPage() {
  return (
    <Sidebar>
      <AppointmentsPanel />
    </Sidebar>
  );
}
