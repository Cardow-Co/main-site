import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faCheck, faUser } from "@fortawesome/pro-solid-svg-icons"; // Example: Solid icons
import { faUser as faUserRegular } from "@fortawesome/pro-regular-svg-icons"; // Example: Regular icons (Pro)
import { faUser as faUserLight } from "@fortawesome/pro-light-svg-icons"; // Example: Light icons (Pro)
import { faUser as faUserDuotone } from "@fortawesome/pro-duotone-svg-icons"; // Example: Duotone icons (Pro)
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons"; // Example: Brands icons
import { Input } from "./components/ui/input"; // Example: Input
import { Field, FieldGroup, Label } from "./components/ui/fieldset"; // Example: Fieldset
import { Button } from "./components/ui/button"; // Example: Button

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-700 p-24">
      <h1 className="text-5xl font-bold text-white">
        <FontAwesomeIcon icon={faRocket} className="mr-3" />
        Hello, Next.js Manually!
      </h1>
      <p className="mt-4 text-lg text-sky-200">
        If you see this, and it's styled with Tailwind, it's working!
      </p>
      <div className="mt-8 rounded-lg bg-sky-500 p-4 text-white shadow-xl">
        This box should have a blue background!
        <FontAwesomeIcon icon={faCheck} className="ml-2" />
      </div>

      <div className="mt-4 text-white">
        <p>Font Awesome Icons (React Components):</p>
        <FontAwesomeIcon icon={faUser} className="mr-2" title="Solid User" />
        <FontAwesomeIcon
          icon={faUserRegular}
          className="mr-2"
          title="Regular User"
        />
        <FontAwesomeIcon
          icon={faUserLight}
          className="mr-2"
          title="Light User"
        />
        <FontAwesomeIcon
          icon={faUserDuotone}
          className="mr-2"
          title="Duotone User"
        />
        <FontAwesomeIcon
          icon={faFontAwesome}
          title="Font Awesome Flag (Brands)"
        />
        <form>
          <FieldGroup>
            <Field>
              <Label>Name</Label>
              <Input name="name" />
            </Field>
            <Field>
              <Label>Email</Label>
              <Input type="email" name="email" />
            </Field>
            <Button type="submit">Save changes</Button>
          </FieldGroup>
        </form>
      </div>
    </main>
  );
}
