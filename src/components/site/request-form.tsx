import { useState, type ReactNode, type SelectHTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/site/reveal";
import { submitMachineRequest } from "@/lib/submit-request";
import {
  MACHINE_OPTIONS,
  MEMBER_OPTIONS,
  requestSchema,
  type RequestInput,
} from "@/lib/request-schema";
import { cn } from "@/lib/utils";

function Field({
  label,
  htmlFor,
  error,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error ? (
        <p className="text-xs text-silver" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  id,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select
        id={id}
        className="flex h-12 w-full appearance-none rounded-md border border-line bg-navy-mid/60 px-3.5 pr-10 text-base text-fg transition-[border-color,background-color] duration-150 ease-out hover:border-line-strong focus-visible:border-silver/50 focus-visible:bg-navy-mid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver/25"
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-silver" />
    </div>
  );
}

export function RequestForm() {
  const [done, setDone] = useState(false);
  const [fail, setFail] = useState<string | null>(null);

  const form = useForm<RequestInput>({
    resolver: zodResolver(requestSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      city: "",
      members: "",
      machines: "",
      message: "",
    },
  });

  async function onSubmit(values: RequestInput) {
    setFail(null);
    try {
      await submitMachineRequest({ data: values });
      setDone(true);
    } catch {
      setFail(
        "Something went wrong sending this. Please try again, or email hello@vendingdoc.ie.",
      );
    }
  }

  return (
    <section id="request" className="section relative overflow-hidden bg-ink text-fg">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: "url(/images/metal-wash.jpg)",
          backgroundSize: "cover",
        }}
        aria-hidden
      />
      <div className="wrap relative grid items-start gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow text-silver">Request a machine</p>
          <h2 className="mt-4 text-3xl font-medium text-fg">
            Put one on your floor.
          </h2>
          <p className="mt-4 max-w-md text-lg text-fg-muted">
            Tell us about the venue. A member of the team replies within one
            working day — no pitch deck, no theatre.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl">
            <img
              src="/images/machine-studio.jpg"
              alt="Vending Doc protein shake machine"
              className="aspect-3/4 w-full object-cover object-center sm:aspect-4/3 lg:aspect-3/4"
            />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={80}>
          <div className="rounded-2xl border border-line bg-navy/80 p-6 shadow-dark backdrop-blur-sm sm:p-8">
            {done ? (
              <div className="flex min-h-80 flex-col justify-center py-8">
                <span className="grid size-12 place-items-center rounded-full bg-accent text-accent-fg">
                  <Check className="size-5" strokeWidth={2} />
                </span>
                <h3 className="mt-6 text-2xl font-medium text-fg">Request received.</h3>
                <p className="mt-3 max-w-md text-base text-fg-muted">
                  Thank you. We will be in touch within one working day to talk
                  through placement, revenue share, and next steps.
                </p>
              </div>
            ) : (
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-5 sm:grid-cols-2"
                noValidate
              >
                <Field
                  label="Business / gym name"
                  htmlFor="businessName"
                  error={form.formState.errors.businessName?.message}
                >
                  <Input
                    id="businessName"
                    autoComplete="organization"
                    {...form.register("businessName")}
                  />
                </Field>
                <Field
                  label="Contact name"
                  htmlFor="contactName"
                  error={form.formState.errors.contactName?.message}
                >
                  <Input
                    id="contactName"
                    autoComplete="name"
                    {...form.register("contactName")}
                  />
                </Field>
                <Field
                  label="Email"
                  htmlFor="email"
                  error={form.formState.errors.email?.message}
                >
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    {...form.register("email")}
                  />
                </Field>
                <Field
                  label="Phone"
                  htmlFor="phone"
                  error={form.formState.errors.phone?.message}
                >
                  <Input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    {...form.register("phone")}
                  />
                </Field>
                <Field
                  label="Location / city"
                  htmlFor="city"
                  error={form.formState.errors.city?.message}
                >
                  <Input
                    id="city"
                    autoComplete="address-level2"
                    placeholder="Dublin, Cork, Galway…"
                    {...form.register("city")}
                  />
                </Field>
                <Field
                  label="Members or footfall"
                  htmlFor="req-members"
                  error={form.formState.errors.members?.message}
                >
                  <SelectField id="req-members" {...form.register("members")} defaultValue="">
                    <option value="" disabled>
                      Approximate size
                    </option>
                    {MEMBER_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </SelectField>
                </Field>
                <Field
                  label="Machines interested in"
                  htmlFor="req-machines"
                  error={form.formState.errors.machines?.message}
                  className="sm:col-span-2"
                >
                  <SelectField id="req-machines" {...form.register("machines")} defaultValue="">
                    <option value="" disabled>
                      How many
                    </option>
                    {MACHINE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </SelectField>
                </Field>
                <Field
                  label="Message (optional)"
                  htmlFor="message"
                  error={form.formState.errors.message?.message}
                  className="sm:col-span-2"
                >
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Anything we should know about the space or the members."
                    {...form.register("message")}
                  />
                </Field>

                {fail ? (
                  <p className="text-sm text-silver sm:col-span-2" role="alert">
                    {fail}
                  </p>
                ) : null}

                <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-fg-muted">
                    We only use this to reply about a machine. No lists. No noise.
                  </p>
                  <Button
                    type="submit"
                    variant="silver"
                    size="lg"
                    disabled={form.formState.isSubmitting}
                    className="shrink-0"
                  >
                    {form.formState.isSubmitting ? "Sending…" : "Request Machines"}
                    {!form.formState.isSubmitting ? <ArrowRight /> : null}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
