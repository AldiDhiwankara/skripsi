import StudentRegistrationForm from "@/components/layouts/StudentRegistrationForm"; 
import DaftarUlangForm from "@/components/organisms/DaftarUlangForm";

export default function Home() {
  return (
    <StudentRegistrationForm>
      <DaftarUlangForm />
    </StudentRegistrationForm>
  );
}
