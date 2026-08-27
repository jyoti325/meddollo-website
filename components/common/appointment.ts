export function openAppointmentPopup() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("openAppointmentPopup"));
  }
}