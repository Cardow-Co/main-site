import { Input } from "./components/ui/input"; // Example: Input
import { Field, FieldGroup, Label } from "./components/ui/fieldset"; // Example: Fieldset
import { Button } from "./components/ui/button"; // Example: Button

export default function HomePage() {
  // Using CDN Kit via <i> tags; no build-time auth needed

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-700 p-24">
      <h1 className="text-5xl font-bold text-white">
        <i className="fa-solid fa-rocket mr-3"></i>
        Hello, Next.js Manually!
      </h1>
      <p className="mt-4 text-lg text-sky-200">
        If you see this, and it's styled with Tailwind, it's working!
      </p>
      <div className="mt-8 rounded-lg bg-sky-500 p-4 text-white shadow-xl">
        This box should have a blue background!
        <i className="fa-solid fa-check ml-2"></i>
      </div>

      <div className="mt-4 text-white">
        <p>Font Awesome Icons (React Components):</p>
        <i className="fa-solid fa-user mr-2" title="Solid User"></i>
        <i className="fa-regular fa-user mr-2" title="Regular User"></i>
        <i className="fa-light fa-user mr-2" title="Light User"></i>
        <i className="fa-duotone fa-user mr-2" title="Duotone User"></i>
        <i
          className="fa-brands fa-font-awesome"
          title="Font Awesome Flag (Brands)"
        ></i>
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
