import { auth, signIn } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session, null, 2)}
      <form
        action={async (formData) => {
          "use server";
          await signIn("resend", formData);
        }}
      >
        <input type="text" name="email" placeholder="Email" />
        <button type="submit">Signin with Resend</button>
      </form>
    </div>
  );
}
