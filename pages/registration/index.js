import StudentRegistrationForm from "@/components/layouts/StudentRegistrationForm"; 
import RegistrationForm from "@/components/organisms/RegistrationForm";

export default function Home() {
  return (
    <StudentRegistrationForm>
      <RegistrationForm />
    </StudentRegistrationForm>
  );
}
