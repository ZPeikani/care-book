import PatientsPanel from "@/components/dashboard/patients-panel/PatientsPanel";
import { Sidebar } from "@/layout/sidebar/Sidebar";
import React from "react";

export default function PatientsPanelPage() {
  return (
    <Sidebar>
      <PatientsPanel />
    </Sidebar>
  );
}
